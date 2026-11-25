'use strict';
(() => {
  const T=s=>s.replaceAll('§','\\');
  const note='Reconstructed locally from the second Invesco interview recording. Wording is lightly edited for clarity while preserving the substance. The shared coding screen was not captured, so the coding entries use only details supported by the audio.';
  const source='Invesco second interview audio reconstruction';
  const bullets=a=>a.map(x=>'- '+x).join('\n');
  const make=o=>({
    category:'INVESCO INTERVIEW 2',originalCategory:'My Interview',company:'Invesco',
    role:'Portfolio Engineering and Analytics Internship · Second first-round interview',
    kind:'Audio reconstruction · your answer · evaluation · standard answer',
    note,references:[],privateInterview:true,id:o.id,question:o.title,displayTitle:o.title,
    questionBody:T('Audio timestamp: '+o.timestamp+'\n\n'+o.prompt),
    solution:T(['### Your answer — reconstructed from the recording',o.answer,
      '### Evaluation — '+o.score+'/10',o.assessment,
      o.worked?.length?'### What worked':'',o.worked?.length?bullets(o.worked):'',
      o.improve?.length?'### What to improve':'',o.improve?.length?bullets(o.improve):'',
      '### Standard or stronger answer',o.standard].filter(Boolean).join('\n\n')),
    sources:[{sheet:source,row:o.id-120000}],originalAnswer:T(o.answer)
  });
  window.INVESCO_INTERVIEW_2_DATA=[
    make({id:120001,title:'Walk Me Through Your Background and Experience',timestamp:'00:03–01:21',
      prompt:'Walk me through your background and experience.',
      answer:'You introduced yourself as a Cornell Financial Engineering student with a mathematics major and computer-science minor from HKU. You summarized portfolio-construction work at Northeastern Securities, factor-model work at Nightingale Investment, semantic portfolio work at RiverMap, and index-rebalancing prediction at Diamond Asia. You concluded that these experiences gave you quantitative skills relevant to the role.',
      score:7,assessment:'The answer was relevant and showed a coherent quantitative-investing path. It was mostly a list and did not prioritize the strongest result or explain why Portfolio Engineering and Analytics was the logical next step.',
      worked:['You covered education, portfolio construction, factor research, semantic search, and index rebalancing.','You connected the experiences to the position.','The answer stayed reasonably concise.'],
      improve:['Use a present–past–future structure.','Replace vague phrases such as “simple models” with one precise contribution and result.','End with a specific reason for wanting this Invesco team.'],
      standard:'> I am completing Cornell’s Master of Financial Engineering after studying mathematics and computer science at HKU. My internships have progressively combined portfolio research with implementation: I tested mean–variance and risk-parity portfolios, worked on equity-factor models, helped build a thematic-investing workflow, and most recently built an explainable Python pipeline to predict index additions and deletions. Those projects taught me to translate investment rules into reliable analytics, which is why Invesco’s Portfolio Engineering and Analytics team is a strong fit for me.'}),
    make({id:120002,title:'Describe a Project You Are Proud Of and the Decisions You Made',timestamp:'01:23–02:51',
      prompt:'Choose one internship project you are most proud of. What problem did you encounter, and what skills and key decisions helped you resolve it?',
      answer:'You chose the Diamond Asia index-rebalancing project. You explained that you received an index rulebook and built a Python pipeline to predict additions and deletions. You implemented liquidity, market-cap ranking, turnover, thematic, and buffer-zone gates; made each exclusion explainable; used an LLM in the workflow; and reported an 82.6% hit rate despite not having the official index data feed.',
      score:7,assessment:'The project was highly relevant and the measurable result was valuable. The response did not directly identify one central obstacle, alternatives considered, or a specific decision and trade-off. “I also used an LLM” was too vague to establish why it helped.',
      worked:['You described a relevant end-to-end pipeline.','You emphasized explainability at each rule gate.','You gave a measurable result and an important data limitation.'],
      improve:['Frame the answer explicitly as problem, constraint, decision, implementation, and result.','Explain how missing official data was approximated without look-ahead bias.','Define the LLM’s exact role and keep deterministic rules separate.'],
      standard:'> My task was to predict the next index rebalance from a published rulebook without the provider’s complete internal data feed. The main challenge was translating prose rules and buffer exceptions into deterministic, auditable code while approximating unavailable fields. I decomposed the methodology into sequential gates, wrote a reason code for every inclusion and exclusion, and backtested each gate. I kept formal index rules deterministic and used an LLM only for a narrow thematic-classification step. The pipeline matched 82.6% of the official additions and deletions.'}),
    make({id:120003,title:'What Does Your 82.6% Hit Rate Mean?',timestamp:'02:52–03:22',
      prompt:'How was the hit rate measured? Does it mean the direction of your prediction was correct?',
      answer:'You clarified that you predicted index additions and deletions and compared the predicted rebalance results with the official published results. You described the hit rate as the proportion of correctly predicted results.',
      score:6,assessment:'The answer established the idea, but the metric remained ambiguous. A single “hit rate” could mean precision, recall, accuracy over a large universe, or a custom set-match rate. The denominator matters.',
      worked:['You corrected the interviewer’s possible interpretation.','You tied the metric to official rebalance outcomes.'],
      improve:['Define numerator and denominator exactly.','Report additions and deletions separately.','Use precision, recall, and F1 when changed constituents are rare.'],
      standard:'If §(P§) is the predicted change set and §(A§) the actual set, report precision §(=|P§cap A|/|P|§) and recall §(=|P§cap A|/|A|§), separately for additions and deletions. State exactly which ratio produced 82.6%. Ordinary accuracy over the whole universe can be misleading because most constituents do not change.'}),
    make({id:120004,title:'Define a Positive-Definite Matrix',timestamp:'03:22–04:53',
      prompt:'What is a positive-definite matrix? Is the quadratic form §(xAx^§top§) or §(x^§top A x§), and what restriction applies to §(x§)?',
      answer:'You first said that a positive-definite matrix has positive eigenvalues and attempted §(xAx^§top§). After correction, you stated §(x^§top A x§). You initially used “greater than or equal to zero,” recognized that this describes positive semidefiniteness, changed it to strict positivity, and agreed that §(x§neq0§).',
      score:7,assessment:'You knew both key characterizations and corrected the notation and inequality after prompts. A clean first response should specify that the usual real-matrix definition assumes symmetry.',
      worked:['You recalled the eigenvalue characterization.','You corrected the quadratic-form order.','You distinguished positive definite from positive semidefinite.'],
      improve:['State symmetry explicitly.','Say “for every nonzero vector” before the inequality.','Qualify the positive-eigenvalue equivalence with symmetry or Hermitian structure.'],
      standard:'A real symmetric matrix §(A§in§mathbb R^{n§times n}§) is positive definite if\n\n§[\nx^§top A x>0§qquad§text{for every }x§in§mathbb R^n§setminus§{0§}.\n§]\n\nFor a real symmetric matrix, this is equivalent to all eigenvalues being strictly positive. Replacing §(>0§) by §(§ge0§) gives positive semidefiniteness.'}),
    make({id:120005,title:'How Do You Read the Sum of Eigenvalues from a Matrix?',timestamp:'04:53–05:14',
      prompt:'For a square matrix, how can you read off the sum of its eigenvalues?',
      answer:'You answered that the sum of the eigenvalues is the trace of the matrix.',
      score:9,assessment:'This was correct and direct. A complete answer could add that eigenvalues are counted with algebraic multiplicity and symmetry is not required.',
      worked:['You gave the correct invariant immediately.','You did not overcomplicate a short question.'],
      improve:['Mention algebraic multiplicity.','If asked for a general proof, use the characteristic polynomial.'],
      standard:'For any square matrix §(A§),\n\n§[\n§operatorname{tr}(A)=§sum_{i=1}^n a_{ii}=§sum_{i=1}^n§lambda_i,\n§]\n\nwhere eigenvalues are counted with algebraic multiplicity. Symmetry is not required.'}),
    make({id:120006,title:'Prove the Trace–Eigenvalue Identity for a Symmetric Matrix',timestamp:'05:15–09:42',
      prompt:'For a symmetric matrix, prove that its trace equals the sum of its eigenvalues using §(A=QDQ^§top§).',
      answer:'You recognized that §(D§) contains the eigenvalues, but switched to determinants and could not finish. After the interviewer reminded you that §(Q§) is orthogonal and trace is cyclic, you remained unsure. The interviewer completed the proof using §(Q^§top Q=I§).',
      score:3,assessment:'This was the weakest mathematics segment. You confused determinant, which gives the product of eigenvalues, with trace, which gives their sum. Even after receiving most ingredients, you did not assemble the short proof.',
      worked:['You correctly identified the diagonal eigenvalue matrix.','You stayed honest when you could not complete the proof.'],
      improve:['Memorize §(§operatorname{tr}(ABC)=§operatorname{tr}(BCA)§).','Keep sum/trace separate from product/determinant.','Write the target expression and simplify one step at a time.'],
      standard:'By the spectral theorem, §(A=QDQ^§top§), where §(Q^§top Q=I§) and §(D=§operatorname{diag}(§lambda_1,§ldots,§lambda_n)§). Thus\n\n§[\n§operatorname{tr}(A)=§operatorname{tr}(QDQ^§top)=§operatorname{tr}(DQ^§top Q)=§operatorname{tr}(D)=§sum_{i=1}^n§lambda_i.\n§]\n\nThe determinant calculation instead gives §(§det(A)=§prod_i§lambda_i§).'}),
    make({id:120007,title:'How Do You Sample Uniformly from a Disk?',timestamp:'09:49–10:47',
      prompt:'How would you generate a point uniformly from inside a circle?',
      answer:'You parameterized the point as §((r§cos§theta,r§sin§theta)§), correctly warned that sampling radius uniformly would not give uniform area, and proposed independent uniforms with a square-root radius transformation and angle from §(0§) to §(2§pi§). Your variable names became mixed, but the method was correct. The interviewer explicitly confirmed it.',
      score:9,assessment:'This was your strongest technical answer. You recognized the area-density issue and supplied the correct inverse-CDF construction.',
      worked:['You rejected the common incorrect uniform-radius method.','You used polar coordinates and a square-root transformation.','You specified a uniform angle.'],
      improve:['State §(U,V§sim§mathrm{Unif}(0,1)§), §(r=R§sqrt U§), §(§theta=2§pi V§).','Justify the square root using the disk-area CDF.'],
      standard:'Let §(U,V§stackrel{§mathrm{iid}}{§sim}§operatorname{Unif}(0,1)§). Set\n\n§[\nr=R§sqrt U,§qquad §theta=2§pi V,§qquad(X,Y)=(r§cos§theta,r§sin§theta).\n§]\n\nUniform area requires §(§mathbb P(r§le a)=a^2/R^2§), whose inverse gives §(r=R§sqrt U§).'}),
    make({id:120008,title:'Conditional Expectation of the Second-Largest Order Statistic',timestamp:'10:48–13:38',
      prompt:'Let §(X_1,§ldots,X_4§) be i.i.d. uniform on §([0,1]§). Given minimum 0.3 and maximum 0.9, what is the expected second-largest value?',
      answer:'You initially misunderstood the target and answered 0.5. Once the interviewer clarified “second largest,” you changed the answer to 0.7. You argued that the two interior observations evenly partition the interval and described a two-to-one distance relationship. The interviewer accepted the argument.',
      score:8,assessment:'The final answer §(0.7§) was correct. The intuition was right but not rigorous. Conditional on endpoints, the two interior observations act like i.i.d. uniform draws on §([0.3,0.9]§), and the second-largest overall is their maximum.',
      worked:['You corrected the misunderstanding quickly.','You used expected-spacing intuition correctly.','You reached the exact answer.'],
      improve:['Restate which order statistic is requested.','Identify the conditional distribution of the interior points.','Use the Beta order-statistic expectation.'],
      standard:'The two interior observations are order statistics of two i.i.d. §(§operatorname{Unif}(0.3,0.9)§) draws. The maximum of two standard uniforms has mean §(2/3§). Therefore\n\n§[\n§mathbb E[X_{(3)}§mid X_{(1)}=0.3,X_{(4)}=0.9]=0.3+(0.9-0.3)§frac23=0.7.\n§]'}),
    make({id:120009,title:'What Assumptions Does Linear Regression Make?',timestamp:'13:38–15:08',
      prompt:'Briefly describe the assumptions of linear regression. Do we assume normality or constant variance?',
      answer:'You described fitting a line by minimizing distances between observations and the line, then discussed penalizing outliers. You said a normally distributed graph was not required and that regression could be applied to any graph. You did not name the standard model assumptions.',
      score:3,assessment:'The response described an optimization objective rather than statistical assumptions and blurred ordinary least squares with robust or regularized losses. Normality of raw data is not required, but conditional mean, exogeneity, and error variance assumptions are central.',
      worked:['You correctly sensed that normality of raw data is not universally required.','You recognized that dispersion affects estimation quality.'],
      improve:['Separate assumptions from the loss function.','State linearity, exogeneity, no perfect multicollinearity, and finite variance.','Explain the roles of homoskedasticity and normal errors.'],
      standard:'For §(y=X§beta+§varepsilon§), core assumptions include linearity in parameters, §(§mathbb E[§varepsilon§mid X]=0§), no perfect multicollinearity, independent observations or modeled dependence, and finite error variance. Homoskedasticity is needed for the classical OLS variance formula and Gauss–Markov efficiency. Normal errors are not required for unbiased OLS; they support exact small-sample inference.'}),
    make({id:120010,title:'What Does a Fan-Shaped Residual Pattern Indicate?',timestamp:'15:08–16:03',
      prompt:'Observations cluster around the fitted line at small x but fan out as x increases. What problem does that create?',
      answer:'You said that you had not learned this topic. You explained that you had encountered basic linear regression and ridge loss in a machine-learning course but had not yet taken a statistics course.',
      score:2,assessment:'The pattern is a standard sign of heteroskedasticity. Not bluffing was preferable, but this exposed an important preparation gap in regression diagnostics.',
      worked:['You were transparent about the boundary of your coursework.','You gave context for why formal inference was unfamiliar.'],
      improve:['Recognize heteroskedasticity, nonlinearity, and autocorrelation in residual plots.','Know the impact on conventional standard errors.','Mention robust standard errors, transformations, or weighted least squares.'],
      standard:'The fan shape indicates heteroskedasticity: §(§operatorname{Var}(§varepsilon_i§mid X_i)§) changes with §(X_i§). Under exogeneity, OLS coefficients can remain unbiased and consistent, but OLS is inefficient and conventional homoskedastic standard errors are generally wrong. Responses include robust standard errors, transformations, variance modeling, or weighted least squares.'}),
    make({id:120011,title:'What Is the Main Focus of Your Academic Training?',timestamp:'16:03–16:46',
      prompt:'Across undergraduate and master’s programs, is your main focus statistics, machine learning, or mathematics?',
      answer:'You described your background as a combination of mathematics and computer science. You said computer science covered data structures and algorithms, while mathematics focused more on probability.',
      score:6,assessment:'The answer was honest but very general and did not distinguish undergraduate training from the MFE program. It was an opportunity to explain strengths while addressing the regression gap constructively.',
      worked:['You identified a coherent mathematics–computer science combination.','You named probability and algorithms, both relevant to quantitative work.'],
      improve:['Separate HKU training from Cornell coursework.','Name specific methods or courses.','Acknowledge developing statistics depth while emphasizing strong foundations.'],
      standard:'> My undergraduate training was primarily mathematical, especially probability, with a computer-science minor focused on algorithms and programming. Cornell’s MFE is adding applied statistics, optimization, machine learning, Monte Carlo, and financial modeling. My strongest current foundation is mathematical reasoning plus implementation, and I am actively strengthening formal regression and statistical inference.'}),
    make({id:120012,title:'Design an Algorithm to Validate Mixed Brackets',timestamp:'16:47–23:29',
      prompt:'Given a string containing round, square, and curly brackets, return whether it is properly nested. Explain your approach aloud.',
      answer:'You first tried to match the first opening bracket with a later closing bracket and recursively validate pieces of the string. The approach was incomplete for nested and concatenated cases. When the interviewer presented a counterexample, you struggled to adapt it and agreed that checking every bracket type recursively would be complicated. The interviewer then suggested a stack.',
      score:3,assessment:'The recursive idea could be made correct with careful decomposition, but it was not specified well enough to handle nesting, multiple valid blocks, or mismatched types. The larger issue was not recognizing a standard stack problem.',
      worked:['You clarified that the function returns a Boolean.','You recognized that nested subsequences require validation.','You listened to the counterexample and changed direction.'],
      improve:['Recognize that the most recently opened bracket must close first: LIFO.','State the invariant before coding.','Test simple, nested, mismatched, prematurely closing, and empty inputs.'],
      standard:'Use one stack. Scan left to right. Push each opening bracket. For a closing bracket, the stack must be nonempty and its top must be the corresponding opener; otherwise return False. Pop the matching opener. Return whether the stack is empty. The algorithm is O(n) time and O(n) worst-case space.'}),
    make({id:120013,title:'Implement the Stack Solution for Valid Brackets',timestamp:'22:46–30:18',
      prompt:'Use stack push/pop behavior to finish the bracket validator.',
      answer:'You said you knew a stack is last-in, first-out. You began a second implementation, asked whether Python used push or pop, and accepted that list append performs the push. You became confused about when to pop, proposed separate stacks for the three bracket types, and did not finish a correct implementation before time expired. The interviewer ended by saying he understood what you were trying to do.',
      score:2,assessment:'Once the interviewer supplied the correct data structure, the implementation still missed the key rule: one stack preserves cross-type nesting order. Three independent stacks would incorrectly accept ([)]. The unfinished code likely hurt more than the initial recursive detour.',
      worked:['You knew the LIFO definition.','You switched approaches when prompted.','You correctly learned that Python lists use append to push.'],
      improve:['Use a closing-to-opening mapping and one stack.','Check that the stack is nonempty before pop.','Compare the popped opener with the required opener.','Practice standard coding patterns under time pressure.'],
      standard:'Python reference implementation:\n\n'+String.fromCharCode(96).repeat(3)+'python\n'+
        'def is_valid_brackets(s):\n'+
        '    expected = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\n'+
        '    stack = []\n'+
        '    for ch in s:\n'+
        '        if ch in \"([{\":\n'+
        '            stack.append(ch)\n'+
        '        elif ch in expected:\n'+
        '            if not stack or stack.pop() != expected[ch]:\n'+
        '                return False\n'+
        '        else:\n'+
        '            return False\n'+
        '    return not stack\n'+String.fromCharCode(96).repeat(3)+
        '\n\nOne stack is essential because it records exact nesting order across bracket types. Complexity is O(n) time and O(n) worst-case space.'}),
    make({id:120014,title:'Your Question: What Qualities Matter for This Position?',timestamp:'30:18–31:19',
      prompt:'You asked which qualities make someone stand out for the Portfolio Engineering role.',
      answer:'The interviewer said the position requires a solid mathematical and financial background. Because Portfolio Engineering supports multiple teams and sits at a central “powerhouse,” proper coding and the ability to support business functionality are also crucial. He summarized the profile as strong mathematics plus strong implementation skills.',
      score:7,assessment:'This was useful and produced a clear preparation signal. Your wording could sound as though you were asking how the interviewer personally stands out rather than what makes a candidate successful.',
      worked:['You used the remaining time to learn how the team evaluates fit.','The answer identified mathematics, finance, coding, and business support.'],
      improve:['Ask what qualities distinguish successful interns.','Follow up with how those qualities appear in project work.','Prepare examples showing both implementation and stakeholder support.'],
      standard:'> What qualities distinguish interns who perform especially well on the Portfolio Engineering and Analytics team? In particular, how do strong interns balance mathematical rigor, reliable implementation, and communication with the investment or business teams they support?'
    })
  ];
})();
