---
id: "3d-printing-skills"
title: "3D Printing Skills"
description: "A repo of parameterised Python generators and AI skills that turn a plain-language request into a printable STL - built to make custom Play-Doh tools and imaginative-play props one-handed on maternity leave."
status: development
category: AI
completedDate: "2026-07-27"
featured: false
draft: false
tech:
  - Python
  - Claude Skills
  - Bambu Lab A1
  - STL
  - Parametric Design
links:
  github: "https://github.com/nikicrow/3d-printing-skills"
  blog: "/blog/play-doh-driven-development"
relatedProjects:
  - landy
---

## Overview

A small, growing repo that turns a plain-language request into a physical object. I describe a Play-Doh tool - a name stamp, a scraper, a pasta roller - and a parameterised Python generator produces the geometry, exports an STL, and it gets sliced and printed on a Bambu Lab A1. No CAD, no mouse-dragging, and realistically no more than one free hand at any given moment.

[Read the backstory on the blog](/blog/play-doh-driven-development)

## Why I Built This

My eldest is seriously into Play-Doh, and I wanted to throw her a Play-Doh themed birthday party where every kid takes home a set of custom tools with their own name on them. That meant a 3D printer - and once you have a printer, it stops being a gadget and becomes a small factory for imaginative play: custom play-kitchen food, a name-emblazoned toy plane covered in her favourite bunny, a jar of solid plastic "medicine pills" for playing doctors.

The other reason was selfish: I wanted to keep my AI and Python skills warm while on parental leave, and learn something new that keeps paying off for the next twenty years.

## How It Works

### The pipeline

**Python → STL → Bambu Studio → printer.** Python files generate the geometry and export STL (the printable mesh format). I drop those into Bambu Studio, slice, and print.

### Parameterised generators

The Python is fully parameterised. A stamp isn't a stamp - it's a function that takes a name, a set of icons, and a size, and returns a stamp. So a single file produces twelve different party favours: bees and flowers for one kid, random shapes for another, everything else identical.

### AI skills drive it

The repo ships with **skills** so the agent knows how to run these generators without me re-explaining the setup each time. I describe what I want, and it knows which generator to call and with what arguments - which matters enormously when the window for doing this is a single nap.

### The hardware

A **Bambu Lab A1 with the AMS combo**, which lets me run multiple colours in a single print.

## What's In It So Far

- **Name stamps** - each kid's name plus their own icons
- **Scrapers / cutters with names on them** - the favourite by a mile, because Play-Doh can be chopped into a hundred little pieces and scattered everywhere
- **Non-custom stamps** - little icons, shapes, and textures
- **A Play-Doh pasta roller / extruder** - and various other classic Play-Doh contraptions

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Geometry** | Python (parametric generators) |
| **Automation** | Claude Skills |
| **Output format** | STL |
| **Slicing** | Bambu Studio |
| **Printer** | Bambu Lab A1 + AMS |

## What's Next

- A proper library of play-kitchen food
- Storage solutions for all the Play-Doh tools I've now printed
- More generators, built in fifteen-minute increments

## Reflections

The interesting bit isn't the printer - it's the loop. Describe a thing in words, get Python that makes the geometry, get an object in your hands a few hours later. On maternity leave. One-handed. That's a genuinely new kind of making, and I don't think I've found the edges of it yet.

[More on how it came about →](/blog/play-doh-driven-development)
