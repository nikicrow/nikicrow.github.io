---
title: "Custom Play-Doh Tools for a Toddler's Birthday"
slug: "3d-printed-playdough-tools"
date: 2026-07-22
category: AI
excerpt: "My eldest turned three, so we threw a Play-Doh party — and I used a new 3D printer and a repo of AI skills to design parametric rollers, scrapers, and name stamps for a table full of toddlers."
published: true
tags:
  - 3d-printing
  - python
  - parametric-design
  - claude
  - claude-skills
  - parenting
  - maker
  - bambu-lab
---

Ember turned three, and we decided to make her birthday party Play-Doh themed. That was the whole brief: lots of squishing, lots of colour, lots of tiny hands making a mess. Somewhere between "we should have some Play-Doh tools" and "we just bought a 3D printer," it turned into a proper little project — and, like most of my projects lately, an excuse to see how far I could push AI on something I actually cared about.

## The idea

We'd just bought a **Bambu Lab A1 Combo**, which meant I could finally print in colour and print more than one thing at a time. Store-bought Play-Doh tools are fine, but I wanted something better than fine. I wanted tools that were *custom* — to the kids, to the party, to the whole point of the day.

So here's what I landed on. For each little guest, I'd make a set of three tools:

- a **roller** — textured with something they love, like dinosaurs, bees, or flowers
- a **scraper** — toddler-friendly, chunky, easy for small hands
- a **stamp** — with their **name** on it

The stamp was the part that made me happiest. Three-year-olds are right in the thick of learning to recognise their own name, and there's something lovely about a kid rolling out a slab of dough, pressing their name into it, and being able to say *I made this*. They're learning letters, they're playing with things they like, and they're proudly signing their creations — all at once. And then they get to take the whole set home as a party favour and keep doing it.

Party activity *and* party favour, in one squishy package.

## The repo: 3D Printing Skills

Rather than model each tool by hand — one name, one theme, one file at a time — I built the thing parametrically. The result is a little repo I'm calling **3D Printing Skills**: a handful of Python scripts plus a set of *skills* I hand to AI so it can drive them.

The scripts are parametric by design. I tell them a **name** and a **theme**, and they generate the geometry for a matching roller, scraper, and stamp — the name embossed on the stamp, the theme worked into the roller texture. Change the two inputs, get a whole new set. That's exactly the kind of problem a computer should be doing for you: I wasn't going to nudge vertices around for a dozen different kids.

<!-- GitHub link: add repo URL here once public -->

For most of it I used **Claude** — not Codex — to run the skills and generate all the files. That's the part I find genuinely exciting. The skills encode *how* to make a good, printable, toddler-safe tool, and the AI does the fiddly work of turning "make me a roller with bees and a stamp that says EMBER" into actual files I can print. I'm essentially teaching the AI my little corner of 3D-printing know-how once, and then reusing it as many times as I need.

<!-- photo: a set of the printed tools (roller, scraper, stamp) -->

## Printing them

From there it went into **Bambu Studio**. The A1 Combo earned its keep here: I could lay out multiple tools on a single plate and print a whole batch in one go, rather than babysitting the printer for one lonely stamp at a time. For a party's worth of kids, that efficiency was the difference between "nice idea" and "actually finished in time."

And I did finish in time. I ended up with a pile of really cute, genuinely toddler-friendly Play-Doh tools for Ember's party — plus a heap of different stamps that turned out sweeter than I expected.

<!-- photo: the stamps laid out / kids using them at the party -->

## What I'm taking from it

The party was the deadline, but the repo is the thing I get to keep. **3D Printing Skills** isn't a one-off — it's a little workshop I can keep coming back to, pointing AI at whatever I want to make next. The pattern is the same one I keep landing on lately: capture the know-how once as a skill, let the AI do the repetitive making, and spend my own time on the ideas.

There's a version of me that would have spent a week hand-modelling twelve slightly different rollers and given up halfway. Instead I got to spend that time thinking about what would actually delight a table of three-year-olds — and then let the tools generate themselves.

I'll keep using the repo for the next thing, and the thing after that. But this first outing is hard to beat: a room full of toddlers, rolling out dinosaurs and bees, stamping their own names into the dough, and taking a custom set home at the end. Not a bad birthday, for three.
