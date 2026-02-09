---
title: "Baby data Part 1: Analysing my 6 month old baby using data!"
slug: "baby-data-analysis"
date: 2024-04-15
category: Parenting
excerpt: "I manually recorded my daughters sleep, feed and nappy data for 6 months. Then I did some analysis and here's what I found..."
published: true
tags:
  - parenting
  - data-analysis
---


Before we get into the juicy stuff, let me introduce myself and what this series of articles is going to be about.

I am a Data Scientist. I have been for a few years now, predominantly using Python for Machine Learning and SQL for data analysis and using a range of data visualisation tools. I am also a first time mum to an almost 8 month old baby girl. Her name is Ember and here’s a picture. Pretty clear why I am so obsessed with her if you ask me.

Press enter or click to view image in full size

The story behind the data collection
Of course, before I share my insights with you, I must tell you how this data came to be…

Day 2 as a parent, my husband Ben and I were in hospital, completely sleep deprived. I was drowsy and my mind foggy from what felt like 50 pills or jabs I was having daily to get past a pretty sketchy birth (I had pre-eclampsia, but that’s a whole other story). The nurses kept coming in and asking us when Ember last fed, how long she fed for, when her last nappy change was, whether it was just wet or also poopy. Ben and I simply could not remember those details. Hence, I made a spreadsheet. Which, incidentally, is how I solve most of my problems.

That day we started tracking Ember’s feeds, recording this data in a simple table with columns like below:

Time e.g. 9/03/2023 17:38
Start side e.g. Right
Left duration (min) e.g. 8
Right Duration (min) e.g. 13
A couple of weeks into recording every feed I went hunting for apps to do the same thing. Surely someone had come up with an app to record this kind of data? It was then that I found Baby Tracker. It recorded the same data but instead of having to scroll down to the relevant cell, I could record the details in a couple of clicks. I noted that you could export the data as a csv. Good stuff.

A couple of weeks after that, I started to get curious about my daughter’s naps. Did naps during the day last longer than naps during the night? It felt like that was the case, but I know better than to come to any conclusions without seeing the actual data. So now we were tracking food, nappies, and her sleep.

Here we are now, more than 6 months later! In this article I will share my two favourite charts from the sleep and feeding data.

How did I create these visualisations?
Firstly, I had to combine the datasets from my spreadsheet and exported app csv’s. To do that, I put my data in a PostgreSQL database and did some fancy SQL with it to get the data to a point that I could start making charts.


I then used Superset, an open source data visualisation tool to make a dashboard (mostly because it was free lol). You can learn more about Superset here. The process is basically to clone the git repository then run your database and app on a docker container.

Happy to do an article on the process later if people are interested, but I will assume most people are here for the charts.


![Total time on boob per day](/blog/babydata_part2_1.png)

Chart 1: Time on boob vs days since birth
The light blue dots are the total number of hours my daughter fed on my boob for that day. The darker blue line shows the 21 day moving average (starting from a minimum period of 7 days).

This chart really shows how much time and energy goes into breastfeeding, especially in the early days. What a slog! There were days when my daughter was suckling for more than 6 hours… No wonder I felt so drained! Literally.

Interestingly, around the 50 day mark, the total time on boob in a day starts dropping to closer to 3 hours a day. Much more manageable. Probably not a coincidence that this is around the time I started to feel human again.

The time on boob eventually drops until now she is on for less than an hour a day. Somehow that makes me a bit sad. It would be interesting to do some predictive analytics and ‘predict’ when she will fully wean herself!

Sleeping through the night

![Maximum number of hours of consecutive sleep per night](/blog/babydata_part1_2.png)

Chart 2: Maximum number of hours of consecutive sleep per night
I really love this chart. It shows that when we first started recording the sleeps, when she was just less than a month old, she really wasn’t sleeping much more than 1.5 hours in a row. As she gets to around 60 days old, this increases to around 6 hours, then by 90 days we are back to closer to 9 hours of sleep.

At around 180 days, the night sleep starts increasing again. In case you were wondering, she started solids at around 130 days old but didn’t really start eating more than a teaspoon at a time until around 160–180 days old.

That very patchy time between 150–180 days old is when we went to Japan. There was an overnight flight, and a 3 am start around there which messed up her sleep for a couple of days.

Nowadays she sleeps around 12 hours a night! She goes to bed around 7pm and wakes up around 7am. My sleepy angel ❤️

To wrap things up for now…
I have SOO many interesting charts to share! I am intending to write a series of Medium articles on them with a closer look at things like wake windows, time gap between feeds and number of naps.

Be excited. Be very excited.