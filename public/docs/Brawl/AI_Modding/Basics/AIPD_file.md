# The `AIPD` file

the `AIPD` file controls various things that determine when the AI might run its scripts.

It is organized into various parts. In order, they are:

- Attack dice roll table
- Routine call table
- Threshold values

Here I'll go over each one

## Attack Dice Roll Table:

This is what controls what attacks the AI will perform when `AtkDiceRoll` is used. Sadly I'm not too familiar with how the numbers work - so I would just go with `100,100` if I were you to give each move an equal chance of being rolled. The numbers definitely have something to do with the frequency based on the CPU's underlying level, but nobody is quite sure how they work at the moment. If someone knows how they work, raise an issue on the [github repository](https://github.com/BrawlRE/BrawlRE.github.io/issues) for this site and we'll take a look!

Once the `AtkDiceRoll` is used with a slot (so like `AtkDiceRoll slot1`, for instance) it will force the AI to perform that attack the next time `Call` is used without any arguments.

In every CPU I've found there is a maximum of 24 different slots, `slot0` through `slot23`, so uhh... don't go over that amount unless you want to risk crashes.

## Routine Call Table:

these control the circumstances in which the AI will automatically perform different routines. The circumstances in question are found in the `Events.h` file in the `Include` directory. The syntax works like this:

```as
Event {
  Routine freq1,freq2,???,???
}
```

To be honest, not a whole lot is known about this section. The number of routines you can have in a single event seems to be arbitrary/unlimited though, so go wild if you so desire. When the game checks for these conditions, if the `Event` returns a `true` value, then it will force the character into one of these Routines if it isn't already within one.

The numbers on the end are similar to the ones in the `AtkDiceRoll` table. They definitely have something to do with the frequency, but not a whole lot is known about them. What seems to happen though is that setting them all to `100,100,0,0` will give them each an equal chance of being chosen, whereas `0,0,0,0` will prevent them from being chosen, but will still allow them to be running that script when that condition is checked.

If you want a condition to apply over multiple entries, you can do this:

```as
if condition

Event {
  Routine freq1,freq2,???,???
}

Event {
  Routine freq1,freq2,???,???
}

endif
```

Be aware that each `if` and `endif` technically counts as its own entry.

The "Sections" are weird... I'm not *entirely* sure how each one works, nor do I fully understand how exactly they override the common AI, but I'll do my best to explain my current understanding:

### Section 1:

This seems to be the section of checks the game runs when the character is offstage (when the game says "okay it's time to recover"). The game is very strict about this section and will call upon it *automatically* - which led to lots and *lots* of frustration when researching it.

### Section 2:

This section seems to run whenever the character is in the air and they aren't currently executing another script. This can happen when they're knocked into hitstun or something of that nature.

### Section 3:

This seems to be just like Section 2, except for the case where the character is on the ground.

### Beyond that:

You might notice that Section 3 actually ends before the remaining entries in some cases. Your guess is as good as mine here.

### If No Other Conditions Are Met:

If none of the events are met yet the character is in the position that the `Section` checks for, it seems to default to that statement's `True` statement in the Common AI.

## Threshold Values:

For most of these, I have no clue what they do. The game likely uses them internally in some sort of way to determine things such as how far away the target is to trigger the "fxFar" event and such. The only ones I have a clue about are the `unk.section1Start` through `unk.section3End`, which, as the names suggest, tell the game where sections 1 through 3 start and end.