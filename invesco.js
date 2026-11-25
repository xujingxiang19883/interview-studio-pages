'use strict';

(() => {
  const note = 'Reconstructed locally from the Invesco interview recording. Wording is lightly cleaned for readability. The exact code shown in the meeting chat was not captured by the audio, so the coding entry records only details supported by the conversation.';
  const source = 'Invesco interview audio reconstruction';
  const bullets = items => items.map(item => `- ${item}`).join('\n');
  const make = ({id, title, timestamp, prompt, answer, assessment, standard, worked = [], improve = [], kind = 'Audio interview reconstruction with standard answer'}) => ({
    category: 'INVESCO',
    originalCategory: 'My Interview',
    company: 'Invesco',
    role: 'Quantitative Analyst Internship · Portfolio Engineering · Boston',
    kind,
    note,
    references: [],
    privateInterview: true,
    id,
    question: title,
    displayTitle: title,
    questionBody: `Audio timestamp: ${timestamp}\n\n${prompt}`,
    solution: [
      '### Your answer — reconstructed from the recording',
      answer,
      '### Evaluation',
      assessment,
      worked.length ? '### What worked' : '',
      worked.length ? bullets(worked) : '',
      improve.length ? '### What to improve' : '',
      improve.length ? bullets(improve) : '',
      '### Standard or stronger answer',
      standard
    ].filter(Boolean).join('\n\n'),
    sources: [{sheet: source, row: id - 119000}],
    originalAnswer: answer
  });

  window.INVESCO_DATA = [
    make({
      id: 119001,
      title: 'Walk Me Through Your Resume',
      timestamp: '07:44–09:35',
      prompt: 'Please introduce yourself and walk me through your resume.',
      answer: 'You introduced your mathematics major and computer-science minor at the University of Hong Kong and your current Master of Financial Engineering program at Cornell. You then described a 2024 portfolio-management internship involving mean–variance and risk-parity models, factor-model validation and backtesting at Nightingale, a thematic-portfolio project at RiverMap, and an index-rebalancing predictor at Diamond Asia. You concluded that these experiences gave you the skills required for the internship.',
      assessment: 'The answer covered the relevant experience and ended with a fit statement, but the opening phrase “the unfortunate part is that I only have…” unnecessarily weakened your profile. The chronology was clear, while the impact and your individual contribution could have been more specific.',
      worked: ['You connected education, portfolio construction, factor research, software work, and index rebalancing.', 'The Diamond Asia example was directly relevant to systematic portfolio work.', 'You gave the interviewer several concrete areas for follow-up.'],
      improve: ['Remove apologetic framing about the number of internships.', 'Use a present–past–future structure and state one measurable result.', 'Explain why Invesco Portfolio Engineering is the logical next step.'],
      standard: '> I am completing Cornell’s Master of Financial Engineering after studying mathematics and computer science at HKU. My experience sits at the intersection of portfolio research and implementation. I first tested mean–variance and risk-parity models, then developed factor-validation and backtesting skills at Nightingale. At RiverMap I built part of a thematic-stock selection workflow, and at Diamond Asia I combined those skills in an index-rebalancing predictor for additions and deletions. I am interested in Invesco’s Portfolio Engineering team because it turns quantitative portfolio analysis into scalable tools used by investment professionals and clients.'
    }),
    make({
      id: 119002,
      title: 'What Was the Main Focus of Your RiverMap Internship?',
      timestamp: '09:43–10:12',
      prompt: 'What was the main focus of your work at RiverMap?',
      answer: 'You explained that RiverMap is a fintech company and that you worked on thematic portfolio construction. A user could enter a theme such as “electric vehicles,” and the product would return related listed companies across the upstream and downstream value chain.',
      assessment: 'This was a clear product-level explanation. It would have been stronger with your personal deliverable, the data universe, and an evaluation method for relevance.',
      worked: ['The electric-vehicle example made the product easy to understand.', 'You explained the output in terms of an investable stock list.', 'The answer was concise.'],
      improve: ['State exactly which component you built.', 'Explain how relevance was measured or reviewed.', 'Mention the investment universe and the final portfolio-construction step.'],
      standard: '> RiverMap was building a thematic-investing workflow. Given a natural-language theme such as electric vehicles, the system identified relevant public companies and classified their roles across the value chain. My contribution was to build the candidate-generation and screening process, combining semantic retrieval with a structured industry taxonomy and then using an LLM for a narrower final relevance check. The goal was to produce a traceable, investable universe rather than a generic search result.'
    }),
    make({
      id: 119003,
      title: 'Did You Use Fuzzy Search, Retrieval, or an LLM?',
      timestamp: '10:12–11:17',
      prompt: 'What technology did you use for the thematic-stock search? Was it fuzzy search or an LLM?',
      answer: 'You said an LLM was part of the workflow, but applying it to the entire stock universe would have been too expensive. You therefore used retrieval-augmented generation first: company descriptions and the query were embedded and compared, with FactSet’s RBICS classification data used as additional structured information. The LLM was applied after the initial screening.',
      assessment: 'The two-stage cost argument was strong and showed practical engineering judgment. The explanation became difficult to follow because some terms were imprecise and the purpose of RBICS was not stated cleanly.',
      worked: ['You recognized that an LLM-only scan would be unnecessarily expensive.', 'You described a sensible retrieve-then-rerank architecture.', 'You incorporated structured industry data rather than relying only on generated text.'],
      improve: ['Say “LLM,” “embeddings,” and “RBICS” distinctly.', 'Separate candidate retrieval, structured filtering, and LLM reranking into three steps.', 'Name the evaluation metric: precision, recall, analyst acceptance, or labeled relevance.'],
      standard: '> I used a two-stage pipeline. First, I embedded the user’s theme and company descriptions and retrieved the most semantically similar candidates. I supplemented that retrieval with FactSet RBICS classifications to preserve structured industry relationships. Only the reduced candidate set was passed to an LLM for contextual relevance classification or reranking. This reduced cost and latency while keeping the final classification flexible. I would validate it using a labeled set and report precision and recall at the chosen cutoff.'
    }),
    make({
      id: 119004,
      title: 'Which MFE Courses Are You Taking?',
      timestamp: '11:23–11:59',
      prompt: 'What courses are you currently taking in the Cornell MFE program?',
      answer: 'You listed Monte Carlo simulation, introductory machine learning, stochastic calculus, and Python for finance. You briefly explained that machine learning, finance knowledge, and Python were relevant to the role.',
      assessment: 'The course list was relevant and accurate, but the answer would have been more persuasive if each course were connected to a concrete Portfolio Engineering task.',
      worked: ['All four courses were relevant to quantitative portfolio work.', 'You showed a balanced mix of mathematics, modeling, and implementation.'],
      improve: ['Replace generic statements such as “Python is always needed” with role-specific applications.', 'Mention one assignment or technique you can already apply.', 'Connect stochastic calculus carefully; it is less central to portfolio engineering than optimization and data analysis.'],
      standard: '> I am taking Monte Carlo simulation, machine learning, stochastic calculus, and Python for finance. Monte Carlo has strengthened my ability to model uncertainty and validate estimators; machine learning is useful for prediction and model diagnostics; and Python for finance is directly relevant to building reproducible portfolio analytics. Stochastic calculus gives me a stronger foundation in continuous-time models, although for this role I expect optimization, statistics, and reliable Python implementation to be most immediately useful.'
    }),
    make({
      id: 119005,
      title: 'Explain Mean–Variance Optimization',
      timestamp: '12:20–13:15',
      prompt: 'You have studied linear algebra. How much do you remember about mean–variance optimization?',
      answer: 'You recalled that the objective contains a reward term and a variance penalty. You identified the quadratic variance expression as approximately \\(w^\\top\\Sigma w\\) and remembered that a coefficient \\(\\lambda\\) scales the penalty, although the expected-return term was not stated precisely.',
      assessment: 'You remembered the essential trade-off and the covariance quadratic form. The notation was hesitant and incomplete, so the interviewer had to infer the full objective.',
      worked: ['You identified expected reward versus portfolio variance.', 'You remembered the covariance matrix and quadratic form.', 'You recognized the role of a penalty parameter.'],
      improve: ['State the objective in one clean equation.', 'Define \\(w\\), \\(\\mu\\), and \\(\\Sigma\\).', 'Mention constraints such as full investment, long-only limits, turnover, or target return.'],
      standard: 'For portfolio weights \\(w\\), expected returns \\(\\mu\\), and return covariance matrix \\(\\Sigma\\), a common formulation is\n\n\\[\n\\max_w\\; w^\\top\\mu-\\frac{\\lambda}{2}w^\\top\\Sigma w\n\\]\n\nsubject to constraints such as \\(\\mathbf{1}^\\top w=1\\), and possibly \\(w\\ge 0\\), position limits, turnover limits, or exposure constraints. The first term rewards expected return; the second penalizes variance because \\(\\operatorname{Var}(w^\\top r)=w^\\top\\Sigma w\\).'
    }),
    make({
      id: 119006,
      title: 'What Does the Risk-Aversion Parameter Mean?',
      timestamp: '13:21–14:07',
      prompt: 'What does \\(\\lambda\\) mean? Is it related to whether an investor is risk-averse or risk-seeking?',
      answer: 'You said \\(\\lambda\\) is the coefficient on \\(w^\\top\\Sigma w\\). A large value penalizes variance heavily and favors lower-risk portfolios, while a small value places more emphasis on return. You described it as a penalty coefficient.',
      assessment: 'This answer was directionally correct and substantially better than the preceding notation. It could have been improved by noting the convention and the limiting cases.',
      worked: ['You correctly related larger \\(\\lambda\\) to greater risk aversion.', 'You explained the return–risk trade-off in plain language.'],
      improve: ['State that the interpretation depends on how the objective is parameterized.', 'Explain that \\(\\lambda=0\\) ignores variance in this formulation.', 'Avoid calling it a “trick”; it represents investor preferences or a chosen risk budget.'],
      standard: '> In the objective \\(w^\\top\\mu-\\frac{\\lambda}{2}w^\\top\\Sigma w\\), \\(\\lambda>0\\) is the risk-aversion parameter. Increasing \\(\\lambda\\) makes a unit of variance more costly, so the optimizer generally selects a lower-volatility portfolio with lower expected return. Decreasing \\(\\lambda\\) places relatively more weight on expected return. The precise numerical scale depends on the return and covariance units and on whether the factor \\(1/2\\) is included.'
    }),
    make({
      id: 119007,
      title: 'State Newton’s Root-Finding Method',
      timestamp: '14:29–18:54',
      prompt: 'Do you remember Newton’s root-finding method? State the iteration and explain how it moves toward a root.',
      answer: 'You first confused root finding with Newton’s optimization step and proposed expressions involving first and second derivatives. After the interviewer returned to a point \\((x,f(x))\\), you corrected the iteration to the old value minus \\(f/f\\prime\\), drew a diagram, and the interviewer confirmed that the iteration was correct.',
      assessment: 'The recovery was valuable, but the initial confusion was significant. Root finding uses \\(f/f\\prime\\); optimization applies root finding to \\(f\\prime\\), producing \\(f\\prime/f\\prime\\prime\\). Keeping those two versions separate would have prevented the error.',
      worked: ['You recognized the error and corrected the formula.', 'Your diagram captured the correct geometric iteration.', 'You stayed engaged while the interviewer supplied structure.'],
      improve: ['State \\(x_{n+1}=x_n-f(x_n)/f\\prime(x_n)\\) immediately.', 'Explain that the next point is the x-intercept of the tangent line.', 'Distinguish root finding from finding a stationary point of an objective.'],
      standard: 'To solve \\(f(x)=0\\), linearize at \\(x_n\\):\n\n\\[\nf(x)\\approx f(x_n)+f\\prime(x_n)(x-x_n).\n\\]\n\nSet this approximation equal to zero and solve for \\(x\\):\n\n\\[\nx_{n+1}=x_n-\\frac{f(x_n)}{f\\prime(x_n)}.\n\\]\n\nGeometrically, \\(x_{n+1}\\) is where the tangent line at \\((x_n,f(x_n))\\) crosses the x-axis. For optimization, apply the same method to \\(f\\prime(x)=0\\), which gives \\(x_{n+1}=x_n-f\\prime(x_n)/f\\prime\\prime(x_n)\\).'
    }),
    make({
      id: 119008,
      title: 'Derive Newton’s Iteration from the Tangent Line',
      timestamp: '18:54–19:30',
      prompt: 'Why does the Newton iteration have that form? Give the intuition or derivation.',
      answer: 'After drawing the correct iteration, you said that you only remembered the formula and could not derive it.',
      assessment: 'This exposed a memorization gap. The derivation requires only the tangent-line equation and is an important way to demonstrate understanding rather than formula recall.',
      improve: ['Start from the first-order Taylor expansion.', 'Set the tangent approximation to zero.', 'Mention that convergence requires conditions and can fail when the derivative is small or the starting value is poor.'],
      standard: 'At \\(x_n\\), the tangent line is\n\n\\[\ny=f(x_n)+f\\prime(x_n)(x-x_n).\n\\]\n\nUse the tangent line as a local approximation to the function and choose its root as the next estimate. Setting \\(y=0\\) gives\n\n\\[\n0=f(x_n)+f\\prime(x_n)(x_{n+1}-x_n),\n\\]\n\nso\n\n\\[\nx_{n+1}=x_n-\\frac{f(x_n)}{f\\prime(x_n)}.\n\\]\n\nNear a simple root and under regularity conditions, Newton’s method has quadratic local convergence. It may fail if \\(f\\prime(x_n)=0\\), the initial value is poor, or the function behaves badly between iterations.'
    }),
    make({
      id: 119009,
      title: 'Debug a Python Daily-Returns Function',
      timestamp: '19:32–23:08',
      prompt: 'The interviewer pasted a Python function that calculated daily returns from a positive price list. Identify its syntax and logic errors. The exact on-screen code is not present in the recording.',
      answer: 'You inspected the function, changed a set of parentheses, identified a misspelling of `len`, briefly proposed changing a range bound by adding one, then withdrew that suggestion after noticing the off-by-one consequence. When prompted to inspect line one, you found an additional issue that appears to have been a missing function-definition delimiter such as a colon. The interviewer said you had found the required errors.',
      assessment: 'You ultimately found the issues, but the process was slow and mixed syntax errors with logic errors. The audio cannot support a claim about the exact original code, so the safest reconstruction is to preserve the observed debugging steps and provide a correct reference implementation.',
      worked: ['You requested permission to edit and tested corrections directly.', 'You caught the `len` issue and eventually noticed the line-one problem.', 'You corrected your own off-by-one suggestion.'],
      improve: ['First scan for parse errors: colon, parentheses, indentation, and names.', 'Then verify indexing and operator precedence separately.', 'Test with a tiny list such as `[100, 110, 99]`.'],
      standard: 'A clear simple-return implementation is:\n\n```python\ndef daily_returns(prices):\n    return [prices[i] / prices[i - 1] - 1\n            for i in range(1, len(prices))]\n```\n\nEquivalently, each return is\n\n\\[\nr_i=\\frac{P_i-P_{i-1}}{P_{i-1}}.\n\\]\n\nThe loop must begin at index 1, stop before `len(prices)`, use `len` rather than `lens`, and preserve parentheses so subtraction occurs before division when using the second form. The function definition requires a trailing colon and the return statement must be correctly indented.'
    }),
    make({
      id: 119010,
      title: 'Explain Girsanov’s Theorem',
      timestamp: '23:31–23:54',
      prompt: 'You are halfway through stochastic calculus. Can you explain Girsanov’s theorem?',
      answer: 'You said that you had not learned the theorem yet and believed it appeared later in the course. The interviewer accepted this and moved on.',
      assessment: 'The honest answer was appropriate once you were certain the topic had not been covered. For future quantitative-finance interviews, you should still learn the central intuition because measure changes are fundamental to risk-neutral pricing.',
      worked: ['You did not fabricate an explanation.', 'You clearly stated the boundary of your current coursework.'],
      improve: ['Add any partial intuition you know, while labeling it carefully.', 'Study the theorem before later rounds because it is a standard MFE topic.'],
      standard: 'Girsanov’s theorem describes how the drift of a Brownian-driven process changes under an equivalent change of probability measure. In a common form, if\n\n\\[\nZ_t=\\exp\\!\\left(-\\int_0^t\\theta_s\\,dW_s-\\frac12\\int_0^t\\theta_s^2\\,ds\\right)\n\\]\n\nis a valid martingale and \\(d\\mathbb Q/d\\mathbb P\\vert_{\\mathcal F_t}=Z_t\\), then\n\n\\[\nW_t^{\\mathbb Q}=W_t+\\int_0^t\\theta_s\\,ds\n\\]\n\nis Brownian motion under \\(\\mathbb Q\\). The measure change alters drift while preserving diffusion. In finance, this is the mathematical basis for moving from the physical measure to a risk-neutral measure.'
    }),
    make({
      id: 119011,
      title: 'How Does Brownian Motion Scale with Time?',
      timestamp: '23:54–25:07',
      prompt: 'How does a unit Brownian motion, or its random increment, scale with time?',
      answer: 'You said Brownian motion has independent increments and no memory. You correctly stated that the variance of the increment from time \\(s\\) to time \\(t\\) is \\(t-s\\). When asked what \\(s\\) and \\(t\\) represented, you described them as the entry and exit times.',
      assessment: 'The variance statement and independent-increment intuition were correct. “No memory” is informal; independent stationary increments is the precise property. The interviewer was looking for the square-root-of-time scaling rule.',
      worked: ['You correctly identified \\(\\operatorname{Var}(W_t-W_s)=t-s\\).', 'You recognized that only elapsed time matters.'],
      improve: ['State the full distribution of the increment.', 'Give the scaling identity \\(W_{ct}\\overset{d}=\\sqrt{c}W_t\\).', 'Use “independent stationary increments” instead of only “no memory.”'],
      standard: 'For \\(0\\le s<t\\),\n\n\\[\nW_t-W_s\\sim\\mathcal N(0,t-s).\n\\]\n\nTherefore the variance is \\(t-s\\) and the standard deviation is \\(\\sqrt{t-s}\\). Equivalently, Brownian motion is self-similar:\n\n\\[\n\\{W_{ct}\\}_{t\\ge0}\\overset{d}=\\{\\sqrt c\\,W_t\\}_{t\\ge0}.\n\\]\n\nThus random displacement grows with the square root of elapsed time, while variance grows linearly with elapsed time.'
    }),
    make({
      id: 119012,
      title: 'What Is the Standard Deviation of a Brownian Increment?',
      timestamp: '25:07–25:49',
      prompt: 'If the variance of a Brownian increment is related to \\(t-s\\), what is the square root of the variance?',
      answer: 'You correctly identified the square root of variance as standard deviation. You first said it was the square root of \\(s\\), then corrected yourself toward \\(t-s\\), but your final wording remained confused and did not cleanly state the required square root.',
      assessment: 'You knew the definition but did not complete the calculation accurately. The correct standard deviation is \\(\\sqrt{t-s}\\), not \\(t-s\\).',
      worked: ['You recognized that square root of variance is standard deviation.', 'You attempted to correct the first response.'],
      improve: ['Write the variance before taking its square root.', 'Check dimensions: standard deviation scales as square root of time.', 'End with one unambiguous formula.'],
      standard: 'Since\n\n\\[\n\\operatorname{Var}(W_t-W_s)=t-s,\n\\]\n\nthe standard deviation is\n\n\\[\n\\operatorname{SD}(W_t-W_s)=\\sqrt{t-s}.\n\\]\n\nIf time is measured in years, the Brownian increment has units proportional to \\(\\sqrt{\\text{years}}\\); in an asset model, the diffusion coefficient supplies the corresponding return or price units.'
    }),
    make({
      id: 119013,
      title: 'Your Question: What Makes an Invesco Intern Stand Out?',
      timestamp: '25:49–26:58',
      prompt: 'You asked the interviewer which qualities had helped him stand out as an intern and earn a return offer.',
      answer: 'You referred to the interviewer’s NYU background and internship history and asked what made him stand out enough to receive a return offer. He said he might not be the right person to judge his own performance, but recommended being dedicated to the project, showing up, speaking up, listening, learning from people, speaking to many colleagues, and remaining interested and curious.',
      assessment: 'The question was personalized and useful, although the long introduction and the phrase “successful quant” made it less polished. The interviewer still provided practical advice about ownership, communication, learning, and curiosity.',
      worked: ['You researched the interviewer’s career path.', 'The question produced concrete advice relevant to succeeding in the internship.'],
      improve: ['Ask the question in one concise sentence.', 'Focus on observable intern behaviors rather than asking the interviewer to praise himself.', 'Add a follow-up about how performance is evaluated on the team.'],
      standard: '> I noticed that you joined Invesco as an intern before returning full-time. From what you observed across your intern class, which behaviors most clearly distinguished interns who earned strong feedback or return offers? How were those qualities demonstrated in day-to-day project work?'
    }),
    make({
      id: 119014,
      title: 'Your Question: What Are the Next Interview Steps?',
      timestamp: '26:59–27:27',
      prompt: 'You asked what the next steps would be after this interview.',
      answer: 'The interviewer said that the HR contact would be the best person to ask. He believed there would probably be additional rounds because this was the first round, but he did not know how many.',
      assessment: 'This was a reasonable logistical question, though it was better directed to recruiting. If time is limited, a role- or team-specific question would create more value with the interviewer.',
      improve: ['Ask recruiting about process and timing.', 'Use interviewer time for work, team, or technical-development questions.'],
      standard: '> Thank you. I will follow up with recruiting about the timeline. Before we finish, what would the next interviewer most want a successful candidate to understand about the Portfolio Engineering team or prepare technically?'
    })
  ];
})();
