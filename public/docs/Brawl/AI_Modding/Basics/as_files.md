# .as Files

`.as` files are the files that are responsible for making AI perform specific actions. An AI can perform an action from one `.as` file at a time in-game. The `.as` file chosen depends on the situation the AI is in as determined by either hard-coded values (in the case of taunting when no other opponent is there) or, more frequently, the `.aipd` file.

This article will teach you how to program the `.as` files themselves.

## Different numbers

Each numbered file corresponds to a different routine that the AI performs. Some of these are special and are coded by-default to do certain things. This default behavior can *usually* be found in the fighter AI within `common3.pac`. However, these behaviors can usually be overwritten to technically do whatever you want.

You can find out what each one *generally* corresponds to in the `Routines.h` file in the `include` folder.

## General Syntax

the `.as` format uses a scripting language defined by the `include` files that are directly converted to commands used by the game. There are certain things included by default that allow you do do things easily, including various control flow operations, logical symbols, and mathematical operators.

In this guide I'll be detailing how the basic things work as they are in the `include` files linked in [getting started](/Brawl/AI_Modding/Basics/getting_started).

## Variables



## Control Flow

control flow means things such as `if`, `jump`, `goto`, `seek`, `label`, and `Return`. These all work together to make a script function. I'll go over each one here.

### `if`, `else`, `elif`, and `endif`

if statements are the basic way of making something happen only if a condition is met. They are used like this:

```as
if 3 >= 2
  Button A
endif
```

This will make the AI perform an attack input for that frame of execution if 3 is greater 2. This condition is always true, but it works with variables too! - we can also add a case for when that condition is false.

```as
if var1 > 2
  Button A
else
  Button B
endif
```

Now this will make the AI perform an attack input if `var1` is greater than 2. Otherwise, it will execute a special input.

But what if we want to add another condition and make it press B only if `var1` is less than 0? Well, we'll just do this:

```as
if var1 > 2
  Button A
elif var1 < 0
  Button B
endif
```