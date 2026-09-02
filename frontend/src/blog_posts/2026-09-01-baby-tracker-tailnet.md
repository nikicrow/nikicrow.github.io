---
title: "I Deployed My Baby Tracker to a Tailnet — Because Apparently My Family Has Its Own Private Cloud Now"
slug: "baby-tracker-tailnet"
date: 2026-09-01
category: Tech
excerpt: "I stopped designing my baby tracker like a public SaaS product and deployed it to a private family tailnet instead. The server is an old laptop."
published: true
tags:
  - baby-data
  - tailscale
  - self-hosting
  - ai-agents
  - parenting
---

So back when I got pregnant the first time — before Ember was even born, and before AI was particularly good at writing code — I built a baby data app.

The first version used Django with MongoDB, with Django handling both the frontend and backend. It worked, technically. But I found it pretty painful to develop and maintain.

Ember came early, and I literally got one day of mat leave before she came which was not enough time to make my first app stable. So, I abandoned my lovingly hand-built data application and downloaded a normal baby tracker app, called BabyTracker.

It has a relatively simple schema. It is very stable. I can log feeds, naps, nappies and other baby things while operating on approximately four hours of sleep. It does its job.

I've now used it for both Ember and Imogen.

But there has always been a problem.

**I want more charts, insights and I want to ask my data questions.**

## The baby tracker I actually want

The existing tracker is good at recording what happened.

What I really want is something that lets me play with the data.

I want custom charts. I want to look at how sleep changes over time. I want to experiment with different calculations and visualisations. I want to compare patterns between my two babies. I want to ask questions of the data that whoever designed my existing baby tracker never thought to build.

And, separately, I wanted to learn and keep up my skills with a real full-stack project.

Not a tutorial project. Not a toy database with fake customers.

A real application, with a real database, that gets used every day and where bugs actually matter.

So before Imogen was born, I started Baby Tracker: Version Two.

## Attempt #1: let's deploy it like a real app

My first deployment architecture was much more conventional.

I had a Supabase PostgreSQL database, Vercel hosting and a CI pipeline. The CI environment even talked to Supabase using a separate schema from production, because I wanted experience building my own proper DBT CI pipeline.

And technically, this all worked.

But the problem was, if I deployed this as a normal internet-accessible application, I have to treat it like a normal internet-accessible application.

That means authentication.

And once I have authentication, I need to think properly about authorisation.

If there are multiple users, which babies can each user see? Who can edit which records? What happens if a user belongs to a family with multiple babies? Every query and calculation suddenly has to exist in the context of a user and the babies that user is allowed to access.

Then there is the more uncomfortable question: what happens if I get any of this wrong?

Because the production database contains actual information about my children.

I don't want a stranger to be able to log in and see it. Worse, I don't want them to start deleting records or adding to it for fun.

And of course I definitely don't want someone discovering an endpoint that lets them start adding things to my production database.

And this was when I realised something fairly important:

> I don't actually want other users outside of my husband and I.

This isn't a startup.

I don't have customers.

I have two babies and a husband.

I had started designing infrastructure for a hypothetical product when what I actually wanted was a private application for my family.

## Enter Tailscale

Fortunately, my husband is an AI engineer who has also worked as a software engineer, and therefore knows about mysterious networking things that still look like magic to me.

He set up a Tailscale network — a tailnet — for us.

The basic idea, as I understand it, is that Tailscale creates a private network between approved devices. Rather than putting Crow's Baby Tracker openly on the internet and building an authentication and authorisation system around it, we can make the application accessible only from devices inside our tailnet.

Under the hood, Tailscale uses WireGuard to create encrypted connections between devices. Each authorised device effectively becomes part of the same private network, even if those devices aren't physically connected to the same Wi-Fi.

That means my phone can securely reach the laptop running Crow's Baby Tracker without me exposing the application to the public internet.

This solved an enormous amount of complexity for my particular use case.

Instead of asking:

> Which authenticated user has permission to access which baby's records?

I can mostly ask:

> Is this device allowed onto our tailnet?

And since we are on the free tier, we only have 5 devices lol.

## Our extremely sophisticated home server

One of them is our server.

Calling it a "server" makes our setup sound considerably more impressive than it actually is.

The server is my old laptop.

Some of its keys are broken because my dog stomped on them.

But it has something like 24 GB of RAM, so it has been promoted from slightly damaged old laptop with the annoying broken O key to critical family infrastructure.

It runs Fedora. It stays plugged in and switched on. I think it spends most of its life physically closed.

And now it runs Crow's Baby Tracker.

The PostgreSQL database lives on the server laptop too, rather than in Supabase. The application itself runs there, and the other approved devices can access it through our tailnet.

Our little private network currently consists of:

- the server laptop;
- my laptop;
- my phone;
- my husband's laptop; and
- my husband's phone.

That's it.

Those are the devices that need Crow's Baby Tracker, so those are the devices that get Crow's Baby Tracker.

## Crow's Baby Tracker is actually an app now

Possibly my favourite part of all of this is that I now have Crow's Baby Tracker installed on my phone.

It has our name in it.

It has its own icon.

I tap it and my app opens.

The app that I have spent months building is no longer something that lives in VS Code and occasionally produces a nice-looking chart when I run it locally.

It is an actual thing that I use.

I can log data from my phone. I can open it on my laptop when I want to look properly at charts and insights. My husband can access it from his phone too.

The last part is particularly important.

**Baby data logging is a shared responsibility.**

If he's doing a nappy, he can log the nappy.

If he's putting Imogen down for a nap, he can log the nap.

If I don't have my phone nearby, I no longer have to reconstruct the timeline later from some combination of memory, text messages and sleep-deprived guesswork.

This may actually be the most important architectural improvement of the entire project.

## We also have AI employees now

The infrastructure has acquired another slightly ridiculous layer.

We each have a Hermes agent.

Mine is called Bugsy, because Bugsy spends most of its time finding bugs, fixing bugs and, occasionally, creating exciting new bugs.

Bugsy has access to the repositories relevant to Crow's Baby Tracker and the skills needed to work on them.

So now when something breaks, I can essentially tell Bugsy:

> This isn't working. Please figure out why.

And Bugsy goes away, investigates the repository and attempts to fix it.

Sometimes this works beautifully.

Sometimes Bugsy runs out of tokens and tells me we need to wait five hours.

Then five hours later it tries again.

Then it runs out of tokens again.

This has been happening quite a lot recently.

We may need a bigger Codex subscription.

My husband has his own Hermes agent, Rohan (the RohBot), set up in a similar way. So Crow's Baby Tracker now has two human developers and two AI agents responsible for keeping it alive.

This is an entirely reasonable engineering team for an application with approximately two users.

## The slightly terrifying part: trusting my own software

I'm not quite ready to delete the old baby tracker.

At the moment I'm running both apps in parallel.

Yes, this is annoying.

Every feed, nap and nappy gets logged twice.

But there is a significant difference between:

> Look! My database works!

and:

> I am now trusting this database with months of irreplaceable data about my baby.

I'm watching Crow's Baby Tracker carefully and checking that the data makes sense. I'm looking for weird discrepancies, missing records and calculations that don't behave the way I expect.

And, crucially, before I completely switch over, I want a backup system that I trust.

Because I have reached the slightly surreal point where I am responsible for the database reliability of my own baby's historical sleep data.

Apparently this is my life now.

## The architecture finally matches the problem

The thing I like most about this setup isn't actually Tailscale itself.

It's that the architecture now reflects what Crow's Baby Tracker really is.

It's not a public SaaS product.

It's not something I'm trying to scale to thousands of parents.

I don't need signup flows and password resets and organisations and roles and permissions and all the other machinery required to safely operate a multi-user application on the public internet.

It's software I built for my family.

There are two parents.

There are two babies.

There are a handful of trusted devices.

There is one slightly battered Fedora laptop sitting in our house (next to the 3d printer) keeping the whole thing alive.

And now, finally, it works.

Over the next little while I'm going to start properly using Crow's Baby Tracker instead of just building it. That's the part I've been looking forward to: experimenting with the charts, comparing the girls' data, looking for patterns and discovering which insights are actually useful when you have a real baby generating the dataset in real time.

Assuming Bugsy doesn't break production first.
