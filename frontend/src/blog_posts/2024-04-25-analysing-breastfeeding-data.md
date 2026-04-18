---
title: "Baby data Part 2: Analysing my babies breastfeeding data"
slug: "baby-data-records-breasfeeding"
date: 2024-04-25
category: Parenting
excerpt: "I recorded my babies breastfeeding data for 6 months, then I analysed it! Here's what I found..."
published: true
tags:
  - parenting
  - breastfeeding
  - data-analysis
---

Hello, I’m a Data Scientist and first time mum to a little adorable girl. This is the second in a 3 series that I will be writing about the data on her life so far. The first article is linked here and has a bit more background on how this data came to be and a couple of my favourite charts. This article will be on her feeding/nursing data specifically. We will get to correlations between feeds and other things in a later article.

The app I built which has all the charts in the article is here. I will do an article later on how I built it but the git repository is here if you would like to reproduce these charts.

To give you a little background on her feeding journey so far, I have almost exclusively breastfed my daughter. I decided that I would ideally like to breastfeed before I gave birth, after I spent many hours researching the different options for feeding. That being said, after going through the journey myself, there is NO EASY OPTION when it comes to feeding. At least, not for the first 6 weeks or so. Once you and baby get the hang of it, I think breastfeeding is the most practical and economical option, but I haven’t seen any numbers on that, it’s just my opinion.

Disclaimer: I apologise in advance for talking about boobs a lot. You could say I became a little desensitised from overuse, lol. But honestly, I am ostensibly known as a bit of an oversharer.

## What tools were used?

For this article and going forward I have decided to use good old python packages for data visualisations. Why?

I used Superset for the visualisations in the previous article and there were a few problems I had with it.

- Like most visualisation software I have used before (e.g. Tableau, Power BI e.t.c.) you can't recycle the work very easily across charts and dashboards. I am lazy and hate repetitive work, hence I find dashboards laborious and cumbersome.
- Not a very extensive suite of different chart types available.
- It's hard to deploy and share the dashboard with others. I want to show the world the insights without messing about with AWS and kubernetes clusters.

So yeah, this is where we are at. Using streamlit and plotly packages to make another streamlit app. The app is here if you'd like to look at the charts yourself.

## Let's get to the charts!

First, my favourite chart, total time on boob per day. This is the same chart as I shared in the first post, but the streamlit plotly version!

### How much time did I spend breastfeeding? How did this change over time?

![Total time on boob per day](/blog/babydata_part2_1.png)

#### Chart 1: Total time on boob per day

This chart shows how many hours I spent breastfeeding each day for the first 6 months of my daughters life. There were days when I spent more than 5 hours with her latched on. However, by day 50 of her life, the 14 day rolling average was already down to around 3 hours per day.

I think when they are really young, they stay latched on for a very long time to stimulate the breast tissue to encourage you to make more milk. The ongoing stimulus tells your body how much milk to make, and once your body matches the demand they say breastfeeding is ‘established’. I would say from the data that this looks like it happened to me at around 45 days.

Interestingly, this was also when breastfeeding finally stopped being painful for me. Yes, people did tell me it would hurt. No, I did not know that what they meant was, it feels like razorblades on your nipples for over 5 hours a day. Yes, I am glad I persevered but wow, SO.MUCH.PAIN. for SO.LONG. Let’s move on.

![Cumulative hours spent breastfeeding](/blog/babydata_part2_2.png)


Here’s another way of looking at the hours spent breastfeeding. We reached a cumulative 100 hours breastfeeding by day 24 and 200 hours by day 48. The gradient of the cumulative sum then starts to decrease and we don’t reach 300 hours until day 95. I wonder how many hours we will be at when we finish? I’m sure some kind of predictive model could try and answer that question lol.

### How long do feeding sessions last and how does this change over time?

I remember when I first started breastfeeding, it felt like there was so much conflicting information out there on how long it should take a baby to feed in each session. Even among midwives at the hospital, some said 10–15 minutes each boob was fine, others said minimum 30 minutes each side per session. I haven’t been able to find any proper data or studies on this (if you have, please let me know!), but I think ultimately, it is really going to be up to you and your flow and the baby and how efficient they are. Knowing the numbers doesn’t change your letdown* speed or how good your baby is at sucking milk out.

*\*Letdown = the reflex that makes milk flow. Read more about it here, it's a very interesting phenomenon.*

![Feed duration by month](/blog/babydata_part2_3.png)


#### Chart 3: Feed duration by month

For my daughter and I, this is what it looked like. During the first month feeds were a median of 25 minutes (this is both boobs, so roughly 12.5 mins each boob), with the first quartile at 10.5 minutes and the third quartile at 36 minutes. We reached a median feed length of 8 minutes at 5 months and the median has stayed a constant 8 minutes since then.

Anecdotally, I think her suction power has increased, thereby making feeds more efficient over time.

On the streamlit app I also have a histogram, which is interactive so you can toggle between months and see how the distribution of feed duration changes month to month, go check it out!

### How long do you have between each feed?

This is another one of those questions I googled many many times in the early days. Also, another one of those things that just depends on the baby (and your approach as a parent). They said in my hospital that we should aim for a feed every 2–3 hours so that’s what we went with.

![Time between milk feeds by months](/blog/babydata_part2_4.png)

#### Chart 4: Time between milk feeds by months

In my daughters first month the median time between feeds was just over 2 hours. The second month, however, saw a drop in the time between feeds. The reason for this was that we did the Taking Cara Babies sleep course (check it out here) and they recommended trying to get as many feeds in during the day so that the baby gets used to getting their whole caloric intake during the day. So, it was somewhat intentional to reduce the feed gap. In the chart below which shows the gap between milk feeds overnight, we see that by the end of month 2, we are getting much longer stretches without feeds at night. I don’t think this is a coincidence.

From 2 to 5 months, the median time between feeds plateaus at around 2.4 hours. At the 6 month mark, my daughter started properly eating solids. I think this may be the reason for the increase in time between feeds around then. It’s really cool to see it in the data though!

![Time between milk feeds overnight](/blog/babydata_part2_5.png)

#### Chart 5: Time between milk feeds overnight

The gap between feeds overnight is such a big deal. It is a metric that correlates to new parents’ sanity. Sleep deprivation is not super fun lol. You can see the gap between feeds ‘overnight’ starts off at around 4 hours. Then it increases until at about 9–10 weeks when we started being able to sleep 7–8 hours a night. I remember how excited we were the first time we got to 7 hours between feeds! This steadily increased to about 10 hours a night until we get to around 6 months when it starts increasing again to 12 hours. Now she basically goes to bed around 7pm and doesn’t wake up until 7am!

I really want to know how ‘normal’ this is, I am going to try doing some research and finding papers on this. If you’ve got some, please message me! Also, I am not sure if solids are the reason that my daughter increased her night sleeps, it may be a coincidence. It’s hard to know with a sample size of 1 baby who changes so quickly and dramatically over time what may be effecting her feeds, sleeps and development.

### Which side did I feed on more? Has that effected anything?

The right side. And yes, my left side makes less milk when I pump.

Did you know that milk supply can be lopsided? If you feed a lot more on one boob, that boob will produce more milk. It creates an annoying cycle where the baby likes the boob with more milk and feeds more and more on that one which means the other boob isn’t getting as much attention and it may end up even drying up!

![Percentage of time spent on each boob per day](/blog/babydata_part2_6.png)

#### Chart 6: Percentage of time spent on each boob per day

This final chart shows the percentage of time spent on the left vs right boob. It actually looks more even than I expected, but you can see that my daughter favoured the right a bit, particularly early on. At one point, I was a bit lopsided, so I forced her to spend more time on the left to make up for it.

## To wrap things up for now…

Thank you for reading up to here. It’s been fun creating these charts and thinking about them. For the last time the app link is here so you can check out the charts for yourself! Please check out my git repo as well if you’d like to see the code.