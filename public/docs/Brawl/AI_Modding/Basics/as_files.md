# .as Files

`.as` files are the files that are responsible for making AI perform specific actions. An AI can perform an action from one `.as` file at a time in-game. The `.as` file chosen depends on the situation the AI is in as determined by either hard-coded values (in the case of taunting when no other opponent is there) or, more frequently, the `.aipd` file.

This article will teach you how to program the `.as` files themselves.

## Different numbers

Each numbered file corresponds to a different routine that the AI performs. Some of these are special and are coded by-default to do certain things. This default behavior can *usually* be found in the fighter AI within `common3.pac`. However, these behaviors can usually be overwritten to technically do whatever you want.

The time at which certain routines are performed *is* hardcoded in certain scenarios based on the AI "mode" which makes it very difficult to keep things modular.

You can find out what each one *generally* corresponds to in the `Routines.h` file in the `include` folder.

Keep in mind that as of 11/17/2020 you still cannot easily edit the default AI (found in common3) without potentially messing up all sorts of other codes. This is the reason for there being so many different scripts for PM/P+ characters -- they're there to override the default behavior without actually touching common3 itself.

## General Syntax

the `.as` format uses a scripting language defined by the `include` files that are directly converted to commands used by the game. There are certain things included by default that allow you do do things easily, including various control flow operations, logical symbols, and mathematical operators.

In this guide I'll be detailing how the basic things work as they are in the `include` files linked in [getting started](/Brawl/AI_Modding/Basics/getting_started).

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

### `label`, `Return`, `Seek`, `jump`, and `Goto`

These are the fundamental forces behind loops. They are extremely powerful and can help split a function into multiple parts. When one condition is met, you might want to go to another part and go from there - these help do exactly that and more.

#### `label`

The foundation of it all is `label`. you can attach a name to a `label` like this:

```as
label name
```

`label`s define places that you can move forward or jump back to using the other commands. Some commands will do this by waiting a frame before doing so, and some will do so immediately.

#### `Return`

`Return` tells the code to wait 1 in-game frame. On the next frame the script will begin code execution starting from the previous `label` visited, or the top of the script if no `label` was defined. An exception to this rule is with the `Goto` statement, which will be discussed near the end of this control flow section.

> **NOTE:**
>
> For the sake of keeping things stable and predictable, you'll want to end off every repeating script with **two** `Return` statements. This is a quirk in the engine. I'm not entirely sure why it matters so much, but if you don't then you run the risk of having the game crash when the script ends.

#### `Seek`

The `Seek` command by itself will simply wait 1 in-game frame then begin the next from the next label it can find. However, if you give `Seek` a label name as an argument, it will start the next frame from that label. For instance:

```as
Seek butMe

label notMe

// ...code that will be ignored

label butMe

// ...code that will be executed on the next frame
```

This might be used if you want to ignore a certain chunk of code if a condition is met while remaining in the same script by doing the following:

```as
if XCoord > 69
  Seek conditionMet
endif

// ...code that will be ignored if XCoord is greater than 69

label conditionMet

/// ...code that will be executed regardless of whether or not XCoord is greater than 69
```

#### `Jump`

`Jump` is just like return, except it will move to the previous label *immediately*. This is very powerful, but if you aren't careful with your logic you may trigger an infinite loop and softlock the game.

#### `Goto`

`Goto` is a command that can be used to go to a label immediately. This code saves its location and will act as a temporary `label` that tells a `Return` or `Jump` statement to go back to *it* instead of the label that was sought out. This is particularly useful for keeping code clean by splitting it up into chunks or if this code might be used multiple times in a script.

The following basic example demonstrates this concept:

```as
label arbitraryLabel

if FrameGE 50
  Goto jumpExample
else
  Goto returnExample
endif

Return

label jumpExample
  Button A
Jump

label returnExample
  Button A
Return
```

(This example uses a built-in command, `FrameGE`, which checks to see if the current execution frame of the script (how long it has been running) is greater than or equal to the value)

the result of this is the following:

if the execution frame is greater than or equal to 50, then it will result in the AI **holding down** the attack input.

However, if the execution frame is less than 50, the AI will repeatedly tap the attack input -- as in, the AI will *press attack* for one frame and then *release attack* the next frame, repeating this for 50 frames.

## Switching Scripts

There are five main ways of switching scripts:

1. the `AIPD` file forces a script change if a certain condition is met.
2. `Finish` is called, giving control over to the `AIPD` conditions.
3. the number of frames a script has been active for exceeds 180 (3 seconds) (this can be changed with the `SetTimeout` command)
4. `Call` is used with a script name (taken from `Routines.h` in the `include` files) as an argument.
5. `AtkDiceRoll` is used, followed by `Call`.

### `Finish`, `SetFrame`, and `SetTimeout`

`Finish` is a command that forces the current script to end and gives the control over to the conditions specified by `AIPD`.

`SetFrame` sets the "current execution frame" of the script -- the value used in `FrameGE` command and the `NumFrames` function. This does *not* have an effect on the current time the script has been active for, which is kept track of separately.

`SetTimeout` will set the maximum number of frames that a script can run. by default, a move can only run up to 180 frames (3 seconds). By adjusting this value, you can increase or decrease this value to your liking.

### How `AtkDiceRoll` and `Call` work:

`AtkDiceRoll` is a function that takes a slot found in the `AIPD` and stores it in an inaccessible variable elsewhere. This inaccessible variable is used to determine the next script called when `Call` is used without any arguments.

More detail will be given in the page on `AIPD`.

## Variables

Variables are a fundamental part of programming. In the aiscript language, this is no different. Normally you have access to 24 variables: `var0` through `var23`. However, `var22` and `var23` are automatically used as temporary storage in complex calculations with multiple steps. Avoid using these when possible, otherwise you may end up with issues.

Variables are a way to assign and manipulate values that can be used later. They can also be used to perform more complicated calculations.

Assigning to a variable is simple:

```as
var1 = 69
```

This will assign the value `69` to `var1`. `var1` can then be manipulated and used later on in later calculations (though so can 69 itself...)

### Named Variables

New to the aiscriptpad editor extension is the ability to name variables to make it easier to keep track of them! You do so using a `#let` statement. The syntax for this is `#let name = varNum`. In this example we're going to just use the built-in `Abs` function to obtain the absolute value of a number (converting it to a positive value if it is negative):

```as
#let absXPos = var1

absXPos = XCoord
Abs absXPos

// ...do stuff with absXPos
```

now we have the absolute value of the character's x position stored in `var`, but we can access it in the future with `absXPos` (as long as we don't use `var1` in something else).

I recommend naming important variables near the top of the file. An important use case might be the need for a temporary variable that can be used in intermediate calculations that you have full control over.

### Constant Values

Like variables, numbers themselves can be used in calculations too. Some of these values might represent something important, such as the frame a move ends - but you don't want to waste one of your precious variables on something that never changes. So what do you do? You assign them to a named constant! This is another benefit of the aiscriptpad editor extension. The syntax and usage is very similar to named variables: `#const name = value`.

```as
#const moveEndFrame = 69

if FrameGE moveEndFrame
  // ...do something with that information
endif
```

If this value is greater than or equal to the `moveEndFrame`, which is `69` in this case, it will execute whatever code is in the if statement.

Constant values are especially useful when that value is used in multiple places throughout the file. This doesn't use a single variable, yet its value can be adjusted easily during development which makes it *extremely* powerful.

### Variable "Scopes"

There are some variables that are reset back to 0 between scripts. This *appears to* be done by a script that is simply inaccessible and impossible to override. In all my testing, `var10` through `var23` appear to be safe from this. As such they can be called "global" variables - variables that can share information across scripts. Meanwhile, `var0` through `var9` are "local" variables. These are at risk of being reset back to 0, and so cannot reliably be used to share data between scripts.

Sharing data between scripts becomes necessary when developing complicated AI behaviors that use scripts as "steps" along the way to perform a bigger overall action. This can be seen throughout Falconbot.

## Macros (`macros.as`)

Macros are reusable pieces of code that can be written once and used anywhere. this is done through a special `macros.as` file. The following is an example of a macro:

```as
#macro MACRO_NAME
// ...code that gets put wherever the macro is placed after preprocessing
#endmacro
```

to use `MACRO_NAME` in your code, you would simply put `MACRO_NAME` on its own empty line like so:

```as
// ...code that is executed before the macro

MACRO_NAME

// ...code that is executed after the macro
```

in the `__preprocessed` folder that is generated after compiling the AI, you will find that `MACRO_NAME` is replaced by its contents. In the example above, this would just result in something like:

```as
// ...code that is executed before the macro

// ...code that gets put wherever the macro is placed after preprocessing

// ...code that is executed after the macro
```

Macros can also define variables that can be used outside the macro later-on. They can also overwrite them if you're not careful - so watch out! For organizational purposes, I *try* to stick to `var5` through `var9` for macros (though sometimes this is impossible if I require more).

The benefit is multiple scripts might rely on the same code but you need to use it in the same frame. This allows you to accomplish that in an easy way. The code ultimately ends up being repeated in the scripts, but the size of AI is extremely small relative to other components of a character, making it extremely flexible.

## Globals (`globals.as`)

`globals.as` are like macros but for variable and constant definitions. These can be used across every `.as` file *including* `macros.as`. This allows you to make things extremely organized. Instead of declaring global variable names in each and every file, you can do so here. This, like macros, allows you to write and modify all instances of them with ease!

I'm personally using it for Falconbot to make things modular, allowing me to carry a lot of the code over to other characters and adjust a lot of what I need in this file.

## Other Helper Preprocessing Functions

My preprocessor comes with a few functions that are used in a wide variety of places in Falconbot, though will likely go largely unused when coding for vanilla Brawl (or vanilla PM for that matter).

In each case, these convert the given value into a numeric equivalent:

- `color(0x[hex value here])`
  - converts a hex value to a series of four values 0 through 255 representing red, green, blue, alpha
  - used in commands that involve color, such as drawing to the screen.
- `str("[string here]")`
  - converts a string to a series of 5 numbers representing the text. Every 3 characters is 1 value.
  - used when logging to the dolphin console during development.
- `strv("[string here]")`
  - converts a string of 3 characters **OR LESS** to a single number representing that text
  - useful if you want to set a variable to a string or something and test based on that. Other than that, it won't get much use.
- `hex(0x[hex value here])`
  - converts a hex number to a standard number. This is necessary if you want to use a hex value representation of a number in your source code.
  - Without this, hex values starting are added exactly as they are in the resulting `.pac` file, leading to unexpected crashes.

## Things at the Top of Some `.as` Files

You might notice that there are some things at the top of `.as` files that goes something like this:

```as
#include <Definition_AIMain.h>
//TrueID=0x50
id 0x8050

//Set Unknown
unk 0x00000

//Strings
str "#whatever"
...
```

Here is what each of those elements appear to mean:

`#include <Definition_AIMain.h>` is the thing that tells the compiler what coding elements actually exist and how to convert them into the code that the game understands.

```as
//TrueID=0x50
id 0x8050
```

This is responsible for telling the game what script this actually is. The main thing to note here is that `0x8___` will represent `0x0___` instead, hence the `//TrueID=0x50` here.

```as
//Set Unknown
unk 0x00000
```

`unk` is a bit of a relic from knowledge that hasn't been updated in about 10 years as of the writing of this documentation. The only significant part of this value is the hex before the last `0000` (meaning the only significant part in `unk 0x120000` for instance is the `0x12`). This is effectively a shorthand way of setting up to the first `0x18` (24) variables to 0.

So basically just set it to `0x0` to keep your own scripts from erasing your own variables.

```as
//Strings
str "#whatever"
```

Despite the sometimes-curious names, these appear to serve no real purpose. In-fact, removing them appears to change nothing (at least in my experiments). Sometimes there are multiple strings. I wonder if PM changed that somehow.