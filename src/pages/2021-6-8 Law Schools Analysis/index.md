---
path: "/law-schools"
year: "2021"
month: "June"
day: "8"
category: "Data Science"
title: "Law School Student Diversity in 2020"
subtitle: "Elite schools are less feminine, less white, and more Asian"
date: "2021-06-08"
---

Law schools are deeply influential: they educate the individuals running our legal and political systems, and as an indirect effect, affect everything from business policy (through antitrust law) to racial disparities (through criminalization). It makes sense, then, that greater diversity within law schools could profoundly reshape society: mitigated racial disparities, a less masculine approach to punishment, or something else (I'm only one person, which is very undiverse, so forgive me for my lack of ideas). And at the very least, diverse law schools offer diverse perspectives and a more welcoming community to those who are traditionally underrepresented.

This post explores the issue of diversity at American law schools. Using 2020 data from the American Bar Association, I examined racial and gender diversity at ABA-accredited law schools, with an additional focus on how school ranking relates to student diversity. Highly ranked and elite law schools have an outsized influence on society: Harvard and Yale Law account for eight of our nine Supreme Court justices (the exception being Amy Coney Barret), and two of our last four presidents, so diversity at these schools may be especially important.

This post's graphs are built with plotly and are thus interactive. Hover your cursor to see more details, and click on the legends to hide or show certain categories on each graph.

<h4>Student Diversity</h4>
<p class = "graph">Consider the aggregate racial composition of students at law schools relative to that of the U.S. population:<a class = "footerLink" href = "#footer1"><sup>1</sup></a></p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/54/?share_key=7Hsw4kmSsheTbws3A2zoyd" target="_blank" title="race_v_census" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/54.png?share_key=7Hsw4kmSsheTbws3A2zoyd" alt="race_v_census" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:54" sharekey-plotly="7Hsw4kmSsheTbws3A2zoyd" src="https://plotly.com/embed.js" async></script>
</div> -->

<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/54.embed"></iframe>
<p> Whites and Asians are slightly overrepresented at law schools, whereas the proportion of Blacks, Hispanics, and Native Americans at law schools is about one-third lower. On aggregate, racial diversity at American law schools isn't surprising: underrepresented minorities are, well, underrepresented. But law schools themselves can differ greatly, especially when it comes to diversity. I'm interested in whether diversity looks different at our elite and highly-ranked law schools.

<h5>Racial Composition at Elite, Strong, and Common Law Schools</h5>

<p class = "graph"> To begin, I categorized law schools based on <a href = "http://schools.lawschoolnumbers.com/rankings/us-news-report-law-school-rankings">their US News 2021 rankings into three categories: Elite, which represent schools ranked 1 - 15; Strong, which represents schools ranked 16 - 50; and Common, which represents schools ranked 51 - 194. <a class = "footerLink" href = "#footer2"><sup>2</sup></a>:</p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/1/?share_key=kn7dXmsWELQX7jrgk3wuqs" target="_blank" title="race_by_cat" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/1.png?share_key=kn7dXmsWELQX7jrgk3wuqs" alt="race_by_cat" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:1" sharekey-plotly="kn7dXmsWELQX7jrgk3wuqs" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/1.embed"></iframe>
<p>Elite schools seem to be slightly less white than other schools, but this doesn't correspond with higher URM representation. In fact, Hispanic and Black representation seems to be much lower in Strong and Elite schools compared to Common schools (Native Americans are also less well-represented, but the numbers may be too small to discern a real trend). Instead, the difference is made up by much stronger representation of nonresident and Asian students, whose representations jump from 2% and 5% in Common schools to 6.6% and 11.0% in Elite schools, respectively. That's more than a doubling in the proportion of Asian and nonresident students! </p>
<p>
Still, the size of each group, particularly "Common" schools, can mask the true nature of diversity relative to school rank. Do Elite schools broadly have higher shares of Asian students, or is it just a few outliers? Why is Hispanic representation at Common schools so high relative to other categories? 
</p>
<h5>Asian Representation and School Ranking</h5>
<p>The most robust trend seems to be higher representation of Asians at elite schools: </p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/4/?share_key=iCIPatCP1wmxSZRjEZ95Du" target="_blank" title="asian_reg" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/4.png?share_key=iCIPatCP1wmxSZRjEZ95Du" alt="asian_reg" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:4" sharekey-plotly="iCIPatCP1wmxSZRjEZ95Du" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/4.embed"></iframe>
<p>Note that Asian representation starts to increase near the ranking of 70, and then increases more dramatically at the elite schools. Note additionally that, amongst the top 50 law schools, the five schools with the greatest Asian representation are all in California. This could be due to California's large Asian population and its <a href = "https://www.nber.org/papers/w20361?utm_campaign=ntw&utm_medium=email&utm_source=ntw">ban on affirmative action policies</a> at public colleges.</p>
<p>The clear increase in Asian representation at elite schools suggests that it is a very real and broad phenomenon not driven by randomness or outliers. This poses several interesting questions: what are the drivers of this phenomenon? Are they socioeconomic? Further research may provide intriguing insights into the Asian American community.</p>
<h5>Hispanic Representation and School Ranking</h5>
<p>In Figure 2, we saw that Hispanic representation drops significantly from Common to Strong schools but stays the same between Strong and Elite schools. Here, we investigate Hispanic representation at each school rank, fitting a cubic curve to describe the overall trend: </p> 
<!-- <div>
    <a href="https://plotly.com/~jzlee/18/?share_key=focItQxCKPQP9leU1fFdNX" target="_blank" title="hispanic_reg" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/18.png?share_key=focItQxCKPQP9leU1fFdNX" alt="hispanic_reg" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:18" sharekey-plotly="focItQxCKPQP9leU1fFdNX" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/18.embed"></iframe>
<p>The graph above suggests that higher average Hispanic representation at Common schools is not a broad trend but rather a result of several outliers dragging the average upwards. In fact, Hispanic representation at most schools in the Elite, Strong, and Common categories seems to range from 0 to 20% and average around 10%, with several outlier schools ranked above 150. These outlier schools are generally in areas with strong Hispanic populations: all three universities with the greatest representation ar in Puerto Rico, and the other high-representation schools are primarily based in Florida, Texas, and California. Thus, while most American schools&mdash;regardless of ranking&mdash;have relatively similar Hispanic representation, there are a few schools with especially strong representation, with these schools being primarily in the later ranks and from areas with strong Hispanic populations. </p>
<p>Although Hispanics are underrepresented at most schools, there is still a large minority of schools with strong Hispanic representation, even in the Elite category. For instance, while schools such as Columbia and the University of Virginia skew the Elite category's average downwards, Stanford and the University of Chicago still have Hispanic representation that is not too different from that of the U.S. population. </p>
<h5>Black Representation and School Ranking</h5>
<p class = "graph">Unlike Hispanic and Asian representation, it is difficult to discern a strong relationship between Black representation and ranking from Figure 2. It seems that Black representation is highest at Common schools and lowest at Strong schools, with Elite schools being somewhere in the middle. But upon closer examination, the trend seems quite near that of Hispanic representation:</p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/16/?share_key=2WSbNDCTBO7FxQo7zXmCzC" target="_blank" title="black_reg" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/16.png?share_key=2WSbNDCTBO7FxQo7zXmCzC" alt="black_reg" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:16" sharekey-plotly="2WSbNDCTBO7FxQo7zXmCzC" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/16.embed"></iframe>

<p>The cubic curve suggests that Black representation stays about the same from ranks 1 to 125, before increasing significantly at the later-ranked schools. Much like the curve for Hispanic representation, this increase is skewed upwards by outliers&mdash;which this time are historically black universities and several schools in southern states&mdash;though it seems that later-ranked schools also generally have higher Black representation as well. </p> 
<p class = "graph"> So what to make of the Strong category schools that have significantly lower representation than their Common and Elite counterparts? Such a dip is hard to ignore, but the cubic trendline seems to lack the variance to capture it. We thus use a quintic curve: </p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/71/?share_key=OPY31JFRYVQFWpkRjnyJif" target="_blank" title="black_reg_quintic" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/71.png?share_key=OPY31JFRYVQFWpkRjnyJif" alt="black_reg_quintic" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:71" sharekey-plotly="OPY31JFRYVQFWpkRjnyJif" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/71.embed"></iframe>
<p>Starting at the top-ranked schools, Black representation dips by about half, reaching a nadir near rank 25 before recovering again at around rank 60. This seems to be exactly the dip that we see in Figure 2, where Strong schools have significantly lower Black representation than Elite and Common schools. The question is: why is there a dip? This is a difficult question&mdash;one I'm not qualified to answer&mdash;but it seems important to investigate. </p>
<p>To caveat my observation, I can imagine some more statistically-inclined people arguing that fitting a quintic curve to ~200 law schools risks overfitting. Still, I believe the Strong category is a very real "category" of law school and not a statistical anomaly: these are the law schools that are very well-respected but not quite stamped in the history books as elite, towering influences in the world of politics and law. So while a quintic curve might overfit the data (such as the dip near the right-end of the curve), it is useful for revealing the nadir after the elite schools. </p>
<p>Finally, Black representation varies much less than Hispanic representation, especially at elite schools. Low variance isn't necessarily bad&mdash;there aren't as many schools far below the mean&mdash;but it reduces the number of Elite and Strong schools with Black representation that resemble that of the U.S. population. So, while there is a strong minority of top-50 law schools with Hispanic representation resembling that of the U.S. population, there are almost no top-50 law schools that can say the same of Black representation. Students looking into Elite and Strong schools will have a hard time finding a school with particularly strong Black representation. </p>
<h5>Native American Representation and Ranking</h5>
<p class = "graph">
Because Native American representation across all categories is quite low, it is difficult to identify trends. Here, I fitted a cubic curve to the scatterplot, though its main point is to show the lack of a conclusive trend:
</p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/74/?share_key=GsSuhvGYUuMky3xCxj9MrE" target="_blank" title="native_reg" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/74.png?share_key=GsSuhvGYUuMky3xCxj9MrE" alt="native_reg" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:74" sharekey-plotly="GsSuhvGYUuMky3xCxj9MrE" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/74.embed"></iframe>
<p>It seems that the majority of schools have around .5% Native American representation, while a strong minority of schools such as Stanford, Georgetown, and Penn State have exactly 0 representation. Nevertheless, there are several law schools with Native American representation similar to or above that of the U.S. population, including some in the "Strong" category. </p>
<p>Elite schools have lower average Native American representation, mostly due to a lack of outliers. In other words, while there are a few "Strong" and "Common" schools with significant Native American representation, no elite schools exceed 1% representation, and most lie below .5%. </p>
<h5>White Representation and Ranking</h5>
<p class = "graph">Finally, we have White representation, which is the complement of minority representation. In other words, the following graph can be interpreted as both White representation and [1 - Minority Percentage]: </p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/14/?share_key=HfXdzX5pHSEgbCeh9vMu5i" target="_blank" title="white_reg" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/14.png?share_key=HfXdzX5pHSEgbCeh9vMu5i" alt="white_reg" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:14" sharekey-plotly="HfXdzX5pHSEgbCeh9vMu5i" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/14.embed"></iframe>

<p>The cubic curve forms a downwards-facing U shape, suggesting that Elite schools are the least white, while Strong schools and those ranked around 70 are amongst the most. This offers a partial explanation for why Black representation dips amongst Strong schools&mdash;higher White representation may be trading off with Black representation&mdash;but it would be more useful to have an explanation for <i>why</i> White representation is so high at Strong schools.</p>
<p>There isn't much more to say here, since the differences in White representation is a function of the differences in minority percentages, which we have already discussed above.</p>
<h5>Gender Composition</h5>
<p class = "graph">The ABA report breaks down gender into three categories: Men, Women, and Others. Men represent around 45.7% of law students, Women around 54.1%, and Others around .2%. This means that women are overrepresented relative to the U.S. population, but this isn't entirely surprising given than women also account for <a href = "https://www.washingtonpost.com/local/education/the-degrees-of-separation-between-the-genders-in-college-keeps-growing/2019/10/25/8b2e5094-f2ab-11e9-89eb-ec56cd414732_story.html">56 percent</a> of U.S. college students (you could even argue that women are slightly underrepresented given their college numbers). First, though, we should briefly discuss those in the "Other" category.

The "Other" category is difficult to analyze because the percentage is so small: 124 out of the 197 schools report 0 students classified as Other. As such, the trendline suggests no statistically significant relationship between ranking and students classified as Other. Still, I have added the graph below: </p>

<!-- <div>
    <a href="https://plotly.com/~jzlee/93/?share_key=uIVPYoyPoLyzXVhKbMDUnC" target="_blank" title="other_gender_by_rank" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/93.png?share_key=uIVPYoyPoLyzXVhKbMDUnC" alt="other_gender_by_rank" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:93" sharekey-plotly="uIVPYoyPoLyzXVhKbMDUnC" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/93.embed"></iframe>

<p>Interestingly, only two of the fifteen Elite schools report no students of the "Other" category, indicating that elite schools are more likely to have some nonbinary representation than other law schools. Perhaps this is due to other diversity efforts, but it may also be a product of the economic and cultural backgrounds that are more common of students at elite law schools (it may also just be a coincidence). Still, the percentage of the Other category at elite universities is quite small, hence the lack of a statistically significant relationship between ranking and Other representation.</p>
<h5>Female Representation</h5>
<p> Next, we examine female representation at law schools, which as mentioned before is higher than male representation. Given this disparity, I could imagine titling this section "Male Representation," but female representation is almost the complement of male representation, meaning that this section is already investigating both. </p>
<p class = "graph">Since we don't need a graph showing broader representation of many categories (as we did with racial composition), we can start with the scatterplot: </p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/9/?share_key=tZjI0BBUrpYlsSbeQclRcE" target="_blank" title="gender_by_rank" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/9.png?share_key=tZjI0BBUrpYlsSbeQclRcE" alt="gender_by_rank" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:9" sharekey-plotly="tZjI0BBUrpYlsSbeQclRcE" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/9.embed"></iframe>
<p>Here, the linear trendline shows the relationship between rank and female representation: highly ranked schools have lower female representation, to the point where the number of females almost equals the number of males.<a class = "footerLink" href = "#footer3"><sup>3</sup></a></a> There are numerous social commentaries you could make for this drop in representation, but I think most people would agree that the results are interesting but not surprising. It's widely known that women are strongly underrepresented at top positions across numerous fields, and <a href = "https://www.abajournal.com/news/article/female-and-minority-lawyer-representation-in-law-firms-reaches-historic-highs-but-gains-are-small"> law is not an exception.</a></p>
<p>Although the linear decline in female representation is statistically significant, the slope is not steep: the line ranges between 51% and 56% representation between the top and bottom ranked schools. Moreover, ranking can only account for around 6.4% of the variance in gender representation between schools. Thus, while the decline in female representation is an interesting phenomenon, it is not a particularly strong indicator of female representation in a law school's student body.</p>
<h5>Gender and Race</h5>
<p class = "graph">While we have explored gender and race, we should also investigate the intersection of the two. Here, we graph aggregate race/gender composition of students at ABA-accredited law schools: </p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/6/?share_key=4jqVptQknLVzRYjN01Rgyu" target="_blank" title="raceGenderFig" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/6.png?share_key=4jqVptQknLVzRYjN01Rgyu" alt="raceGenderFig" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:6" sharekey-plotly="4jqVptQknLVzRYjN01Rgyu" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/6.embed"></iframe>
<p>Females outnumber males across most racial groups, with only the exception being Unknown. Still, the gender gap varies significantly by racial category. Women account for 51% of White law students, but they represent 56% of Native American students, 58% of Hispanic students, 61% of Asian students, and 65% of Black students (meaning that black Women outnumber Black men two-to-one). Thus, White students account for less than 20% of the gender gap despite representing 62% of students at law schools. </p>
<p>While strong female representation should be commended, male representation&mdash;particularly for underrepresented minorities&mdash;is also a diversity concern, especially given racial disparities in the legal system that disproportionately affect minority men. It is thus worrying that, in addition to Black and Hispanic underrepresentation, Black and Hispanic males are particularly underrepresented.</p>
<p class = "graph">Additionally, recall that the aggregate gender gap nearly disappears at elite law schools. This suggests that gender gap in minority racial groups declines at higher-ranked schools, but we cannot say for sure: perhaps an increase in White male representation accounts for the smaller aggregate gap. In fact, reduced aggregate female representation seems to be driven by both a smaller minority gender gap and higher White male representation relative to White women: </p>
<!-- <div>
    <a href="https://plotly.com/~jzlee/143/?share_key=eQUmtmPLTwL8bAZhKKBPA2" target="_blank" title="eliteRaceGenderFig" style="display: block; text-align: center;"><img src="https://plotly.com/~jzlee/143.png?share_key=eQUmtmPLTwL8bAZhKKBPA2" alt="eliteRaceGenderFig" style="max-width: 100%;width: 708px;"  width="708" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
    <script data-plotly="jzlee:143" sharekey-plotly="eQUmtmPLTwL8bAZhKKBPA2" src="https://plotly.com/embed.js" async></script>
</div> -->
<iframe width="100%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jzlee/143.embed"></iframe>
<p>At Elite schools, the minority gender gap is much smaller: Black women go from representing 65% of Black students to 60%, Asian women from 61% to 59%, and Hispanic women from 58% to 54% (if these reductions seem small, note the reduction in female representation is only about half the reduction in the gender gap, since each percentage drop in female representation corresponds to a percentage increase in male representation). However, the White gender gap reverses: White females go from representing 51% of White law students overall to around 48.5% of White students at Elite schools. </p>
<p> Note that the smaller minority gender gap at Elite is not driven by higher Black and Hispanic male representation: when comparing Figure 11 to Figure 10, we see that Black and Hispanic males are equally or less well-represented at Elite schools than in the aggregate student bodies. Instead, the smaller minority gender gap is primarily due to higher Asian male representation and lower Black and Hispanic female representation. </p>

<p>We thus know that women account for the majority of the difference in URM representation in Elite schools compared to Common schools. Taken with the data from Figures 4 and 5a, we can infer that two factors drive stronger Black and Hispanic at Common schools: high URM female representation and "outlier" schools with especially high Black and Hispanic representation, with these factors possibly having significant overlap.
</p>
<h5>Summary</h5>
<p>On aggregate, law schools reflect racial disparities present in the United States. Native Americans, Blacks, and Hispanics, are underrepresented in the aggregate and within each tier of law school. Asians, on the other hand, are underrepresented at lower-ranked schools but overrepresented at Elite schools. </p>
<p>Despite the consistent underrepresentation of URMs at law schools, there is significant variation between schools and tiers of schools. In particular, lower-ranked schools have, on average, higher URM populations, but this is primarily due to several outlier schools concentrated to the middle and lower ranks of law schools. Additionally, Strong schools, ranked from 16 - 50, have significantly lower Black representation than schools of other tiers, which may in part be due to their high White representation.</p>
<p>In terms of gender, Female students tend to outnumber males, a trend consistent with gender disparities at the undergraduate level. These disparities, however, are not consistent across all races and tiers of schools. In particular, female overrepresentation is only significant at middle and lower-ranked schools and practically disappears at Elite schools. This female overrepresentation is primarily driven by minority racial groups, as White women only slightly outnumber White men on aggregate and are actually outnumbered by White men at elite law schools. </p>
<h4 class = "mb-4">Footnotes</h4>
<div id = "articlefooter">
    <p><sup id =  "footer1">1</sup>Note that race data from the ABA doesn't exactly match up with the <a href = "https://www.kff.org/other/state-indicator/distribution-by-raceethnicity/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D">US Census's 2019 categories</a> because the Census doesn't count nonresidents or unknown races. However, the two categories only account for around five percent of the law school population, so eliminating these categories doesn't affect the percentages by a noticeable amount. </p>
    <p><sup id = "footer2">2</sup>In the US News ranking, schools ranked 147-193 are simply ranked "147-193". I randomly assigned ranks from 147-193 to these schools. While these random assignments lead to slightly different regression equations, the variance between different orderings is insignificant. Additionally, schools with tied rankings&mdash;such as UChicago and Columbia, at rank 4&mdash;were randomly assigned ranks such that UChicago and Columbia would randomly take rankings 4 and 5. This makes the scatter plots slightly more readable with little effect on overall interpretation and regression equations. </p>
    <p><sup id = "footer3">3</sup>When I was writing this sentence, I wanted to say that "Female representation is positively correlated with rank," but then I realized that "high rank" is not actually associated with a nominally high rank&mdash;it implies a low nominal rank! That's why this sentence (amongst many others) is a bit awkwardly worded: I didn't want to confuse people with the weird ways we describe rankings. Quirks of English, I guess.</p>

</div>
<!-- <iframe title = "Student Gender vs Ranking" width = 708 height = 500 frameborder="0" scrolling="no" src="//plotly.com/~jzlee/9.embed"></iframe> -->
