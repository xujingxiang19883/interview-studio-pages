'use strict';

(() => {
  const startup = document.getElementById('libraryStartup');
  const message = document.getElementById('libraryStartupMessage');
  const retry = document.getElementById('libraryRetry');
  const assetVersion = new URL(document.currentScript.src).searchParams.get('v');

  function assetURL(file, retryRequest = false) {
    const url = new URL(file, document.baseURI);
    if (assetVersion) url.searchParams.set('v', assetVersion);
    if (retryRequest) url.searchParams.set('retry', String(Date.now()));
    return url.href;
  }

  function loadScript(url, timeout) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      const timer = setTimeout(() => {
        script.remove();
        reject(new Error(`Download timed out: ${url}`));
      }, timeout);
      script.onload = () => {
        clearTimeout(timer);
        resolve();
      };
      script.onerror = () => {
        clearTimeout(timer);
        script.remove();
        reject(new Error(`Download failed: ${url}`));
      };
      script.src = url;
      document.head.append(script);
    });
  }

  async function loadQuestions(retryRequest = false) {
    await loadScript(assetURL('questions.js', retryRequest), retryRequest ? 45000 : 30000);
    if (!Array.isArray(window.INTERVIEW_DATA) || !window.INTERVIEW_DATA.length) {
      throw new Error('The question data did not load.');
    }
  }

  retry.onclick = event => {
    event.preventDefault();
    const url = new URL(location.href);
    url.searchParams.set('reload', String(Date.now()));
    location.assign(url);
  };

  async function start() {
    const slowNotice = setTimeout(() => {
      message.textContent = 'The question library is taking longer than usual to load.';
      retry.hidden = false;
    }, 8000);
    try {
      try {
        await loadQuestions();
      } catch {
        message.textContent = 'The first download failed. Retrying the question library…';
        retry.hidden = false;
        await loadQuestions(true);
      }
      await loadScript(assetURL('app.js'), 15000);
      if (!window.interviewLibraryReady) throw new Error('The reader could not start.');
      startup.hidden = true;
    } catch (error) {
      message.textContent = 'The question library could not load. Check your connection and reload.';
      retry.hidden = false;
      console.error(error);
      return;
    } finally {
      clearTimeout(slowNotice);
    }

    loadScript(new URL('mathjax.js', document.baseURI).href, 45000)
      .then(() => window.dispatchEvent(new Event('interview-math-ready')))
      .catch(error => console.warn('Math formatting:', error.message));
  }

  start();
})();
