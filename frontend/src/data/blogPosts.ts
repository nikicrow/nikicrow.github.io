export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "maternity-leave-ml-engineer",
    title: "What No One Tells You About Maternity Leave as an ML Engineer",
    excerpt: "The reality of stepping away from fast-moving tech while growing a human. Spoiler: your models will be fine, you won't be obsolete, and it's okay to not check Slack.",
    date: "2026-01-28",
    readTime: "7 min read",
    category: "Parenting",
    content: `I'm currently pregnant with my second and gearing up for another round of maternity leave. The first time around, I had so many fears that, looking back, seem almost comical. But they were very real at the time.

## The Fear of Becoming "Obsolete"

Tech moves fast. ML moves faster. I was convinced that taking 6 months off meant I'd return to a world where transformers were old news and everyone had moved on to something I'd never heard of.

Reality check: Yes, new papers come out constantly. Yes, frameworks evolve. But the fundamentals don't change that quickly. And honestly? Most production ML isn't using the bleeding edge anyway.

When I came back, I spent a weekend reading about what I'd missed, and I was caught up. The skills that matter most—problem formulation, data engineering, production debugging—those didn't go anywhere.

## Your Team Will Survive (And So Will Your Projects)

I had intricate handover docs. I had backup plans for my backup plans. I was SO worried about my projects falling apart.

They didn't. Your team is more capable than you think. And if your projects truly can't survive without you for a few months, that's a different problem entirely.

## The Guilt is Real (And Mostly Pointless)

Guilt about leaving work. Guilt about thinking about work. Guilt about not being productive. Guilt about enjoying time with your baby when you "should" be keeping up with papers.

Here's what helped me: I wasn't "on leave from my career." I was literally growing and caring for a human. That's not nothing. That's not less important than shipping code.

## What I Wish I'd Done Differently

**Set clearer boundaries**: First time around, I still checked Slack. I still responded to "urgent" questions. This time? I'm logging out completely.

**Trusted my brain more**: I was worried about "losing" technical skills. But your brain doesn't unlearn Python in 6 months. You're not starting from zero.

**Prepared financially better**: Having a cushion reduces SO much stress. We saved aggressively before my first leave and it made everything easier.

## What I'm Doing This Time

- Complete Slack/email blackout (emergency contact via phone only)
- Pre-scheduling some blog posts so I feel connected on my terms
- Having a "return to work" plan that includes ramping up slowly
- Letting go of FOMO about conferences, launches, or "the next big thing"

## The Bottom Line

Maternity leave in tech comes with unique anxieties, especially in fast-moving fields like ML. But you're not going to become obsolete. Your skills will still be there. Your career will recover.

And honestly? Stepping away gave me perspective that made me better at my job when I returned. I came back with clearer priorities and less tolerance for busywork.

You've got this. 💪`
  },
  {
    slug: "toddler-teaches-machine-learning",
    title: "Everything My Toddler Taught Me About Machine Learning",
    excerpt: "Turns out, raising a 2-year-old is basically training a very noisy, non-differentiable neural network. Here's what parenthood taught me about ML.",
    date: "2026-01-20",
    readTime: "6 min read",
    category: "Parenting",
    content: `My 2-year-old daughter has been an unexpected teacher when it comes to understanding machine learning. Seriously. The parallels are uncanny.

## 1. Data Quality > Data Quantity

I can tell her "don't throw food" 100 times. But one dramatic reaction (positive or negative) will be learned instantly.

Same with ML: You can have millions of noisy training examples, but a few high-quality, well-labeled ones will outperform every time.

## 2. Overfitting is Real

She learned that crying gets her a snack at 3pm. Now she cries at 3pm even when she's not hungry.

She's overfit to the training data. The model (her brain) memorized the pattern without learning the underlying concept (crying for snacks when actually hungry).

## 3. Distribution Shift Breaks Everything

My daughter is an angel at home. Absolute chaos at her grandparents' house.

Same model, different distribution. Your production environment will never match your test set perfectly.

## 4. Reward Shaping is Hard

We tried rewarding her for using the potty. She started asking to go potty every 5 minutes to collect rewards (she wasn't actually going).

She found the reward function exploit. Classic RL problem.

## 5. Catastrophic Forgetting

She knew all her colors. Then she learned animal names. Now everything is "blue doggy" regardless of color or animal.

New learning interfered with old learning. Continual learning is hard, whether you're a neural network or a toddler.

## 6. Interpretability Matters

Half the time I have no idea WHY she's melting down. What triggered it? What made it worse?

Same energy as debugging a deep neural network. "It's wrong, but I can't tell you why."

## 7. Transfer Learning Works

She learned "hot" means "don't touch" with the stove. Now she applies it to everything dangerous. The pool is "hot." The cat when annoyed is "hot."

She transferred the concept across domains. That's literally what we try to do with pre-trained models.

## 8. Sleep is Regularization

When she's well-rested, she learns better. When she's tired, everything falls apart.

Sleep deprivation = removing regularization from your training. Performance tanks. (Applies to toddlers AND ML engineers working at 2am.)

## The Meta Lesson

Both ML and parenting are about:
- Trying something
- Observing what happens
- Adjusting your approach
- Accepting you'll never have perfect understanding or control

And honestly? Both are humbling in the best way.`
  },
  {
    slug: "second-pregnancy-different",
    title: "Second Pregnancy Hits Different: A Tech Mum's Perspective",
    excerpt: "Pregnant while parenting a toddler and working in tech. It's exactly as chaotic as it sounds, but also surprisingly beautiful.",
    date: "2026-01-10",
    readTime: "5 min read",
    category: "Pregnancy",
    content: `I'm currently pregnant with baby #2, and let me tell you: everything is different this time around.

## First Pregnancy: The Research Project

First time around, I treated pregnancy like a research project. I read ALL the books. I had a spreadsheet for nursery purchases. I optimized everything.

I knew exactly how many weeks pregnant I was at any given moment. I tracked every symptom. I had a birth plan that was basically a technical specification document.

## Second Pregnancy: Survival Mode

This time? I regularly forget how many weeks pregnant I am. I have to do mental math to figure it out.

The nursery will be "toddler's room with a bassinet shoved in." 

Birth plan? "Get baby out safely." That's it. That's the whole plan.

## Chasing a Toddler While Exhausted

First trimester exhaustion + active 2-year-old = a new circle of hell.

First pregnancy, I could nap whenever I was tired. Now? My toddler does not care that I'm growing a human. She wants me to read "The Very Hungry Caterpillar" for the 47th time today.

Also, picking up a toddler when you're pregnant is a workout. My back is already complaining and I'm only in second trimester.

## Work is... Complicated

First pregnancy, I could power through the fatigue with coffee (well, limited coffee) and sheer will.

This time, I'm running on fumes while trying to:
- Debug production ML models
- Attend meetings
- Pretend I'm not about to fall asleep at my desk
- Deal with toddler sick days

The combination of pregnancy brain + toddler sleep deprivation + debugging complex systems is... challenging.

## The Emotional Difference

First time: Excitement! Wonder! Every milestone felt magical!

Second time: Still exciting, but also: "Wait, I have to do sleep deprivation AGAIN?"

But here's the thing—I also have perspective now. I know the newborn phase is temporary. I know I'll survive the sleep deprivation (barely, but still). I know it gets easier AND harder in different ways.

## What's Better This Time

I'm not sweating the small stuff. Baby will sleep where baby sleeps. We'll figure it out.

I'm not buying all the gadgets. We learned what we actually used last time (spoiler: not much).

I'm asking for help without guilt. I have a toddler, a full-time job, and I'm growing a human. It's okay to need support.

## The Beautiful Part

Watching my daughter pat my belly and say "baby" melts my heart.

Knowing she'll have a sibling, a built-in friend, makes all the chaos worth it.

And honestly? As hard as this is, I'm grateful I get to do it. Not everyone gets this experience, and I don't take it for granted.

## To Other Second-Time Mums in Tech

You're not failing because you're not "optimizing" this pregnancy.
You're not less excited just because you're more realistic.
You're not a bad employee because you're tired.
You're doing something incredibly hard, and you're doing it beautifully.

We've got this. (Most days. Probably.) 💪🤰`
  },
  {
    slug: "attention-is-all-you-need-revisited",
    title: "Attention Is All You Need: Revisited in 2026",
    excerpt: "Reflecting on the transformer architecture seven years later. What did we get right? What surprised us? And where are we headed next?",
    date: "2025-12-15",
    readTime: "8 min read",
    category: "Machine Learning",
    content: `The transformer architecture, introduced in the seminal 2017 paper "Attention Is All You Need," fundamentally changed how we approach sequence modeling. Seven years later, it's worth reflecting on what this architecture got right, what evolved, and what still surprises us.

## The Core Insight

The key innovation wasn't just about replacing RNNs—it was about making parallelization possible while maintaining the ability to model long-range dependencies. The self-attention mechanism allows every position in a sequence to attend to every other position, creating O(n²) complexity but enabling O(1) path length between any two positions.

## What We Didn't See Coming

While the original paper focused on machine translation, few predicted how transformers would dominate across modalities. From GPT to DALL-E, from protein folding (AlphaFold) to music generation, the architecture proved remarkably versatile.

The scaling laws were another surprise. The relationship between compute, data, and model performance turned out to be more predictable than anyone expected, leading to the "scaling is all you need" approach of recent years.

## Challenges That Remain

Despite their success, transformers have limitations:

- **Quadratic complexity**: For very long sequences, attention becomes computationally prohibitive
- **Context windows**: Even with advances like rotary embeddings, there are practical limits
- **Sample efficiency**: Transformers are data-hungry compared to human learning

## Looking Forward

The future likely involves hybrid architectures that combine the best of transformers with other mechanisms. State space models, attention variants, and novel approaches to long-context modeling are all active areas of research.

But seven years on, the core insight remains: attention really is all you need—at least for now.`
  },
  {
    slug: "pumping-at-work-tech",
    title: "Let's Talk About Pumping at Work in Tech",
    excerpt: "The unglamorous reality of being a working mum who pumps. Finding lactation rooms between standups, debugging with a breast pump running, and why we need to normalize this.",
    date: "2025-11-18",
    readTime: "6 min read",
    category: "Parenting",
    content: `Content warning: This post discusses breastfeeding and pumping in detail. If that makes you uncomfortable, this might not be the post for you.

Still here? Good. Let's talk about something that affects millions of working mums but rarely gets discussed in tech: pumping at work.

## The Reality

I returned to work when my daughter was 4 months old. I was determined to continue breastfeeding, which meant pumping 3x per day at work.

Here's what that actually looked like:

**7am**: Feed baby before leaving
**10am**: Pump (20 minutes + setup/cleanup)
**1pm**: Pump (20 minutes + setup/cleanup)
**4pm**: Pump (20 minutes + setup/cleanup)
**6pm**: Feed baby when home

That's ~90 minutes of your workday just... not working. Not to mention the mental load of scheduling it around meetings.

## The Logistical Nightmare

**Finding a space**: I was lucky—my office had a dedicated lactation room. But it was ALWAYS booked. I've pumped in bathroom stalls (not ideal), empty conference rooms (awkward when someone walks in), and once, desperately, in my car.

**Scheduling around meetings**: "Sorry, can we move the 1pm? That's my pump time." You say it once, it's fine. You say it every week, you feel like you're being difficult.

**Storing milk**: Our office fridge had a "lactation section." Which meant my milk sat next to someone's leftover curry. Cool cool cool.

## The Technical Challenges

Yes, I'm calling them technical challenges.

**Hands-free pumping while coding**: I bought a hands-free pumping bra specifically so I could keep working. I've written some of my best code while pumping.

**Video calls while pumping**: Strategic camera angles and "I'm camera-off today" became my friends.

**The mental context-switch**: You're deep in debugging, then alarm goes off, and you have to physically stop and pump. Then try to get back into flow state.

## What Made It Easier

**Supportive team**: My manager explicitly said "pumping time is work time." That permission to not feel guilty was huge.

**Block it on calendar**: I blocked "Personal" time. Everyone knew what it meant, no one questioned it.

**Having backup supplies**: Extra pump parts at work saved me multiple times.

**Lowering expectations**: I wasn't as productive during those months. That's okay.

## What Would Have Made It Better

**More and better spaces**: One lactation room for a 200-person office isn't enough.

**Less stigma**: I shouldn't have to whisper "pumping" like it's a dirty word.

**Flexibility**: Some days I needed to pump at 10:30, not 10:00. Rigid schedules don't work with biology.

## Why This Matters

About 80% of new mums start breastfeeding. Many want to continue when they return to work. But the lack of support means many stop earlier than they wanted.

We talk about diversity in tech. We talk about retention of women. But if we don't support the practical realities of being a working mum, we're going to keep losing talented women from the industry.

## To Other Pumping Mums

Block that time. Don't apologize for it. Your body is doing something amazing.

If someone makes you feel bad about it, that's their problem, not yours.

And if you decide to stop? That's okay too. Fed is best, and your mental health matters.

## To Everyone Else

If a colleague says they need to pump, just say "of course" and move on. Don't make it weird.

If you're in leadership, push for better lactation facilities.

If you're in a meeting and someone says they need to step out, don't make them explain why.

We normalize coffee breaks. We can normalize feeding breaks too.`
  },
  {
    slug: "from-trading-floor-to-ml-pipelines",
    title: "From Trading Floor to ML Pipelines: Lessons Learned",
    excerpt: "What trading at Goldman Sachs taught me about building robust machine learning systems.",
    date: "2025-10-10",
    readTime: "6 min read",
    category: "Career",
    content: `Moving from a trading desk at Goldman Sachs to building ML systems was a bigger transition than I expected, but the lessons from trading have proven invaluable.

## Risk Management Translates Directly

On the trading floor, risk management isn't optional—it's the difference between a career and a cautionary tale. The same applies to ML systems:

- **Know your exposure**: Just as traders track Greeks and VaR, ML engineers need to monitor model drift, feature importance, and prediction confidence
- **Fail gracefully**: Trading systems have circuit breakers; ML systems need fallbacks and monitoring
- **Quantify uncertainty**: Probability isn't just for options pricing—it's essential for production ML

## The Importance of Latency

In high-frequency trading, microseconds matter. While ML systems rarely need microsecond latency, the discipline of thinking about performance, profiling bottlenecks, and optimizing critical paths is essential.

I've seen too many ML projects that work beautifully in a notebook but fall apart in production because no one thought about inference time or memory constraints.

## Production is Everything

Trading systems don't get partial credit for "working in backtesting." They either make money in live markets or they don't. Similarly, ML models that perform well in development but fail in production are worthless.

This mindset shift—from research to engineering, from accuracy on a test set to business impact in production—is crucial.

## Data Quality is Non-Negotiable

Bad data in trading leads to bad trades. Bad data in ML leads to bad models. The discipline of data validation, cleaning, and monitoring that's second nature in finance serves ML engineering extremely well.

## Final Thoughts

The transition from finance to ML wasn't about forgetting what I learned—it was about applying those lessons in a new domain. Both fields require rigor, attention to detail, and a healthy respect for what can go wrong in production.`
  },
  {
    slug: "working-pregnant-tech",
    title: "Working While Pregnant in Tech: The Unfiltered Truth",
    excerpt: "Pregnancy brain during code reviews, explaining morning sickness in standups, and why 'just take it easy' isn't actually helpful advice.",
    date: "2025-09-05",
    readTime: "7 min read",
    category: "Pregnancy",
    content: `I'm writing this from my desk, 25 weeks pregnant, after forgetting what I was going to say mid-sentence in a meeting. Again.

Let's talk about what working while pregnant in tech actually looks like.

## First Trimester: The Secret Keeping

You're not "supposed" to tell anyone until 12 weeks. Which means you're:

- Leaving meetings to throw up (while claiming it's food poisoning)
- Falling asleep at your desk (while claiming you had a late night)
- Declining happy hour (while making up increasingly ridiculous excuses)

The secrecy adds a layer of stress to an already exhausting time. And if you're having a rough pregnancy? You're suffering in silence while everyone wonders why your performance is off.

## Pregnancy Brain is REAL

"Pregnancy brain" sounds like a cute joke until you:

- Forget what variable you just named (while writing code)
- Lose your train of thought mid-standup
- Can't remember if you already pushed that commit
- Walk into a room and have no idea why you're there

I now take twice as many notes as before. My code reviews take longer because I have to really concentrate. I triple-check everything.

## The Physical Challenges

**Sitting**: After a certain point, sitting at a desk for 8 hours is uncomfortable. My setup that worked great pre-pregnancy? Needs constant adjustment now.

**Standing**: Standing desks are great until your back and feet start hurting after 20 minutes.

**Fatigue**: Some days I'm fine. Some days I'm so tired I could cry. The unpredictability is the hard part.

**Bathroom breaks**: I now know the location of every bathroom near every meeting room. I've excused myself from calls more times than I can count.

## The Mental Load

Beyond the physical pregnancy, there's:

- Doctor appointments (during work hours)
- Preparing for maternity leave
- Worrying about leave timing
- Dealing with everyone's opinions about everything
- Trying to prove you're still competent despite the limitations

## What Would Actually Help

**Flexibility**: Some days I need to start late or finish early. Flexibility makes everything easier.

**Grace**: If I'm quieter in meetings or need things repeated, it's not because I don't care. My brain is literally growing another human.

**Better leave policies**: The fact that I'm stressed about leave timing and job security while pregnant is absurd.

**Normalize it**: Pregnancy isn't a shameful secret. Let's stop treating it like one.

## To Pregnant People in Tech

You're not imagining it—this IS hard.
You're not failing—you're doing two full-time jobs.
You're not being dramatic—your body is doing something intense.

Take the break. Ask for accommodations. Protect your peace.

## To Managers and Colleagues

Ask "what do you need?" and then actually provide it.
Don't assume pregnancy = incompetence.
Flexible schedules aren't a favor—they're a necessity.
And please stop asking if we're "excited." Sometimes we're just tired.

This is hard, but we're doing it. And that's worth acknowledging.`
  },
  {
    slug: "philosophy-of-debugging",
    title: "The Philosophy of Debugging: A Mental Model",
    excerpt: "Debugging is more than finding bugs—it's a systematic approach to understanding complex systems.",
    date: "2025-08-22",
    readTime: "5 min read",
    category: "Programming",
    content: `Debugging is often treated as a necessary evil, something you do when things break. But I've come to see it differently: debugging is a systematic methodology for understanding complex systems, and the mental models we use for debugging reveal a lot about how we think about software.

## The Scientific Method

Good debugging follows the scientific method:

1. **Observe**: What is actually happening? (Not what you think should happen)
2. **Hypothesize**: What could cause this behavior?
3. **Predict**: If my hypothesis is correct, what else should be true?
4. **Test**: Design an experiment to validate or refute the hypothesis
5. **Iterate**: Refine your understanding and repeat

The key is treating your codebase as a system to be understood through empirical observation, not just through reading the source code.

## Binary Search Your Assumptions

When debugging, you're not just searching for a bug—you're searching through the space of your assumptions. Which assumptions are correct? Which are wrong?

Binary search applies here too. Instead of checking every line of code, ask: "Is the bug in the first half or the second half of the execution path?" Narrow down the problem space systematically.

## Embrace the Paradox

When you encounter behavior that seems impossible given your understanding of the system, resist the urge to dismiss it. The computer is never wrong about what it's doing—only your model of what it's doing.

These "impossible" bugs are opportunities. They're telling you something fundamental about your mental model is incorrect. Embrace that discomfort and update your model.

## Keep a Debug Log

I keep a debugging journal. When I encounter a particularly tricky bug, I write down:

- What I observed
- What I expected
- My hypotheses
- What I tried
- What I learned

This practice transforms debugging from frustration into learning. Patterns emerge. You start recognizing bug "shapes" and building better intuition.

## Conclusion

Debugging well is about thinking well. It's about systematic investigation, hypothesis testing, and a willingness to update your mental models when they don't match reality.

The best debuggers aren't necessarily the ones who know the most—they're the ones who question their assumptions most effectively.`
  },
  {
    slug: "toddler-sick-days-remote-work",
    title: "Toddler Sick Days & Remote Work: A Survival Guide",
    excerpt: "Your 2-year-old has a fever, nursery won't take her, and you have three meetings. Here's how to survive without losing your job or your mind.",
    date: "2025-07-14",
    readTime: "5 min read",
    category: "Parenting",
    content: `It's 7:30am. Your toddler has a fever. Nursery calls to say "keep her home." Your calendar shows back-to-back meetings. 

Welcome to the special circle of hell that is Remote Work Toddler Sick Day.

## The Impossible Math

You can't:
- Let your sick toddler suffer alone
- Miss all your meetings
- Get any deep work done
- Be fully present for either role

Something has to give. Usually, it's your sanity.

## Survival Strategies That Actually Work

**1. Triage Your Day**

At 7:30am, I scan my calendar and categorize:
- Must attend (1:1s with reports, critical launches)
- Can reschedule (most meetings)
- Can skip (honestly, more than you think)

Then I immediately send messages: "Toddler is sick, need to reschedule." Most people are understanding.

**2. The Cocomelon Treaty**

Normal rules about screen time? Suspended during sick days.

My daughter watches more TV on sick days than the entire rest of the week combined. And that's OKAY. Survival mode has different rules.

**3. Strategic Bribery**

Special snacks. New sticker book. That toy you were saving for her birthday? Today's the day.

Whatever keeps her occupied for your critical meeting.

**4. Warning People**

Start meetings with: "My toddler is home sick, you might hear her."

This has three benefits:
- Sets expectations
- Gets sympathy
- Makes it less awkward when she inevitably screams

**5. Camera Off is Your Friend**

You don't need to be on camera while simultaneously:
- Taking a temperature
- Dispensing medicine
- Cleaning up spills
- Comforting a crying child

Audio-only is fine.

## What Usually Happens

Despite your best planning:

Your toddler will need you RIGHT as you're making a critical point in a meeting.

The medicine you thought you had? Expired.

The "quiet activity" will last 8 minutes max.

You'll get maybe 40% of your intended work done.

And that's okay.

## What I Wish Someone Had Told Me

**It's not sustainable**: If your kid is sick more than a day or two, you need backup. Partner takes over, grandparent helps, you take actual sick leave. Trying to do both jobs for extended periods doesn't work.

**People understand**: Most colleagues have been there. The ones who haven't? They'll get there eventually.

**Your kid needs you**: Yes, work is important. But your feverish toddler wanting cuddles? That's important too.

## To Managers

When an employee says "my kid is sick," the correct response is: "Take care of them, we'll figure it out."

Not: "Can you still make the meeting?"
Not: "Is there someone else who can watch them?"

Just: "Hope they feel better, see you when you're back."

## The Bottom Line

Sick toddler + remote work = survival mode.

Lower your expectations for the day.
Do what you can.
Give yourself grace.

Tomorrow will be better. (Probably. Maybe. Hopefully.)

And hey, at least you don't have to commute while dealing with this? Silver lining? 

🤷‍♀️🤒💻`
  }
];
