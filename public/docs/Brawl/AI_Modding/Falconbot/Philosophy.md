# AI Philosophy

AI in a platform fighter is often overlooked to an egregious degree. It can do so much more than just exist to look cool, or fight "like a robot." An AI in these sorts of games can offer a glimpse into what the game can offer, give players a way to practice offline, or just add to the appeal of singleplayer content in a game overall.

For instance, I personally find it quite fun just to see what AI can do when fighting one-another. In Melee, the AI doesn't really do anything special aside from seek the opponent, leading to often relatively-boring matches compared to something like Super Smash Bros Ultimate. In Ultimate, it is clear that developers have spent countless hours researching and developing AI - and it has paid off spectacularly.

### The "Ultimate" AI

There are entire youtube channels dedicated to spectating these wonderful ones and zeros clash against eachother in a spectacular fashion. Sometimes they'll do something we think is incredibly dumb only to blow our minds (or fail hilariously) seconds later! Sometimes they'll followup on another player's attack and combo the opponent in an epic display (DK and his fAir come to mind).

These are some of the most realistic AI out there when it comes to platform fighters, and are, in my opinion, a beautiful demonstration of what one should aim for when crafting an AI that is not-only fun to fight, but also *watch*.

## The Many Theses of Smash Bros

The ability to mod AI gives us a unique opportunity - one we don't really find in other games. It enables us to test ideas, push boundaries, and obtain insight into what folks might consider the "best" way to play the game.

However, what some consider the "best" way to play the game isn't always the most *optimal*. A video on an incredible youtube channel called "Melee Stats" has an interesting video that explores the topic: [Michael vs. Bananas - The Only Reason We Play Melee](https://www.youtube.com/watch?v=z8llYT7KGdI).

What we learn from that video can be applied to AI design as well, and has even to some extent been seen in the Melee community already with the creation of [AltF4](https://twitter.com/2600AltF4) and [TeeAyEye](https://twitter.com/TeeAyEye) to create [Smash Bot](https://twitter.com/SmashBotMelee), a bot with the goal of playing Melee fox *perfectly*. Originally, the design goal was to always win games without taking a single hit of damage. However, as things evolved, the goal has shifted to pushing Melee Fox to its limits in a slightly more realistic manner (note: I cannot speak for these really cool developers, I'm just going off what I remember from one of our conversations).

A top player, [Axe](https://twitter.com/TempoAxe), went up against this perfect AI live on twitch and everyone was totally *blown away.* "wow, a live TAS" thought twitch chat - but over time, while Axe, the player, was still having fun, chat occasionally wanted more. Of course, being an AI that is still under-construction with the intention of playing *the best*... it "only" knew how to do what was best: waveshine infinites, perfect/safe dashdances, perfect shield punishes, and up smash.

All of these things had to be meticulously programmed by hand in the python programming language, accounting for things like SDI, ledge options, and more. It is *incredibly* hard to convey just how much stuff is considered when developing this bot. You can see its source code [here: https://github.com/altf4/SmashBot](https://github.com/altf4/SmashBot).

Yet, twitch chat wasn't entirely satisfied. Some wanted to see punishes and combos involving more moves, such as the classic up throw into up air. To program that in perfectly involves not only perfect inputs but also perfect *decision-making*, otherwise it becomes punishable, costing smashbot some percentage.

While it technically might be possible to know how to do everything in Melee perfectly one day, there is still the matter of ultimately outsmarting and *engaging* with your opponent at some point - something which I will be the first to admit is a scary, and occasionally frustrating experience, but is ultimately a fundamental part of the experience.

Axe was able to do this eventually and, though a series of decisions crafted after hours of playing against smashbot, managed to take a single game.

### What I learned

Developing a perfect bot is near-impossibly difficult. it's incredible that altf4 and TeeAyEye were able to pull off what they have been developing for so long to even the extent that they have.

It is with this, twitch chat's reaction, and Michael vs. Bananas in mind, that I say aiming for *perfection* in these bots is not something that should be considered if the end-goal is to make your character accessible and fun to fight. In many situations, there is no singular right answer.

If the bot's opponent really wants to sit there on the ledge forever to win, constantly refreshing their invincibility forever, then they can go right ahead and do so, and that is okay.

## My Mission

My mission is to build an AI framework for Project Plus that enables myself and other developers to focus on relatively realistic techniques that players might use. It will not try to be perfect, and it will not use the inhuman reaction time of a bot to counter every attack. It will attempt to capture the approximate playstyle of a generic, mid-level falcon main that goes above and beyond at being "good enough."