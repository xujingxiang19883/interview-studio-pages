'use strict';
const Q=(n,question,solution,diagram=null)=>({id:50000+n,category:'SUSQUEHANNA',originalCategory:'My Interview',company:'SUSQUEHANNA',role:'Problem Solving Assessment',question,questionMath:question,solution,kind:'Detailed worked solution',sources:[{sheet:'SUSQUEHANNA assessment',row:n}],originalAnswer:'',note:null,references:[],diagram,privateInterview:true});
window.MY_INTERVIEW_DATA=[
Q(1,'You walk into a barn and see a collection of ants, cows, and chickens. You notice that there are 540 legs in total. The number of ants is twice the number of chickens and the number of cows is twice the number of ants. Compute the number of cows.',String.raw`### Answer: 72 cows
Let the number of chickens be \(x\). Then there are \(2x\) ants and \(4x\) cows. A chicken has 2 legs, an ant 6, and a cow 4, so
\[2x+6(2x)+4(4x)=540.\]
The left side is \(30x\), hence \(x=18\). The cow count is \(4x=72\).

Check: 18 chickens contribute 36 legs; 36 ants contribute 216; 72 cows contribute 288. The sum is \(36+216+288=540\). Thus the final answer is \(\boxed{72}\), not 60.`),
Q(2,'On an island, knights always tell the truth and knaves always lie. Perlica says, “We are different types of people.” Chen says, “Perlica always tells the truth.” What type is each person?',String.raw`### Answer: both are knaves
Chen’s statement says that Perlica is a knight. If Chen were a knight, that statement would be true, so Perlica would also be a knight. But Perlica’s claim that they are different types would then be false—impossible for a knight. Therefore Chen is a knave.

Because Chen lies, Perlica is not a knight: Perlica is also a knave. Her statement “we are different types” is false, exactly as required. The consistent assignment is \(\boxed{(\text{Perlica},\text{Chen})=(\text{knave},\text{knave})}\).

A truth-table shortcut: Chen’s claim is logically “P is a knight”; Perlica’s claim is “P and C differ.” Requiring each claim to match its speaker’s truth status leaves only the knave–knave row.`),
Q(3,'A university bookstore reports annual profits (dollars) for Tech, Books, Café, and Clothing. 2022: 8,039; 6,136; 5,275; 8,698. 2023: 6,576; 6,475; 6,648; 7,023. 2024: 5,637; 9,497; 7,654; 7,918. 2025: 5,393; 8,373; 9,352; 8,402. A sector-year is chosen uniformly from the 16 entries and its profit is over $8,000. What is the probability it was from 2024? Give a simplest-form fraction.',String.raw`### Answer: \(\boxed{1/6}\)
The condition “profit over $8,000” restricts the sample space to the individual sector-year entries above that threshold. There are 2 in 2022 (Tech and Clothing), 0 in 2023, 1 in 2024 (Books), and 3 in 2025 (Books, Café, Clothing): 6 qualifying entries total.

Exactly one of these six is from 2024. As each of the original 16 entries was equally likely, each qualifying entry is equally likely after conditioning. Therefore
\[P(2024\mid\text{profit}>8000)=\frac{1}{6}.\]
Do not use the row “Total” as another sector. It summarizes four profits and is not part of the random sector-year draw.`),
Q(4,'A balanced hanging mobile weighs 128 pounds in total. Every horizontal bar is supported at its midpoint. Find the weight of one green triangle. The attached mobile has several colored shapes; its lowest left sub-bar holds two purple shapes, and the next sub-bar balances that pair against one green triangle.',String.raw`### Answer: \(\boxed{8}\) pounds
At every midpoint-supported horizontal bar, its two hanging sides have the same weight. Start at the top: the entire mobile is 128 pounds, so each side of the top bar weighs 64 pounds.

Focus on the left side. Its first lower bar divides those 64 pounds into 32 and 32. The right branch of that bar divides its 32 pounds into 16 and 16. The left branch of that 16-pound bar divides again into 8 and 8. One of these last 8-pound branches is a single green triangle, so the green triangle weighs 8 pounds.

In notation, with \(T\) the triangle’s weight, the repeated equal-side splits yield
\[T=\frac{128}{2^4}=8.\]
This uses balance and the nested position of the green triangle; the colors of the other shapes are not needed. Check the support geometry: each bar must be centered and the rods are assumed weightless.`,'mobile'),
Q(5,'Factory A makes 40% red and 60% black widgets. Factory B makes 80% red and 20% black widgets. Choose one factory uniformly at random, then draw two widgets uniformly; both are black. What is the probability the factory was B? Give a simplest-form fraction.',String.raw`### Answer: \(\boxed{1/10}\)
Let \(BB\) mean both widgets are black. The prior chance of either factory is \(1/2\). Under independent draws with the stated color probabilities,
\[P(BB\mid A)=0.6^2=0.36,\qquad P(BB\mid B)=0.2^2=0.04.\]
Bayes’ rule gives
\[P(B\mid BB)=\frac{P(BB\mid B)P(B)}{P(BB\mid A)P(A)+P(BB\mid B)P(B)}=\frac{0.04}{0.36+0.04}=\frac{1}{10}.\]
The equal factory priors cancel. Both black observations favor A because black widgets are more common there.

The question gives percentages but no inventory sizes or replacement rule. The exact value \(1/10\) assumes independent draws (sampling with replacement or from a sufficiently large factory output). Without that assumption, exact finite-inventory probabilities cannot be determined.`),
Q(6,'Roll two fair six-sided dice. If the rolls differ, receive the higher roll in dollars. If they match, lose the sum of the two rolls. Compute the expected payoff, rounded to the nearest cent.',String.raw`### Answer: \(\boxed{\$2.72}\)
There are 36 equally likely ordered outcomes. For different rolls, fix the higher value \(j\), where \(j=2,\ldots,6\). There are \(2(j-1)\) ordered outcomes with maximum \(j\), each paying \(j\). Their total payoff sum is
\[\sum_{j=2}^{6}2j(j-1)=2(2+6+12+20+30)=140.\]
For ties \((i,i)\), the payoff is \(-2i\), so their payoff sum is
\[\sum_{i=1}^{6}(-2i)=-2(21)=-42.\]
Therefore the overall payoff sum is \(140-42=98\), and the expectation is
\[E[\text{payoff}]=\frac{98}{36}=\frac{49}{18}=2.7222\ldots.\]
Round to the nearest cent: \(\$2.72\). A tie is a loss of both dice’s sum, not merely a zero payoff.`),
Q(7,'In a bakery, each customer buys one item independently: a croissant with probability 60% or a muffin with probability 40%. Five customers are in line and only two muffins remain. What is the probability that the muffins suffice? Round to the nearest whole percent.',String.raw`### Answer: \(\boxed{68\%}\)
The two muffins suffice exactly when at most two of the five customers want muffins. If \(M\) is the number of muffin requests, then \(M\sim\operatorname{Binomial}(5,0.4)\). Hence
\[P(M\le2)=\sum_{k=0}^{2}{5\choose k}(0.4)^k(0.6)^{5-k}.\]
Compute the three cases:
\[P(M=0)=0.6^5=0.07776,\]
\[P(M=1)=5(0.4)(0.6)^4=0.25920,\]
\[P(M=2)=10(0.4)^2(0.6)^3=0.34560.\]
The sum is \(0.68256=68.256\%\), which rounds to 68%.

An alternative is to subtract the three shortage cases \(M=3,4,5\) from one. The order of customers does not affect whether stock suffices; the binomial coefficients count the possible orders.`),
Q(8,'Astra, Breach, and Cypher have different numbers of cats. Cypher tells Breach, “You have an even number of cats.” Breach tells Cypher, “You have exactly 40% more cats than me.” Breach tells Astra, “Your number of cats is the average of mine and Cypher’s.” Astra tells Breach, “You have 3 or fewer cats than me.” A speaker tells the truth to someone with more cats and lies to someone with fewer cats. How many cats does Astra have?',String.raw`### Answer: the visible conditions do not uniquely determine Astra’s count
Write \(A,B,C\) for Astra, Breach, and Cypher. Each statement must be true exactly when the listener owns more cats than the speaker. This translates to four constraints:
\[(B\text{ even})\iff(B>C),\]
\[(C=1.4B)\iff(C>B),\]
\[(2A=B+C)\iff(A>B),\]
\[(B\ge A-3)\iff(B>A).\]
The “3 or fewer” phrase is interpreted literally as \(A-B\le3\), equivalently \(B\ge A-3\).

These constraints admit different positive integer solutions. For example \((A,B,C)=(1,4,2)\): Cypher truthfully calls Breach’s count even; Breach lies in both directions because 2 and 1 are below 4; Astra lies because 4 is not within 3 fewer than 1. Another is \((A,B,C)=(2,4,1)\), with the same truth pattern. Thus Astra can have 1 or 2 cats, and many other counts also work.

A “6” appears typed in one screenshot, but that is an attempted entry, not a verified correct answer. A missing constraint—such as a total or upper bound—would be needed for a unique numeric answer. This is a useful interview response: state the ambiguity, exhibit two valid assignments, then ask for the missing assumption.`),
Q(9,'Two friends canoe upstream for 3 hours, discover their campsite is downstream, then turn around and paddle downstream for 4 hours. The next day they leave the campsite, canoe 48 miles upstream, and arrive at their original starting point at 8:30. The river flows at 3 mph; their paddling rate is constant. What time did they leave for the return trip? Use h:mm.',String.raw`### Answer: \(\boxed{6{:}30}\)
Let \(v\) be their speed in still water, in miles per hour. Their ground speed upstream is \(v-3\), and downstream it is \(v+3\).

The first-day net displacement from the original start is \(3(v-3)-4(v+3)=-v-21\) miles, taking upstream as positive. The campsite is 48 miles downstream of the original starting point because the next day’s return is 48 miles upstream. Set the net displacement to \(-48\):
\[3(v-3)-4(v+3)=-48\quad\Longrightarrow\quad -v-21=-48\quad\Longrightarrow\quad v=27.\]
Their next-day upstream speed is \(27-3=24\) mph. Traveling 48 miles takes \(48/24=2\) hours, so leaving two hours before 8:30 gives 6:30.

Check the first day: upstream 3 hours at 24 mph gives 72 miles; downstream 4 hours at 30 mph gives 120 miles; the final position is 48 miles below the start.`),
Q(10,'I want to bake 5 cookies for my friend, but I can only make 3 flavors. How many combinations of cookies can I bake?',String.raw`### Answer: \(\boxed{21}\) combinations
If only the counts of the three flavors matter, let \(x_1,x_2,x_3\) be nonnegative integers summing to 5:
\[x_1+x_2+x_3=5.\]
This is a combinations-with-repetition problem. Using stars and bars, arrange five cookies (stars) and two dividers (bars), giving
\[{5+3-1\choose3-1}={7\choose2}=21.\]
For a small sanity check, groups include (5,0,0), (4,1,0), and (3,1,1), with all distinct flavor assignments counted.

If the baking order or physical positions of the five cookies mattered, there would instead be \(3^5=243\) sequences. The word “combinations” indicates that order is ignored.`),
Q(11,'Three rabbits race. The least athletic rabbit wins with probability 1/15. You choose one rabbit uniformly at random to cheer for, but it does not win. What is the probability you chose the least athletic rabbit? Give a simplest-form fraction.',String.raw`### Answer: \(\boxed{7/15}\)
Let \(L\) denote choosing the least athletic rabbit, and \(N\) the chosen rabbit not winning. Because the choice is uniform, \(P(L)=1/3\). Conditional on choosing that rabbit, it loses with probability \(14/15\), so
\[P(L\cap N)=\frac13\cdot\frac{14}{15}=\frac{14}{45}.\]
The probability that a uniformly chosen rabbit wins is \(1/3\), regardless of the three rabbits’ individual win rates: exactly one rabbit wins each race, and each winner is selected with probability \(1/3\). Thus \(P(N)=2/3\).

Divide the joint probability by the evidence probability:
\[P(L\mid N)=\frac{14/45}{2/3}=\frac{7}{15}.\]
No information about the other two rabbits’ separate win probabilities is needed.`),
Q(12,'A spinner has three regions with landing probabilities 1/8, 1/4, and 5/8. What is the expected number of spins needed to land in two distinct regions? Give a simplest-form fraction.',String.raw`### Answer: \(\boxed{22/7}\) spins
The first spin necessarily lands in one region. If its probability is \(p_i\), each subsequent spin has probability \(1-p_i\) of landing somewhere different. The number of additional spins to see a new region is geometric with mean \(1/(1-p_i)\).

Condition on the first region:
\[E[T]=1+\sum_{i=1}^{3}p_i\frac{1}{1-p_i}.\]
Substitute \(p_1=1/8\), \(p_2=1/4\), and \(p_3=5/8\):
\[E[T]=1+\frac{1/8}{7/8}+\frac{1/4}{3/4}+\frac{5/8}{3/8}=1+\frac17+\frac13+\frac53=\frac{22}{7}.\]
The most common region takes longer to escape once it appears first; averaging its waiting time without weighting by the chance of appearing first would be incorrect.`),
Q(13,'A purple flower begins blooming at a uniformly random time in the next 60 days and blooms for 20 days. Independently, a red flower begins blooming at a uniformly random time in the next 60 days and blooms for 40 days. What is the probability their bloom intervals overlap at some point? Give a simplest-form fraction.',String.raw`### Answer: \(\boxed{13/18}\)
Let \(P,R\) be the purple and red start times. They are independent uniform points in \([0,60]\), so \((P,R)\) is uniform over a 60-by-60 square of area 3600.

The bloom intervals are \([P,P+20]\) and \([R,R+40]\). They fail to overlap in exactly two cases: purple starts after red has ended, \(P\ge R+40\), or red starts after purple has ended, \(R\ge P+20\).

In the \((P,R)\) square, the first non-overlap region is a right triangle with legs 20, area \(20^2/2=200\). The second is a right triangle with legs 40, area \(40^2/2=800\). Non-overlap area is 1000, so
\[P(\text{overlap})=1-\frac{1000}{3600}=\frac{2600}{3600}=\frac{13}{18}.\]
Whether touching at exactly one instant counts as “overlap” has probability zero under continuous start times, so it does not change the result. Blooms may continue after day 60; the wording restricts start times, not end times.`),
Q(14,'Fill a 4×4 grid with building heights 1, 2, 3, 4, once each in every row and column. Taller buildings block shorter ones behind them. Gray cells contain buildings that are invisible and do not count toward sight-line totals. The top view of column 4 sees 3, the right view of row 2 sees 3, and the left view of row 3 sees 3. Find the three-digit number ACB, where A is row 1 column 1, B row 1 column 3, and C row 4 column 3.',String.raw`### Answer: \(\boxed{312}\)
Use the row and column uniqueness rule to restrict each row to a permutation of \(1,2,3,4\). The gray cells are at row 2 column 2 and row 3 column 4. Interpret “invisible and not counted” literally: a gray building can still obscure a shorter building behind it, but it is not added to the visible count.

The completed grid is
\[\begin{matrix}3&4&2&1\\4&1^{\ast}&3&2\\1&2&4&3^{\ast}\\2&3&1&4\end{matrix}\]
where \(\ast\) marks the two shaded cells. Each row and column contains 1 through 4 exactly once.

Check top of column 4: heights 1,2,3*,4 establish successive new maxima. The shaded 3 is not counted, leaving 1,2,4: three visible. From the right of row 2, the encounter order is 2,3,1*,4: 2,3,4 count, giving three. From the left of row 3, encounter 1,2,4,3*: 1,2,4 count, giving three.

The labeled heights are \(A=3\), \(C=1\), \(B=2\), so concatenating in ACB order yields 312. A programmatic enumeration of all 4×4 Latin squares satisfying these three sight lines gives this one grid under the stated shaded-cell interpretation.`,'skyline'),
Q(15,'Choose 6 distinct numbers uniformly from the first 35 positive integers. What is the expected number of consecutive pairs among the chosen numbers? Give a simplest-form fraction.',String.raw`### Answer: \(\boxed{6/7}\)
There are 34 possible consecutive pairs, \((1,2),(2,3),\ldots,(34,35)\). Define \(I_i=1\) if both numbers in pair \((i,i+1)\) are chosen, and zero otherwise. The total number of consecutive pairs is \(X=\sum_{i=1}^{34}I_i\).

For a fixed pair, the probability both members are in a uniform six-element subset is
\[P(I_i=1)=\frac{6}{35}\cdot\frac{5}{34}=\frac{3}{119}.\]
Linearity of expectation gives
\[E[X]=\sum_{i=1}^{34}E[I_i]=34\cdot\frac{6}{35}\cdot\frac{5}{34}=\frac{30}{35}=\frac67.\]
The indicators overlap—e.g. choosing 10,11,12 creates two consecutive pairs—but independence is not required for the expectation. The screenshot’s example lists five numbers while the prompt says choose six; the counting rule still means adjacent pairs within the selected set.`),
Q(16,'Begin with 2 tokens and try to reach 5 before reaching 0. Each turn, use a bold bet: stake as many tokens as possible, but no more than needed to reach 5 on a win. Each bet wins with probability 1/3 and loses otherwise. What is the chance of reaching 5 before 0? Give a simplest-form fraction.',String.raw`### Answer: \(\boxed{15/77}\)
With fortune \(x\) and goal 5, the bold stake is \(s(x)=\min(x,5-x)\). The relevant transitions are: \(1\to2\) or \(0\), \(2\to4\) or \(0\), \(3\to5\) or \(1\), and \(4\to5\) or \(3\).

Let \(h_x\) be the probability of reaching 5 before 0 starting at \(x\), with \(h_0=0\) and \(h_5=1\). First-step conditioning gives
\[h_1=\tfrac13h_2,\qquad h_2=\tfrac13h_4,\qquad h_3=\tfrac13+\tfrac23h_1,\qquad h_4=\tfrac13+\tfrac23h_3.\]
Substitute from the last equation back into \(h_2\):
\[h_2=\frac13\left(\frac13+\frac23\left(\frac13+\frac23\cdot\frac13h_2\right)\right)=\frac{5}{27}+\frac{4}{81}h_2.\]
Thus \((1-4/81)h_2=5/27\), so
\[h_2=\frac{5}{27}\cdot\frac{81}{77}=\frac{15}{77}.\]
The recurrence accounts for the loop \(2\to4\to3\to1\to2\); stopping after only a few turns would undercount paths that succeed later.`),
Q(17,'A frog travels from A(0,0) to B(5,7). Each step is one unit up or one unit right. It refuses to take three consecutive steps in the same direction. How many valid paths are there?',String.raw`### Answer: \(\boxed{114}\) paths
Every path has exactly five right steps \(R\) and seven up steps \(U\), for 12 steps total. Without the consecutive-step restriction there would be \({12\choose5}=792\) paths, but many contain \(RRR\) or \(UUU\).

Use dynamic programming with state \(F(r,u,d,k)\): the number of valid completions when \(r\) right and \(u\) up moves remain, the previous direction is \(d\), and its current run length is \(k\in\{0,1,2\}\). The base case is \(F(0,0,d,k)=1\). For each legal next direction, decrement its remaining count; increase \(k\) if it matches \(d\), otherwise set the new run length to 1. Reject a move that would make a run of 3.

A direct implementation is:

${"```"}python
from functools import lru_cache

@lru_cache(None)
def paths(right, up, last, run):
    if right == up == 0:
        return 1
    total = 0
    if right and (last != 'R' or run < 2):
        total += paths(right - 1, up, 'R', run + 1 if last == 'R' else 1)
    if up and (last != 'U' or run < 2):
        total += paths(right, up - 1, 'U', run + 1 if last == 'U' else 1)
    return total

print(paths(5, 7, '', 0))  # 114
${"```"}

The output 114 can also be checked by enumerating all 792 five-R/seven-U strings and excluding those with a three-step run.`)
];
