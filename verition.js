'use strict';
(() => {
  const T=s=>s.replaceAll('§','\\');
  const note='Reconstructed locally from the Verition first-round interview recording. The interview begins around 08:10; the preceding audio is not treated as interview content. Wording is lightly edited for clarity while preserving the substance. Mathematical notation and standard answers were reconstructed from the audible exchange.';
  const source='Verition interview audio reconstruction';
  const bullets=a=>a.map(x=>'- '+x).join('\n');
  const make=o=>({
    category:'VERITION',originalCategory:'My Interview',company:'Verition',
    role:'Quantitative internship · First-round phone interview',
    kind:'Audio reconstruction · your answer · evaluation · standard answer',
    note,references:[],privateInterview:true,id:o.id,question:o.title,displayTitle:o.title,
    questionBody:T('Audio timestamp: '+o.timestamp+'\n\n'+o.prompt),
    solution:T(['### Your answer — reconstructed from the recording',o.answer,
      '### Evaluation — '+o.score+'/10',o.assessment,
      o.worked?.length?'### What worked':'',o.worked?.length?bullets(o.worked):'',
      o.improve?.length?'### What to improve':'',o.improve?.length?bullets(o.improve):'',
      '### Standard or stronger answer',o.standard].filter(Boolean).join('\n\n')),
    sources:[{sheet:source,row:o.id-121000}],originalAnswer:T(o.answer)
  });

  window.VERITION_DATA=[
    make({id:121001,title:'Walk Me Through Your Resume',timestamp:'08:38–09:38',
      prompt:'Give me a one- or two-minute introduction and walk me through your resume.',
      answer:'You introduced yourself as a Cornell master’s student with a mathematics background from the University of Hong Kong. You highlighted several internships, focusing on Diamond Asia, where you built a Python pipeline to predict additions and deletions in an index rebalance. You also mentioned equity-factor research at Nightingale and said that these quantitative experiences made you a good fit for the role.',
      score:6.5,assessment:'The answer was concise and led with relevant hedge-fund experience. It remained broad, used vague language around the factor work, and did not explain why Verition or this centralized analytics team was the logical next step.',
      worked:['You stayed within the requested length.','You prioritized the index-rebalancing pipeline and Python implementation.','You presented a coherent mathematics-to-quantitative-research path.'],
      improve:['Use a present–past–future structure.','Replace “improved a few factors” with one concrete task, method, and result.','End with a Verition-specific fit statement.'],
      standard:'> I am completing Cornell’s Master of Financial Engineering after studying mathematics and computer science at HKU. My internships have progressively combined research with implementation. At Nightingale I worked on equity-factor validation, and at Diamond Asia I translated an index methodology into an explainable Python pipeline that predicted additions and deletions at each rebalance. Those experiences taught me to turn investment rules into reliable analytics. I am interested in this Verition team because it builds reusable quantitative tools that help multiple investment pods while allowing each pod to protect its proprietary alpha.'}),

    make({id:121002,title:'Where Are You in Other Recruiting Processes?',timestamp:'09:49–10:42',
      prompt:'Are you applying to banks and hedge funds? Do you already have an offer, and are you in second or third rounds elsewhere?',
      answer:'You said that you were still interviewing, did not yet have an offer, and believed you were in second rounds with a few companies. You added that you had not reached third rounds and that you had applied relatively late.',
      score:6,assessment:'The answer was honest and answered the timing question. Mentioning that you applied late weakened the positioning without helping the interviewer assess deadlines. The useful information was simply that several processes were active and there was no current offer deadline.',
      worked:['You did not exaggerate your progress.','You gave the interviewer the information needed to understand timing pressure.'],
      improve:['Avoid apologetic explanations about applying late.','State active stages and deadlines precisely.','Promise to communicate if another process accelerates.'],
      standard:'> I am in active processes with several firms, including a few second rounds. I do not currently have an offer or decision deadline, and none of the processes has reached a final round. I will let you know promptly if that changes.'}),

    make({id:121003,title:'How Much Stochastic Calculus Have You Studied?',timestamp:'11:13–11:49',
      prompt:'Have you studied stochastic calculus? Was it part of your undergraduate degree, and are you comfortable with a stochastic-calculus question?',
      answer:'You said that you were taking stochastic calculus at Cornell that semester, had not studied it during your bachelor’s degree, and were in the middle of learning it. You nevertheless invited the interviewer to ask the question.',
      score:7,assessment:'This was transparent and appropriately willing. The answer established an important boundary: you had started the course but had not necessarily reached Itô’s lemma. That context later explained the knowledge gap.',
      worked:['You disclosed the exact stage of your coursework.','You did not refuse the technical question.','You avoided pretending to know material that had not yet been covered.'],
      improve:['State which topics you have completed, such as Brownian motion, filtration, or stochastic integrals.','If Itô’s lemma has not been covered, say so before attempting to apply ordinary calculus.'],
      standard:'> I am taking stochastic calculus this semester. We have covered Brownian motion and the setup of stochastic integration, but we have not yet completed Itô’s lemma. I am happy to work through the question and will state clearly if it relies on material we have not reached.'}),

    make({id:121004,title:'Compute the Itô Integral of Brownian Motion Against Itself',timestamp:'11:51–13:54 and 16:32–19:21',
      prompt:'Let §(W_t§) be Brownian motion. Compute\n\n§[\n§int_0^T W_t\,dW_t.\n§]',
      answer:'You correctly clarified that the integrator was §(dW_t§), not §(dt§). You then said you were unsure how to calculate the stochastic integral and suggested a change of variables. After the interviewer guided you through ordinary calculus, you tried to use the usual chain rule and obtained §(W_T^2/2§). You did not know that Itô’s lemma adds a quadratic-variation term. The interviewer explained that §(d(W_t^2)=2W_t\,dW_t+dt§).',
      score:3,assessment:'You recognized the notation and honestly identified that you did not know the method. The proposed ordinary-chain-rule answer omitted the Itô correction §(-T/2§). Because Itô’s lemma had not yet been taught in your course, this was a genuine curriculum gap rather than a forgotten result, but it still left the main technical question unanswered.',
      worked:['You distinguished §(dW_t§) from §(dt§).','You did not bluff once you recognized the gap.','You followed the interviewer’s reduction to a simpler deterministic analogue.'],
      improve:['Memorize the one-dimensional Itô formula.','Remember that §((dW_t)^2=dt§) in Itô calculus.','When a question depends on untaught material, state that boundary and reason from any formula the interviewer supplies.'],
      standard:'Apply Itô’s formula to §(f(x)=x^2§):\n\n§[\nd(W_t^2)=2W_t\,dW_t+dt.\n§]\n\nIntegrating from §(0§) to §(T§) and using §(W_0=0§),\n\n§[\nW_T^2=2§int_0^T W_t\,dW_t+T,\n§]\n\nso\n\n§[\n§int_0^T W_t\,dW_t=§frac12§bigl(W_T^2-T§bigr).\n§]\n\nThe missing §(-T/2§) is precisely the quadratic-variation correction.'}),

    make({id:121005,title:'Deterministic Fallback: Integrate t dt and Differentiate t Squared',timestamp:'13:55–16:30',
      prompt:'As a simpler analogue, calculate §(§int_0^T t\,dt§). Then express the relationship between §(d(t^2)§) and §(t\,dt§).',
      answer:'You knew the integral was §(T^2/2§), but repeatedly verbalized the fraction in a confusing order, causing the interviewer to ask for clarification. When asked for the differential, you first discussed substitution and then correctly stated §(d(t^2)=2t\,dt§).',
      score:5.5,assessment:'The underlying calculus was correct, but the delivery made a very simple result sound uncertain. The interviewer explicitly preferred that you explain it verbally rather than show paper, so mathematical pronunciation and clean notation mattered.',
      worked:['You reached §(T^2/2§).','You eventually stated §(d(t^2)=2t\,dt§) correctly.','You recovered after a communication misunderstanding.'],
      improve:['Say “one half times T squared,” not “two over one T squared.”','Answer the exact derivative question before describing substitution.','Use one equation at a time and pause for confirmation.'],
      standard:'> The antiderivative of §(t§) is §(t^2/2§), so §(§int_0^T t\,dt=T^2/2§). Equivalently, §(d(t^2)=2t\,dt§), hence §(t\,dt=§tfrac12 d(t^2)§).'}),

    make({id:121006,title:'Why the Ordinary Chain Rule Fails for Brownian Motion',timestamp:'16:32–19:21',
      prompt:'Can you calculate §(d(W_t^2)§)? Is it simply §(2W_t\,dW_t§), as in ordinary differential calculus?',
      answer:'You initially answered §(d(W_t^2)=2W_t\,dW_t§) and said you were sure. When asked for the central theorem of stochastic calculus, you recognized the name Itô’s lemma but said it would be taught later. The interviewer then explained that Brownian motion is not differentiable in the ordinary sense and that an extra term appears.',
      score:4,assessment:'The ordinary chain rule was a reasonable extrapolation from material you knew, but the confident confirmation was risky after you had already said the relevant theorem had not been covered. The key identity is §((dW_t)^2=dt§), which produces the extra §(dt§) term.',
      worked:['You connected the deterministic analogue to the stochastic expression.','You recognized Itô’s lemma by name.','You accepted the correction without arguing.'],
      improve:['Avoid saying “I am sure” when applying ordinary calculus to a stochastic process.','Learn the second-order term in Itô’s formula.','Connect the correction to Brownian quadratic variation.'],
      standard:'For §(f(t,x)§in C^{1,2}§), Itô’s formula is\n\n§[\ndf(t,W_t)=f_t\,dt+f_x\,dW_t+§frac12 f_{xx}\,dt.\n§]\n\nWith §(f(x)=x^2§), §(f_x=2x§) and §(f_{xx}=2§), so\n\n§[\nd(W_t^2)=2W_t\,dW_t+dt.\n§]\n\nOrdinary calculus misses the final term because Brownian motion has nonzero quadratic variation.'}),

    make({id:121007,title:'Set Up the Expected Value of a Random Sum',timestamp:'19:21–22:45',
      prompt:'Let §(X_1,X_2,§ldots§) be i.i.d. random variables with mean §(§mu§). Let §(P§) be an independent positive-integer-valued random variable, and define\n\n§[\nY=§sum_{i=1}^{P}X_i.\n§]\n\nHow would you calculate §(§mathbb E[Y]§)?',
      answer:'You first clarified the distribution and moments of the §(X_i§) and asked whether §(P§) was independent. You correctly observed that conditional on §(P=3§), the expected sum is §(3§mu§), and more generally conditional on §(P=n§), it is §(n§mu§).',
      score:7.5,assessment:'This was the strongest part of the probability problem. You identified the necessary independence assumption and the conditional expectation immediately. The remaining step should have been to average §(P§mu§) over the distribution of §(P§).',
      worked:['You asked the right modeling questions.','You introduced §(§mu=§mathbb E[X_i]§).','You correctly obtained §(§mathbb E[Y§mid P=n]=n§mu§).'],
      improve:['Once the conditional expectation is found, invoke the tower property immediately.','State finite-integrability assumptions.','Avoid introducing a special distribution for §(P§) unless the problem gives one.'],
      standard:'Condition on §(P§):\n\n§[\n§mathbb E[Y§mid P]=§mathbb E§left[§sum_{i=1}^{P}X_i§middle|P§right]=P§mu.\n§]\n\nTherefore, by the law of total expectation,\n\n§[\n§mathbb E[Y]=§mathbb E[P§mu]=§mu\,§mathbb E[P].\n§]\n\nThis requires independence and suitable integrability, for example §(§mathbb E[P]<§infty§) and §(§mathbb E|X_1|<§infty§).'}),

    make({id:121008,title:'Special-Case Detour: Assuming a Uniform Random Count',timestamp:'22:45–28:38',
      prompt:'You introduced the special case §(P§sim§operatorname{Unif}§{1,§ldots,N§}§). What result does that give, and why does taking §(N§to§infty§) not solve the original problem?',
      answer:'You assumed without being asked that §(P§) was uniform on §(§{1,§ldots,N§}§). For that special case you correctly derived §(§mathbb E[Y]=§mu(N+1)/2§). You then let §(N§) approach infinity and concluded that the expectation would become positive or negative infinity according to the sign of §(§mu§). The interviewer challenged this because the original problem did not specify a uniform law or a limiting sequence of distributions.',
      score:4.5,assessment:'The finite-uniform calculation was correct, but it changed the problem. There is no uniform probability distribution on all positive integers, and an arbitrary positive-integer-valued §(P§) need not have infinite mean. The answer depends on §(§mathbb E[P]§), not on the size of the support alone.',
      worked:['You used conditioning correctly within the special case.','You calculated the average of §(1,§ldots,N§) correctly.','You tried to simplify an abstract problem with a concrete example.'],
      improve:['Label examples as examples rather than assumptions about the original problem.','Do not infer a distribution from the support.','Recognize that §(§sum_i i\,§mathbb P(P=i)§) is the definition of §(§mathbb E[P]§).'],
      standard:'If §(P§sim§operatorname{Unif}§{1,§ldots,N§}§), then\n\n§[\n§mathbb E[P]=§frac{N+1}{2},§qquad §mathbb E[Y]=§mu§frac{N+1}{2}.\n§]\n\nThis is only a special case. One cannot take a “uniform distribution over all positive integers”: equal positive mass on every integer cannot sum to one. In the general problem, §(P§) has its own probability mass function and §(§mathbb E[Y]=§mu§mathbb E[P]§) whenever the expectation exists.'}),

    make({id:121009,title:'Complete the Generic Derivation: Wald’s Identity',timestamp:'28:38–34:58',
      prompt:'Return to the general case. Evaluate\n\n§[\n§sum_{n=1}^{§infty}§mathbb P(P=n)\,§mathbb E[Y§mid P=n].\n§]',
      answer:'You wrote the correct total-expectation expression and correctly identified §(§mathbb E[Y§mid P=n]=n§mu§). You then continued to think in terms of the earlier uniform example and did not initially recognize §(§sum_n n§mathbb P(P=n)§) as §(§mathbb E[P]§). After substantial prompting, you recognized the term and agreed that §(§mathbb E[Y]=§mu§mathbb E[P]§).',
      score:5,assessment:'The derivation was nearly complete before the final recognition step, but the interviewer had to explicitly identify the expectation of §(P§). This suggests that conditional expectation mechanics were stronger than recall of the basic discrete-expectation definition under pressure.',
      worked:['You used the law of total expectation.','You obtained the correct conditional mean.','You eventually recognized the expectation of §(P§).'],
      improve:['Write the probability mass function as §(p_n=§mathbb P(P=n)§) to reduce verbal confusion.','Recognize §(§sum_n n p_n§) immediately as §(§mathbb E[P]§).','State the final result and assumptions in one concise line.'],
      standard:'Let §(p_n=§mathbb P(P=n)§). Then\n\n§[\n§begin{aligned}\n§mathbb E[Y]\n&=§sum_{n=1}^{§infty}p_n\,§mathbb E[Y§mid P=n]§§\n&=§sum_{n=1}^{§infty}p_n\,n§mu§§\n&=§mu§sum_{n=1}^{§infty}n p_n§§\n&=§mu\,§mathbb E[P].\n§end{aligned}\n§]\n\nThis is the independent-count version of Wald’s identity.'}),

    make({id:121010,title:'Which Programming Languages Are You Comfortable With?',timestamp:'35:05–35:59',
      prompt:'Which programming languages are you comfortable with? Where did you learn C++, and have you used it in projects?',
      answer:'You said that your previous experience was primarily in Python. You had learned some C++ at HKU but had not used it in projects, and you were not currently using C++ at Cornell. You added that the remaining difficulty was mostly syntax and that you believed you could pick it up easily.',
      score:6,assessment:'The answer was honest about practical experience. The claim that C++ was mostly a syntax issue sounded more confident than the evidence supported, especially without a project or recent course demonstrating memory management, the standard library, performance, or debugging.',
      worked:['You clearly identified Python as your working language.','You did not falsely claim professional C++ experience.','You distinguished coursework from project use.'],
      improve:['Describe what you can independently implement in Python.','State the exact scope of prior C++ coursework.','Frame C++ as a skill you are rebuilding rather than minimizing its differences from Python.'],
      standard:'> Python is my strongest language and the one I have used across my quantitative internships for data pipelines, modeling, and backtesting. I studied C++ at HKU, so I have experience with the language fundamentals and data structures, but I have not yet used it in a production project and would need to refresh it. I would be comfortable completing the interview work in Python while continuing to rebuild C++ fluency.'}),

    make({id:121011,title:'Your Question: How Does Verition Collaborate Across Pods?',timestamp:'36:04–37:46',
      prompt:'You observed that Verition emphasizes collaboration despite a pod structure and asked how teams collaborate while protecting independent alpha.',
      answer:'You said that collaboration seemed unusual in a multi-manager hedge fund because pods are usually independent, and asked how Verition collaborates across pods or teams. The interviewer explained that pods protect their true alpha and intellectual property, while the centralized analytics platform provides the reusable 80–90% of common infrastructure so each pod can focus on its differentiated 10–20%.',
      score:8.5,assessment:'This was a strong, company-specific question. It showed that you understood the tension between pod independence and platform scale, and it elicited useful information about the team’s purpose.',
      worked:['The question was specific to Verition’s operating model.','It demonstrated understanding of alpha protection.','It produced a substantive answer about centralized analytics.'],
      improve:['Use “multi-manager hedge fund” rather than the mispronounced phrase captured in the audio.','Ask one follow-up about examples of shared components, such as data, risk, backtesting, or execution analytics.'],
      standard:'> In a multi-manager platform, each pod needs to protect proprietary alpha, but shared infrastructure can still create scale. How does your team decide which analytics should be centralized and which should remain inside a pod? Could you give an example of a capability where the central platform provides most of the common solution while the pod retains the differentiated research layer?'}),

    make({id:121012,title:'Your Question: What Project Would an Intern Own?',timestamp:'37:47–39:16',
      prompt:'How could an intern help this group? Would the work involve strategy, data cleaning, or another type of project?',
      answer:'You asked how an intern would contribute and whether the work would focus on strategy, data cleaning, or something else. The interviewer said the intern would likely own a modeling project that the team considers valuable but has not had time to pursue. The intern would observe day-to-day work to understand the role, but the main assignment would be a more fundamental project used to evaluate foundations and thinking rather than routine support work.',
      score:7.5,assessment:'The question was practical and elicited a clear description of internship ownership. The phrase “just cleaning data” could unintentionally devalue an important part of quantitative work. Asking about project scope, mentorship, and evaluation criteria would sound stronger.',
      worked:['You asked directly how you could contribute.','You learned that the internship centers on an owned modeling project.','The answer clarified that the internship is a two-way evaluation.'],
      improve:['Avoid contrasting meaningful work with “just” cleaning data.','Ask how projects are selected and what a successful deliverable looks like.','Follow up on mentorship and interaction with pods.'],
      standard:'> What kind of modeling problem would an intern typically own, and how would the project connect to the team’s central analytics platform or the needs of individual pods? What would distinguish an excellent final deliverable, and how closely would the intern work with the researchers or portfolio teams who use it?'}),
  ];
})();
