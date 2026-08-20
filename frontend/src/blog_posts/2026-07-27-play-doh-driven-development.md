---
title: "Play-Doh Driven Development"
slug: "play-doh-driven-development"
date: 2026-07-27
category: AI
excerpt: "Or: how a toddler's birthday party turned into a Python repo — parameterised generators, a Bambu Lab printer, and AI skills that let me make custom Play-Doh tools one-handed on maternity leave."
published: true
tags:
  - ai
  - 3d-printing
  - python
  - parametric-design
  - claude-skills
  - parenting
  - maker
---

_Or: how a toddler's birthday party turned into a Python repo_

We got back from Japan when my youngest was three months old, and somewhere in that jet-lagged blur I started making a list. Not a to-do list exactly — more of a _what do I actually want to come out of this leave_ list. Something to show for the year besides survival.

One of the things on it was a Play-Doh party.

My eldest is deeply, seriously into Play-Doh. Messy play in general, but Play-Doh especially. And I had this picture in my head: a Play-Doh themed birthday party where every kid gets a set of custom tools with their own name on them, and takes them home as a party favour. Which meant I needed a 3D printer. Which meant I needed a reason to buy a 3D printer.

Reader, I found several.

## The reasons

Once you start thinking about it, a printer stops being a gadget and starts being a small factory for imaginative play. Custom fruit and vegetables for her play kitchen — not the six sad plastic ones that come in the set, but whatever she's currently obsessed with. A plane with her name across it and white bunny outlines all over it, because that bunny is her favourite thing in the world. She adores that plane.

I also printed her a medicine blister packet (solid plastic, no small parts, nothing that comes out). She plays doctors constantly and for reasons known only to her, the pills are the best part. Not the stethoscope. The pills.

And selfishly: I wanted to learn something new that would keep paying off. I love DIY and craft, and a printer sits right at the intersection of "make useful things for the house" and "make ridiculous things for the children". That's a skill I'll use for the next twenty years.

So we bought a **Bambu Lab A1 with the AMS combo**, which lets me run multiple colours in a single print. We have been experimenting relentlessly since.

## The actual build

Here's where it stopped being a craft project and started being a software project.

I didn't want to sit in a CAD tool learning to drag rectangles around. I wanted to keep my AI and Python skills warm while I'm on leave, and I wanted every kid's tool to be _theirs_. So the pipeline looks like this:

**Python → STL → Bambu Studio → printer.**

Python files generate the geometry and export STL files (the printable mesh format). I drop those into Bambu Studio, slice, print. No mouse-dragging required.

The important part is that the Python is **parameterised**. A stamp isn't a stamp — it's a function that takes a name, a set of icons, a size, and gives you back a stamp. So one file makes twelve different party favours. Bees and flowers for one kid, random shapes for another, everything else identical.

![A 3D-printed pale blue Play-Doh roller with Ember's name mirrored along the barrel and rows of bees and flowers around it](/blog/playdoh_name_roller.jpg)

_One generator, one name, one set of icons — bees and flowers for this one._

The other important part: the repo has **skills** in it, so the agent doing the work knows how to run these files without me re-explaining the whole setup each time. I describe what I want, it knows which generator to call and with what arguments. Which matters enormously when the window for doing this is a nap, and when — realistically — I have somewhere between zero and one hands free at any given moment.

## What's in it so far

- **Name stamps** - each kid's name plus their own icons
- **Scrapers with names on them** - my eldest's favourite by a mile, because she can chop the Play-Doh into a hundred little pieces and scatter them everywhere
- **A Play-Doh roller** - and various other classic Play-Doh contraptions
- **Name labeled key chains** - to use on their bags and stuff later

![A toddler's hand pushing the blue roller across a flattened slab of dough, leaving Ember's name and rows of bee and flower imprints behind](/blog/playdoh_rolling_dough.jpg)

_The actual test: does it work when a two-year-old drives it?_

![A hand holding the Ember name stamp above a slab of orange and white dough showing a crisp raised "Ember" imprint](/blog/playdoh_name_stamp.jpg)

_Their name, in their hands, in dough._

The name thing isn't just decoration, by the way. It's how they can start learning to recognise their own name. _This is mine. I made this._ You can't buy that at Kmart.

## Where it's going

The repo is [3d-printing-skills](https://github.com/nikicrow/3d-printing-skills) — public, and very much a beginning rather than a finished thing. It's a small collection of generators and the skills that drive them, built in fifteen-minute increments.

But the model is the interesting bit to me: describe a thing in words, get Python that makes the geometry, get an object in your hands a few hours later. On maternity leave. One-handed. That's a genuinely new kind of loop, and I don't think I've found the edges of it yet.

Next up let's create some custom toddler friendly animals for the sensory frog pond...
