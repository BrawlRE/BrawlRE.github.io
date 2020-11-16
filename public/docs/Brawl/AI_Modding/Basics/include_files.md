# Include Files

This article is about the files in the `include` folder necessary to make the aiscriptpad editor extension work. This will give more information about what each file does and the information they contain.

## `.as` related

The following list of files contain things that are found in Brawl itself. Brawl's basic set of AI features is really quite limited. Though it's *possible* to do cool things with it, it's extremely hard to do anything in-depth.

- Commands.h
  - Commands are things that tell the game to do something. Sometimes this involves changing a variable, while other times this affect the code's control flow.
- Requirements.h
  - Requirements are things that are used in if statements that ultimately return a true or false value.
- Routines.h
  - Allows you to write something like `Call Hop` as opposed to `Call 0x50`
- Functions.h
  - Functions (ironically) take no arguments and return a value based on something happening in-game.

These other files contain commands, functions, and requirements that rely on custom codes added by PM (or fudgepop01). These are what enable you to actually do some really cool things.

- CustomCommands.h
- CustomFunctions.h
- CustomRequirements.h
- ~~CustomRoutines.h~~
  - this one got merged with the original Routines.h for whatever reason, and is therefor made obsolete
- Subactions_common.h
  - a list of subactions that can be put in place of values when comparing against the current subaction and the like
- Chars.h
  - a list of characters that can be put in place of values when comparing against the opponent's character and the like

## `.AIPD` related

- Routines.h
  - used in the different conditional statements to determine what routines are possible to be in when a condition is met
- AIPDDef.h
  - this one is special and appears to show the structure of AIPD at a byte level. Do not touch unless you figure out what it's doing and how to mod it properly
- Events.h
  - like requirements, but for the conditional statements in this file
- Attacks.h
  - a list of the valid attacks that can be called in the AIPD dice roll table

## `.ATKD` related

At a glance, none of the files are relevant here aside from MAYBE `Subactions_common.h`.