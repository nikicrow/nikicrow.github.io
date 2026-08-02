---
title: "Meet the Landy Crew"
slug: "landy-part-2-meet-the-crew"
date: 2026-07-28
category: Parenting
excerpt: "What happened when I stopped making one agent do everything — splitting Landy into a crew of specialists, giving them a kanban board and the family calendar, and watching the boring suggestions finally stop."
published: true
tags:
  - ai
  - agents
  - parenting
  - codex
  - hermes
---

In [Part 1](/blog/landy-part-1) I introduced Landy — my little Codex-powered bot that was supposed to hand me
developmentally appropriate activities to do with my toddler so I didn't have to think one up
at 6am with a baby on my hip.

Here's the bit I didn't write at the time, because it hadn't happened yet: I stopped using it.

## The failure mode

Landy got boring. Not broken — boring, which is worse, because there's nothing to debug.

Every single morning I'd get some version of the same three things:

- quick toilet try
- pat Imogen gently
- whisper something weird in Japanese

That's it. That was the product. Day after day, the same script with the words shuffled. There was
no *why*, no build on yesterday, no sense that anything was tracking either kid. It felt like a
cron job cosplaying as a parenting assistant, so I quietly stopped opening it.

When I finally sat down to work out what went wrong, it was two things, and they were feeding each
other:

**One agent was doing every job.** Landy was the researcher, the activity designer, the image
generator, the repo maintainer and the voice that talked to me. All in one context, all at once.
Every job it did badly diluted the jobs it did well.

**The vault was full of slop.** Months of accumulated notes, half-finished activity ideas,
duplicated logs, three versions of the same "morning routine" file. When the model went looking for
context, it found the same tired handful of things at the top of the pile every time and just
served those back to me. Repetitive output wasn't a creativity problem. It was a data quality
problem. Of course it was. It's always a data quality problem.

## The new setup

We're back in Australia now, which means the server lives in the same house as me instead of on the
other side of the world, which changes what's practical.

The hardware is gloriously unimpressive: an upcycled laptop from years ago running Linux, with a
handful of keys that don't work because the dog stood on it — which is precisely why it got
replaced and precisely why it was free to become a server. Decent RAM, though. That's the only spec
that's mattered.

On it: Hermes desktop, still on the same Codex subscription. What's new is everything above that:

- **several profiles**, one per job, each with its own small markdown instruction file
- **a runbook** describing how they hand work to each other
- **a kanban board** they use to pass tasks between themselves
- **a 7am planning cron job**, plus a few others that run silently and never ping me

That last one matters more than it sounds. The planning happens at 7am whether I'm awake or not,
and by the time I look at anything it's already done. A lot of the crew's work now happens without
me in the loop at all. I don't need to see the planning. I need the output.

The kanban board is the part I find quietly delightful. When one of them decides a task is better
suited to somebody else, it moves the card across and leaves whatever it's gathered sitting there
for the next agent to pick up — Researcher parking a stack of findings in a column for Activities
to turn into something we can actually do on a Tuesday morning. Every so often a message about it
surfaces in my Telegram and I get a little window into them handing work around behind the scenes.
I don't act on any of it. I just enjoy it.

## The crew

**Landy Core** — the front of house. It's the only one that talks to me. Everything the others
produce gets funnelled through Core so I get one voice and one coherent message instead of five
agents shouting activity ideas at a tired woman. It also decides what's worth surfacing at all.

**Landy Activities** — the activity designer. Its entire job is building toddler- and
baby-appropriate activities personalised to where each kid actually is right now. It doesn't
research and it doesn't maintain anything. It designs.

**Landy Archivist** — the software engineer of the group. Looks after the repos, reorganises,
archives, streamlines. This is the one that fixed the boring-suggestions problem, because the
boring-suggestions problem was a housekeeping problem. Slop in, slop out.

**Landy Researcher** — reads actual sources. Peer-reviewed developmental psychology, behavioural
science, reputable clinical guidance. It doesn't talk to me directly either; it feeds the others so
that what Activities designs is pitched at the right level — genuinely stretching both girls rather
than either babying them or expecting too much.

**Landy Creative** — image generation and printables. This one exists because Ember loves a
prop. It makes passports and boarding passes for her to cut out, which double as a cutting-and-
scissors activity *and* as roleplay for actual flights. Cut them out on Tuesday, use them on the
plane in September.

## Adding Imogen

The other structural change: child profiles. Not agent profiles — profiles for the kids
themselves. Imogen is four and a half months now, so she got her own.

Setting hers up taught me something I hadn't known. When Researcher put together her baseline, the
thing that came back loudest was **floor time**. Not tummy time as a scheduled event — floor time
as a default state. Babies this age should be spending as little time as possible contained in
carriers, bouncers, seats and swings, and as much as possible flat on a mat with room to move. And
critically: lots of short bursts beats one long virtuous stretch.

That reframed my whole day. I'd been thinking of tummy time as a box to tick. Now the question is
just "can she be on the floor for this bit?" and the answer is usually yes.

## Giving them the calendar

The other addition, and possibly my favourite: the crew can see our family calendar.

My husband set the bots up with their own Google profile on the server and shared our family
calendar with it. So everything I already put in there — swimming lessons, playgroup, someone's
coming over this afternoon — is now context they have.

The reason I wanted this isn't scheduling. It's guilt.

The old Landy had no idea what my day looked like, so it would cheerfully hand me a full slate of
enriching activities on a morning where we'd already done swimming, and I'd read it, do none of
it, and feel like I'd failed at something. Which is an absurd thing to be made to feel by software
I wrote myself.

Now a day with swimming in it *is* the activity. The suggestions get lighter, or they get shaped
around what's already happening. Nobody hands me a five-point developmental program on a day
we've got playgroup and a visitor.

## Does it actually work?

Yes, and the difference isn't subtle.

What I get now looks like: here's the activity, here's *why* we're doing it, here's what it's
building, and here's the five-minute version because you have a newborn. That last part is the
bit I didn't know I needed. An activity with no time budget attached is an activity I will skip.

It's stopped feeling like a script and started feeling like something that knows my kids.

## The cost

Token consumption is way, way up — five specialists deliberating is not cheaper than one
generalist guessing. I fully expected to blow through my limits.

I haven't come close. On a $30/month Codex subscription I'm nowhere near the ceiling, and they keep
handing out usage bumps and tier increases, which has had the funny side effect of removing my
guilt entirely. I now spam Landy with "what if we tried..." messages without thinking about it,
and that iteration is a big part of why the crew got good.

## The thing I actually took away

Two things, one technical and one not.

The technical one: **separation of concerns applies to agents exactly like it applies to code.**
Landy wasn't underpowered, it was under-specified. Give one profile one job and a clean place to
work, and the quality jumps. Give it five jobs and a messy vault and you get the same three
suggestions forever.

The other one is about messy play. Researcher kept surfacing it, so we've leaned into it hard, and
it's turned out to be one of the more valuable things I've learned in this whole project. Messy
play isn't just sensory input — it appears to help kids feel secure and settled, and it holds
their focus in a way a tidier activity doesn't, because they get to sink into one absorbing thing
instead of bouncing between five. So we do a lot of it. Playdough, water, the whole business.

Less mental clutter for me, more actual engagement for them. That was always the goal. It just
turned out the way to get there was to stop asking one bot to be everything.

---

*Next up: the runbook itself — how the profiles delegate, what's in each instruction file, and the
silent cron jobs that do the planning I never see.*
