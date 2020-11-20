# The Melee Airdodge System...

...has commonly been a source of problems when it comes to AI. The AI, without any adjustments, will go through its regular airdodging routines that are carried over from Brawl. As you can imagine, this is an issue. This causes many, many, *many* self-destructs which lead to frustration on the part of players that just want to have a good fight in singleplayer mode.

The most prominent place this happens in is ProjectM/+

This guide will cover exactly what scripts cause the AI to SD when trying to perform their inputs, and the reason for them doing so (if known).

## Scripts

### `2050.as`

`2050.as` is responsible for controlling what happens when the AI is or has been put into a damaged state. In an attempt to make the AI tech, a shield input is given every 40 frames:

```as
if FramesSinceShield >= 40
    Button R
endif
```

This piece of code is the culprit. What this code *doesn't* check is whether or not the character is still in hitstun. This is an easy fix:

```as
if FramesSinceShield >= 40 && FramesHitstun > 0
    Button R
endif
```

### `2060.as`

the AI is forced into `2060.as` whenever they're hanging on the ledge. This would normally not be an issue, but the AI is able to choose to jump from the ledge as one of its random options. In PM, this action is able to be canceled into another action, including airdodge, fairly quickly. The AI also doesn't actually *leave* `2060.as` until roughly a second after they have left the ledge hanging state. This causes the AI to repeatedly input random buttons that normally correspond to ledge options, which can occasionally result in the AI jumping from the ledge then attempting to roll from the ledge shortly after, ultimately causing the AI to airdodge offstage to its demise.

This can be fixed in a number of ways, but to enable the AI to take action after jumping from the ledge, we'll just make it so it cannot press `R` if it's not on the "edgehang" state:

```as
else
    Button R
    Stick var20 (-0.5)
    Finish
endif
```

becomes

```as
elif Equal AirGroundState 3
    Button R
    Stick var20 (-0.5)
    Finish
endif
```

### `3020.as`

`3020.as` is one of the routines responsible for handling what happens if the AI detects "danger" from one of its opponents' attacks. This, among other things, can result in it trying to shield. However, there is nothing that tells it to *only* shield *if* the AI is on the ground. This can lead to plenty of airdodges if the AI thinks it's in danger, particularly if offstage or around the ledge.

Here's the easy way of ensuring that it can only do this when on the stage itself:

```as
if !(Equal AirGroundState 1)
    Finish
endif
```

We just put this at the top of the file, and if it tries to execute this routine when it's in the air it simply won't.

### `4020.as`

in PM/+, `4020.as` is the aerial combo routine. This is fine for the most part, except for one issue: Wavelanding. To get around the broken `YDistFloor` implementation, the old PM AI developer (KingClubber) used a quick calculation to get the distance to the floor. Normally this works just fine, but in this particular instance there isn't any check to see if the AI is actually above the stage before it performs the waveland:

```as
GetNearestCliff var1
var3=ExactYCoord-var2
if var3 < 5
```

To fix this, we just add another check to ensure the AI is in-fact above the stage and on it enough to not airdodge offstage just past the ledge:

```as
GetNearestCliff var1
var3=ExactYCoord-var2
var1=ExactXCoord-var1
Abs var1
if var3 < 5 && var1 > 10 && Equal IsOnStage 1
```

A few things are happening here:

`GetNearestCliff var1` puts the nearest cliff coordinate into `var1` ***and*** `var2`. `var1` is the x coordinate whereas `var2` is the Y coordinate. Like before, we get the Y distance to that spot with `var3=ExactYCoord-var2`, but now we *also* grab the X distance to that spot with `var1=ExactXCoord-var1` and `Abs var1`. This in combination with `Equal IsOnStage 1` tells us that we are on stage, `var1` units from the edge. Therefor, we can safely waveland.

> **Note:**
>
> Under the hood, `IsOnStage` is effectively the equivalent of `YDistFloor` except it will return a `1` or a `0` if the character is over the stage. This code happens to work, whereas `YDistFloor` only works with specific types of surfaces and platforms.)

### `2010.as`

in the common AI files, `2010.as` is responsible for the jumping onto the stage. To do this safely in brawl, the AI can easily jump and airdodge to the ledge without any trouble. Here though, it will just... die.

The rest of the functionality is usually fine though, so what we can easily do is copy over the common `2010.as` and remove any `Button` inputs that have `R` in them.

### `70.as`

in ProjectM/+ `70.as` was turned from the "roll" script into the "wavedash" script. This would normally be just fine, but it is missing a few checks that are critical to making it function without causing SDs:

the first two `if` statements are missing an `InAir` check - meaning the AI will still try to wavedash even if it's already in midair. Then in the label directly under those checks, it once again fails to ensure that it's on the ground.

```as
if DistFrontEdge < 25 || !(ODistLE 60) || InAir
    Finish
elif DistBackEdge < 25 || !(ODistLE 60) || InAir
    Finish
endif
//____________________
label
if FrameGE 0 && !(FrameGE 1) && Equal AirGroundState 1
    Button X
endif
```

put these in the proper places and that'll fix the issue!~

### `6030.as` and `603C.as`

`6030.as` in the common AI is used as a general hub for calculating how / when to use attacks. The culprit here is the Grab routine. It would kinda stink if we had to overwrite the *entire* common attack routine, but fortunately we don't need to do that! Individual attacks can be overridden - so all we need to do is create a `603C.as` file. In this file we'll just add the inputs that make the character grab:

```as
#include <Definition_AIMain.h>
id 0x603C

unk 0x0

if Equal AirGroundState 1 && CurrAction <= hex(0x09)
  Button A|R
else
  Finish
endif
Return
Return
```

and there! That's the entire `603C.as` file. `Equal AirGroundState 1` tests to see if the character is on the ground, whereas `CurrAction <= hex(0x09)` will do two things:

1. prevent the AI from just holding down attack and shield.
2. once the character *does* grab (if it can), it will break out of the script, again preventing it from getting stuck holding attack + shield.