'use strict';
const neubergerVi2Rows=[
{
 title:`Give Me a Brief Introduction About Yourself`,time:`10:59`,type:`Behavioral`,
 prompt:`Give me a brief introduction about yourself.`,
 your:`You introduced yourself as Jingxiang Xu, said you are pursuing the Cornell MFE after studying mathematics at HKU, and highlighted two relevant internships. At Diamond Asia, you built a Python index-rebalancing pipeline; at Martingales, you developed and backtested factors. You concluded that these experiences gave you a strong quantitative background for the role.`,
 correct:`There is no single factual answer. A stronger 60–90 second version is:\n\n“I'm Jingxiang Xu, currently pursuing the MFE at Cornell after completing my undergraduate degree in mathematics at HKU. My experience sits at the intersection of quantitative research and implementation. At Diamond Asia, I translated index methodologies into a modular Python pipeline that predicted constituent additions and deletions and made discrepancies easy to diagnose. At Martingales, I built and evaluated investment factors through systematic backtesting. Those experiences taught me how to turn financial rules and research ideas into testable code, and I am interested in this role because it would let me deepen that work in a rigorous investment environment.”\n\nThis version keeps the education, two strongest experiences, technical evidence, and motivation in one coherent story.`
},
{
 title:`Why Did You Skip Other Experiences on Your Résumé?`,time:`12:05`,type:`Behavioral`,
 prompt:`You highlighted two internships but skipped the second and third experiences on your résumé. Could you explain the research experience, especially RiverMap?`,
 your:`You explained that the RiverMap role involved building a systematic thematic portfolio and using an LLM to screen technology companies. You described it as preparation for the Diamond Asia internship because the Hang Seng TECH index required a similar technology-company classification process.`,
 correct:`A stronger answer should explain selection rather than sound as though the experiences were omitted accidentally:\n\n“I led with the two experiences most directly related to this role, but RiverMap was also important because it developed a capability I later reused at Diamond Asia. At RiverMap, I worked on systematic thematic portfolios and used company descriptions and classification rubrics to screen technology firms. At Diamond Asia, the Hang Seng TECH methodology required a similar classification task, so I adapted that experience into a more production-oriented index-rebalancing pipeline. RiverMap therefore gave me the research prototype, while Diamond Asia taught me how to validate and operationalize it.”`
},
{
 title:`Describe Your Diamond Asia Index-Rebalancing Work`,time:`12:55`,type:`Behavioral / Technical`,
 prompt:`Briefly describe what you did at Diamond Asia.`,
 your:`You said you worked on Hong Kong index families, including the Hang Seng Composite and Hang Seng TECH indices. You converted a complicated index methodology into small steps in a Python pipeline. Each stage recorded why securities were removed, which helped you backtest historical rebalances and diagnose mismatches with official results.`,
 correct:`A polished answer can use problem, method, and result:\n\n“The project predicted index constituent changes before scheduled rebalances. I first translated each methodology rule—universe selection, market-cap ranking, liquidity screens, sector eligibility, and buffer rules—into a separate testable Python stage. I then built audit output that recorded the population after every stage and the exclusion reason for each stock. For historical validation, I compared predicted and official constituent sets and traced every mismatch back to the exact rule or data field. The modular design made the pipeline easier to debug and extend across the Hang Seng Composite and Hang Seng TECH families.”\n\nIf known, add numerical accuracy, coverage, time saved, or assets/trades influenced.`
},
{
 title:`What Is an Index Rulebook?`,time:`13:33`,type:`Finance`,
 prompt:`What do you mean by an index “rulebook”?`,
 your:`You called it an index methodology guideline and gave examples: rank Hong Kong stocks by market capitalization, remove securities with insufficient liquidity, and apply additional eligibility gates.`,
 correct:`An index rulebook, or index methodology, is the formal specification governing how an index is constructed and maintained. It normally defines the eligible universe, security and country classifications, liquidity and free-float requirements, ranking variables, constituent count, weighting and capping rules, review frequency, buffer rules, corporate-action treatment, and exceptional-event procedures. A rebalance model translates those written rules into deterministic calculations using point-in-time data.`
},
{
 title:`What Was the Most Challenging Part of the Index Project?`,time:`14:48`,type:`Behavioral / Technical`,
 prompt:`The methodology sounds like a transparent rule-based system. What was the most challenging part of implementing it?`,
 your:`You explained that the firm did not subscribe to the official index data feed, so you had to reproduce the result from other databases. Standard fields could be queried with SQL, but technology classification was difficult. You used FactSet RBICS descriptions, an LLM classification pipeline, uncertainty triage, and HKEX filings for manual or second-stage review.`,
 correct:`Your answer identified a real challenge and a sensible layered solution. A tighter version is:\n\n“The hardest part was data equivalence, not coding the published rules. We lacked the provider's official point-in-time index feed, so seemingly simple rules could diverge because of field definitions, effective dates, or classifications. I built a hierarchy of sources: database fields and SQL for standard fundamentals and liquidity; RBICS descriptions plus an LLM for initial technology classification; and annual reports or HKEX filings for ambiguous cases. I required the model to return yes, no, or uncertain, and reviewed only the uncertain group. Finally, stage-level reconciliation exposed whether a mismatch came from data, timing, classification, or logic. This preserved auditability while reducing manual review.”`
},
{
 title:`What Is Value at Risk?`,time:`18:41`,type:`Risk`,
 prompt:`What is VaR?`,
 your:`You first interpreted VAR as variance, then recognized that the interviewer meant Value at Risk. You did not provide a definition.`,
 correct:String.raw`Value at Risk is a loss quantile over a specified horizon. If \(L\) is portfolio loss, the level-\(\alpha\) VaR is

\[
\operatorname{VaR}_{\alpha}(L)=\inf\{\ell:P(L\le \ell)\ge\alpha\}.
\]

For example, a one-day 95% VaR of $10 million means that, under the model and current-position assumptions, 95% of one-day losses are no greater than $10 million; equivalently, there is a 5% modeled probability of a larger loss. It does not say how large the loss will be beyond the cutoff. Common estimators are historical simulation, parametric variance–covariance VaR, and Monte Carlo simulation. Expected shortfall complements VaR by averaging losses in the tail beyond the VaR threshold.`
},
{
 title:`What Is Ridge Regression?`,time:`19:39`,type:`Statistics / Machine Learning`,
 prompt:`Explain ridge regression.`,
 your:`You correctly remembered that ridge regression adds an L2 penalty, but your description of the residual term was unclear.`,
 correct:String.raw`Ridge regression is least squares with an \(L_2\) penalty on the coefficients:

\[
\widehat\beta^{\text{ridge}}
=\arg\min_{\beta_0,\beta}
\left\{
\sum_{i=1}^{n}(y_i-\beta_0-x_i^{\top}\beta)^2
+\lambda\sum_{j=1}^{p}\beta_j^2
\right\},
\qquad \lambda\ge0.
\]

The intercept is normally unpenalized. In centered matrix form,

\[
\widehat\beta=(X^{\top}X+\lambda I)^{-1}X^{\top}y.
\]

The penalty shrinks coefficients toward zero but usually does not make them exactly zero. The hyperparameter \(\lambda\) is commonly selected by cross-validation.`
},
{
 title:`Why and When Do We Use Ridge Regression?`,time:`20:20`,type:`Statistics / Machine Learning`,
 prompt:`Why do we need ridge regression, and what problems does it solve?`,
 your:`You said that because the penalty is L2, it heavily penalizes points that are far away. This confuses coefficient regularization with a loss that treats large residuals or outliers differently.`,
 correct:String.raw`Ridge penalizes large coefficient magnitudes, not individual observations. It is useful when predictors are numerous or highly correlated, when ordinary least squares has high variance, or when prediction is improved by accepting a little bias in exchange for lower variance.

If \(X^{\top}X\) is ill-conditioned, replacing it with \(X^{\top}X+\lambda I\) stabilizes the inverse and reduces sensitivity to small changes in the data. Ridge is also well defined when \(p>n\). It does not perform variable selection in the same way as lasso, and it is not primarily an outlier-robust method.`
},
{
 title:`What Preprocessing Does Ridge Regression Need?`,time:`21:03`,type:`Machine Learning`,
 prompt:`What data-processing steps should be completed before fitting ridge regression? Should the columns be rescaled?`,
 your:`You said the data should be cleaned and made dimensionless or aligned. When explicitly asked about centering columns and putting them on comparable scales, you said you had not learned that step.`,
 correct:String.raw`Yes—numerical predictors should normally be standardized before ridge because the penalty acts directly on coefficient magnitudes. For each feature,

\[
z_{ij}=\frac{x_{ij}-\mu_j}{s_j}.
\]

Otherwise, a feature's measurement units determine how strongly its coefficient is penalized. A sound workflow is:

1. Split training and validation/test data first.
2. Fit missing-value treatment, encoding, centering, and scaling only on the training set.
3. Apply those fitted transformations to validation/test data to avoid leakage.
4. Tune \(\lambda\) using cross-validation.

The response variable need not always be standardized, and the intercept is normally excluded from the penalty.`
},
{
 title:`What Is a p-Value?`,time:`22:50`,type:`Statistics`,
 prompt:`What is a p-value?`,
 your:`You said it indicates statistical significance and that values below 5% are often treated as statistically significant. That describes a decision rule but does not define the p-value.`,
 correct:String.raw`Given a test statistic \(T\), observed value \(t_{\text{obs}}\), and null hypothesis \(H_0\), the p-value is the probability—calculated assuming \(H_0\) is true—of observing a result at least as incompatible with \(H_0\) as the one obtained:

\[
p=P_{H_0}\!\left(T\text{ is at least as extreme as }t_{\text{obs}}\right).
\]

A small p-value is evidence against \(H_0\) relative to the specified model. It is not the probability that the null hypothesis is true, the probability the result occurred by chance, or the size or practical importance of an effect.`
},
{
 title:`What Does a p-Value of 5% Mean?`,time:`23:19`,type:`Statistics`,
 prompt:`If my p-value is 5%, what does that mean?`,
 your:`You initially equated it with a confidence level above 95%. The interviewer then explained that, if the null hypothesis were true, data this extreme would occur with about 5% probability.`,
 correct:`A p-value of 0.05 means that, under the null hypothesis and all model assumptions, the probability of observing a test statistic at least as extreme as the realized one is 5%. It does not mean there is a 5% probability that the null is true or a 95% probability that the alternative is true. If the significance level was fixed at 5%, an exact p-value of 0.05 lies on the conventional rejection boundary; software and protocols differ on strict versus non-strict inequality, so report the p-value and decision rule explicitly.`
},
{
 title:`What Are the Key Assumptions of Multiple Linear Regression?`,time:`23:58`,type:`Statistics`,
 prompt:`What are the key assumptions of ordinary multiple linear regression?`,
 your:`You said you had not learned the assumptions and did not attempt an answer.`,
 correct:String.raw`For the linear model \(y=X\beta+\varepsilon\), the central assumptions are:

1. Linearity in parameters and correct model specification.
2. No perfect multicollinearity, so the relevant columns of \(X\) have full rank.
3. Conditional mean zero: \(E[\varepsilon\mid X]=0\). This is the key exogeneity condition for unbiased OLS coefficients.
4. Independent random sampling, or an explicitly modeled dependence structure for time series or panels.
5. Homoskedasticity, \(\operatorname{Var}(\varepsilon\mid X)=\sigma^2\), for classical OLS efficiency and usual standard errors. Robust standard errors can relax this inference assumption.
6. No autocorrelation when observations have an ordering, again for classical standard errors.

Normal errors are not required for unbiasedness or consistency. They enable exact small-sample t and F inference; large-sample inference can instead use asymptotic results.`
},
{
 title:`How Have You Used GitHub in Team Projects?`,time:`24:31`,type:`Software Engineering`,
 prompt:`Have you used GitHub in previous projects? Describe your workflow.`,
 your:`You described the RiverMap team workflow: create a branch every few days, push completed code, request a merge into main, receive senior review, and make requested changes.`,
 correct:`Your answer was substantively good. A stronger version would use the Git terms precisely: create a feature branch from the updated main branch, make focused commits, push the branch, open a pull request, run automated tests or checks, respond to review comments, obtain approval, and merge. After merging, update the local main branch and remove the obsolete feature branch. It also helps to mention conflict resolution, code review, protected branches, and continuous integration if you used them.`
},
{
 title:`Git Merge vs. Git Rebase`,time:`25:18`,type:`Software Engineering`,
 prompt:`What is the difference between git merge and git rebase?`,
 your:`You said you had only used merge and had not used rebase. The interviewer noted that rebase changes history and that their team normally uses merge.`,
 correct:`Suppose a feature branch and main have diverged. Merge combines the two histories, usually by creating a merge commit, and preserves the existing commit graph. Rebase takes the feature commits and replays them on top of a new base, producing new commit hashes and a linear-looking history.\n\nMerge is safe for shared branches because it does not rewrite existing commits. Rebase is useful for cleaning a private local branch before review, but force-pushing a rebased branch can disrupt collaborators. A common rule is: rebase commits you alone own; do not rebase published shared history without coordination.`
},
{
 title:`Which Sorting Algorithms Do You Know?`,time:`25:49`,type:`Algorithms`,
 prompt:`How many sorting algorithms do you know?`,
 your:`You named quicksort and merge sort.`,
 correct:`A good answer names several algorithms and classifies them rather than merely listing them. For example: comparison sorts include merge sort, quicksort, heapsort, insertion sort, selection sort, and bubble sort; non-comparison sorts include counting sort, radix sort, and bucket sort under additional assumptions on keys. You can then say which ones you know well enough to analyze. The interviewer immediately chose merge sort, so depth on two algorithms was more useful than an inflated list.`
},
{
 title:`Explain How Merge Sort Works`,time:`26:11`,type:`Algorithms`,
 prompt:`Describe how merge sort works.`,
 your:`You correctly said it repeatedly divides the sequence in half until it reaches small pieces, compares elements, and combines the pieces pair by pair into the full sorted sequence. You then volunteered a rough quicksort description.`,
 correct:String.raw`Merge sort uses divide and conquer:

1. If the array has at most one element, it is already sorted.
2. Divide the array into two halves.
3. Recursively sort each half.
4. Merge the two sorted halves using two pointers, repeatedly taking the smaller front element.

The recurrence is

\[
T(n)=2T(n/2)+\Theta(n)=\Theta(n\log n).
\]

The standard array implementation uses \(\Theta(n)\) auxiliary memory and is stable when ties are taken from the left half first. For linked lists, merging can be performed with constant extra node storage.`
},
{
 title:`What Is Merge Sort’s Average Complexity?`,time:`26:58`,type:`Algorithms`,
 prompt:`What is the average complexity of merge sort?`,
 your:`You answered that sorting algorithms are generally “n log n.” The intended answer for merge sort was correct, but not every sorting algorithm has that average complexity.`,
 correct:String.raw`Merge sort runs in

\[
\boxed{\Theta(n\log n)}
\]

time in the best, average, and worst cases. At each of \(\log_2 n\) recursion levels, the merge operations process a total of \(n\) elements. Its usual array auxiliary-space complexity is \(\Theta(n)\), plus \(\Theta(\log n)\) recursion depth. The phrase “all sorts are \(n\log n\)” is false: insertion sort averages \(\Theta(n^2)\), counting sort can run in \(\Theta(n+k)\), and comparison sorting has a \(\Omega(n\log n)\) worst-case lower bound rather than a universal runtime.`
},
{
 title:`How Would You Test Whether Data Are Normally Distributed?`,time:`27:28`,type:`Statistics`,
 prompt:`How can you test whether a data sample is normal?`,
 your:`You proposed comparing observed proportions within intervals to probabilities obtained by integrating a normal density over those intervals. This resembles a binned goodness-of-fit test, although the explanation mixed normal and uniform sampling and did not name a formal test.`,
 correct:`Start with a Q–Q plot and histogram to see skewness, heavy tails, multimodality, and outliers. Then, if a formal test is useful, choose one suited to the purpose: Shapiro–Wilk for general departures in smaller samples, Anderson–Darling for greater tail sensitivity, Jarque–Bera for skewness and kurtosis, or a chi-squared goodness-of-fit test for binned counts.\n\nYour interval idea can be formalized as a chi-squared test: estimate the normal parameters, create bins with adequate expected counts, calculate expected bin probabilities under the fitted normal model, and compare observed with expected counts. The null distribution must account for parameters estimated from the data. With very large samples, tiny unimportant deviations often become statistically significant, so plots and the downstream modeling purpose still matter.`
},
{
 title:`Name Formal Normality Diagnostics`,time:`29:00`,type:`Statistics`,
 prompt:`Have you heard of other statistical methods for testing normality?`,
 your:`You said you had not learned specific normality tests. The interviewer mentioned the Jarque–Bera test, moment-based methods, and a probability plot—apparently a P–P plot in the recording.`,
 correct:String.raw`Useful diagnostics include:

- Q–Q plot: compares sample quantiles with theoretical normal quantiles and is often the most informative visual diagnostic.
- P–P plot: compares empirical and theoretical cumulative probabilities, emphasizing the center more than the tails.
- Jarque–Bera: uses sample skewness \(S\) and kurtosis \(K\):

\[
JB=\frac{n}{6}\left(S^2+\frac{(K-3)^2}{4}\right),
\]

which is asymptotically \(\chi^2_2\) under the normal null.
- Shapiro–Wilk and Anderson–Darling: omnibus tests, with Anderson–Darling placing more weight on tails.

The best interview answer mentions both graphical and formal methods and notes that independence is separate from marginal normality.`
},
{
 title:`One-Third-of-the-Average Beauty Contest`,time:`29:46`,type:`Game Theory / Probability`,
 prompt:`Everyone chooses a number from 1 to 100. The winner is closest to one third of the group’s average. What number would you choose, and what assumptions are you making?`,
 your:`You recognized the Keynesian beauty-contest structure and described iterated reasoning: people may start near 33, then move near 10, and continue toward 1 or 0. You asked whether 0 was allowed and said fully rational players would choose 0 if it were allowed. You also speculated that someone choosing a large number could destabilize an all-zero outcome.`,
 correct:String.raw`Because the allowed set is \(\{1,2,\ldots,100\}\), zero is not available. Under common knowledge of rationality, iterated elimination drives the unique equilibrium to

\[
\boxed{1}.
\]

The average cannot exceed 100, so the target cannot exceed \(100/3\). Choices above 34 are never optimal. Repeating the argument shrinks the rational range to roughly \(100/3^k\), eventually leaving only 1.

In a one-shot game with ordinary human participants, 1 may not maximize the chance of winning because people use limited levels of reasoning. A practical answer should state a behavioral assumption: if you expect random choices with mean near 50, choose about \(16.7\); if you expect one round of strategic adjustment, choose near \(5.6\); with increasingly sophisticated participants, move closer to 1. The interviewer's request for assumptions was central.`
},
{
 title:`Construct a Symmetric Matrix from an Arbitrary Matrix`,time:`32:20`,type:`Linear Algebra`,
 prompt:`Given a random square matrix A, how can you construct a symmetric matrix from it?`,
 your:`You first suggested multiplying A by its transpose, then changed to adding A and its transpose. You explained that the transpose reflects entries across the diagonal. Both constructions work for a square matrix.`,
 correct:String.raw`Two standard answers are

\[
S=\frac{A+A^{\top}}{2}
\]

and

\[
G=AA^{\top}.
\]

The first is the symmetric part of a square matrix because

\[
S^{\top}=\frac{A^{\top}+A}{2}=S.
\]

The second is symmetric even when \(A\) is rectangular, since \((AA^{\top})^{\top}=AA^{\top}\), and it is also positive semidefinite because \(x^{\top}AA^{\top}x=\|A^{\top}x\|^2\ge0\). If the request is merely to symmetrize a square matrix while retaining its symmetric component, \((A+A^{\top})/2\) is the most direct answer.`
},
{
 title:`Do A and Its Transpose Have the Same Eigenvalues?`,time:`33:30`,type:`Linear Algebra`,
 prompt:`Do a square matrix A and its transpose have the same eigenvalues?`,
 your:`You answered yes.`,
 correct:String.raw`Yes, including algebraic multiplicities, because they have the same characteristic polynomial:

\[
\det(\lambda I-A^{\top})
=\det\!\left((\lambda I-A)^{\top}\right)
=\det(\lambda I-A).
\]

Therefore the roots of the two characteristic polynomials—the eigenvalues—are identical.`
},
{
 title:`Do A and Its Transpose Have the Same Eigenvectors?`,time:`33:48`,type:`Linear Algebra`,
 prompt:`Do A and its transpose have the same eigenvectors?`,
 your:`You started by trying to transpose the eigenvalue equation, then caught that the dimensions and relation did not work and concluded that the eigenvectors can differ. That conclusion is correct.`,
 correct:String.raw`Not in general. If

\[
Av=\lambda v,
\]

then \(v\) is a right eigenvector of \(A\). Transposing gives

\[
v^{\top}A^{\top}=\lambda v^{\top},
\]

which makes \(v^{\top}\) a left eigenvector of \(A^{\top}\), not necessarily a right eigenvector. Right eigenvectors of \(A^{\top}\) correspond to left eigenvectors of \(A\). If \(A\) is real symmetric, then \(A=A^{\top}\), so they do share an orthonormal eigenbasis.`
},
{
 title:`Trace, Determinant, and Eigenvalues`,time:`34:38`,type:`Linear Algebra`,
 prompt:`What is the relationship between a matrix’s trace and determinant and its eigenvalues?`,
 your:`You initially said the trace was the product of the eigenvalues. When challenged, you remained uncertain. The interviewer corrected the distinction: trace is the sum and determinant is the product.`,
 correct:String.raw`For an \(n\times n\) matrix with eigenvalues \(\lambda_1,\ldots,\lambda_n\), counted with algebraic multiplicity,

\[
\boxed{\operatorname{tr}(A)=\sum_{i=1}^{n}\lambda_i},
\qquad
\boxed{\det(A)=\prod_{i=1}^{n}\lambda_i}.
\]

These identities hold even when the matrix is not diagonalizable and when some eigenvalues are complex. The trace is also the sum of the diagonal entries; the determinant is zero exactly when at least one eigenvalue is zero.`
},
{
 title:`Special Properties of Real Symmetric Matrices`,time:`36:00`,type:`Linear Algebra`,
 prompt:`What special properties does a real symmetric matrix have?`,
 your:`You said that a symmetric matrix satisfies A = A transpose, is diagonalizable, and can be represented as Q times a diagonal eigenvalue matrix times Q transpose. This was essentially correct.`,
 correct:String.raw`The spectral theorem says that every real symmetric matrix \(A\) has real eigenvalues and an orthonormal basis of eigenvectors. Therefore there is an orthogonal matrix \(Q\), with \(Q^{\top}Q=I\), and a real diagonal matrix \(\Lambda\) such that

\[
A=Q\Lambda Q^{\top}.
\]

Eigenvectors belonging to distinct eigenvalues are orthogonal. This decomposition also makes quadratic forms, definiteness, matrix powers, and optimization especially transparent. Your use of a middle “sigma” conveyed the right structure, but \(\Lambda\) is the conventional symbol for the eigenvalue matrix; \(\Sigma\) is more commonly used for singular values or covariance matrices.`
},
{
 title:`Definition of a Positive-Definite Matrix`,time:`37:12`,type:`Linear Algebra`,
 prompt:`How do you define whether a matrix is positive definite?`,
 your:`You said that multiplying the matrix by any vector should give something positive. You then mentioned a transpose product greater than zero. This was close to the quadratic-form definition but needed precise notation.`,
 correct:String.raw`A real symmetric matrix \(A\) is positive definite if

\[
\boxed{x^{\top}Ax>0\quad\text{for every nonzero }x\in\mathbb{R}^n.}
\]

It is positive semidefinite if \(x^{\top}Ax\ge0\) for every \(x\). The vector \(Ax\) itself is not described as “positive”; the scalar quadratic form \(x^{\top}Ax\) is. For a nonsymmetric real matrix, the quadratic form depends only on the symmetric part \((A+A^{\top})/2\), so definiteness is normally discussed for symmetric or Hermitian matrices.`
},
{
 title:`How Can You Test Positive Definiteness?`,time:`37:40`,type:`Linear Algebra / Numerical Methods`,
 prompt:`In practice, how can you test whether a real symmetric matrix is positive definite?`,
 your:`You repeated the quadratic-form condition. When the interviewer prompted you toward an eigenvalue-based method, you agreed but did not give a full test.`,
 correct:String.raw`For a real symmetric matrix, equivalent tests include:

1. Every eigenvalue is strictly positive.
2. Every leading principal minor is positive (Sylvester’s criterion).
3. A Cholesky factorization \(A=LL^{\top}\) exists with strictly positive diagonal entries in \(L\).

In numerical work, attempting a Cholesky factorization is often preferable to computing all eigenvalues. For positive semidefiniteness, eigenvalues should be nonnegative up to a tolerance; ordinary Cholesky may fail when zero eigenvalues are present.`
},
{
 title:`Why Is Positive Definiteness Important in Quant Finance?`,time:`38:07`,type:`Quantitative Finance / Optimization`,
 prompt:`Why are positive-definite or positive-semidefinite matrices important in quantitative finance?`,
 your:`You connected positive semidefiniteness to portfolio-management risk constraints and convex optimization. You said the relevant matrix must be PSD so the optimization problem is convex. This was a good answer.`,
 correct:String.raw`The most common example is a covariance matrix \(\Sigma\). For portfolio weights \(w\), variance is

\[
\operatorname{Var}(w^{\top}R)=w^{\top}\Sigma w\ge0,
\]

so a valid covariance matrix must be positive semidefinite. In mean–variance optimization, PSD \(\Sigma\) makes the quadratic risk objective convex; if \(\Sigma\) is positive definite on the feasible directions, the objective is strictly convex and the optimum is unique.

Positive definiteness also appears in Hessians for optimization, kernel and correlation matrices, Gaussian likelihoods, and Cholesky-based simulation. Empirical covariance matrices can become nearly singular or slightly indefinite from missing data, asynchronous estimates, or numerical error, so shrinkage or nearest-PSD corrections are common.`
},
{
 title:`Do You Have Any Questions for Me?`,time:`39:03`,type:`Questions for Interviewer`,
 prompt:`Do you have any questions for me?`,
 your:`You said the interviewer was a role model because they had interned at Neuberger Berman and received a return offer. You asked which quality was most important in earning that offer. The interviewer said luck and headcount can matter, while controllable factors include doing strong work, working hard, being pleasant to work with, and staying engaged rather than being distracted.`,
 correct:`There is no “correct” answer, and your question was personalized to the interviewer. A more polished form would be: “You successfully converted your internship into a full-time role. Looking back, which behaviors or contributions most helped you earn trust from the team, and what would you advise a new intern to prioritize?”\n\nThis phrasing invites concrete examples and focuses on controllable behavior. A second strong question would connect directly to the role: “What distinguishes interns who produce technically correct work from those whose research is actually adopted by the investment team?”`
}
];

window.NEUBERGER_VI_2_DATA=neubergerVi2Rows.map((r,index)=>({
 id:112001+index,
 category:'NEUBERGER VIDEO INTERVIEW 2',
 originalCategory:'My Interview',
 company:'Neuberger Berman',
 role:'Video Interview 2 · '+r.type,
 question:r.title,
 displayTitle:r.title,
 questionBody:r.prompt,
 solution:'### Your answer\n\n'+r.your+'\n\n### Correct or stronger answer\n\n'+r.correct,
 kind:'Audio reconstruction · your answer and reference answer',
 sources:[{sheet:'Neuberger Video Interview 2 audio · '+r.time,row:index+1}],
 originalAnswer:r.your,
 note:'Reconstructed from the supplied interview recording. Minor filler and transcription artifacts were removed while preserving the substance.',
 references:[],
 privateInterview:true
}));
