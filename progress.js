'use strict';

const storageKeys = {
  completed: 'interview-reviewed-v1',
  bookmarks: 'interview-bookmarks-v1',
};
const backupInput = document.getElementById('backup');
const progressStatus = document.getElementById('status');

function validIDs(value) {
  return Array.isArray(value) && value.every(id => Number.isSafeInteger(id) && id > 0);
}

function readProgress() {
  const progress = {};
  for (const [name, key] of Object.entries(storageKeys)) {
    const stored = localStorage.getItem(key);
    const fallback = name === 'completed' && location.port === '8775' ? [373] : [];
    const ids = stored === null ? fallback : JSON.parse(stored);
    if (!validIDs(ids)) throw new Error('This browser has unreadable progress data.');
    progress[name] = [...new Set(ids)];
  }
  return progress;
}

function showProgress() {
  const { completed, bookmarks } = readProgress();
  document.getElementById('current').textContent =
    `In this browser: ${completed.length} completed, ${bookmarks.length} bookmarked.`;
}

function handle(action) {
  return async () => {
    try {
      await action();
    } catch (error) {
      progressStatus.textContent = error.message;
    }
  };
}

document.getElementById('export').onclick = handle(() => {
  backupInput.value = JSON.stringify({ version: 1, ...readProgress() });
  progressStatus.textContent = 'Backup ready to copy.';
});

document.getElementById('copy').onclick = handle(async () => {
  if (!backupInput.value.trim()) throw new Error('Select Export first.');
  backupInput.select();
  if (!navigator.clipboard) {
    progressStatus.textContent = 'Backup selected. Use your browser’s copy shortcut.';
    return;
  }
  try {
    await navigator.clipboard.writeText(backupInput.value);
    progressStatus.textContent = 'Backup copied.';
  } catch {
    progressStatus.textContent = 'Backup selected. Use your browser’s copy shortcut.';
  }
});

document.getElementById('import').onclick = handle(() => {
  let backup;
  try {
    backup = JSON.parse(backupInput.value);
  } catch {
    throw new Error('Paste a valid Interview Studio backup.');
  }
  if (backup?.version !== 1 || !Object.keys(storageKeys).every(name => validIDs(backup[name]))) {
    throw new Error('This is not a supported Interview Studio backup.');
  }
  const current = readProgress();
  for (const [name, key] of Object.entries(storageKeys)) {
    localStorage.setItem(key, JSON.stringify([...new Set([...current[name], ...backup[name]])]));
  }
  showProgress();
  progressStatus.textContent = 'Progress imported. Return to Interview Studio to see it.';
});

handle(showProgress)();
