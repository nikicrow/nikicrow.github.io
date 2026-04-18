---
title: "Baby data Part 3: Analysing my babies sleeping data"
slug: "baby-data-records-sleeping"
date: 2024-04-29
category: Parenting
excerpt: "I recorded my babies sleep data for 6 months, then I analysed it! Here's what I found..."
published: true
tags:
  - parenting
  - data-analysis
  - finance
  - trading
---

Hello! Welcome to part 3 of a series of articles I am writing on my daughter’s data. The link to the first article is here if you want a bit more background on how the data was collected (TLDR: manually, using an app). There is also a second article here which is specifically on her feeding data. This article will be on her sleep data!

I have deployed a simple dashboard app and the tab ‘Sleeping’ will be where these charts come from. I used python, streamlit and plotly packages to create charts because I love an interactive chart. Check out the git repository if you are interested in how these charts were built.

## Some background on the sleeping data

So unlike the feeding data (which we recorded from day 2), we only started recording her sleeps from day 27. Lazy, I know. In those early days it felt pretty pointless recording it because she seemed to be either eating or sleeping. It was around when we started recording the data that she actually started to spend some time awake which is when it started to be relevant when her next nap should be.

To give you some context on how babies work babies are sleepy little creatures and at first struggle to be awake for more than an hour or so. When they get tired, they generally start getting fussy and grumpy, when they get overtired, they get a rush of adrenaline and then find it really hard to go to sleep. Sleep is VERY important to their development, so it is important to pay attention to their sleepy cues so that you are helping them have a nap when they need it. Recording when she woke up really helped us be aware of when she will get tired. Recording sleep times and when she ate helped us to diagnose fussiness.

I should mention we didn’t really do any sleep training with our daughter. Our method was basically to put her in her cot in her sleeping bag with a dummy when she seemed tired.

## Let's get to the charts!

In this article we will go over some of the sleep charts and the insights we gathered from the analysis.

![Time of days that she slept over her first 6 months +](/blog/babydata_part3_1.png)

### Chart 1: Time of days that she slept over her first 6 months +

It feels apt to start with this chart because it shows ALL her sleep over her first 6 months (blue bar means asleep, nothing means awake). This chart also took me an embarrassingly long time to make. I was inspired to make this chart by a github repo I came across called Agenoria where someone made all these beautiful charts for their two babies. They have much nicer charts than I and the code is👌. They used the glow baby app to record data so I had to do some wild data wrangling gymnastics to modify my data and the code to get it working for me.

Anyway, you can see that at first, her sleep is unpredictable. A mess really. It seems she had no concept of night time = sleep time. At around 7-8 weeks, she starts to sleep longer stretches through the night and by about 10 weeks she is going to sleep for the night at around 9:30 and waking up at 4–5am for a feed. When she did wake up for a feed, she was going to sleep again quite promptly! She was waking up and having a longer awake time (we call them wake windows in the parenting community) at about 9am. It felt like that was the pattern for a few months until around the 6 month mark.

At around 6 months, her morning feed started to progress later to around 6–7am and she started going to bed earlier (around 7pm). Her awake time during the day has increased and her naps are getting slightly more regular. It now seems she is slowly phasing out her first nap of the day shortly after waking up.

Btw if you are wondering what that messy period around 22–23 weeks is about, that’s when we went to Japan for a week. She really struggled with sleeping on the plane. There is another chart later on which shows how many hours she was awake for 21st Jan which was the plane ride to Japan🥲.

![Total sleep duration per day](/blog/babydata_part3_2.png)


### Chart 2: Total sleep duration per day

I was surprised when I saw this chart. I didn’t realise that her total sleep increased at around the 50 day mark! No wonder getting stuff done is so tough with a newborn. In that around 10–12 hours of the baby sleeping, you need to sleep, eat, and prepare for baby to wake up. Her total sleep then somewhat abruptly increases and has actually decreased gradually since then.

## Nap time!

Naps. They have come to rule our lives. All plans we have must have some degree of flexibility so that we have a realistic plan for naps.

![Average nap duration per day](/blog/babydata_part3_3.png)

### Chart 3: Average nap duration per day

In the chart above, I excluded her night sleeps and took an average of her nap duration each day. We see her nap duration gradually decreasing over time so now it is close to the 1 hour mark.

![Histogram of nap duration](/blog/babydata_part3_4.png)

### Chart 4: Histogram of nap duration

The frequency distribution histogram is an important chart. It tells us that most naps (over 150) were 0.6–0.79 hours, that is, 36–47 minutes. And it tells us that a 1 hour nap is around 45th percentile and a 2 hour nap is around 75th percentile. It’s pretty cool to be able to say ‘Wow, that was a long nap! It was 80th percentile!’. But maybe what I consider cool is not so interesting to some people😅.

## Wake windows

The time between naps during the day is called a ‘wake window’.

![Wake windows (time between naps) since birth](/blog/babydata_part3_5.png)

### Chart 5: Wake windows (time between naps) since birth

The chart above shows wake windows increasing over time. I found a table on the Taking Cara Babies site (link here) where it has the wake windows by age. See below! As I suspected, our baby is a little slow in lengthening her wake windows. At 7 months her median nap is barely over 2 hours and according to this table it should be closer to 2.5–3.5 hours.

![Taking Cara Babies wake windows](/blog/babydata_part3_6.png)

## To wrap things up for now…

I think its worth calling out once again that every baby has different needs, and every parent has different methodologies when it comes to naps and sleep. Approach to naps may be just as relevant as personality and temperament to nap/sleep duration and frequency, but these things are very hard to actually study.

Please check out the app I built with the charts above and more here. They are interactive in the dashboard so it is more fun to look at them there.

Until next time!