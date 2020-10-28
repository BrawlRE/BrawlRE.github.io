# Introduction
Floating points or hex values control many different things about [[Articles_(Brawl)|articles]] or a move itself. The floats for a Kirby hat can be found in either FitKirby (most non-articles) or FitKirbyChar (most articles).

## Bowser

### FitKirby

#### Flame
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x3404C | 330.0 | Initial fire angle
0x34050 | 25.0 | Flame spread randomness
0x34054 | 50.0 | Max angle upwards
0x34058 | 40.0 | Max angle downwards
0x3405C | 2.8 | Turning speed
0x34060 | 0.7 | Rotation of flames and head in relation to 3405C
0x34064 | 25 |  Amount of frames spent firing after releasing B
0x34068 | 450.0 |  Refueling/Spacing in gfx?
0x3406C | 70.0 | Spacing in fire gfx
0x34070 | 380.0 | GFX scaling? (smaller = larger)
0x34074 | 80.0 | Minimum distance
0x34078 | 0.7 |  Distance refuel speed?
0x3407C | 0.8 |  Something with distance refueling?
0x34080 | 0.75 |  Something with distance refueling?
0x34084 | 0.75 | GFX scaling over time (larger = smaller)
0x34088 | 30 | Frame count for something?
0x3408C | 7 | Frames between flames
0x34090 | 3.0 | X offset
0x34094 | -0.5 | Y offset
0x34098 | 0.25 | ?? (read on flame gfx reduction)
```
### FitKirbyKoopa
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0xE8 | -3.6 | Landing detection
0xEC | 28 | Frame count for something?
0xF0 | 20 | Frame count for something?
0xF4 | 1.9 | Flame speed
0xF8 | 2.8 | Horizontal momentum of flames
```

## Captain Falcon

### FitKirby

#### Falcon Punch
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x43C28 | 0.125 |
0x43C2C | 0.625 |
0x43C30 | 35.0 |
0x43C34 | 2.2 | Momentum forward
0x43C38 | 0.92 | Momentum from holding up
```

## Charizard

### FitKirby

#### Flamethrower
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2F240 | 330.0 | Initial angle
0x2F244 | 30.0 | Flame spread randomness
0x2F248 | 45.0 | Max angle upwards
0x2F24C | 28.0 | Max angle downwards
0x2F250 | 3.0 | Turning speed
0x2F254 | 0.6 | Turning speed/max rotation?
0x2F258 | 25 | Amount of frames spent firing after releasing B
0x2F25C | 360.0 | Max Speed / Distance Charge
0x2F260 | 70.0 | Min Speed / Distance Charge
0x2F264 | 380.0 | Max Size Charge
0x2F268 | 80.0 | Min Size Charge
0x2F26C | 0.5 | Speed / Distance Recharge Rate
0x2F270 | 0.9 | Size Recharge Rate
0x2F274 | 0.7 | Speed / Distance Drain Rate
0x2F278 | 0.7 | Size Drain Rate
0x2F27C | 30 | Frame count for something?
0x2F280 | 6 | Frames between flames
0x2F284 | 3.0 | X offset
0x2F288 | -0.5 | Y offset
0x2F28C | 0.25 | ??
0x2F290 | -3.6 | Landing detection
0x2F294 | 28 | Frame count before hitboxes (only) are deleted
0x2F298 | 20 | Frame count for something?
0x2F29C | 1.9 | Flame speed
0x2F2A0 | 2.2 | Horizontal momentum of flames
```

## Diddy Kong

### FitKirby

#### Peanut Popgun
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x321C8 | 45.0 | Vertical velocity?
0x321CC | 3.0 | Gravity?
0x321D0 | 1.6 | Base vertical velocity?
0x321D4 | 4.0 | Charge horizontal velocity multiplier?
0x321D8 | 0.03 | Momentum backward from charged firing
0x321DC | 12.0 | Max additional damage (to base peanut throw damage)
0x321E0 | 0.6 |
0x321E4 | 6 |
0x321E8 | 8.0 |
0x321EC | 1.0 |
```

## Donkey Kong

### FitKirby

#### Giant Punch
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x31340 | 10 | How many arm swings to fully charge
0x31344 | 2 |Damage per arm swing (first arm swing has no effect)
0x31348 | 0.12 |
0x3134C | 20.0 |
```

## Falco

### FitKirby

#### Laser
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2DD48 | 12.0 |  X offset grounded laser
0x2DD4C | 1.0 |  Y offset grounded laser
0x2DD50 | 12.0 |  X offset aerial laser
0x2DD54 | 1.0 |  Y offset aeriallaser
0x2DD58 | 0 | Angle laser is fired at (degrees)
0x2DD5C | 5.0 | Laser speed
```

### FitKirbyFalco
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0xA0 | 100 | Laser lifetime (frames)
0xA4 | 3.0 | Laser length
0xA8 | 11.25 | Laser lengthening time? (higher = slower)
```

## Fox

### FitKirby

#### Laser
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2DBA8 | 10.0 |
0x2DBAC | 1.2 |
0x2DBB0 | 10.0 |
0x2DBB4 | 1.2 |
0x2DBB8 | 0 |
0x2DBBC | 7.0 |
### FitKirbyFox
0xA0 | 22 | Laser lifetime (frames)
0xA4 | 3.0 | Laser speed
0xA8 | 11.25 | Laser lengthening time? (higher = slower)
```


## Ganondorf

### FitKirby

#### Warlock Punch
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x43C40 | 0.125 | ?? (read on punch)
0x43C44 | 0.7 | ?? (read on punch)
0x43C48 | 45.0 | ?? (read on punch)
0x43C4C | 0.8 | Momentum forward in air
0x43C50 | 0.92 | Momentum from holding up
```

## Ice Climbers

### FitKirbyPopo

#### Ice Block
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x320 | 1.5 | Speed
0x324 | 3.0 | Speed increase over time?
0x328 | 0 | Y offset
0x32C | -0.2 | Something with rising and vertical momentum
0x330 | -1.65 | Gravity
0x334 | 30 | Frame count for something?
0x338 | 20 | Frame count for something?
0x33C | 10 | Frame count for something?
0x340 | 0.994 | Ice block size reduction
0x344 | 0.992 | Damage multiplier
0x348 | 120 | Frame count for something?
0x34C | 190 | Lifetime
0x350 | 0.8 |
0x354 | 0.25 |
0x358 | 0.22 |
0x35C | 6 |
0x360 | 5 |
0x364 | 2.2 |
```

## Ike

### FitKirby

#### Eruption
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x43D50 | 7 | Charge time (seconds?)
0x43D54 | 10 | Base damage
0x43D58 | 4 | Damage per second of charge
0x43D5C | 0.8 | Aerial horizontal momentum ratio
0x43D60 | 0.02 | Aerial horizontal momentum deceleration
0x43D64 | 10.0 | Fully charged self damage
```

## Ivysaur

### FitKirby

#### Bullet Seed
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2F810 | 7 | Frames between seeds
0x2F814 | 6.0 | Vertical momentum
0x2F818 | 3.6 | Y offset
0x2F81C | 40 | Endlag after releasing B
0x2F820 | 240 | Max hold time
0x2F824 | 0 |
0x2F828 | 10 | Lifetime of seed
0x2F82C | 0.5 |
```
## Jigglypuff

### FitKirby

#### Rollout
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x43D80 | 90 | How many frames you roll around
0x43D84 | 20 | ?? (frame count for something?)
0x43D88 | 0.07 | Gravity
0x43D8C | 1.3 | Fall speed
0x43D90 | 0.1 | Friction?
0x43D94 | 0.05 | Acceleration
0x43D98 | 6.0 | Something with acceleration/speed
0x43D9C | 16.0 | Something with acceleration/speed
0x43DA0 | 0.08 | ?? (read in air)
0x43DA4 | 0.1 |  Aerial horizontal control acceleration (read in air, negative = forward and positive = backward)
0x43DA8 | 0.5 | Min Aerial Horizontal speed (momentum forward in air/momentum preservation in air)
0x43DAC | 1.0 | ?? (read in air)
0x43DB0 | 2.0 |
0x43DB4 | 0.5 |
0x43DB8 | 4.0 | Rotation animation speed while pivoting or after hit
0x43DBC | 8 |
0x43DC0 | 6.5 |
0x43DC4 | 0.4 |
0x43DC8 | 0.8 |
0x43DCC | 2.0 | Bonus damage: +3x to fast
0x43DD0 | 3.0 |  Damage multiplier: (4% base for fast)
0x43DD4 | -0.13 | Horizontal momentum on hit
0x43DD8 | 1.6 | Vertical momentum on hit
0x43DDC | 0.6 | Horizontal ending slide speed
0x43DE0 | 0.8 |
0x43DE4 | 1.2 | Rolling animation speed
0x43DE8 | 32 |
0x43DEC | 50.0 | Initial roll power (min 40.0--see friction)
0x43DF0 | 180.0 | Max roll power (min 40.0--see friction)
0x43DF4 | 3.0 | Roll power saved per frame
0x43DF8 | 0.21 | Initial charge animation speed
0x43DFC | 20.0 |
0x43E00 | 0 | Increasing it cuts short distance traveled. Friction related?
0x43E04 | 40.0 | Friction. (Subtracted from roll speed)
0x43E08 | 1.3 |  aerial rolling animation speed
0x43E0C | 0.03 | Somehow linearly affects roll speed. Affects aerial speed more.
0x43E10 | 0.9 | Pivot acceleration
0x43E14 | 0.2 | Degree of influce slopes have on speed
0x43E18 | 2.0 | Minimum speed required for sparkle graphics
0x43E1C | 0.25 |
0x43E20 | 0.75 | Rebound speed multiplier
0x43E24 | 30.0 | Landing lag (post-recoil)
```
## King Dedede

### FitKirby

#### Inhale
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x43E28 | 4.0 | Speed of star shot
0x43E2C | 0.13 | Speed deceleration
0x43E30 | 15.0 | Spinning speed
0x43E34 | 1.0 | X offset?
0x43E38 | -1.0 | Y offset
```

## Link

### FitKirby

#### Arrows
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2D2B0 | 60.0 | core velocity with lower value, ONLY affects charged arrows
0x2D2B4 | 1.0 |
0x2D2B8 | 0 |
0x2D2BC | 0.04363323 | Firing angle (radians)
```
### FitKirbyLink
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x190 | 1.2 |
0x194 | 40 | Duration (frames after stage impact?)
0x198 | 3.0 |  Uncharged Arrow Velocity Multiplier
0x19C | 10.0 | Charge Arrow Velocity Multiplier
0x1A0 | 4.0 | Uncharged Arrow Damage
0x1A4 | 12.0 | Full Charge Arrow Damage
0x1A8 | 80 | Frames to fully charge?
0x1AC | 0.053 | Arrow gravity
0x1B0 | 0.6981317 | Arrow weight
```
## Lucario

### FitKirby

#### Aura Sphere
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2D4C0 | 7 |  Amount of charge states?
0x2D4C4 | 0.15 | Ground backwards horizontal momentum from releasing Aura Sphere
0x2D4C8 | 0.2 | Aerial backwards horizontal momentum from releasing Aura Sphere
0x2D4CC | 0.06 |
0x2D4D0 | 12 | Loop iterations to fully charge Aura Sphere
0x2D4D4 | 0.75 |
0x2D4D8 | 1.0 | Max Aura Sphere size?
0x2D4DC | 0.8 |
```
### FitKirbyLucario

```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x838 | 70 | Aura sphere lifetime
0x83C | 0 | Firing angle (radians)
0x840 | 1.5 | Uncharged speed
0x844 | 2.0 |  Fully charged speed (also added on to slightly charged)
0x848 | 6 | Frames between wiggling
0x84C | 10.0 | Movement added to a random direction each wiggle
0x850 | 0.5 | Uncharged Aura Sphere Wiggle intensity
0x854 | 0 | Charged Aura Sphere Wiggle intensity
0x858 | 3.0 |  Aura Sphere base growth size (smaller = bigger)
0x85C | 1.0 |
0x860 | 1.33 | Level 1 size
0x864 | 1.64 | Level 2 size
0x868 | 1.97 | Level 3 size
0x86C | 2.34 | Level 4 size
0x870 | 2.81 | Level 5 size
0x874 | 3.31 | Level 6 size
0x878 | 4.0 | Level 7 size
0x87C | 15.0 |
```
## Lucas

### FitKirby

#### PK Freeze
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x306A0 | 10 | Number of frames to halt vert momentum before using @306AC as gravity (0 permanently halts fall speed)
0x306A4 | 30 |  How long after releasing B PK Freeze explodes
0x306A8 | 70 | PK Freeze lifetime
0x306AC | 0.02 | Gravity after initial vertical halt
0x306B0 | 30.0 |  ?? (read on release/PK Freeze explosion)
```
### FitKirbyLucas

```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0xE0 | 70.0 | DMG/Size multiplier? (less=larger gfx size but less dmg)
0xE4 | 0.3 | Starting size
0xE8 | 1.45 | Size multiplier
0xEC | 20.0 |  Initial firing angle, degrees below vertical
0xF0 | 1.4 | PK Freeze rising height
0xF4 | 0.04 | PK Freeze control
0xF8 | 0.04 | PK Freeze gravity
0xFC | 2.0 | ?? (read on startup)
0x100 | 3.0 | ?? (read on startup)
0x104 | 8.0 | How long after screen shake PK Freeze explodes
0x108 | 4.0 | Base damage
0x10C | 0.22 | Damage multiplier
```

## Luigi

### FitKirbyLuigi

#### Fireball
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18C | 1.65 | Unknown
0x190 | 0.85 | Unknown
0x194 | 1.25 | Fireball speed
0x198 | 0 | Firing angle
0x19C | 50 | Lifetime
0x1A0 | 0.9 | Unknown
0x1A4 | 2.0 | Unknown
```
## Mario

### FitKirbyMario

#### Fireball
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x188 | 0.036 | Gravity
0x18C | 1.25 | Unknown
0x190 | 0.75 | Bounce velocity multiplier
0x194 | 1.4 | Speed
0x198 | -0.17453292 | Firing angle (radians)
0x19C | 75 | Lifetime
0x1A0 | 0.8 | Unknown
0x1A4 | 2.0 | Something to do with how many times it can bounce before disappearing. 2 = none, 4 = too many to count.
```

## Marth

### FitKirby

#### Shield Breaker

```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x43D68 | 2 | Charge time (seconds?)
0x43D6C | 8 | Base damage
0x43D70 | 5 | Damage added per second
0x43D74 | 0.8 | Aerial horizontal momentum ratio
0x43D78 | 0.02 | Aerial horizontal deceleration
0x43D7C | 0 | Unknown, read once on initial pullback
```

## Meta Knight

### FitKirby

#### Mach Tornado
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x43D68 | 1.0 |
0x43D6C | 0.7 |
0x43D70 | 80.0 | Maximum spin speed?
0x43D74 | 0.12 |
0x43D78 | 2.0 | Grounded horizontal speed
0x43D7C | 0.1 | Horizontal acceleration
0x43D80 | 1.7 | Aerial horizontal speed
0x43D84 | 0.008 | Horizontal braking acceleration?
0x43D88 | -0.08 | Gravity modifier
0x43D8C | 0.5 | Fall speed
0x43D90 | 1.0 |  Vertical acceleration boost on b press?
0x43D94 | 10 | Related to button input (higher = harder to mash)
0x43D98 | 1.4 | Button press boost vertical acceleration?
0x43D9C | 16.0 | Related to timing
0x43DA0 | 80.0 | Starting spin speed?
0x43DA4 | 1.5 | Subtracts each frame if less than 5 B presses
0x43DA8 | 70 |
0x43DAC | 2.0 | Subtracts this each frame after pressing B 5 times
0x43DB0 | 10.0 | Spin speed equal to or less than this to end move
0x43DB4 | 0 |
```

## Mr. Game and Watch

### FitKirbyGamewatch

#### Chef
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x450 | 1.0 | Sausage horizontal velocity
0x454 | 1.0 | Sausage vertical velocity
0x458 | 0.04 | Sausage vertical gravity
0x45C | 2.5 | Sausage horizontal gravity
0x460 | 10.0 | Sausage spinning
0x464 | 0.8 | Steak horizontal velocity
0x468 | 1.1 | Steak vertical velocity
0x46C | 0.04 | Steak vertical gravity
0x470 | 2.5 | Steak horizontal gravity
0x474 | 31.0 | Steak spinning
0x478 | 0.6 | Shrimp horizontal velocity
0x47C | 1.2 | Shrimp vertical velocity
0x480 | 0.04 | Shrimp vertical gravity
0x484 | 2.5 | Shrimp horizontal gravity
0x488 | 8.0 | Shrimp spinning
0x48C | 0.4 | Fish horizontal velocity
0x490 | 1.3 | Fish vertical velocity
0x494 | 0.04 | Fish vertical gravity
0x498 | 2.5 | Fish horizontal gravity
0x49C | 42.0 | Fish spinning
0x4A0 | 0.2 |
0x4A4 | 1.4 |
0x4A8 | 0.04 |
0x4AC | 2.5 |
0x4B0 | 12.0 |
0x4B4 | 0.5 |
0x4B8 | 80 | Duration of hitbox
0x4BC | 30 | Duration of flash after hitbox
```

## Ness

### FitKirby

#### PK Flash
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x30738 | 10 | ??
0x3037C | 15 | How long after releasing B PK Flash explodes
0x30380 | 120 | PK Flash lifetime
0x30744 | 0.017 |  Aerial vert momentum on charge
0x30748 | 30.0 | ?? (read on release/PK Flash explosion)
```

### FitKirbyNess
```handsontable
# OPTIONS
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0xE4 | 100.0 | DMG/Size multiplier? (less=larger gfx size but less dmg)
0xE8 | 0.9 | Starting size
0xEC | 1.6 | Size multiplier
0xF0 | 3.0 | PK Flash control
0xF4 | 1.3 | PK Flash rising height
0xF8 | 0.01 | PK Flash momentum added from stick press
0xFC | 0.023 | PK Flash gravity
0x100 | 2.0 | ?? (read on startup)
0x104 | 2.0 | ?? (read on startup)
0x108 | 15.0 | How long after screen shake PK Flash explodes
0x10C | 5.0 | Default damage
0x110 | 0.32 | Damage multiplier
```

## Olimar
## Peach
## Pikachu
## Pit
## R.O.B.
## Samus
## Sheik
## Snake
## Sonic
## Squirtle
## Toon Link
## Wario
## Wolf
## Yoshi
## Zelda
## Zero Suit Samus
