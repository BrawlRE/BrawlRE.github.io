# Article Variables

Floating points or hex values control many different things about [[Articles_(Brawl)|articles]] or a move itself.

## Bowser

### Flame

```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19CF0 | 330.0 | Initial fire angle
0x19CF4 | 25.0 | Flame spread randomness
0x19CF8 | 50.0 | Max angle upwards
0x19CFC | 40.0 | Max angle downwards
0x19D00 | 2.8 | Turning speed
0x19D04 | 0.7 | Rotation of flames and head in relation to 19D00
0x19D08 | 25 | Amount of frames spent firing after releasing B
0x19D0C | 450.0 | Refueling/Spacing in gfx?
0x19D10 | 70.0 | Spacing in fire gfx?
0x19D14 | 380.0 | Max Size Charge
0x19D18 | 80.0 | Min Size Charge
0x19D1C | 0.7 | Speed/Distance Charge Refuel Rate (per frame)
0x19D20 | 0.8 | Size Charge Refuel Rate (per frame)
0x19D24 | 0.75 | Speed/Distance Charge Drain Rate (per frame?)
0x19D28 | 0.75 | Size Charge Drain Rate (per frame?)
0x19D2C | 30 | Frame count for something?
0x19D30 | 7 | Frames between flames
0x19D34 | 8.0 | How far away flame starts horizontally
0x19D38 | -2.0 | How far away flame starts vertically
0x19D3C | 0.25 | ?? (read on flame gfx reduction)
0x19D40 | -3.6 | Landing detection
0x19D44 | 28 | Frame count for something? (0 will freeze)
0x19D48 | 20 | Frame hitbox terminates on
0x19D4C | 1.9 | Flame speed
0x19D50 | 2.8 | Horizontal momentum of flames
0x19D5C | 6.0 | Unknown
0x19D64 | 3.0 | Unknown
```
### Flying Slam
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1A468 | 0.25
0x1A46C | 0.2
0x1A470 | 0.15
0x1A474 | 0.00075
0x1A478 | 0.02
0x1A47C | 0.18
0x1A480 | 0.00075
0x1A484 | 0.03
0x1A488 | 1.0
0x1A48C | 1.5
0x1A490 | 5.0
0x1A494 | -0.6
0x1A498 | 2.0
```
### Whirling Fortress
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1AB8C | 1.85 | Vertical momentum in air
0x1AB90 | 0.05 | Gravity
0x1AB94 | 1.0 | Unknown (read on fortress in air)
0x1AB98 | 1.5 | Grounded moving speed
0x1AB9C | 1.6 | Momentum preservation on turning?
0x1ABA0 | 0.15 | Grounded turning speed
0x1ABA4 | 0.02 | Aerial mobility
0x1ABA8 | 15 | How many frames after falling to landing to automatically do a grounded fortress again
0x1ABAC | 50 | Something dealing with 1ABA8 but affects how long you stay in shell
0x1ABB0 | 10 | Something dealing with 1ABA8 but making it really high delays the animation somehow
0x1ABB4 | 50 | Landing lag
```
### Bowser Bomb
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1AE50 | 0.8 | Horizontal aerial momentum preservation on startup.
0x1AE54 | 0.5 | Vertical aerial momentum preservation on startup.
0x1AE58 | 0.02 | Unknown (read on aerial downB)
0x1AE5C | 0.03 | Unknown (read on aerial downB)
0x1AE60 | 0.4 | Unknown (read on aerial downB)
0x1AE64 | -9.0 | Speed going down (can go upwards too)
0x1AE68 | 8.0 | Unknown
0x1AE6C | 1.0 | Unknown
```
## Captain Falcon
### Falcon Punch
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22208 | 0.125
0x2220C | 0.625
0x22210 | 35.0
0x22214 | 2.2 | Momentum forward
0x22218 | 0.92 | Momentum from holding up
0x2221C | 0
```
### Raptor Boost
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22220 | 0.18 | Horizontal momentum on hit (negative is equivalent of 0)
0x22224 | 0.05
0x22228 | 3.18
0x2222C | 20.0
0x22230 | 40.0 | Landing lag from aerial hit
0x22234 | 0
```
### Falcon Dive
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22238 | 1.1 | How much you slide on ground aiming upB
0x2223C | 6.0 | Something with mobility in aiming?
0x22240 | 0.95 | Mobility
0x22244 | 0.7 | Something with mobility in aiming?
0x22248 | 30.0 | ?? (read during upB on ground)
0x2224C | 6.0 | ??
0x22250 | 4.0 | ??
0x22254 | 0.225 | ??
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22258 | 0.103
0x2225C | 0
0x22260 | 60.0
```
### Falcon Kick
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22264 | 0.66 | Momentum multiplier on hit
0x22268 | 4
0x2226C | 1.0
0x22270 | 1.0 | Air to ground landing lag modifier
0x22274 | 1.2 | Ground to ground lag modifier
0x22278 | 3.0 | Air to ground landing friction
0x2227C | 0
0x22280 | 30.0
0x22284 | 20.0
0x22288 | 50.0
```
## Charizard
### Flamethrower
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x15F20 | 330.0 | Initial angle
0x15F24 | 30.0 | Flame spread randomness
0x15F28 | 45.0 | Max angle upwards
0x15F2C | 28.0 | Max angle downwards
0x15F30 | 3.0 | Turning speed
0x15F34 | 0.6 | Turning speed/max rotation?
0x15F38 | 25 | Amount of frames spent firing after releasing B
0x15F3C | 360.0 | Max Speed / Distance Charge
0x15F40 | 70.0 | Min Speed / Distance Charge
0x15F44 | 380.0 | Max Size Charge
0x15F48 | 80.0 | Min Size Charge
0x15F4C | 0.5 | Speed / Distance Recharge Rate
0x15F50 | 0.9 | Size Recharge Rate
0x15F54 | 0.7 | Speed / Distance Drain Rate
0x15F58 | 0.7 | Size Drain Rate
0x15F5C | 30 | Frame count for something?
0x15F60 | 6 | Frames between flames (smaller it is the more rumble you get)
0x15F64 | 5.0 | How far away flame starts horizontally
0x15F68 | -2.0 | How far away flame starts horizontally
0x15F6C | 0.25 | ??
0x15F70 | -3.6 | Landing detection
0x15F74 | 28 | Frame count before hitboxes (only) are deleted
0x15F78 | 20 | Frame count something?
0x15F7C | 1.9 | Flame speed
0x15F80 | 2.2 | Horizontal momentum of flames
```

### Rock Smash
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16250 | 32.0
0x1626C | 4.0
0x16270 | -0.0
0x16274 | 1
0x16278 | 1
0x1627C | -4.0
0x16280 | 0.038
0x16284 | 1.65
0x16288 | 4
0x1628C | 4
0x16290 | 4.5
0x16294 | 12
```
### Fly
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1688C | 0.25 | ?? (read on upB)
0x16890 | 0.625 | ?? (read on upB)
0x16894 | 18.0 | ?? (100 makes you move left/right and down)
0x16898 | 0.6 | How much you can slide on landing
0x1689C | 30.0 | ?? (read on upB)
0x168A0 | 0.66 | ?? (read on upB)
0x168A4 | 0.5 | Gravity
0x168A8 | 0.95
```
### Jumps
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16B10 | 9.6 | ?? (read on turnaround jump in air)
0x16B14 | 15.0 | ?? (read on turnaround jump in air)
0x16B18 | 30.0 | ?? (read on turnaround jump in air)
0x16B1C | 45.0 | ?? (read on turnaround jump in air)
0x16B20 | 60.0 | ?? (read on turnaround jump in air)
0x16B24 | 75.0 | ?? (read on turnaround jump in air)
0x16B28 | 90.0 | ?? (read on turnaround jump in air)
0x16B2C | 105.0 | Affects turnaround jump speed?
0x16B30 | 120.0 | ?? (read on turnaround jump in air)
0x16B34 | 135.0 | ?? (read on turnaround jump in air)
0x16B38 | 150.0 | Affects turnaround jump speed?
0x16B3C | 165.0 | ?? (read on turnaround jump in air)
0x16B40 | 180.0 | ?? (read on double jump)
0x16B44 | 2.0 | Second jump height
0x16B48 | 2.0 | Third jump height
0x16B4C | 0.3 | ?? (read on turnaround third jump)
0x16B50 | 0.5 | Horizontal momentum preservation from aerial jumps?
0x16B54 | 0.8 | Vertical momentum preservation? (read on 2+ jump)
0x16B58 | 0.8 | Vertical momentum preservation? (read on 2+ jump)
0x16B64 | 12 | ?? (frame count for something, when made higher/lower it messes up turning around jump animation)
```
### Glide
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16B68 | 50.0 | Max upward angle
0x16B6C | -50.0 | Max downward angle
0x16B70 | 1.2 | Initial upward speed gain
0x16B74 | 0.15 | Something to do with startup?
0x16B78 | 1.0 | Amount of aerial Hor. momentum carried over into glide start
0x16B7C | 1.2 | Initial glide momentum
0x16B80 | 0.05 | Minimum momentum required to stop?
0x16B84 | 1.9 | Max glide speed
0x16B88 | 0.5 | Something to do with momentum required to stop?
0x16B8C | 0.06 | Vertical momentum during glide no direction?
0x16B90 | 0.4 | Gravity during glide
0x16B94 | 0 | ?? (read on glide)
0x16B98 | -25.0 | ?? (read on glide)
0x16B9C | 0.01 | Something to do with glide angle down
0x16BA0 | 0.1 | ?? (read on glide)
0x16BA4 | 0.25 | Glide angle sensitivity?
0x16BA8 | 0.8 | Something with glide up sensitivity?
0x16BAC | 0.4 | Something with glide angle sensitivity?
0x16BB0 | 4.0 | Turn speed
0x16BB4 | 0.15 | ?? (read on glide)
0x16BB8 | 44 | Something with wing animation (if not default value, wings are just still. freezes easily.)
```
### Fatigue
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17C28 | 100.0 | Max stamina
0x17C2C | 0.5 | Fatigue value decreased every second
0x17C30 | 0.5 | Fatigue value decreased per attack
0x17C34 | 0.8 | Fatigue value increased for every second pokemon is in pokeball <s>(and 80% KB on attacks?)</s>
0x17C38 | 0.7 | kb multiplier at "weakest" stamina (17C4C)
0x17C3C | 40.0 | Enter stamina wait animation (tired) when Fatigue falls below this value
0x17C40 | 0.3 |  Fatigue multiplier when KO'd
0x17C44 | 1.1 | Weakness multiplier
0x17C48 | 0.9 | Resistance multiplier
0x17C4C | 40.0 | "Weakest" stamina level
```
## Diddy Kong
### Monkey Flip
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x196E0 | 1.5 | Horizontal velocity
0x196E4 | 1.6 | Vertical velocity
0x196E8 | 1.9 | Smash Input Velocity Multiplier
```
### Peanut Popgun
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19808 | 45.0 | vertical velocity?
0x1980C | 3.0 | gravity?
0x19810 | 1.6 | base vertical velocity?
0x19814 | 4.0 | charge horizontal velocity multiplier?
0x19818 | 0.03 | momentum backward from charged firing
0x1981C | 12.0 | Max additional damage (to base peanut throw damage)
0x19820 | 0.6
0x19824 | 6
0x19828 | 8
0x1982C | 1.0
```
### Rocketbarrel Boost
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19CC0 | 1.5 | turning response
0x19CC4 | 55.0 | Launch arc curvature (higher number allows for steeper curves)
0x19CC8 | 90 | Frames to fully charge UpB
0x19CCC | 30.0
0x19CD0 | 2.0
0x19CD4 | 2.8 | height (affects charge as well)
0x19CD8 | 0.021 | height multiplier
0x19CDC | 1.12 | gravity
0x19CE0 | 20.0
0x19CE4 | 1.2
0x19CE8 | 50.0
0x19CEC | 5.0
0x19CF0 | 0.1
0x19CF4 | 2.0
```
### Banana Peel
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19F10 | 105.0 | Angle of banana toss in degrees?
0x19F14 | 2.2 | Vertical velocity
0x19F18 | 1.38 | Gravity?
0x19F1C | 2 | Max bananas out at once
```
### Rocketbarrel Barrage
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1A2B8 | 0.083
0x1A2BC | 1.0
0x1A2C0 | 1.0
0x1A2C4 | 0.051
0x1A2C8 | 0.04
0x1A2CC | 0.07
0x1A2D0 | 0.02
0x1A2D4 | 1.3
0x1A2D8 | 0.5
0x1A2DC | 60.0
0x1A2E0 | 1.1
0x1A2E4 | 40.0
0x1A2E8 | 3.0
0x1A2EC | 1.15
0x1A2F0 | 0.018
0x1A2F4 | 1.8
0x1A2F8 | 0.5
0x1A2FC | 3.8
0x1A300 | 11
0x1A304 | 150
0x1A308 | 2.0
0x1A30C | 0.25
0x1A310 | -13.0
0x1A314 | -0.25
0x1A318 | -13.0
0x1A31C | 0
0x1A320 | 5.0
```
### Loose barrel
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22C14 | 8 | Unknown, read once on stage collision
0x22C18 | 1.3 | Projectile Rocket Barrel flight speed
0x22C1C | 0.015 | Projectile Rocket Barrel acceleration?
0x22C20 | 40 | Unknown, projectile rocket barrel reads every few frames
0x22C24 | 10 | Unknown, projectile rocket barrel reads every few frames
0x22C28 | 0 | Unknown, projectile rocket barrel reads frame, sometimes twice
0x22C2C | 6.0 | Unknown, projectile rocket barrel reads frame, sometimes twice
0x22C30 | 4.0 | Unknown, projectile rocket barrel reads frame, sometimes twice
0x22C34 | 0.1 | Unknown, projectile rocket barrel reads frame, sometimes more
0x22C38 | 1.5
0x22C3C | 0.1
0x22C40 | 0.1
0x22C44 | 10 | Unknown, projectile rocket barrel reads frame, sometimes more
0x22C48 | 0.8 | Unknown, never read?
0x22C4C | 0.02 | Unknown, never read?
```
### Barrage Peanuts
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22C84 | 0.2 | Odds of final smash spawning nuts
0x22C8C | 4 | Max number of nuts to spawn at once
0x22C90 | 48.0 | Nut rotation speed
0x22C94 | 5 | Frames nut graphic remains after hit
```
## Donkey Kong
### Giant Punch
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1B070 | 10 | How many arm swings to fully charge
0x1B074 | 2 | Damage per arm swing (first arm swing has no effect)
0x1B078 | 0.12
0x1B07C | 20.0
```
### Headbutt
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1B410 | 1.5 | Something with momentum preservation?
0x1B414 | 0.02 | Horizontal momentum preservation? (lower = more)
0x1B418 | 0.05 | Vertical momentum on headbutt
```
### Spinning Kong
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1BE1C | 0.6 | Aerial vertical momentum
0x1BE20 | 0.07 | Gravity
0x1BE24 | 1.1 | Max Grounded Mobility
0x1BE28 | 1.7 | Max Aerial Mobility
0x1BE2C | 0.034 | Grounded mobility
0x1BE30 | 0.05 | Aerial mobility
0x1BE34 | 40.0 | Landing Lag without Interrupt
```
### Hand Slap
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1C280 | 16.0 | X offset of hitbox 0/negative X offset of hitbox 3?
0x1C284 | 6.5 | Y offset?
0x1C288 | 10.0 | X offset of hitbox 1/negative X offset of hitbox 2?
```
### Konga Beat
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1C638 | 7 | Something with rapid beats?
0x1C63C | 8.0 | ?? (freezes if too low)
0x1C640 | 2.0
0x1C644 | 3.0
0x1C648 | 0.05
0x1C64C | 30
0x1C650 | 1.14285719
0x1C654 | 2.0
0x1C658 | 1.17857146
0x1C65C | 2.5
0x1C660 | 1.16428566
0x1C664 | 2.3
0x1C668 | 9
0x1C66C | 3
0x1C670 | 6
0x1C674 | 8
0x1C678 | 3
0x1C67C | 2
0x1C680 | 2
0x1C684 | 3
0x1C688 | 3
0x1C68C | 634
```
## Falco
### Laser
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18820 | 12.0 | X offset grounded laser
0x18824 | 1.0 | Y offset grounded laser
0x18828 | 12.0 | X offset aerial laser
0x1882C | 1.0 | Y offset aerial laser
0x18830 | 0 | Angle laser is fired at (degrees)
0x18834 | 5.0 | Laser speed
0x18838 | 0 | Landing lag?
0x1883C | 100 | Laser lifetime (frames)
0x18840 | 3.0 | Laser length
0x18844 | 11.25 | Laser lengthening time? (higher = slower)
```
### Phantasm
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18B58 | 15 | ?? (something with timing short distance?)
0x18B5C | 1.5 | Grounded momentum preservation on startup (higher = less, avoid 0 will cause polygon explosion at random)
0x18B60 | 0.05 | Aerial momentum preservation on startup? (higher = less, barely noticeable)
0x18B64 | 0.01666666 | Aerial vertical momentum on startup
0x18B68 | 2.0 | Affects grounded momentum preservation at end? (higher = less)
0x18B6C | 0.1 | Grounded momentum preservation at end (less = more)
0x18B70 | 2.0 | Affects aerial momentum preservation at end (higher = less)
0x18B74 | 0.07 | Aerial momentum preservation at end (less = more)
0x18B78 | 5 | ?? (read on sideB moving)
0x18B7C | 0.08 | Affects shortened sideB?
0x18B80 | 0.4 | ?? (read on sideB moving)
0x18B84 | 20 | ?? (read on sideB startup)
0x18B88 | 6 | How many frames illusion gfx stays out
0x18B8C | 3 | How many frames before illusion gfx slow down
```
### Fire Bird
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18FD0 | 15 | Frame count for something? (read on startup)
0x18FD4 | 1.25 | ?? (read on startup)
0x18FD8 | 0.02 | Aerial momentum preservation on startup (smaller = more)
0x18FDC | 0.016 | Momentum on startup?
0x19FE0 | 0.125
0x18FE4 | 0.5 | Default angle? (radians)
0x18FE8 | 22 | How many frames before you stop traveling (does not affect distance past a certain point)
0x18FEC | 20
0x18FF0 | 4 | Frames before decaying speed
0x18FF4 | 4.2 | Speed of travel/distance travelled
0x18FF8 | 0.17 | Max momentum to stop at
0x18FFC | 1.5 | ?? (read on travel)
0x19000 | 20.0 | Angle required when hitting stage to bounce
0x19004 | 0.8 | How far you go when hitting ground angled
0x19008 | 0.4 | Special Fall Max H Mobility multiplier
0x1900C | 18 | Landing lag (frames)
```
### Reflector
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x190DC | 18
0x190E0 | 50.0 | Break threshold?
0x190E4 | 1.0 | Reflection bubble X pos?
0x190E8 | -1.2 | Reflection bubble Y pos?
0x190EC | 0 | Reflection bubble Z pos?
0x190F0 | 9.0 | Reflection bubble size?
0x190F4 | 1.5 | Reflected projectile damage multiplier
0x190F8 | 1.0 | Reflected projectile speed multiplier
0x190FC | 0.5
```
### Landmaster
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19214 | 5.0 | Rising speed
0x19218 | 10 | How many frames after rising you fall with landmaster (0 makes you never come back down)
0x1921C | 0.025 | Driving speed (at 0 you can't turn or drive forward)
0x19220 | 1.8 | Driving speed?
0x19224 | 0.016 | Friction?
0x19228 | 0.1 | Aerial mobility
0x1922C | 1.8 | ?? (read when falling from jump)
0x19230 | 0.07 | ?? (read whenever in air)
0x19234 | 0.08 | Gravity
0x19238 | 4.0 | ?? (read whenever on ground)
0x1923C | 35 | ?? (read whenever on ground)
0x19240 | 0.5 | ?? (read whenever pressing left/right on ground)
0x19244 | 0.6 | ?? (read whenever pressing left/right on ground)
0x19248 | 0.5 | ?? (read whenever pressing left/right on ground)
0x1924C | 0
0x19250 | 6.0 | Laser speed
0x19254 | 17.0 |  # of shots
0x19258 | 50.0 | ?? (read when landmaster falls initially)
0x1925C | 0.5
0x19260 | 1.3
0x19264 | 3.0
0x19268 | 1.5
0x1926C | 180
0x19270 | 5
0x19274 | 150.0
0x19278 | 1.5
0x1927C | 1.0
0x19280 | 2.0
0x19284 | 1.0
0x19288 | 0.25
0x1928C | 20
0x19290 | 1.7
0x19294 | 0.002
0x19298 | 0.1
0x1929C | 1.6
0x192A0 | 0.06
0x192A4 | 3.5
0x192A8 | 0.8
0x192AC | 1.5
0x192B0 | 1.8
0x192B4 | 1.25
0x192B8 | 0.3
0x192BC | 1.0
0x192C0 | 0.5
0x192C4 | 0.8
0x192C8 | 3.0
0x192CC | 0.1
0x192D0 | 4.0
0x192D4 | 5.0
0x192D8 | 20.0
0x192DC | 1.0
0x192E0 | 2.0
```
## Fox
### Laser
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18B68 | 10.0 | X offset grounded laser
0x18B6C | 1.2 | Y offset grounded laser
0x18B70 | 10.0 | X offset aerial laser
0x18B74 | 1.2 | Y offset aerial laser
0x18B78 | 0 | Angle laser is fired at (degrees)
0x18B7C | 7.0 | Laser speed
0x18B80 | 0 | Landing lag?
0x18B84 | 22 | Laser Life (frames)
0x18B88 | 3 | Laser length
0x18B8C | 11.25 | Laser lengthening time? (higher = slower)
```
### Illusion
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18F20 | 13 | ?? (something with timing short distance?)
0x18F24 | 1.5 | Grounded momentum preservation on startup (higher = less, avoid 0 will cause polygon explosion at random)
0x18F28 | 0.05 | Aerial momentum preservation on startup? (higher = less, barely noticeable)
0x18F2C | 0.0166666666 | Aerial vertical momentum on startup
0x18F30 | 2.5 | Affects grounded momentum preservation at end? (higher = less)
0x18F34 | 0.15 | Grounded momentum preservation at end (less = more)
0x18F38 | 2.3 | Affects aerial momentum preservation at end (higher = less)
0x18F3C | 0.07 | Aerial momentum preservation at end (less = more)
0x18F40 | 5 | ?? (read on sideB moving)
0x18F44 | 0.08 | Affects shortened sideB?
0x18F48 | 0.4 | ?? (read on sideB moving)
0x18F4C | 25 | ?? (read on sideB startup)
0x18F50 | 6 | How many frames illusion gfx stays out
0x18F54 | 3 | How many frames before illusion gfx slow down
```
### Firefox
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19274 | 1.25
0x19278 | 0.02 | Aerial momentum preservation on startup?
0x1927C | 0.015 | Momentum on startup?
0x19280 | 0.125
0x19284 | 0.5 | Default angle? (radians)
0x19288 | 30 | How many frames before you stop traveling (does not affect distance past a certain point)
0x1928C | 15
0x19290 | 6 | Frames before decaying speed
0x19294 | 3.8 | Speed of travel/distance traveled
0x19298 | 0.1 | Decay
0x1929C | 1.5
0x192A0 | 20.0 | Something to do with angle when hitting ground?
0x192A4 | 0.8 | How far you go when hitting ground angled
0x192A8 | 0.85 | Special Fall Max H Mobility multiplier
0x192AC | 18
```
### Reflector
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19418 | 18
0x1941C | 4 | Frames before 19424 takes effect
0x19420 | 2.0 | Momentum preservation (lower = more momentum preserved)
0x19424 | 0.02666666 | Aerial momentum downward (applies to startup and holding)
0x19428 | 8
0x1942C | 50.0 | Break threshold?
0x19430 | 0 | Reflection bubble X pos?
0x19434 | 6.5 | Reflection bubble Y pos?
0x19438 | 0 | Reflection bubble Z pos?
0x1943C | 8.5 | Reflection bubble size?
0x19440 | 1.5 | Reflected projectile damage multiplier
0x19444 | 1.0 | Reflected projectile speed multiplier
0x19448 | 0.5 | Reflected projectile lifetime multiplier
0x1944C | 0 | rowspan="5" | Apparently a list of the five above-ground 45-degree angles.
0x19450 | 45.0
0x19454 | 90.0
0x19458 | 135.0
0x1945C | 180.0
```
### Landmaster
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19570 | 6.0
0x19574 | 10
0x19578 | 0.13
0x1957C | 1.8
0x19580 | 0.03
0x19584 | 0.023
0x19588 | 1.4
0x1958C | 0.012
0x19590 | 0.06
0x19594 | 2.3
0x19598 | 8
0x1959C | 0.4
0x195A0 | 0.7
0x195A4 | 0.5
0x195A8 | 0
0x195AC | 7.0
0x195B0 | 17.0
0x195B4 | 50.0
0x195B8 | 0.5
0x195BC | 1.5
0x195C0 | 2.0
0x195C4 | 1.0
0x195C8 | 180
0x195CC | 5
0x195D0 | 150.0 | Health? (looks like a pretty nice value for it)
0x195D4 | 1.0
0x195D8 | 1.0
0x195DC | 2.0
0x195E0 | 1.0
0x195E4 | 0.14
0x195E8 | 20
0x195EC | 1.2
0x195F0 | 0.002
0x195F4 | 0.025
0x195F8 | 0.9
0x195FC | 0.05
0x19600 | 1.5
0x19604 | 0.8
0x19608 | 0.7
0x1960C | 1.2
0x19610 | 1.25
0x19614 | 0.3
0x19618 | 1.0
0x1961C | 0.5
0x19620 | 0.4
0x19624 | 3.0
0x19628 | 0.1
0x1962C | 4.0
0x19630 | 5.0
0x19634 | 20.0
0x19638 | 1.0
0x1963C | 2.0
```
## Ganondorf
### Warlock Punch
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2218C | 0.125 | ?? (read on punch)
0x22190 | 0.7 | ?? (read on punch)
0x22194 | 45.0 | ?? (read on punch)
0x22198 | 0.8 | Momentum forward in air
0x2219C | 0.92 | Momentum from holding up
```
### Flame Choke
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x221A4 | 1.0 | Flame Choke Grab Slide
0x221A8 | 0.05 | Aerial flame choke miss gravity
0x221AC | 3.18 | Aerial flame choke miss gravity related
0x221B0 | 20.0 | Landling lag (Frames)
0x221B4 | 0.1 | Unknown, involves movement on aerial grab
0x221B8 | 1.0 | Vertical momentum on dragging down (221B4 plays role as well)
0x221BC | 1.0 | Grab plummet speed ratio
0x221C0 | 5.0 | Grab plummet acceleration ratio
```
### Dark Dive
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x221C4 | 0.0 | Unknown, cannot control if negative
0x221C8 | 0.5 | Leaping horizontal acceleration ratio
0x221CC | 0.72 | Falling horizontal max speed ratio
0x221D0 | 30.0 | Unknown, read once on leap
0x221D4 | 5.0 | Unknown, read once on leap
0x221D8 | 8.0 | Unknown, read once on leap
0x221DC | 0.225 | Unknown, read once on leap
0x221E0 | 0.33 | Post-release gravity ratio
```
### Wizkick
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x221E4 | 0.75 | Speed modifier on hit
0x221E8 | 4 | Unknown; reads on startup and at start of ground-ground ending
0x221EC | 0.58 | Ground-ground ending lag modifier
0x221F0 | 1.0 | Aerial-landing lag modifier
0x221F4 | 0.5 | Unknown, aerial-landing related
```
## Giga Bowser
### Flame
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
EF50 | 330.0 | Initial angle?
EF54 | 25.0 | Max angle downwards?
EF58 | 50.0 | Max angle upwards?
EF5C | 40.0 | Max angle downwards?
EF60 | 2.8 | Turning speed
EF64 | 0.7 | Turning speed/max rotation?
EF68 | 25 | Amount of frames spent firing after releasing B
EF6C | 450.0 | Spacing in fire gfx?
EF70 | 70.0 | Spacing in fire gfx?
EF74 | 380.0 | GFX scaling? (smaller = larger)
EF78 | 80.0 | Minimum distance
EF7C | 0.7 | Refuel speed?
EF80 | 0.8 | Something with refueling?
EF84 | 0.75 | Something with refueling?
EF88 | 0.75 | GFX scaling? (larger = smaller)
EF8C | 30 | Frame count for something?
EF90 | 7 | Frames between flames (smaller it is the more rumble you get lol)
EF94 | 6.0 | How far away flame starts horizontally
EF98 | -7.0 | How far away flame starts vertically
EF9C | 0.25 | Unknown
EFA0 | -3.6 | Landing detection (zomg)
EFA4 | 28 | Frame count for something? (0 will freeze)
EFA8 | 20 | Frame count for something?
EFAC | 1.9 | Flame speed
EFB0 | 2.8 | Flame spread randomness
EFBC | 6.0 | Unknown
EFC4 | 3.0 | Unknown
```
### Flying Slam
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
F480 | 0.5
F484 | 0.5
F488 | 0.1
F48C | 0.00075
F490 | 0.05
F494 | 0.12
F498 | 0.00075
F49C | 0.05
F4A0 | 1.0
F4A4 | 1.5
F4A8 | 5.0
F4AC | 0.0
F4B0 | 0.0
```
### Whirling Fortress
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
FBA4 | 1.85 | Vertical momentum in air
FBA8 | 0.05 | Gravity
FBAC | 1.0 | Unknown (read on fortress in air)
FBB0 | 1.5 | Grounded moving speed
FBB4 | 1.6 | Momentum preservation on turning?
FBB8 | 0.15 | Grounded turning speed
FBBC | 0.02 | Aerial mobility
FBC0 | 15 | How many frames after falling to landing to automatically do a grounded fortress again
FBC4 | 50 | Something dealing with FBC0 but affects how long you stay in shell
FBC8 | 10 | Something dealing with FBC0 but making it really high delays the animation somehow
FBCC | 50 | Landing lag
```
### Bowser Bomb
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
FE68 | 0.8 | Vertical aerial momentum preservation on startup?
FE6C | 0.5 | Same as FE68
FE70 | 0.02 | Unknown (read on aerial downB)
FE74 | 0.03 | Unknown (read on aerial downB)
FE78 | 0.4 | Unknown (read on aerial downB)
FE7C | -9.0 | Speed going down (can go upwards too)
FE80 | 8.0 | Unknown
FE84 | 1.0 | Unknown
```
## Ice Climbers
### Ice Blocks
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16720 | 1.5 | Speed
0x16724 | 3.0 | Speed increase over time?
0x16728 | 0 | Y offset it starts to travel at
0x1672C | -0.2 | Something with rising and vertical momentum
0x16730 | -1.65 | Gravity
0x16734 | 30 | Frame count for something?
0x16738 | 20 | Frame count for something?
0x1673C | 10 | Frame count for something?
0x16740 | 0.994 | Ice block size reduction
0x16744 | 0.992 | Damage multiplier
0x16748 | 120 | Frame count for something?
0x1674C | 190 | How many frames before they delete
0x16750 | 0.8 | ??
0x16754 | 0.25 | ??
0x16758 | 0.22
0x1675C | 6
0x16760 | 5
0x16764 | 2.2
```
### Blizzard
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17178 | 2.8 | Distance/speed
0x1717C | 0.125 | Angle (degrees)
0x17180 | 45.0 | Something with angle?
0x17184 | 100.0 | Something with angle?
```
### Iceberg
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17A30 | 80 | ?? (read on hand clap)
0x17A34 | 240 | How many frames before iceberg rises
0x17A38 | 0.3 | Iceberg rising speed
0x17A3C | 840 | How many frames iceberg is out for
0x17A40 | 60.0 | ??
0x17A44 | 200.0 | ?? (32 makes it almost instant)
0x17A48 | 5 | ?? (read on descent)
```
### Squall Hammer
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x3466C | 30.0 | Nana snap distance
0x34670 | .25 |  % of initial solo grounded horizontal velocity subtracted from initial velocity?
0x34674 | 30.0 | Unknown
0x34678 | .8 | Grounded initial velocity
0x3467C | 1 | Aerial initial velocity
0x34680 | .09 | Grounded acceleration
0x34684 | .08 | Aerial horizontal acceleration
0x34688 | .1 | % of initial solo grounded vertical velocity subtracted from initial velocity?
0x3468C | 1.1 | Grounded max velocity
0x34690 | 1.3 | Aerial max horizontal velocity
0x34694 | .6 | Aerial solo initial vertical velocity
0x34698 | 1.2 | Aerial synced initial vertical velocity
0x3469C | .1 | Aerial solo gravity
0x346A0 | .1 | Aerial synced gravity
0x346A4 | 2.8 | Aerial solo downward max velocity
0x346A8 | 2.8 | Aerial synced downward max velocity
0x346AC | .6 | Solo mash vertical velocity boost
0x346B0 | .8 | Synced mash vertical velocity boost
0x346B4 | 6 | Mash cooldown
0x346B8 | .75 | Horizontal synced wall bounce momentum conservation
0x346BC | .5 | Horizontal solo wall bounce momentum conservation
```
### Belay
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x346C4 | 70.0 | Nana snap distance
0x346C8 | 1.3
0x346CC | 25.0
0x346D0 | 0.25 | Unknown, read on a couple of opening pre-jump frames
0x346D4 | 2.0 | pre-jump horizontal braking (higher = more decelleration)
0x346D8 | 2.0 | pre-jump vertical braking (higher = more decelleration)
0x346DC | -0.03 | pre-jump gravity
0x346E0 | 0.5 | unknown, read once pre-jump
0x346E4 | 1.2 | bonus height from nana
0x346E8 | 15.0 | bonus height from nana inverse ratio (higher = less jump)
0x346EC | -0.1 | fall speed modifier of nana throw
0x346F0 | 1.5
0x346F4 | 1.7
0x346F8 | 1.7
0x346FC | -3.0
0x34700 | 5.0
0x34704 | 6.0
0x34708 | -5.0
0x3470C | -10.0
0x34710 | 1.9 | Solo vertical height boost
0x34714 | -0.1
0x34718 | 1.5
```
## Ike
### Eruption
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2737C | 7 | Charge time (seconds?)
0x27380 | 10 | Base damage
0x27384 | 4 | Damage per second of charge
0x27388 | 0.8 | aerial horizontal momentum ratio
0x2738C | 0.02 | Aerial horizontal deceleration
0x27390 | 10.0 | Fully charged self damage
```
### Quickdraw
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x27394 | 70 | Charge time for maximum damage
0x27398 | 70 | Charge time for maximum distance
0x2739C | 4.2 | Base grounded travel speed (affects distance)
0x273A0 | 3.6 | Base aerial travel speed (affects distance)
0x273A4 | 0.06 | Grounded travel speed multiplier (per charge frame)
0x273A8 | 0.04 | Aerial travel speed multiplier (per charge frame)
0x273AC | 0.1 | Grounded friction
0x273B0 | 0.065 | Aerial friction
0x273B4 | 12 | Travel time (frames)
0x273B8 | 0.5 | unknown, read once on hit
0x273BC | 0.3 | unknown, read once on hit
0x273C0 | 0.1 | Damage growth rate (per charge frame)
0x273C4 | 0.25 | Grounded ending horizontal momentum ratio
0x273C8 | 0.5 | Aerial ending horizontal momentum ratio
0x273CC | 1.0 | Falling startup boost
0x273D0 | 9.0 | unknown, read twice on startup
0x273D4 | -3.0 | unknown, read twice on startup
0x273D8 | 9.0 | unknown, read once on startup
```
### Aether
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x273DC | 0.9 | Aerial jump height ratio (relative to ground version)
0x273E0 | 8.0 | unknown, read once on startup and jump
0x273E4 | 0.2 | unknown, read once on startup and jump
0x273E8 | 5 | Maximum number of times you can grab the ledge before needing to land on stage
```
### Counter
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x273EC | 0.5 | Aerial horizontal momentum preservation
0x273F0 | 0.0025 | Aerial Friction
0x273F4 | 0.04 | Gravity
0x273F8 | 1.2 | Counter max fall speed
0x273FC | 1.2 | Damage multiplier
0x27400 | 1.0 | unknown, read on activation
0x27404 | 16 | Freeze frames on hit
0x27408 | 10.0 | Minimum damage
0x2740C | 999.0 | Maximum damage
0x27410 | 30.0 | unknown, read on activation
```
### Great Aether?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x27414 | 0
0x27418 | 0
0x2741C | 8.7
0x27420 | 0
0x27424 | 10.0
0x27428 | 0
0x2742C | 8.0
0x27430 | 20.0 | X offset of sword gfx?
0x27434 | 20.0 | Y offset of sword gfx?
0x27438 | 0.02 | How high from opponent Ike is when doing hits?
0x2743C | 4.5 | Ike falling speed (does not affect opponent)
0x27440 | 20.0 | ?? (read on hit; horizontal momentum?)
0x27444 | 0
0x27448 | 47 | frames before grabbing sword?
0x2744C | 5.0 | rising speed
0x27450 | 60.0
0x27454 | 20.0
0x27458 | -5.0
0x2745C | 24.0
0x27460 | 160.0
```
## Ivysaur

### Bullet Seed
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16F70 | 7 | Frames between seeds
0x16F74 | 6.0 | Vertical momentum of article
0x16F78 | 3.6 | Article's starting Y Offset
0x16F7C | 40 | How many frames you continue doing bullet seed after holding B
0x16F80 | 240 | Max frames you can hold B to continue attacking
0x16F84 | 0 | ??
0x16F88 | 10 | Frame duration of article
0x16F8C | 0.5 | ??
```
### Razor Leaf

```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17110 | 2.6 | Tilt speed
0x17114 | 4 | Buffer (in frames) for differentiating tilt input from Smash input
0x17118 | 3.0 | Smash speed
0x1711C | 0 | Landing detection? (affects how the leaf interacts with the floor)
0x17120 | 8.0 | X offset grounded
0x17124 | 5.5 | Y offset grounded
0x17128 | 9.0 | X offset aerial
0x1712C | 3.0 | Y offset aerial
0x17130 | 50 | Duration
0x17134 | 0.035 | Horizontal deceleration on tilt leaf
0x17138 | 6.0 | Something with rotation??? (Causes jerkiness in rotation)
0x1713C | 45.0 | Rotation angle??? (set to zero causes no rotation at all, can also cause jerkiness)
0x17140 | 8.0 | Random Launch Trajectory upon spawn
0x17144 | 2
0x17148 | 22.0 | Affects trajectory angles while in the air
0x1714C | 0.92 | Unsure, but a value higher than 1 causes random super-fast leaves
```
### Fatigue
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17C28 | 100.0 | Max stamina
0x17C2C | 0.5 | Fatigue value decreased every second
0x17C30 | 0.5 | Fatigue value decreased per attack
0x17C34 | 0.8 | Fatigue value increased for every second pokemon is in pokeball <s>(and 80% KB on attacks?)</s>
0x17C38 | 0.7 | kb multiplier at "weakest" stamina (17C4C)
0x17C3C | 40.0 | Enter stamina wait animation (tired) when Fatigue falls below this value
0x17C40 | 0.3 |  Fatigue multiplier when KO'd
0x17C44 | 1.1 | Weakness multiplier
0x17C48 | 0.9 | Resistance multiplier
0x17C4C | 40.0 | "Weakest" stamina level
```
## Jigglypuff
### Rollout
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1C8D0 | 90 | How many frames you roll around
0x1C8D4 | 20 | ?? (frame count for something?)
0x1C8D8 | 0.07 | Gravity
0x1C8DC | 1.3 | Fall speed
0x1C8E0 | 0.1 | Friction?
0x1C8E4 | 0.05 | Acceleration
0x1C8E8 | 6.0 | Something with acceleration/speed
0x1C8EC | 16.0 | Something with acceleration/speed
0x1C8F0 | 0.08 | ?? (read in air)
0x1C8F4 | 0.1 | Aerial horizontal control acceleration (read in air, negative = forward and positive = backward)
0x1C8F8 | 0.5 | Min Aerial Horizontal speed (momentum forward in air/momentum preservation in air)
0x1C8FC | 1.0 | ?? (read in air)
0x1C900 | 2.0
0x1C904 | 0.5
0x1C908 | 4.0 | Rotation animation speed while pivoting or after hit
0x1C90C | 8
0x1C910 | 6.5
0x1C914 | 0.4
0x1C918 | 0.8
0x1C91C | 2.0 | Bonus damage: +3x to fast
0x1C920 | 3.0 | Damage multiplier: (4% base for fast)
0x1C924 | -0.13 | Horizontal recoil on hit
0x1C928 | 1.6 | Vertical recoil on hit
0x1C92C | 0.6 | Horizontal ending slide speed
0x1C930 | 0.8
0x1C934 | 1.2 | Rolling animation speed
0x1C938 | 32
0x1C93C | 50.0 | Initial roll power (min 40.0--see friction)
0x1C940 | 180.0 | Max roll power (min 40.0--see friction)
0x1C944 | 3.0 | Roll power saved per frame
0x1C948 | 0.21 | Initial charge animation speed
0x1C94C | 20.0
0x1C950 | 0 | Increasing it cuts short distance traveled.  Friction related?
0x1C954 | 40.0 | Friction. (Subtracted from roll speed)
0x1C958 | 1.3 | aerial rolling animation speed
0x1C95C | 0.03 | Somehow linearly affects roll speed.  Affects aerial speed more.
0x1C960 | 0.9 | Pivot acceleration
0x1C964 | 0.2 | Degree of influce slopes have on speed
0x1C968 | 2.0 | Minimum speed required for sparkle graphics
0x1C96C | 0.25
0x1C970 | 0.75 | Rebound speed multiplier
0x1C974 | 30.0 | Landing lag (post-recoil)
```
### Pound
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1C978 | 0.1 | Something to do with window to directionalize; when set high, can't angle
0x1C97C | 0.5 | Something to do with window to directionalize; when set high or low, can't angle
0x1C980 | 20.0 | Modification angle
0x1C984 | 0.25 | Gravity before punch
0x1C988 | 0.2 | ??
0x1C98C | 2.2 | Momentum forward (aerial distance?)
0x1C990 | 0.92 | Aerial decay rate
```
### Puff Up
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1C998 | 17.0 | Size
0x1C99C | 300.0 | Inflation time (frames)
0x1C9A0 | 70.0 | Max size time (frames)
0x1C9A4 | 100.0 | Deflation time (frames, interrupts at 120 if larger and keeps current size)
```
## King Dedede
### Inhale
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2A144 | 4.0 | Speed of star shot
0x2A148 | 0.13 | Speed deceleration
0x2A14C | 15.0 | Spinning speed
0x2A150 | 1.0 | X offset?
0x2A154 | -1.0 | Y offset
0x2A158 | 1.0 | ??
```
### Waddle Toss
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1CAEC | 0.3 | waddle dee air friction related
0x1CAF0 | 0.06 | ?? read when spawning and hitting waddle dee
0x1CAF4 | 2.1 | ?? read when spawning and hitting waddle dee
0x1CAF4 | 0.5 | waddle dee hitting waddle bounce distance
0x1CAF8 | 1.0 | waddle dee hitting person bounce distance
0x1CB50 | 0.08 | waddle doo friction
0x1CB54 | 0.01 | waddle doo air friction
0x1CB58 | 0.3 | waddle doo air friction related
0x1CB5C | 0.06 | ?? read when spawning and hitting waddle doo
0x1CB60 | 2.1 | ?? read when spawning and hitting waddle doo
0x1CB64 | 0.5 | waddle doo hitting waddle bounce distance
0x1CB68 | 1.0 | waddle doo hitting person bounce distance
0x2A15C | 1.9 | Base throw speed
0x2A160 | 1.2 | Strong throw ratio
0x2A164 | 18.0 | Default throw angle
0x2A168 | 12.0 | Downward angle
0x2A16C | 26.0 | Upward angle
0x2A170 | 2 | Max number of minions
0x2A174 | 35.0 | Relative odds of throwing a Waddle Dee
0x2A178 | 10.0 | Relative odds of throwing a Waddle Doo
0x2A17C | 4.0 | Relative odds of throwing a Gordo
0x2A180 | 3.0 | Relative odds of throwing a Capsule
0x2A184 | 1.0 | ?? (read on waddle toss)
0x2A188 | 1.0 | ?? (read on waddle toss)
0x2A1F0 | 8.0 | Wall collision size?
0x2A1F4 | 0 | Something with collision
0x2A1F8 | 4.0 | Something with collision
```
### Super Dedede Jump
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2A1FC | 1.0 | Horizontal boost on startup
0x2A200 | -0.5 | Vertical momentum on startup
0x2A204 | -0.03 | Gravity on startup
0x2A208 | 1.0 | Horizontal movement ratio
0x2A20C | 7.5 | Vertical momentum on travel
0x2A210 | 0.25 | Bonus gravity
0x2A214 | 0.9 | Launch vertical velocity
0x2A218 | 0.3 | Launch vertical velocity
0x2A21C | 17 | Height
0x2A220 | 24 | ?? (read on upB normal landing)
0x2A224 | 7.0 | X offset of right buttstar
0x2A228 | 2.0 | Y offset of right buttstar
0x2A22C | -7.0 | X offset of left buttstar
0x2A230 | 2.0 | Y offset of left buttstar
0x2A234 | 0.5 | ?? (read on upB normal landing)
```
### Jet Hammer
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2A234 | 0.5 | Charging walk speed
0x2A238 | 120 | Time to fully charge (frames)
0x2A23C | 0.15 | Charge multiplier
0x2A240 | 30 | Frame interval of self-damage?
0x2A244 | 150 | Full charge hold self-damage limit
0x2A248 | 0
```
### Waddle Dee Army
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2A24C | 22 | How long before the next minion comes out
0x2A250 | 4 | X offset?
0x2A254 | 16 | Max minions
0x2A258 | 9 | Max number of dances before FS ending?
0x2A25C | 120 | ?? (read on FS)
0x2A260 | 35.0 | Waddle Dee ratio
0x2A264 | 10.0 | Waddle Doo ratio
0x2A268 | 6.0 | Gordo ratio
0x2A26C | 0 | ?? (read on FS)
0x2A270 | 5.0 | ?? (read on FS)
0x2A274 | 0 | ?? (read on FS)
0x2A278 | 10.0 | Gordo bounce height?
```
## Kirby
### Inhale?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2AC68 | 40 | How many frames you continue inhaling for after releasing B
0x2AC6C | -0.2 | ?? (read on EatWait; freezes very easily)
0x2AC70 | -0.4 | ?? (read on EatWait; freezes very easily)
0x2AC74 | 0.6 | Inhale walk speed
0x2AC78 | 0.6 | Inhale jump height
0x2AC7C | 0.6 | Inhale stop walk momentum
0x2AC80 | 7.0 | X offset of exhale
0x2AC84 | 7.0 | Y offset of exhale
0x2AC88 | 0
0x2AC8C | 7.0
0x2AC90 | 3.0 | full swallow aerial mobility multiplier
0x2AC94 | 32 | Odds of losing power when hit
0x2AC98 | 5.0
```
### Hammer?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2B198 | 0.5 | Vertical momentum
0x2B19C | 0 | ??
0x2B1A0 | 25 | Landing lag
```
### Final Cutter?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2B4C8 | 0.8 | Aerial vertical momentum
0x2B4CC | 8.0 | ?? (read on upB input and initial rise)
0x2B4D0 | 14.0 | X offset of cutter
0x2B4D4 | 0 | Y offset of cutter
0x2B4D8 | 0.2
```
### Stone?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2B5F8 | 6.0
0x2B5FC | 0
0x2B600 | 25
0x2B604 | 0.31
0x2BA10 | 150 | Max frames in stone
0x2BA14 | 18 | How many frames after you press b you get out
0x2BA18 | 0.17453292 | ?? (read on startup)
0x2BA1C | 0.87266463 | ?? (read on startup)
0x2BA20 | 0.1 | ?? (read when turned to stone)
0x2BA24 | 2.0 | ?? (read when turned to stone)
0x2BA28 | 4.5 | Gravity
0x2BA2C | 30.0 | ?? (read when turned to stone in air)
0x2BA30 | 16.0
0x2BA34 | 28.0
0x2BA38 | 0
2BA3C-2BA68 | 01000000 00010100\n00000101 01000001\n01010100 01010101\n01000000 00000000\n01010000 00010101\n01000101 01010100
2BEF8-2BFEC |  | What appears to be a table of numbers.
```
### Cook Kirby
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2BF08 | 2 | Number of items to spawn per article/item (This/2)
0x2BF0C | 1 | ??
0x2BF10 | 2 | ?? {At 15, he stirs even if he didn't get anyone)
0x2BF3C | 2 | Damage per hit when cooking
```
## Link
### Hookshot
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1CDC8 | 2.7 | Speed that the chain travels (Air/Ground)
0x1CDCC | 15 | Length of grounded chain (Amount of chain links?) - Anything higher than 21 glitches.
0x1CDD0 | 21 | Length of aerial chain (Amount of chain links?) - Anything higher than 21 glitches.
0x1CDD4 | 50.0
0x1CDD8 | 8.0
```
### Arrows
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1CF80 | 60.0 | More velocity with lower value, ONLY affects charged arrows
0x1CF84 | 1.0 | Unknown
0x1CF88 | 0 | Unknown
0x1CF8C | 0.04363323 | Firing angle (radians)
0x1CF90 | 1.2
0x1CF94 | 40 | Duration (frames after stage impact?)
0x1CF98 | 3.0 | Uncharged Arrow Velocity Multiplier
0x1CF9C | 10.0 | Charge Arrow Velocity Multiplier
0x1CFA0 | 4.0 | Uncharged Arrow Damage
0x1CFA4 | 12.0 | Full Charge Arrow Damage
0x1CFA8 | 80 | Frames to fully charge?
0x1CFAC | 0.053 | Arrow gravity
0x1CFB0 | 0.69813168 | Arrow weight
0x1CFB8 | N/A | Arrow hitbox Subroutine (In PSA)
```
### Boomerang
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D1F8 | 0.1 | Something to do with boomerang angle... Anything above 1=cant angle boomerang
0x1D1FC | 0.45378559 | Angle of upward/downward boomerang throw (radians)
0x1D200 | -4.15 | Boomerang vertical offset -16=Higher, hits floor sooner than it should
0x1D204 | 140 | Duration of short rang (frames)
0x1D208 | 170 | Duration of long rang (frames)
0x1D20C | 2.4 | Short rang start velocity
0x1D210 | 3.1 | Long rang start velocity
0x1D214 | -20.0 | Rotation of the actual rang
0x1D218 | -30.0 | Rotation of the actual rang
0x1D21C | 0.047 | 'Rang Decceleration/Resistance
0x1D220 | 3.0 | Returning rang Velocity
0x1D224 | 0.3 | Higher makes the 'rang reverse direction quicker and sharply, Lower makes the turnaround slower
0x1D228 | 0.52359879 | Unknown. Seems to VERY slightly do something near the turnaround point
0x1D22C | 0.01308996 | Boomerang Homing. Higher value = better homing to link
0x1D230 | 0.02617993 | Unknown
0x1D234 | 140 | Something to do with returning rang homing...lowering makes it stop homing after awhile
0x1D238 | 19 | Unknown. Freezes if too high, right near turnaround point
0x1D23C | 9.0 | X-offset of when Boomerang is catchable. Higher values=Boomerang is caught further in front of Link. 0=Your own personal tornado.
0x1D240 | 2.0 | Unknown
0x1D244 | 100.0 | Unknown
0x1D248 | 20 | Unknown
0x1D24C | 4
0x1D250 | 2
0x1D358 | N/A | Boomerang Outgoing hitboxes. (Subroutine in PSA)
0x1D400 | N/A | Boomerang incoming hitboxes. (Subroutine in PSA)
```

### Standing spin attack
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D490 | 60 |
0x1D494 | 1.6 | per frame/iteration power multiplier?
```

### Spin Attack
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1E298 | 2.15 | vertical height
0x1E29C | 0.55 | gravity
0x1E2A0 | 0.4 | Not used in-game
0x1E2A4 | 0.22 | Horizontal mobility
0x1E2A8 | 0.2 | Horizontal maximum mobility
0x1E2AC | 24 | Landing lag
```
### Triforce Slash (?)
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1ED48 | 7.0 | ?? (read on successful hit)
0x1ED4C | 150.0 | range
0x1ED50 | 20 | how many frames after successful hit he travels to opponent
0x1ED54 | 10.0 | travel speed
0x1ED58 | 15 | ?? (read on successful hit)
0x1ED5C | 0.05 | ?? (read on successful hit)
```
## Lucario

### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17A18 | 7 | Amount of charge states?
0x17A1C | 0.15 | Ground backwards horizontal momentum from releasing Aura Sphere
0x17A20 | 0.2 | Aerial backwards horizontal momentum from releasing Aura Sphere
0x17A24 | 0.06 |
0x17A28 | 12 | Loop iterations to fully charge Aura Sphere
0x17A2C | 0.75 | Aura Sphere Power
0x17A30 | 1.0 | Max Aura Sphere size?
0x17A34 | 0.8 | Aura Sphere Start Size
```

### Aura Sphere
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17F48 | 70 | Aura sphere lifetime
0x17F4C | 0 | Firing angle (radians)
0x17F50 | 1.5 | Uncharged speed
0x17F54 | 2.0 | Fully charged speed (also added on to slightly charged)
0x17F58 | 6 | Frames between wiggling
0x17F5C | 10.0 | Movement added to a random direction each wiggle
0x17F60 | 0.5 | Uncharged Aura Sphere Wiggle intensity
0x17F64 | 0 | Charged Aura Sphere Wiggle intensity
0x17F68 | 3.0 | Aura Sphere base growth size (smaller = bigger)
0x17F6C | 1.0 | rowspan="8" | Aura Sphere size table (bigger = bigger, will automatically scale to base size after being charged a bit)
0x17F70 | 1.33
0x17F74 | 1.64
0x17F78 | 1.97
0x17F7C | 2.34
0x17F80 | 2.81
0x17F84 | 3.31
0x17F88 | 4.0
0x17F8C | 15.0 | Unknown. Probably has something to do with aura sphere damage/stock growth
```

### Force Palm?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x183A8 | 13.0 | Grounded X offset
0x183AC | 7.0 | Grounded Y offset
0x183B0 | 13.0 | Aerial X offset
0x183B4 | 11.0 | Aerial Y offset
```
### Extreme Speed
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x185D0 | 1.25 | ?? (read on startup)
0x185D4 | 0.02 | Air friction on aerial startup
0x185D8 | 0.015 | Gravity on aerial startup
0x185DC | 0.125 | ?? (read on travel)
0x185E0 | 0.5 | Default angle
0x185E4 | 5.8 | Speed
0x185E8 | 10.0 | Turning
0x185EC | 35.0 | ?? (something with angle required to bounce off wall?)
0x185F0 | 7 | Frame duration of travel
0x185F4 | 0.8 | Travel -> Ending velocity multiplier
0x185F8 | 0.23 | Ending air friction (?)
0x185FC | 0.8 | (NOT READ)
0x18600 | 0.6 | ?? (read on end)
0x18604 | 18 | ?? (read on end)
0x18608 | 0.5 | horizontal momentum on angled travel landing
```

### Double Team
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18898 | 0.5 | Momentum preservation
0x1889C | 0.02 | ?? (read on startup)
0x188A0 | 0.8
0x188A4 | 28 | Frames duration for dodge before hitbox action occurs
0x188A8 | 28.0 | How far away from start attack occurs (in units)
0x188AC | 45.0
0x188B0 | 10 | Attack kick duration
0x188B4 | 0
0x188B8 | 0
0x188BC | -4.0
0x188C0 | 0
0x188C4 | 0
0x188C8 | 4.0
0x188CC | 0
0x188D0 | 4.0 | Size of counter trigger box (?)
```

### Aura Storm
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18CA0 | 8.0 | rising speed
0x18CA4 | 65.0 | max turning angle
0x18CA8 | 0.28 | turning speed
```

### Aura physics (plus unknown?)
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18EB8 | 0.7
0x18EBC | 0.5
0x18EC0 | 0.7 | Aura floor multiplier
0x18EC4 | 1.4 | Aura ceiling multiplier
0x18EC8 | 20.0 | Aura floor percentage
0x18ECC | 75.0 | Aura baseline percentage
0x18ED0 | 170.0 | Aura ceiling percentage
0x18ED4 | 1.0 | Flat aura damage bonus
0x18ED8 | 1.8 | Aura maximum multiplier
0x18EDC | 0.6 | Aura minimum multiplier
0x18EE0 | 0.66
0x18EE4 | 1.5
0x18EE8 | 80.0
0x18EEC | 50.0
0x18EF0 | 30.0
0x18EF4 | 1.4
0x18EF8 | 0.7
```
## Lucas
### Stick swing?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1252C | 50.0 | Break threshold?
0x12530 | 0 | Reflection bubble X pos?
0x12534 | 6.0 | Reflection bubble Y pos?
0x12538 | 9.0 | Reflection bubble Z pos?
0x1253C | 10.0 | Reflection bubble size?
0x12540 | 1.5 | Reflection damage multiplier?
0x12544 | 1.5 | Reflection speed multiplier?
0x12548 | 0.7
```
### PK Freeze
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17788 | 10 |  Number of frames to halt vert momentum before using @17794 as gravity (0 permanently halts fall speed)
0x1778C | 30 | How long after releasing B PK Freeze explodes
0x17790 | 70 | PK Freeze lifetime
0x17794 | 0.02 | Gravity after initial vertical halt
0x17798 | 30.0 | ?? (read on release/PK Freeze explosion)
0x1779C | 0 | ?? (read on release/PK Flash explosion)
0x177A0 | 70.0 | DMG/Size multiplier? (less=larger gfx size but less dmg)
0x177A4 | 0.3 | Starting size
0x177A8 | 1.45 | Size multiplier
0x177AC | 20.0 | Initial firing angle, degrees below vertical
0x177B0 | 1.4 | PK Freeze rising height
0x177B4 | 0.04 | PK Freeze control
0x177B8 | 0.04 | PK Freeze gravity
0x177BC | 2.0 | ?? (read on startup)
0x177C0 | 3.0 | ?? (read on startup)
0x177C4 | 8.0 | How long after screen shake PK Freeze explodes
0x177C8 | 4.0 | Default dmg
0x177CC | 0.23 | Damage multiplier
```
### PK Fire
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17910 | 0 | Aerial Vertical Velocity
0x17914 | 2.8 | Aerial Horizontal Velocity
0x17918 | 0.01047197 | Grounded Vertical Velocity
0x1791C | 2.5 | Horizontal Ground speed
0x17920 | 3.5 | X offset?
0x17924 | 0.7 | Y offset of starting point
0x17928 | 22.0
0x1792C | 20 | How long, in frames, the spark is out. Setting this to 0 yields "PK Fizzle".
0x17930 | 30
0x17934 | 1.0
0x17938 | 0.01
0x1793C | 0.8
0x17940 | 3.0 | Amount of time Spark stays out? (Setting this to 1 seems to have no effect on distance)
0x17944 | 0.5 | Amount of time pillars last
```
### PK Thunder
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17FB8 | 10.0
0x17FBC | 30
0x17FC0 | 10
0x17FC4 | 40
0x17FC8 | 2.0
0x17FCC | 0.017 | UpB hold animation Falling acceleration
0x17FD0 | 4.0 | PKT2 Momentum
0x17FD4 | 0.071 | PKT2 deacceleration rate
0x17FD8 | 0 | PKT2 deacceleration rate after hitting something, stacks with previous
0x17FDC | 65.0
0x17FE0 | 60.0
0x17FE4 | 30.0 | Landing lag duration(in frames)
0x17FE8 | 120 | PKT Duration
0x17FEC | 1.5 | PKT speed
0x17FF0 | 90.0 | PKT starting angle
0x17FF4 | 0.5 | PKT turning control, lower number = higher amount of control
0x17FF8 | 8.0 | PKT turning radius, higher number = tighter radius
```
### PSI Magnet
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x181F8 | 18 | Minimum frames magnet must stay out
0x181FC | 4 | Frames before gravity kicks in (?)
0x18200 | 8.0
0x18204 | 3.0
0x18208 | 0.03 | Gravity
0x1820C | 2.5 | DMG Recovery Multiplier
0x18210 | 30.0 | Maximum damage recoverable
0x18214 | 2.0
0x18218 | 0 | Absorption Collision X Offset
0x1821C | 6.5 | Absorption Collision Y Offset
0x18220 | 10.0 | Absorption Collision Z Offset
0x18224 | 16.0 | Absorption Collision Size
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18358 | 0.18
0x1835C | 0.9
0x18360 | 0.8
0x18364 | 25.0
0x18368 | 1.25
0x1836C | 20.0
0x18370 | 10
```
### PK Starstorm?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18400 | 1.0
0x18404 | 0.15
0x18408 | 60
```
## Luigi
### Fireball
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16B8C | 1.65 | Unknown
0x16B90 | 0.85 | Unknown
0x16B94 | 1.25 | Fireball velocity
0x16B98 | 0 | Fireball Angle
0x16B9C | 50 | How long fireball stays out (frames)
0x16BA0 | 0.9 | Unknown
0x16BA4 | 2.0 | Unknown
```
### Green Missile
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16F80 | 0.25 | Unknown
0x16F84 | 3.0 | Unknown
0x16F88 | 20.0 | Unknown
0x16F8C | 90 | Time (frames) to fully charge
0x16F90 | 5.0 | Base damage
0x16F94 | 0.23333333 | Damage slope (damage = base damage + frames spent charging * this)
0x16F98 | 1.25 | Unknown
0x16F9C | 0.02 | Unknown
0x16FA0 | 0.05 | Unknown
0x16FA4 | 1.4 | Horizontal momentum
0x16FA8 | 0.01666666 | Horizontal momentum multiplier
0x16FAC | 0.4 | Vertical momentum
0x16FB0 | 0.00444444 | Vertical momentum multiplier
0x16FB4 | 0.01 | Vertical momentum something?
0x16FB8 | 1.2 | Unknown
0x16FBC | 1.5 | Unknown
0x16FC0 | 0.05 | Unknown
0x16FC4 | 0.1 | Unknown
0x16FC8 | 8 | Misfire ratio (i.e. 1 out of this chance of misfiring)
0x16FCC | 4.0 | Misfire horizontal momentum
0x16FD0 | 1.2 | Misfire vertical momentum
0x16FD4 | 1.8 | Unknown
0x16FD8 | 0.4 | Unknown
```
### Fire Jump Punch
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x172D8 | 0.25 | Unknown
0x172DC | 0 | Unknown
0x172E0 | 2.0 | Unknown
0x172E4 | 0.7 | Unknown
0x172E8 | 40.0 | Landing lag
0x172EC | 0 | Unknown
0x172F0 | 0.05 | Unknown
0x172F4 | 0.95 | Unknown
```
### Luigi Cyclone
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17A38 | 0.1 | Unknown (read on downB ground only)
0x17A3C | 2.35 | Grounded horizontal momentum
0x17A40 | 0.2 | Grounded turning momentum
0x17A44 | 0.66 | Unknown (read on downB ground only)
0x17A48 | 0.9 | Tapping B vertical momentum
0x17A4C | 2.0 | Maximum vertical momentum

0x17A50 | 0.8 | Unknown (read on tapping and in air)
0x17A54 | 0.08 | Unknown (read on tapping and in air)
```
### Negative Zone
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17B08 | 0.01
0x17B0C | 0.2
0x17B10 | 78.0 | Size
0x17B14 | 0.2
0x17B18 | 1.35
0x17B1C | 0.7
0x17B20 | 0.7
0x17B24 | 0.5
0x17B28 | 20
0x17B2C | 30
0x17B30 | 0.6
0x17B34 | 0.8
0x17B38 | 2
0x17B3C | 180.0
0x17B40 | 2
0x17B44 | 180
0x17B48 | 4
0x17B4C | 4
0x17B50 | 4
0x17B54 | 3
0x17B58 | 1
0x17B5C | 2
0x17B60 | 800
0x17B64 | 180
```
## Mario

### Fireball
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16FF0 | 0.036 | Fireball gravity
0x16FF4 | 1.25 | Unknown
0x16FF8 | 0.75 | Fireball bounce velocity multiplier
0x16FFC | 1.4 | Initial speed
0x17000 | -0.1745329 | Initial angle (radians)
0x17004 | 75 | Duration (frames)
0x17008 | 0.8 | Minimum velocity on ground collision; any lower will delete fireball
0x1700C | 2.0 | Something to do with how many times it can bounce before disappearing. 2 = none, 4 = too many to count.
```
### Cape
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17508 | 2.5 | Horizontal momentum from moving left/right (smaller = more)
0x1750C | 0.0025 | Horizontal air friction
0x17510 | 0.5 | Vertical momentum for 1st aerial usage
0x17514 | 0.029 | Gravity while Ra-Bit [17] is set
0x17518 | 0.9 | Terminal velocity
0x1751C | 0 | Unknown (read on caping in air)
0x17520 | 10 | Unknown
0x17524 | 50.0 | Break threshold?
0x17528 | 0 | Reflection bubble X pos?
0x1752C | 1.0 | Reflection bubble Y pos?
0x17530 | 0 | Reflection bubble Z pos?
0x17534 | 6.5 | Reflection bubble size?
0x17538 | 1.5 | Reflection damage multiplier
0x1753C | 1.0 | Reflection speed multiplier
0x17540 | 0.5 | Unknown
```
### Super Jump Punch
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17A10 | 0.25 | Joystick backward sensitivity?
0x17A14 | 0.625 | Joystick forward sensitivity?
0x17A18 | 18.0 | Affects travel direction and mobility?
0x17A1C | 0.6 | Special fall aerial mobility
0x17A20 | 30.0 | Unknown (read on upB)
0x17A24 | 0.6666 | Unknown (read on upB)
0x17A28 | 0.5 | Unknown (read on upB)
0x17A2C | 0.95 | Unknown (read on upB)
```
### Fludd
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17A70 | 90 | Frames to fully charge
0x17A74 | 1.1 | Unknown (read on firing)
0x17A78 | 70 | Unknown (read on firing)
0x17A7C | 0.02 | Momentum backward when firing (affects aerial too)
0x17A80 | 300 | How many frames FLUDD stays out during/after downB
0x17A84 | 10.0 | Initial angle (degrees)
0x17A88 | 50.0 | Max upward angle (degrees)
0x17A8C | 16.0 | Max downward angle? (degrees)
0x17A90 | 1.9 | Response to angling (also affects going back to center)
0x17A94 | 0.5 | Relates to offsets? (at 100 they are really far up from mario and spaced out)
0x17B38 | 1.9 | Water speed multiplier/knockback multiplier?
0x17B3C | 1.7 | Water speed base
0x17B40 | 0.06 | Water gravity
0x17B44 | 1.5 | Unknown (read on firing)
0x17B48 | 26 | How many frames water stays out (does not affect gfx past a certain point)
0x17B4C | 0.8 | Water gfx size
0x17B50 | 1.5 | Water gfx size multiplier (gfx get larger further they go)
0x17B54 | 35 | Water pushback
```
## Marth
### Shield Breaker
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x242C0 | 2 | Charge time (seconds?)
0x242C4 | 8 | Base damage
0x242C8 | 5 | damage per second of charge?
0x242CC | 0.8 | Aerial horizontal momentum ratio
0x242D0 | 0.02 | Aerial horizontal deceleration
0x242D4 | 0 | unknown, read once on initial pullback
```
### Dancing Blade
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x242D8 | 0.5 | Aerial horizontal momentum ratio
0x242DC | 0.0025 | unknown, read once on first aerial startup
0x242E0 | 1.4 | Aerial vertical boost
0x242E4 | 0.072 | unknown, read once on first aerial startup
0x242E8 | 2.0
0x242EC | 0
```
### Dolphin Slash
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x242F0 | 0.4 | Max horizontal air movement in helpless falling (may transition to automatically)
0x242F4 | 34.0 | Landing lag (frames)
0x242F8 | 0.25 | unknown, read several times pre-jump
0x242FC | 0.5 | unknown, read throughout entire move
0x24300 | 20.0 | directionalization distance (displacement, not angle)
0x24304 | 0.6666 | directionalized pre-jump displacement (has a low max)
0x24308 | 1.1 | aerial jump height ratio (relative to ground version)
0x2430C | 0.06 | post-jump gravity
0x24310 | 1.8 | post jump max fall speed
0x24314 | 0 | unknown, read once post-jump
```
### Counter
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x24318 | 0.5 | Aerial horizontal momentum ratio
0x2431C | 0.0025
0x24320 | 0.04 | Counter gravity
0x24324 | 1.2 | Counter max fall speed
0x24328 | 1.1 | Damage multiplier
0x2432C | 0.9 | unknown, read on activation
0x24330 | 16 | Freeze frames on activation
0x24334 | 8.0 | Minimum damage
0x24338 | 999.0 | Maximum damage
0x2433C | 25.0 | unknown, read on activation
```
### Critical Hit?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x24340 | 0
0x24344 | 0
0x24348 | 9.3
0x2434C | 0
0x24350 | 9.2
0x24354 | 0
0x24358 | 9.0
```
## Meta Knight
### Mach Tornado
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x25E40 | 1.0 | Initial vertical velocity gain
0x25E44 | 0.7 | Horizontal Momentum Conservation (resulting max speed is capped)
0x25E48 | 80.0 | Initial Spin Speed
0x25E4C | 0.12 | Grounded Horizontal Acceleration
0x25E50 | 2.0 | Grounded Horizontal Max Speed
0x25E54 | 0.1 | Aerial Horizontal Acceleration
0x25E58 | 1.7 | Aerial Horizontal Max Speed
0x25E5C | 0.008 | Horizontal braking acceleration
0x25E60 | -0.08 | Gravity
0x25E64 | 0.5 | Fall speed
0x25E68 | 1.0 | Vertical velocity added per button press
0x25E6C | 10 | Minimum frames between button presses (buffers if B is pressed before then)
0x25E70 | 1.4 | Maximum vertical velocity
0x25E74 | 16.0 | Spin speed added per button press
0x25E78 | 80.0 | Max spin speed
0x25E7C | 1.5 | Subtracts this each frame while listening for button input
0x25E80 | 70 | Frames to listen for button input
0x25E84 | 2.0 | Subtracts this each frame while not listening for button input
0x25E88 | 10.0 | Spin speed equal to or less than this to end move
```
### Drill Rush
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x25E90 | 0.5 | Horizontal momentum conservation
0x25E94 | 1.0 | Causes MK to go up during beginning of drill rush
0x25E98 | -0.08 | Causes MK to go down during beginning of drill rush
0x25E9C | 3.0 | Control
0x25EA0 | 10 | Something to do with direction after landing on platform and finishing
```
### Dimensional Cape
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x25EA8 | 0.5 | Horizontal momentum conservation
0x25EAC | 0.4 | Vertical momentum conservation
0x25EB0 | 0.5 | Max horizontal speed
0x25EB4 | 2.5 | Horizontal acceleration
0x25EB8 | 0.5 | Max vertical speed
0x25EBC | 2.5 | Vertical acceleration
```
## Mr. Game and Watch
### Chef
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x15640 | 1.0 | Trajectory 1 horizontal velocity
0x15644 | 1.0 | Trajectory 1 vertical velocity
0x15648 | 0.04 | Trajectory 1 gravity
0x1564C | 2.5 | Trajectory 1 max fall speed
0x15650 | 10.0 | Trajectory 1 spinning
0x15654 | 0.8 | Trajectory 2 horizontal velocity
0x15658 | 1.1 | Trajectory 2 vertical velocity
0x1565C | 0.04 | Trajectory 2 gravity
0x15660 | 2.5 | Trajectory 2 max fall speed
0x15664 | 31.0 | Trajectory 2 spinning
0x15668 | 0.6 | Trajectory 3 data
0x1566C | 1.2
0x15670 | 0.04
0x15674 | 2.5
0x15678 | 8.0
0x1567C | 0.4 | Trajectory 4 data
0x15680 | 1.3
0x15684 | 0.04
0x15688 | 2.5
0x1568C | 42.0
0x15690 | 0.2 | Trajectory 5 data
0x15694 | 1.4
0x15698 | 0.04
0x1569C | 2.5
0x156A0 | 12.0
0x156AC | 0.5
0x156A8 | 80 | Damaging time (frames)
0x156AC | 30 | Time spent flashing (frames)
0x156B4 | 5 | Number of trajectories (causes crashes when greater than 5 due to reading bad data)
```
### Judge
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x161A0 | 2.0 | Aerial momentum preservation (less = more)
0x161A4 | 0.0025 | Something to do with aerial momentum preservation? (0 = no momentum preservation)
0x161A8 | 0.7
0x161AC | 0.025
0x161B0 | 0.7
0x161B4 | 1 | Odds for getting a 1
0x161B8 | 1 | Odds for getting a 2
0x161BC | 1 | Odds for getting a 3
0x161C0 | 1 | Odds for getting a 4
0x161C4 | 1 | Odds for getting a 5
0x161C8 | 1 | Odds for getting a 6
0x161CC | 1 | Odds for getting a 7
0x161D0 | 1 | Odds for getting a 8
0x161D4 | 1 | Odds for getting a 9
```
### Fire
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16490 | 0.25
0x16494 | 30.0
0x16498 | 40.0
0x1649C | 0.5
```
### Oil Panic
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16738 | 2.0 | Amount initial horizontal momentum is divided by
0x1673C | 0.0025 | Air Friction
0x16740 | 0.04 | Gravity
0x16744 | 1.2 | Terminal Velocity
0x16748 | 18.0 | Minimum damage
0x1674C | 2.8 | Damage multiplier
0x16750 | 6.0 | Min damage per projectile
0x16754 | 20.0 | Max damage per projectile
0x16758 | 16.0
0x1675C | -4.5
0x16760 | 1.5
0x16764 | 0
0x16768 | 22.0 | Absorb Collision Size
```
### Octopus
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16C50 | 120.0
0x16C54 | 15.0
0x16C58 | 40.0
0x16C5C | 0
0x16C60 | 0
0x16C64 | 6.0
0x16C68 | -14.0
```
## Ness
### Bat swing?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1124C | 80.0 | Break threshold?
0x11250 | 0 | Reflection bubble X pos?
0x11254 | 6.0 | Reflection bubble Y pos?
0x11258 | 9.0 | Reflection bubble Z pos?
0x1125C | 10.0 | Reflection bubble size?
0x11260 | 1.5 | Reflection damage multiplier?
0x11264 | 1.5 | Reflection speed multiplier?
0x11268 | 0.5
```
### PK Flash
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16038 | 10 |  ??
0x1603C | 15 | How long after releasing B PK Flash explodes
0x16040 | 120 | PK Flash lifetime
0x16044 | 0.017 | Aerial vert momentum on charge
0x16048 | 30.0 | ?? (read on release/PK Flash explosion)
0x1604C | 0 | ?? (read on release/PK Flash explosion)
0x16050 | 100.0 | DMG/Size multiplier? (less=larger gfx size but less dmg)
0x16054 | 0.9 | Starting size
0x16058 | 1.43 | Size multiplier
0x1605C | 3.0 | PK Flash control
0x16060 | 1.3 | PK Flash rising height
0x16064 | 0.01 | PK Flash momentum added from stick press
0x16068 | 0.023 | PK Flash gravity
0x1606C | 2.0 | ?? (read on startup)
0x16070 | 2.0 | ?? (read on startup)
0x16074 | 15.0 | How long after screen shake PK Flash explodes
0x16078 | 5.0 | Default damage
0x1607C | 0.32 | Damage multiplier
```
### PK Fire
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x161A8 | -0.7504915 | Aerial Vertical Velocity
0x161AC | 2.8 | Aerial Horizontal Velocity
0x161B0 | -0.0628318 | Grounded Vertical Velocity
0x161B4 | 2.5 | Horizontal Ground speed
0x161B8 | 3.2 | X offset?
0x161BC | 1.1 | Y offset of starting point
0x161C0 | 30.0 | ?? (read when spark is generated)
0x161C4 | 20 | Spark lifetime
0x161C8 | 100 | Pillar lifetime
0x161CC | 3.0 | Pillar vert momentum on first hit
0x161D0 | 0.01 | ?? (read when spark is generated)
0x161D4 | 0.8 | ?? (read when spark is generated)
0x161D8 | 3.0 | Pillar vert momentum on loop hits?
0x161DC | 0.5 | Pillar size multiplier on each hit?
```
### PK Thunder
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16580 | 10.0 | ?? (read on startup)
0x16584 | 30 | How long you continue doing the PKT hold anim after it dies?
0x16588 | 24 | Same as 16584?
0x1658C | 30 | How long before you fall during upB hold in air?
0x16590 | 2.0 | Something with falling speed initially
0x16594 | 0.017 | upB hold falling acceleration
0x16598 | 3.6 | PKT2 Momentum
0x1659C | 0.072 | PKT2 deceleration rate
0x165A0 | 0.072 | PKT2 deceleration rate after hitting something, stacks with previous
0x165A4 | 65.0 | ?? (read on PKT2)
0x165A8 | 60.0 | ?? (read on PKT2 end)
0x165AC | 24.0 | Landing lag duration(in frames)
0x165B0 | 120.0 | PKT Duration
0x165B4 | 2.0 | PKT speed
0x165B8 | 90.0 | PKT starting angle
0x165BC | 0.5 | PKT turning control, lower number = higher amount of control
0x165C0 | 8.0 | PKT turning radius, higher number = tighter radius
0x166E8 | -2.0 | PKT landing detection
0x166EC | 2.0 | PKT landing detection?
```
### PSI Magnet
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16848 | 30 | How many frames after releasing B you continue to hold it
0x1684C | 4 | ?? (read on startup)
0x16850 | 8.0 | Something with momentum preservation?
0x16854 | 2.0 | Something with momentum preservation?
0x16858 | 0.02666666 | Falling speed
0x1685C | 1.6 | Damage recovery factor
0x16860 | 30.0 | Maximum damage recoverable
0x16864 | 4.0 |
0x16868 | 0 | Absorption Collision X Offset
0x1686C | 6.5 | Absorption Collision Y Offset
0x16870 | 0 | Absorption Collision Z Offset
0x16874 | 14.0 | Absorption Collision Size
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x169A8 | 0.1
0x169AC | 0.5
0x169B0 | 0.75
0x169B4 | 30.0
0x169B8 | 1.7
0x168BC | 15.0
0x169C0 | 8
```
### PK Starstorm
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16A50 | 5.0 | Base falling speed
0x16A54 | 0.03 | Additional falling speed
0x16A58 | 70 | ?? (freezes at 0)
0x16A5C | 9 | ?? (read on starstorm)
0x16A60 | 11 | ?? (read on starstorm)
0x16A64 | 0.001
0x16A68 | 25.0
0x16A6C | 20.0
0x16A70 | 50.0
0x16A74 | 0.7
0x16A78 | 0.05
0x16A7C | 1.5
0x16A80 | 0.8
0x16A84 | 0.1
0x16A88 | 1.0
```
## Olimar
### All Pikmin
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D4B0 | 6.0 | Pikmin 'Safespot' Olimar-Distance (How far the 'ideal' position for the Pikmin to stand is from olimar. Higher = farther)
0x1D4B4 | 6.0 | Pikmin 'Safespot' Spacing (The distance between the pikmin's safespots)
0x1D4B8 | 40.0 | Pikmin Runspeed
0x1D4BC | 20.0
0x1D4C0 | 5.0 | Effort (When set to 100, they just stand still whenever you idle and you can run away from them and through them and they won't care. Only if you whistle or do certain moves will they respond, and even then, only some of them do)
0x1D4C4 | 15.0 | How long pikmin continue to follow the previous aerial velocity
0x1D4C8 | 800 | Desynch Death Time (How long a desynched Pikmin has to live in frames)
0x1D4CC | 620 | Desynch Warning Time (How long to wait before flashtinting a desynched pikmin to warn the olimar player that it is about to die)
0x1D4D0 | 1200.0 | Budding time
0x1D4D4 | 2400.0 | Full bloom time
0x1D4D8 | 1.1 | Budded movement speed multiplier (?)
0x1D4DC | 1.2 | Flower movement speed multiplier (?)
0x1D4E0 | 0.21 | Pikmin Pluck Angle (Inverted Radians)
0x1D4E4 | 2.1 | Vertical momentum pikmin pluck
0x1D4E8 | 0.075 | Horizontal momentum pikmin pluck
0x1D4EC | 3 | Olimar-Pikmin Interaction Box Size... Or something like that. Lets you remotely control solo pikmin
0x1D4F0 | 20.0 | Pikmin Teleport Box Size (Lets you grab pikmin from across the stage for usage immediately with fair and dair and such.)
0x1D4F4 | 3.2 | Something with fsmash velocity?
0x1D4F8 | 0 | Something with fsmash velocity?
0x1D4FC | 0.5 | Pikmin Fsmash Initial Velocity
0x1D500 | 0.18 | Pikmin Fsmash Angle (Radians)
0x1D504 | 3.0 | ?? (read on fsmash)
0x1D508 | 0.7 | ?? (read on fsmash)
0x1D50C | 0.06 | Pikmin Fsmash Gravity
0x1D510 | 3.5 | Pikmin Usmash Initial Momentum
0x1D514 | 0.25 | Pikmin Usmash Gravity
0x1D518 | 3.5
0x1D51C | 1.2
0x1D520 | 200
0x1D524 | 60
0x1D528 | 7
0x1D52C | -0.2 | SideB Throw Power?
0x1D530 | 0.6 | Velocity Pikmin fly off opponnent after they're done Side-B beating him
0x1D534 | 32
0x1D538 | -1.2
0x1D53C | 30
0x1D540 | 2000.0
0x1D544 | 3.0
0x1D548 | 45.0
0x1D54C | 0.05
0x1D550 | 0.04
0x1D554 | 0.3
0x1D558 | 0.3
0x1D55C | 1.5
0x1D560 | 180.0
0x1D564 | 0
0x1D568 | 0
0x1D5D0 | 0.2 | Body collision sensitivity
0x1D5D4 | 0.1 | ?? (read when pikmin go to olimar)
0x1D5D8 | 0.4 | Body collision sensitivity to pikmin only?
0x1D5DC | 4.0 | Z axis of movement
```
### Individual Pikmin
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
Offset Table [
  R {
    renderer: hex
  }
  Y {
    renderer: hex
  }
  B {
    renderer: hex
  }
  W {
    renderer: hex
  }
  P {
    renderer: hex
  }
]
Default Table [
  R
  Y
  B
  W
  P
]
Description
# DATA
0x1D5E0 | 0x1D654 | 0x1D6C8 | 0x1D73C | 0x1D7B0 | 9 | 9 | 14 | 4 | 15 | Pikmin HP
0x1D5E4 | 0x1D658 | 0x1D6CC | 0x1D740 | 0x1D7B4 | 0.075 | 0.075 | 0.075 | 0.12 | 0.05 | Walk/Run Acceleration
0x1D5E8 | 0x1D65C | 0x1D6D0 | 0x1D744 | 0x1D7B8 | 2.0 | 2.0 | 2.0 | 3.0 | 1.5 | Walk/Run Max Speed
0x1D5EC | 0x1D660 | 0x1D6D4 | 0x1D748 | 0x1D7BC | 0.2 | 0.2 | 0.2 | 0.4 | 0.17 | (read when Pikmin is by Olimar's side)
0x1D5F0 | 0x1D664 | 0x1D6D8 | 0x1D74C | 0x1D7C0 | 3.0 | 3.0 | 3.0 | 3.0 | 3.0 | (read when Pikmin is by Olimar's side)
0x1D5F4 | 0x1D668 | 0x1D6DC | 0x1D750 | 0x1D7C4 | 0.025 | 0.025 | 0.025 | 0.04 | 0.018 | (read when Pikmin is by Olimar's side)
0x1D5F8 | 0x1D66C | 0x1D6E0 | 0x1D754 | 0x1D7C8 | 1.0 | 1.0 | 1.0 | 1.5 | 0.8 | How long Pikmin stays on ground from sideB? (at 0 he walks a bit then jumps to Olimar)
0x1D5FC | 0x1D670 | 0x1D6E4 | 0x1D758 | 0x1D7CC | 0.1 | 0.1 | 0.1 | 0.1 | 0.08 | (read when Pikmin walks back to Olimar from sideB)
0x1D600 | 0x1D674 | 0x1D6E8 | 0x1D75C | 0x1D7D0 | 1.5 | 1.5 | 1.5 | 2.0 | 1.2 | Something to do with jump timing of Pikmin coming back from sideB
0x1D604 | 0x1D678 | 0x1D6EC | 0x1D760 | 0x1D7D4 | 1.5 | 1.5 | 1.5 | 2.0 | 0.75 | (read when Pikmin walks back to Olimar from sideB)
0x1D608 | 0x1D67C | 0x1D6F0 | 0x1D764 | 0x1D7D8 | 0.75 | 0.75 | 0.75 | 0.75 | 0.75 | Pikmin Speed/Response to TurnRun
0x1D60C | 0x1D680 | 0x1D6F4 | 0x1D768 | 0x1D7DC | 0.7 | 0.7 | 0.7 | 0.8 | 0.7 |
0x1D610 | 0x1D684 | 0x1D6F8 | 0x1D76C | 0x1D7E0 | 1.3 | 1.3 | 1.3 | 1.3 | 1.3 |
0x1D614 | 0x1D688 | 0x1D6FC | 0x1D770 | 0x1D7E4 | 2.5 | 2.5 | 2.5 | 2.8 | 2.5 |
0x1D618 | 0x1D68C | 0x1D700 | 0x1D774 | 0x1D7E8 | 2.3 | 2.3 | 2.3 | 2.6 | 2.3 |
0x1D61C | 0x1D690 | 0x1D704 | 0x1D778 | 0x1D7EC | 0.07 | 0.07 | 0.07 | 0.1 | 0.09 |
0x1D620 | 0x1D694 | 0x1D708 | 0x1D77C | 0x1D7F0 | 1.5 | 1.5 | 1.5 | 1.45 | 1.7 |
0x1D624 | 0x1D698 | 0x1D70C | 0x1D780 | 0x1D7F4 | 0.1 | 0.1 | 0.1 | 0.18 | 0.05 |
0x1D628 | 0x1D69C | 0x1D710 | 0x1D784 | 0x1D7F8 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 |
0x1D62C | 0x1D6A0 | 0x1D714 | 0x1D788 | 0x1D7FC | 5 | 60 | 1200 | 60 | 60 | Swim time in frames?\n(implies Blues drown after 20 seconds; though this is way better than the Smashers can do)
0x1D630 | 0x1D6A4 | 0x1D718 | 0x1D78C | 0x1D800 | 2.0 | 2.0 | 3.0 | 4.0 | 0.8 |
0x1D634 | 0x1D6A8 | 0x1D71C | 0x1D790 | 0x1D804 | 1.8 | 1.1 | 1.8 | 3.0 | 1.5 | Pikmin Toss throw velocity
0x1D638 | 0x1D6AC | 0x1D720 | 0x1D794 | 0x1D808 | 3.6 | 2.2 | 3.6 | 5.0 | 3.0 |
0x1D63C | 0x1D6B0 | 0x1D724 | 0x1D798 | 0x1D80C | 1.1 | 1.6 | 1.1 | 1.1 | 1.1 |
0x1D640 | 0x1D6B4 | 0x1D728 | 0x1D79C | 0x1D810 | 1.2 | 1.2 | 1.6 | 2.0 | 0.6 | Has something to do with grab and dash grab length
0x1D644 | 0x1D6B8 | 0x1D72C | 0x1D7A0 | 0x1D814 | 0.03 | 0.03 | 0.03 | 0.03 | 0.03 |
0x1D648 | 0x1D6BC | 0x1D730 | 0x1D7A4 | 0x1D818 | 0.1 | 0.1 | 0.1 | 0.1 | 0.1 |
0x1D64C | 0x1D6C0 | 0x1D734 | 0x1D7A8 | 0x1D81C | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 |
0x1D650 | 0x1D6C4 | 0x1D738 | 0x1D7AC | 0x1D820 | 0.1 | 0.1 | 0.1 | 0.2 | 0.03 |
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1DC70 | 1.6
0x1DC74 | 0.04
0x1DC78 | 4.0
0x1DC7C | 20
0x1DC80 | 120
0x1DC84 | 43.0
0x1DC88 | -6.0
0x1DC8C | 115.0
0x1DC90 | 30.0
0x1DC94 | 650
0x1DC98 | 50.0
0x1DC9C | 0
0x1DCA0 | 10.0
0x1DCA4 | 22.0
0x1DCA8 | -9.0
0x1DCAC | 16.0
0x1DCB0 | -9.0
```
### Smashes
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x28624 | 4.0 | Fsmash X offset
0x28628 | 0 | Fsmash Y offset
0x2862C | 0 | Usmash X offset
0x28630 | 5.0 | Usmash Y offset
0x28634 | 4.0 | Dsmash X offset (applies equally in both directions)
0x28638 | 0 | Dsmash Y offset
```
### Grab
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2863C | 8.0 | X offset
0x28640 | 0 | Y offset
```
### Pikmin Frequency Table\n(see also: [[Terrain]])
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
Terrain ID {
  renderer: hex
}
Pluck Speed {
  renderer: hex
}
R {
  renderer: hex
}
Y {
  renderer: hex
}
B {
  renderer: hex
}
W {
  renderer: hex
}
P {
  renderer: hex
}
Terrain ID
Pluck Speed
R
Y
B
W
P
# DATA
0x28644 | 0x28648 | 0x2864C | 0x28650 | 0x28654 | 0x28658 | 0x2865C | 0 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x28660 | 0x28664 | 0x28668 | 0x2866C | 0x28670 | 0x28674 | 0x28678 | 1 | 0.4 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x2867C | 0x28680 | 0x28684 | 0x28688 | 0x2868C | 0x28690 | 0x28694 | 2 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x28698 | 0x2869C | 0x286A0 | 0x286A4 | 0x286A8 | 0x286AC | 0x286B0 | 3 | 0.75 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x286B4 | 0x286B8 | 0x286BC | 0x286C0 | 0x286C4 | 0x286C8 | 0x286CC | 4 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x286D0 | 0x286D4 | 0x286D8 | 0x286DC | 0x286E0 | 0x286E4 | 0x286E8 | 5 | 0.8 | 1.0 | 2.0 | 1.0 | 0.5 | 0.8
0x286EC | 0x286F0 | 0x286F4 | 0x286F8 | 0x286FC | 0x28700 | 0x28704 | 6 | 0.8 | 1.0 | 2.0 | 1.0 | 0.5 | 0.8
0x28708 | 0x2870C | 0x28710 | 0x28714 | 0x28718 | 0x2871C | 0x28720 | 7 | 1.2 | 2.0 | 1.0 | 1.0 | 0.5 | 0.4
0x28724 | 0x28728 | 0x2872C | 0x28730 | 0x28734 | 0x28738 | 0x2873C | 8 | 0.8 | 1.0 | 1.0 | 2.5 | 0.5 | 0.4
0x28740 | 0x28744 | 0x28748 | 0x2874C | 0x28750 | 0x28754 | 0x28758 | 9 | 1.0 | 1.0 | 0.5 | 1.0 | 1.0 | 0.1
0x2875C | 0x28760 | 0x28764 | 0x28768 | 0x2876C | 0x28770 | 0x28774 | 10 | 1.0 | 0.0 | 1.0 | 4.0 | 0.5 | 0.4
0x28778 | 0x2877C | 0x28780 | 0x28784 | 0x28788 | 0x2878C | 0x28790 | 11 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 0.2
0x28794 | 0x28798 | 0x2879C | 0x287A0 | 0x287A4 | 0x287A8 | 0x287AC | 12 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x287B0 | 0x287B4 | 0x287B8 | 0x287BC | 0x287C0 | 0x287C4 | 0x287C8 | 13 | 1.0 | 0.5 | 0.5 | 1.0 | 1.0 | 0.2
0x287CC | 0x287D0 | 0x287D4 | 0x287D8 | 0x287DC | 0x287E0 | 0x287E4 | 14 | 0.75 | 0.5 | 0.5 | 1.0 | 0.5 | 0.2
0x287E8 | 0x287EC | 0x287F0 | 0x287F4 | 0x287F8 | 0x287FC | 0x28800 | 15 | 1.0 | 0.5 | 0.5 | 0.5 | 0.5 | 1.0
0x28804 | 0x28808 | 0x2880C | 0x28810 | 0x28814 | 0x28818 | 0x2881C | 16 | 0.8 | 0.0 | 0.0 | 0.0 | 0.5 | 1.0
0x28820 | 0x28824 | 0x28828 | 0x2882C | 0x28830 | 0x28834 | 0x28838 | 17 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x2883C | 0x28840 | 0x28844 | 0x28848 | 0x2884C | 0x28850 | 0x28854 | 18 | 0.7 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x28858 | 0x2885C | 0x28860 | 0x28864 | 0x28868 | 0x2886C | 0x28870 | 19 | 0.7 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x28874 | 0x28878 | 0x2887C | 0x28880 | 0x28884 | 0x28888 | 0x2888C | 20 | 0.7 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x28890 | 0x28894 | 0x28898 | 0x2889C | 0x288A0 | 0x288A4 | 0x288A8 | 21 | 1.0 | 1.0 | 1.0 | 1.0 | 0.1 | 0.1
0x288AC | 0x288B0 | 0x288B4 | 0x288B8 | 0x288BC | 0x288C0 | 0x288C4 | 22 | 1.0 | 1.0 | 1.0 | 2.0 | 1.0 | 0.4
0x288C8 | 0x288CC | 0x288D0 | 0x288D4 | 0x288D8 | 0x288DC | 0x288E0 | 23 | 1.0 | 0.3 | 0.3 | 0.3 | 1.0 | 1.0
0x288E4 | 0x288E8 | 0x288EC | 0x288F0 | 0x288F4 | 0x288F8 | 0x288FC | 24 | 1.0 | 1.0 | 1.0 | 0.5 | 0.5 | 0.6
0x28900 | 0x28904 | 0x28908 | 0x2890C | 0x28910 | 0x28914 | 0x28918 | 25 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 0.4
0x2891C | 0x28920 | 0x28924 | 0x28928 | 0x2892C | 0x28930 | 0x28934 | 26 | 1.0 | 0.6 | 0.6 | 1.0 | 0.4 | 0.3
0x28938 | 0x2893C | 0x28940 | 0x28944 | 0x28948 | 0x2894C | 0x28950 | 27 | 1.0 | 1.0 | 1.0 | 1.0 | 0.5 | 1.0
0x28954 | 0x28958 | 0x2895C | 0x28960 | 0x28964 | 0x28968 | 0x2896C | 28 | 1.0 | 1.5 | 1.5 | 0.5 | 0.2 | 0.5
0x28970 | 0x28974 | 0x28978 | 0x2897C | 0x28980 | 0x28984 | 0x28988 | 29 | 1.0 | 0.0 | 0.0 | 0.0 | 0.0 | 1.0
```
### Pluck
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x2898C | 3.0 | X offset of pluck
0x28990 | 0 | Y offset of pluck
0x28994 | 4 | ?? (read on pluck)
```
### Pikmin Toss
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x28998 | 9.0 | X offset of sideB toss
0x2899C | -1.0 | Y offset of sideB toss
```
### Pikmin Chain? Pikmin Order?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x289A0 | 0
0x289A4 | 2.8
0x289A8 | 0
0x289AC | -1.0
```
## Peach
### Float
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D840 | 150 | Float time (frames)
```
### Toad
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D844 | 2.0 | Horizontal braking speed (Peach continues moving horizontally at her previous speed divided by this constant.)
0x1D848 | 0.0025 | Horizontal braking acceleration?
0x1D84C | 0.7 | Vertical speed
0x1D850 | 0.025 | Gravity
0x1D854 | 0.7 | Max fall speed
0x1D858 | 13 | Hitlag on hit (frames)
```
### Peach Bomber
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D85C | 0.1 | Unknown, read once on ground pullback
0x1D860 | 0.025 | Unknown, read once on ground pullback
0x1D864 | 0.7 | Unknown, read twice on ground pullback
0x1D868 | 1.1 | Vertical boost during aerial pullback
0x1D86C | 4.0 | Launch distance (used on ground)
0x1D870 | 5.0 | Launch distance (used in air)
0x1D874 | 0.5 | Post-launch vertical boost
0x1D878 | 0.08 | Post-launch gravity
0x1D87C | 1.5 | Some sort of transition ratio between post-launch and ending gravities? (higher = more of the second?)
0x1D880 | 0.1 | Ending horizontal deceleration
0x1D884 | 0.08 | Ending gravity
0x1D888 | -1.2 | Unknown, read on hit, controls direction of recoil
0x1D88C | 1.4 | Recoil vertical boost
0x1D890 | 2.0 | Unknown, something to do with ending
0x1D894 | 2.0 | Unknown, something to do with ending, when set low causes massive fall speed, when set high casues momentary floating
```
### Parasol
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D89C | 0.625 | Involves input window to directionalize launch (larger = harder)
0x1D8A0 | 18.0 | Amount to which the launch may be directed (larger = significantly more control)
0x1D8A4 | 0.95 | Launch height
0x1D8A8 | 0.7 | Unknown, read 1-3 times per frame during launch
0x1D8AC | 0.5 | Unknown, read twice on aerial launch
0x1D8B0 | 1.2 | Floating max horizontal speed multiplier
0x1D8B4 | 0.3 | Floating fall speed
0x1D8B8 | 0.6 | Falling max horizontal speed multiplier
0x1D8BC | 30.0 | Landing lag from falling state (frames?)
```
### Turnip Pull
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D8C4 | 80 | Odds of getting an item (i.e. a one in this chance)
```
### Turnip Item Table
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D8C8 | 6 | Bob-bomb ID
0x1D8CC | 2.0 | Relative odds of getting a Bob-bomb
0x1D8D0 | 19 | Mr. Saturn ID
0x1D8D4 | 3.0 | Relative odds of getting a Mr. Saturn
0x1D8D8 | 4 | Beam Sword ID
0x1D8DC | 1.0 | Relative odds of getting a Beam Sword
```
### Peach Blossom?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D8E0 | 1.0 | Unknown, read 3 times at startup
0x1D8E4 | 1.0 | Unknown, read 3 times at startup
0x1D8E8 | 10.0
0x1D8EC | 0
0x1D8F0 | 0
0x1D8F4 | 0
0x1D8F8 | 13
0x1D8FC | 8
```
## Pikachu
### Thunder Jolt
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x156E0 | 6.5 | Grounded X offset
0x156E4 | 1.0 | Grounded Y offset
0x156E8 | 6.5 | Aerial X offset
0x156EC | 1.0 | Aerial Y offset
0x156F0 | 0 | ?? (read on startup)
0x156F4 | 100 | Lifetime (frames)
0x156F8 | -1.0122909 | Aerial jolt angle (radians)
0x156FC | 2.0 | Aerial jolt velocity
```
### Skull Bash
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x158B0 | 3.0 | ?? (read on startup)
0x158B4 | 20.0 | ?? (read on startup)
0x158B8 | 90.0 | Charge time (frames)
0x158BC | 7.0 | Base damage
0x158C0 | 0.2 | Damage multiplier
0x158C4 | 1.25 | ?? (read on fire)
0x158C8 | 0.02 | ?? (read on air startup)
0x158CC | 0.04 | Falling speed
0x158D0 | 1.6 | Base horizontal firing momentum
0x158D4 | 0.01777777 | Horizontal momentum multiplier
0x158D8 | 0.8 | Base vertical firing momentum
0x158DC | 0.024 | Vertical momentum multiplier
0x158E0 | 1.1 | ?? (read on firing)
0x158E4 | 1.5 | Aerial stopping velocity?
0x158E8 | 0.05 | ?? (read on aerial end)
0x158EC | 0.1 | ?? (read on aerial end)
0x158F0 | 12
```
### Quick Attack
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x15A78 | 10 | ?? (read on startup)
0x15A7C | 5 | Length
0x15A80 | 0.02666666 | ?? (read on travel)
0x15A84 | 0.26179939 | Model rotation traveling on ground
0x15A88 | 0.8 | Model width multiplier traveling on ground
0x15A8C | 0.8 | Model height multiplier traveling on ground
0x15A90 | 1.2 | Model length multiplier traveling on ground
0x15A94 | 0.26179939 | Model rotation traveling in air
0x15A98 | 0.8 | Model width multiplier traveling in air
0x15A9C | 0.8 | Model height multiplier traveling in air
0x15AA0 | 1.2 | Model length multiplier traveling in air
0x15AA4 | 2.0 | Not read?
0x15AA8 | 0.5 | Aiming sensitivity
0x15AAC | 4.0 | Starting momentum of each segment
0x15AB0 | 7.0 | Momentum added to 15AAC
0x15AB4 | 0.9 | Second segment length multiplier
0x15AB8 | 0.6 | Horizontal momentum preservation
0x15ABC | 45 | Minimum direction change (degrees) for grounded second segment
0x15AC0 | 0.1 | Horizontal momentum subtracted each frame after frame 5 of second segment
0x15AC4 | 38 | Minimum direction change (degrees) for second segment
0x15AC8 | 0.4 | ?? Read when landing from air -> ground
0x15ACC | 24.0 | Landlag
```
### Thunder
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x15C78 | 150.0 | Height of thunder creation
0x15C7C | 0.4 | Something to do with landing detection when missing pika
0x15C80 | 0.66 | Vertical momentum on aerial thunder hit
0x15C84 | 0.016 | Air friction on aerial thunder hit?
0x15C88 | 13.32 | Area of effect for behing hit from your thunder
0x15C8C | -5.0 | Thunder travel speed
0x15C90 | 60.0 | Thunder lifetime (frames)
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x15D60 | 11.0
0x15D64 | 3.0
0x15D68 | 3.0
0x15D6C | 160
0x15D70 | 60
```
### Volt Tackle?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x15F98 | 1.4
0x15F9C | -0.4
0x15FA0 | 0.35
0x15FA4 | 7.0
0x15FA8 | 0.25
0x15FAC | 0.4
0x15FB0 | 1.8
0x15FB4 | 0.9
0x15FB8 | 50
```
## Pit
### Arrows
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1A618 | 0.5 | ??
0x1A61C | 60 | Max charge time
0x1A620 | -0.3 | Joystick sensitivity backwards
0x1A624 | 0.6 | Joystick sensitivity upwards
0x1A628 | 0.0 | angle at which side arrow initially shoots at
0x1A62C | 8.0 | side arrow speed
0x1A630 | 90.0 | angle at which the up arrow initially shoots at
0x1A634 | 8.0 | up arrow speed
0x1A638 | 4.0 | Arrow control radius
0x1A63C | 0
0x1A640 | 5.0 | Base damage
0x1A644 | 0.1 | Damage multiplier (extra damage per charging frame)
0x1A648 | -0.2
0x1A64C | 30
```
### Angel Ring
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1AD68 | 40 | Something with how long it's out at startup?
0x1AD6C | 50.0 | Something with how long it stays out after startup?
0x1AD70 | 1.0 | Something with how long it stays out after startup? (less = more)
0x1AD74 | 60.0 | Something with how long it stays out after startup? (might affect button tapping)
0x1AD78 | 10.0 | How many seconds you can hold angel ring
0x1AD7C | 0.5 | ?? (read on button tap of ring hold)
0x1AD80 | 20.0 | ?? (read on startup)
0x1AD84 | 0 | ?? (read on startup)
0x1AD88 | 72
0x1AD8C | 50.0 | Break threshold?
0x1AD90 | 0 | Reflection bubble X pos?
0x1AD94 | 0 | Reflection bubble Y pos?
0x1AD98 | 0 | Reflection bubble Z pos?
0x1AD9C | 8.5 | Reflection bubble size?
0x1ADA0 | 1.5 | Reflection damage multiplier?
0x1ADA4 | 1.0 | Reflection speed multiplier?
0x1ADA8 | 0.5
0x1ADAC | 0
0x1ADB0 | 0
0x1ADB4 | 2
```
### Wings of Icarus
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1AFC8 | 0.5 | momentum preservation
0x1AFCC | 0.3 | initial vertical momentum
0x1AFD0 | 70 | how many frames waiting above ground until landing
0x1AFD4 | 0.03 | momentum going right/left
0x1AFD8 | 1.1 | momentum going down
0x1AFDC | 0.01 | ??
0x1AFE0 | 0.1 | Potency of Y-Axis control stick movement
0x1AFE4 | 1.6 | momentum going up
0x1AFE8 | 0.01 | ??
0x1AFEC | 0.3 | something to do with how high you can rise/how much gravity affects vertical gain
0x1AFF0 | 0.8 | gravity?
0x1AFF4 | 0.1 | ??
0x1AFF8 | 180 | flying time (frames)
0x1AFFC | 2.6 | Wing flap speed going up
0x1B000 | 0.3 | wing flap speed going down
```
### Mirror Shield
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1B108 | 25.0
0x1B10C | 600 | amount of time it can be out (frames)
0x1B110 | 20 | amount of time before you stand up
0x1B114 | 0.5 | ?? (higher than 1 you jitter when aiming and can possibly freeze)
0x1B118 | 0.2 | Something to do with reflection distance?
0x1B11C | 12 | Frame count for something?
0x1B120 | 50.0 | ?? (read all the time)
0x1B124 | 0.07 | ?? (read all the time)
0x1B128 | 0.5
0x1B12C | 0
0x1B130 | 7.5
0x1B134 | -1.1915340
0x1B138 | -2.108
0x1B13C | 7.5
0x1B140 | 0
0x1B144 | -2.108
0x1B148 | 5.0
0x1B14C | 0x17400000
0x1B150 | 7.5
0x1B154 | -1.1915340
0x1B158 | -2.108
0x1B15C | 7.5
0x1B160 | 0
0x1B164 | -2.108
0x1B168 | 5.0 | Reflect collision size
0x1B16C | 0x17400000
0x1B170 | 0x0001b0d0
0x1B174 | 1
0x1B178 | 1.5 | Reflect damage multiplier
0x1B17C | 1.7 | Reflect speed multiplier
0x1B180 | 50.0
0x1B184 | 0.7
```
### Palutena's Army?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1B2C8 | 5.0
0x1B2CC | 120
0x1B2D0 | 300
0x1B2D4 | 90
0x1B2D8 | 120
0x1B2DC | 80
0x1B2E0 | 40.0
0x1B2E4 | 0.5
0x1B2E8 | 30
0x1B2EC | 10
```
## Pokémon Trainer
### Unkown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
34B0 | 100.0
34B4 | 50.0
```
### Pokémon Change?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
3C38 | 4.0
3C3C | 0.5
3C40 | 32.0
3C44 | 32.0
3C48 | 120
3C4C | 240
3C50 | 75.0
3C54 | 18.0
3C58 | 40.0
3C5C | 45.0
3C60 | 40
3C64 | 360
3C68 | 40.0
3C6C | 4.0
3C70 | 0.5
3C74 | 32.0
3C78 | 32.0
3C7C | 120
3C80 | 240
3C84 | 50.0
3C88 | 18.0
3C8C | 40.0
3C90 | 45.0
3C94 | 40
3C98 | 360
3C9C | 40.0
```
### Triple Finish?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
4388 | 120
438C | 10.0
4390 | 30.0
4394 | -16.0
4398 | 18.0
439C | -8.0
```
## R.O.B.
### Robo Beam
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18818 | 25.0
0x1881C | 25.0
0x18820 | 1.1
0x18824 | 0.7
0x18828 | 300.0
0x1882C | 100.0 | Frames to recharge?
0x18830 | 1200.0 | Frames to supercharge?
0x18834 | 4.0
0x18838 | 1.8
0x1883C | 4.0
0x18840 | 1.8
0x18844 | 77
0x18848 | 81
0x1884C | 0
0x18850 | 0
0x18854 | 0
0x18858 | 45.0
0x1885C | 0.9
0x18860 | 15
0x18864 | 20.0
0x18868 | 1
0x1886C | 60
0x18870 | 8.0
0x18874 | 1.0
```
### Arm Rotor
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x194E0 | 60.0
0x194E4 | 90.0
0x194E8 | 1.5
0x194EC | 1.6
0x194F0 | 2.5
0x194F4 | 0.66
0x194F8 | 2.0
0x194FC | 0.4
0x19500 | 60
0x19504 | 30.0
0x19508 | 1.4
0x1950C | 0.7
0x19510 | 20
0x19514 | 2.0
0x19518 | 5.0
0x1951C | 5.0
0x19520 | 20.0
0x19524 | 10
0x19528 | 5
0x1952C | 0.7
0x19530 | 0.5
```
### Robo Burner
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19608 | 150.0 | Max fuel?
0x1960C | 1.0
0x19610 | 0.8
0x19614 | 2.0
0x19618 | 1.0
0x1961C | 0.13
0x19620 | 20
0x19624 | 1.0
0x19628 | 0.002
0x1962C | 0.025
0x19630 | 1.3
0x19634 | 0.05
0x19638 | 1.5
0x1963C | 0.8
0x19640 | 1.8
0x19644 | 1.2
0x19648 | 1.25
0x1964C | 0
0x19650 | 3
```
### Gyro
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x197D8 | 90.0 | Time to fully charge (frames)
0x197DC | 1.8 | Velocity multiplier (charge-based)
0x197E0 | 0.022 | Also affects velocity based on charge but multiplies damage and KB as well
0x197E4 | 0 | ??? (default is 0 but is read on gyro shoot)
0x197E8 | -2.5 | Gryo firing Y offset
0x197EC | 1 | Max gyros
0x197F0 | 45.0
0x197F4 | 0.5
```
### Diffusion Beam
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x198F0 | 180
0x198F4 | 0.66
0x198F8 | 14 | FS Duration (Seconds)(If Set At 0 It Will Last Forever)
0x198FC | 120
0x19900 | 3
0x19904 | 60
```
## Samus
### Power Shot
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16398 | 7 | Charge time. Higher value = slower charge. Unsure of ratio.
0x1639C | -0.1 | Recoil from charged power shot (air only). Negative values send you backward, positive send you forward.
0x163A0 | 16.0 | Frames between change in charge level?
0x163A4 | 0
0x163A8 | 70 | Power shot duration(frames).
0x163AC | 0 |  Angle it fires at
0x163B0 | 1.5 | Base velocity. Diminishes with more charge (Full charge still goes same speed).
0x163B4 | 2.65 | Charged shot velocity. Effect is greater with more charge (Uncharged shot goes same speed).
0x163B8 | 4.0
0x163BC | 22.0
0x163C0 | 0.3 | Initial power shot size (graphic). Scales accordingly with charge.
0x163C4 | 1.0 | Final power shot size (graphic). Scales accordingly with charge.
0x163C8 | 16777216 (0x01000000)
0x163CC | 2.0
0x163D0 | -2.0
0x163D4 | 2.0
```
### Missile
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x168B8 | 3 | Buffer (in frames) for differentiating tilt input from Smash input
0x168BC | 2.0 | Traction - The lower the value, the more momentum Samus gets going sideways when using a missile.
0x168C0 | 0.0025
0x168C4 | 1.0 | X-offset of missile launch.
0x168C8 | 2
0x168CC | 110 | Homing missile duration(frames).
0x168D0 | 60 | Homing missile deceleration point (frames). This is the point where the missle slows down.
0x168D4 | 1.3 | Homing missile initial velocity.
0x168D8 | 0.95 | Homing missile secondary velocity, after it finishes decelerating and stops homing.
0x168DC | 0.5 | Homing missile deceleration. Lower value = missile slows faster.
0x168E0 | 0.01919862 | Homing capability. Higher value = better homing.
0x168E4 | 0.87266463 | Something to do with homing. Lower value = worse homing. Range perhaps.
0x168E8 | 0.01745329 | Something to do with homing. Higher value = No homing.
0x168EC | 0
0x168F0 | 16777216 (0x01000000)
0x168F4 | 2.4
0x168F8 | -2.4
0x168FC | 2.4
0x169A8 | 1
0x169AC | 72 | Super Missile duration(Frames).
0x169B0 | 10 | Super Missile acceleration point(Frames). This is the point where the super missle speeds up.
0x169B4 | 0.6 | Super Missile initial velocity.
0x169B8 | 0.06 | Super Missile acceleration.
0x169BC | 1.75 | Super Missile final speed?
0x169C0 | 16777216 (0x01000000)
0x169C4 | 2.4
0x169C8 | -2.4
0x169CC | 2.4
```
### Screw Attack
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17618 | 0.35 | Horizontal momentum added with no control
0x1761C | 0.017 | Horizontal control
0x17620 | 0.57 | Air friction
0x17624 | 2.5 | Vertical height (grounded doesn't seem affected)
0x17628 | 0.66 | ?? (read on startup)
0x1762C | 0.2 | ?? (read on startup)
0x17630 | 24.0 | Landing lag (higher = more)
```
### Bomb
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17898 | 1.2 | Vertical momentum grounded bomb
0x1789C | 0.9 | Vertical momentum aerial bomb
0x178A0 | 0.8 | Grounded mobility
0x178A4 | 0.8 | Aerial mobility
0x178A8 | 22.0 | ??
0x178AC | 22.0 | ??
0x178B0 | 1.0 | Grounded momentum preservation
0x178B4 | 1.0 | Aerial momentum preservation
0x178B8 | 0 | X offset
0x178BC | 2.0 | Y offset
0x178C0 | 0 |  Z offset
0x178C4 | -0.5 | ??
0x178C8 | 10 | Frame count for something? (read on bomb explosion)
0x178CC | 0.78539818 | Angle you are sent at from bomb explosion from side (radians)
0x178D0 | 1.7 | Vertical momentum from bomb explosion
0x178D4 | 0.5 | ??
0x178D8 | 0.7 | Max controlled horizontal speed after bomb jump
0x178DC | -0.5 | ??
0x178E0 | 7.38 | ?? (read on bomb lay)
0x178E4 | 72 | How many frames before it explodes
```
### Unknown (Zero Laser?)
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17EF8 | 0.5
0x17EFC | 0.01
0x17F00 | 0.18
0x17F04 | 0.13
0x17F08 | 8.0
0x17F0C | 2.5
0x17F10 | 150
0x17F14 | 0
0x17F18 | 210
0x17F1C | 16777216 (0x01000000)
0x17F20 | 2.0
0x17F24 | -2.0
0x17F28 | 2.0
```
## Sheik
### Needles
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x15FE8 | 8.0 | X offset grounded needles
0x15FEC | 8.0 | Y offset grounded needles
0x15FF0 | 7.0 | X offset aerial needles
0x15FF4 | 6.0 | Y offset aerial needles
0x16168 | 30 | How many frames before grounded needles go away
0x1616C | 120 | ?? (frame count for something)
0x16170 | 0.5 | ?? (read on nB)
0x16174 | 4.0 | Needle speed
0x16178 | 16777216 (0x01000000) | Needle air friction?
0x1617C | 1.0
0x16180 | -1.0
0x16184 | 1.0 | Needle air friction?
```
### Chain
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x166C8 | 10 | How long chain is out before reeling in (release B)
0x166CC | 20 | something with hitbox refreshing?
0x166D0 | 22 | frame chain comes out
0x166D4 | 32 | frame you can move chain around (if less than or equal to 166D0 the chain will not come out)
0x166D8 | 18 | frame after releasing B chain reels in
0x166DC | 28 | frame chain disappears after releasing B
0x166E0 | 0.75 | ?? (read all the time when you can move chain)
0x166E4 | 0
0x166E8 | 3.0 | not read?
0x166EC | 0.85 | Rigidity
0x166F0 | 0.45 | Liveliness
0x166F4 | 0.15 | How far it will go into the Z axis?
0x166F8 | 55.0 | Stretchiness
0x166FC | 13.0
```
### Vanish
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x169D0 | 3.2
0x169D4 | 0.19
0x169D8 | 0.25
0x169DC | 20 | Travel time (changes distance you travel)
0x169E0 | 3
0x169E4 | 0.5
0x169E8 | 1.0
0x169EC | 1.5
0x169F0 | 0.6
0x169F4 | 45 | Sensitivity?
0x169F8 | 0.3 | Vertical momentum out of second explosion?
0x169FC | 0.4 | Travel speed?
0x16A00 | 30.0
0x16A04 | 0
0x16A08 | 5.0
```
### Transform
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16B98 | 2.0
0x16B9C | 2.0
0x16BA0 | 0.04
0x16BA4 | 0.75
```
### Light Arrow
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16E50 | 50.0
0x16E54 | 38.0
0x16E58 | 5.0
0x16E5C | 1.3
0x16E60 | 0.6
0x16E64 | 60.0
0x16E68 | 0.75
```
## Snake
### Up-Smash
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA

0x22B04 | 0 | X Offset
0x22B08 | 8.0 | Default height / Y Offset
0x22B0C | 0 | "Z" offset (positive = towards camera)
0x22B10 | 300 | How long before they explode
0x22B14 | 2.7 | Height multiplier (affects default hight too)
0x22B18 | 5.0 | Height multiplier? (lower than default makes charged ones go lower)
0x22B1C | 0.1 | Gravity
0x22B20 | 2.0 | Max fall speed
0x22B24 | 30.0 | ?? (read on usmash firing)
0x22B28 | 0.5 | ?? (read on usmash firing)
0x22B2C | 1.0 | Mortar model flips over when this velocity or lower is reached
0x22B30 | 10.0 | Affects time mortar turns?
0x22B34 | 10.0 | ?? (read on usmash firing)
0x22B38 | 0.2 | horizontal momentum of mortars that go left/right
0x22B3C | -1.5 | ?? (read on usmash firing)
```
### Mine
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22B40 | 1500 | How long before it dissapears (frames)
0x22B44 | -0.5 | Y offset? (read on mine lay)
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22B48 | -0.07
0x22B4C | 2.0
0x22B50 | 0
0x22B54 | 0
0x22B58 | 3.5
0x22B5C | 0
0x22B60 | 0
0x22B64 | 3.5
0x22B68 | 0
0x22B6C | 4.0
```
### Nikita
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22B70 | 0x00a90000 | Something with speed?
0x22B74 | 0 | Momentum preservation on turning?
0x22B78 | 0.055 | Initial speed
0x22B7C | 1.6 | Flying speed
0x22B80 | 0.4 | Turning speed
0x22B84 | 3.0 | Turning control?
0x22B88 | 15.0 | Turning radius?
0x22B8C | 5.0 | ?? (read on sideB)
0x22B90 | 2.0 | ?? (read on sideB)
0x22B94 | 2.0 | ?? (read on sideB)
0x22B98 | 10.0 | ?? (read on sideB)
0x22B9C | 45.0 | ?? (read on sideB)
0x22BA0 | 200 | How long before nikita slows down
0x22BA4 | 50 | How long nikita slows down before falling
0x22BA8 | 0.06 | Something with slowing down?
0x22BAC | 20 | Something with slowing down?
```
### Grenade
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17980 | 0.4 | Forward angle input threshold
0x17984 | -0.4 | Back angle input threshold
0x17988 | 2.5 | Forward angled horizontal momentum
0x1798C | 0.3 | Forward angled vertical momentum
0x17990 | 1.1 | Unangled horizontal momentum
0x17994 | 1.2 | Unangled vertical momentum
0x17998 | 0.2 | Back angled horizontal momentum
0x1799C | 1.8 | Back angled vertical momentum
0x179A0 | 45.0 | Duck and cover animation range
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22BB0 | 6.0
0x22BB4 | 7
0x22BB8 | 60
0x22BBC | 0.04
0x22BC0 | 3.5
0x22BC4 | 36
0x22BE4 | 7.0
0x22BE8 | 0x00290000
0x22BEC | 0
0x22BF0 | 2.0
0x22BF4 | 0.2
0x22BF8 | 0
0x22BFC | 2.0
0x22C00 | 0.2
0x22C04 | 5.5
0x22C08 | 0x05290000
```
### Cypher
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x22C0C | 1.0 | Momentum preservation? (at 0 you don't drop before you rise)
0x22C10 | 0.05 | Momentum preservation? (at 0 you don't drop before you rise)
0x22C14 | 1.25 | ?? (read first frame moving)
0x22C18 | 1.5 | Rising speed? (read first frame moving)
0x22C1C | 0.001 | Mobility
0x22C20 | 1.0 | ?? (read first frame moving)
0x22C24 | 1.5 | Vertical momentum preservation (double jump cypher preservation)
0x22C28 | 9.0 | ?? (read when cyphering)
0x22C2C | 8.0 | ?? (read when cyphering)
0x22C30 | 0 | Y offset of cypher when released
0x22C34 | 0.05 | Speed of cypher flying away
0x22C38 | 3.5 | ?? (read when letting go of cypher)
0x22C3C | 600 | How many frames before it disappears? (read when breaking from cypher; freezes at 1)
0x22C40 | 10.0 | ?? (read when cyphering)
```


### C4
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DAT
0x22C44 | -0.5 | Starting fall speed
0x22C48 | 0.07 | Fall acceleration
0x22C4C | 2.0 | Max fall speed
0x22C50 | 900 | How long it stays on opponent until falling off (frames) (does not effect falling off from being hit)
0x22C54 | 120 | How long you stay next to someone before it transfers
0x22C58 | 1.0
0x22C5C | 64.0 | Chance of C4 falling off?
0x22C60 | 1600 | How long C4 stays out until it explodes (frames)
0x22C64 | 6.0
0x22C68 | 2.0
0x22C6C | 1.5
```
## Sonic
### Homing Attack
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x24FC0 | 0.8 | Initial Vertical Velocity on Charge
0x24FC4 | 0.6 | Momentous Growth on Aerial Charge
0x24FC8 | 0.78 | Momentum Conservatism (Set to 2, it will multiply current momentum by 2. Set to 0.5, current momentum will be halved. Etc.)
0x24FCC | 24 | Minimum startup
0x24FD0 | 40 | Maximum startup
0x24FD4 | 20.0 | Maximum Curve. Lower number = smaller curves
0x24FD8 | 45.0 | Homing Intensity. Lower number = better homing.
0x24FDC | 5.0 | Homing Wind Resistance. (Higher number = travel slower, and cancel before you reach your target if too high.)
0x24FE0 | 3.0 | Homing Dash Acceleration
0x24FE4 | 0.15 | Homing Dash Deceleration
0x24FE8 | 2.0 | ??
0x24FEC | 15 | Homing Dash Duration (Frames?)
0x24FF0 | 0.5 | Floor-bounce H Velocity
0x24FF4 | 0.25 | Floor-bounce V Velocity?
0x24FF8 | 0.1 | Floor-bounce V Velocity ...Again?
0x24FFC | 0.75 | Person-bounce Aerial Mobility
0x25000 | 3.8 | Person-bounce V Velocity
0x25004 | 3.2 | Person-bounce H Deceleration Rate?
0x25008 | 10 | Person-bounce Fallspeed?
0x2500C | -50.0 | No-homing dash angle (Degrees)
0x25010 | 5.0 | No-homing dash speed
0x25014 | 7 | No-homing dash duration
0x25018 | 0.5 | ??
0x2501C | 8 | No-homing dash duration again?
```
### Spring
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1B678 | 3.8
0x1B67C | 0
0x1B680 | 10.5 | Sonic Spring Initial Height (How high off of the ground foes are when they start their 'i just bounced off of this' animation)
0x1B684 | 240.0 | Sonic Spring Duration (Frames)
0x1B688 | 0 | Spring article's initial aerial vert velocity once Sonic launches off
0x1B68C | -0.05 | Sonic Spring Fallspeed
0x1B690 | 2.0 | Same as 1B680?
0x1B694 | 2.0 | ??
0x1B698 | 12.0
0x1B69C | 1.5
0x1B6A0 | 28.0
0x250B0 | 3.0 | How much time before you jump (negative will make spring invisible)
0x250B4 | 1.0 | ??
0x250B8 | 8.4 | Grounded jump height
0x250BC | 0.95 | Aerial jump height
0x250C0 | -1.0 | Gravity?
0x250C4 | 6.0 | Gravity?
0x250C8 | 0.5 | Maximum horizontal drift speed during fall after spring
0x250CC | 0.65 | Drift control during fall after spring
```
### Spin Dash/Spin Shot
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x25020 | 10 | How many frames after charge you do spin dash
0x25024 | 40 | Frame count for something? (read on startup)
0x25028 | -0.3 | Momentum during charge on ground
0x2502C | 2.1 | Angle of jump?
0x25030 | 0.065 | Something with angle of jump and movement speed
0x25034 | 0.8 | Angle of jump?
0x25038 | 1.1 | ?? (read on jump)
0x2503C | 1.3 | Height of jump
0x25040 | 0.01 | Friction?
0x25044 | 0.02 | ?? (read on jump, affects angle)
0x25048 | 4.7 | Speed
0x2504C | 2.0 | ?? (read on jump, affects angle)
0x25050 | 110 | How long you can move around (in frames)
0x25054 | 0.06 | Aerial mobility
0x25058 | 0.001 | ?? (read on jump)
0x2505C | 1.8 | ?? (read on jump)
0x25060 | 50.0 | ?? (read on turn/land on ground)
0x25064 | 6.0 | Damage multiplier after hitting ground
0x25068 | 11.0 | Damage multiplier before hitting ground
0x2506C | 0.09 | Skidding friction
0x25070 | 0.075 | Skidding friction?
```
## Squirtle
### Water Gun
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17380 | 60 | How many frames of charging to be considered full
0x17384 | 15.0 | Initial angle of firing (in degrees)
0x17388 | 50.0 | Max angle upwards
0x1738C | 25.0 | Max angle down (higher is more angled down)
0x17390 | 2.1 | Turning speed
0x17394 | 0.1 | ?? (read on water gun)
0x17398 | 1.1 | ?? (read on water gun)
0x1739C | 12 | How many frames before not getting spray
0x173A0 | 0.018 | Momentum backwards
0x173A4 | 0 | ?? (read when firing water/spray)
0x173A8 | 2.1 | Starting water gun speed
0x173AC | 1.8 | Water gun speed multiplier
0x173B0 | 0.06 | Water gun gravity
0x173B4 | 1.5 | Water spacing?
0x173B8 | 26 | Water dissapearing time
0x173BC | 0.8 | Water gfx initial size
0x173C0 | 1.5 | Water gfx scaling
0x173C4 | 60 | ?? (read on water gun)
```
### Withdraw
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x175D8 | 0.78 | Initial Air H momentum multiplier
0x175DC | 2.1 | Initial H speed of tilt input
0x175E0 | 2.4 | Initial H speed of smash input
0x175E4 | 2.1 | Momentum preservation without holding direction?
0x175E8 | 2.4
0x175EC | 3.3
0x175F0 | 0.0035 | Grounded H deceleration when speed is higher than terminal
0x175F4 | 1.0 | Grounded H terminal speed
0x175F8 | 0.5 | Aerial H terminal speed
0x175FC | 0.02 | Grounded H acceleration if speed is less than terminal
0x17600 | 0.01 | Aerial H acceleration if speed is less than terminal
0x17604 | 1.5
0x17608 | 3.2
0x1760C | 0.5
0x17610 | 3.0
0x17614 | 0.85
0x17618 | 0.003
0x1761C | 0.0025
0x17620 | 1.8 | Multiplied by speed and added to base damage (3 + 1.8 * Speed)
0x17624 | 0.3
0x17628 | 90
0x1762C | 180 | Max frame that SpecialS can be cancelled into SpecialSEnd
0x17630 | 44 | Min frame that SpecialS can be cancelled into SpecialSEnd
0x17634 | -0.5
0x17638 | 0.8
0x1763C | 0.8
```
### Waterfall
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17A18 | 0.25 | Joystick distance?
0x17A1C | 0.625 | Joystick distance?
0x17A20 | 18.0 | Directionalization distance (displacement, not angle)
0x17A24 | 0.6 | Special fall aerial mobility
0x17A28 | 30.0 | ??
0x17A2C | 20.0 | ??
0x17A30 | 20.0 | ??
0x17A34 | 0.6666 | ??
0x17A38 | 0.5 | ??
0x17A3C | 0.95 | Aerial height
```
### Fatigue
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17C28 | 100.0 | Max stamina
0x17C2C | 0.5 | Fatigue value decreased every second
0x17C30 | 0.5 | Fatigue value decreased per attack
0x17C34 | 0.8 | Fatigue value increased for every second pokemon is in pokeball <s>(and 80% KB on attacks?)</s>
0x17C38 | 0.7 | kb multiplier at "weakest" stamina (17C4C)
0x17C3C | 40.0 | Enter stamina wait animation (tired) when Fatigue falls below this value
0x17C40 | 0.3 | Fatigue multiplier when KO'd
0x17C44 | 1.1 | Weakness multiplier
0x17C48 | 0.9 | Resistance multiplier
0x17C4C | 40.0 | "Weakest" stamina level
```
## Toon Link
### Arrows
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D028 | 60.0 | More velocity with lower value, ONLY affects charged arrows
0x1D02C | 1.0 | ??
0x1D030 | 0 | ??
0x1D034 | 0.08726646 | Angle (radians)
0x1D038 | 1.7 | ??
0x1D03C | 60 | Duration (frames)
0x1D040 | 2.0 | Uncharged arrow velocity multiplier
0x1D044 | 3.8 | Charge arrow velocity multiplier
0x1D048 | 4.0 | Uncharged arrow damage
0x1D04C | 12.0 | Full charge arrow damage
0x1D050 | 120 | Arrow in ground duration (frames)
0x1D054 | 0.015 | Arrow gravity
0x1D058 | 0.69813168 | Arrow weight
```
### Boomerang
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D2A0 | 0.1 | Something to do with boomerang angle (above 1 you can't angle boomerang)
0x1D2A4 | 0.61086523 | Angle of upward/downward boomerang throw
0x1D2A8 | -4.15 | Boomerang vertical offset -16=Higher, hits floor sooner than it should
0x1D2AC | 200 | Duration of short toss (frames)
0x1D2B0 | 250 | Duration of long toss (frames)
0x1D2B4 | 2.3 | Short toss start velocity
0x1D2B8 | 2.8 | Long toss start velocity
0x1D2BC | -68.0 | Rotation of boomerang on toss (Z axis)
0x1D2C0 | -28.0 | Rotation of boomerang on return (Z axis)
0x1D2C4 | 0.04 | Deceleration/Resistance
0x1D2C8 | 2.3 | Returning speed
0x1D2CC | 0.3 | ??
0x1D2D0 | 0.73303830 | ??
0x1D2D4 | 0.01483529 | Boomerang Homing. Higher value = better homing to link
0x1D2D8 | 0.02617993 | ??
0x1D2DC | 110 | Homing time (frames)
0x1D2E0 | 14 | ?? (frames)
0x1D2E4 | 9.0 | X offset of when boomerang is catchable. Higher value = boomerang is caught further in front
0x1D2E8 | 2.0
0x1D2EC | 100.0
0x1D2F0 | 20
0x1D2F4 | 4
0x1D2F8 | 2
```
### Standing spin attack
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1D4A8 | 60
0x1D494 | 1.6 | per frame/iteration power multiplier?
```
### Spin Attack
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1E558 | 2.17 | Vertical height
0x1E55C | 0.55 | Gravity
0x1E560 | 0.4 | Not used in-game
0x1E564 | 0.22 | Horizontal mobility
0x1E568 | 0.2 | Horizontal maximum mobility
0x1E56C | 24 | Landing lag
```
### Triforce Slash?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1F008 | 7.0
0x1F00C | 70.0
0x1F010 | 10
0x1F014 | 8.0
0x1F018 | 30
0x1F01C | 0.05
```
## Wario
### Chomp?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18A08 | 20 | How many frames after releasing B he bites
0x18A0C | 70 | Max frames you can hold bite
0x18A10 | 120.0
0x18A14 | 0.5
0x18A18 | 4.0
0x18A1C | 5.0
0x18A20 | 0.5
0x18A24 | 6.0
0x18A28 | 2.0
0x18A2C | 15 | Frames before you can bite again after throwing
```
### Bike
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18AF0 | 0.06 | Starting gravity?
0x18AF4 | 1.5 | ?? (read on aerial start)
0x18AF8 | 60.0
0x18AFC | 30.0
0x18B00 | 1.5 | Jumping off bike horizontal momentum
0x18B04 | 2.8 | Jumping off bike vertical momentum
0x18B08 | 180 | How long after bike is gone you have to wait to do sideB again
0x18D48 | 2.2 | Initial speed (ground)?
0x18D4C | 2.0 | Initial speed (air)?
0x18D50 | 1.5 | Aerial Inital Jump Height
0x18D54 | 2.5 | Grounded top speed
0x18D58 | 0.015 | Grounded Air Resistance
0x18D5C | 0.4 | Grounded Acceleration
0x18D60 | 1.3 | Aerial top speed
0x18D64 | 0.01 | Aerial Air Resistance
0x18D68 | 0.3
0x18D6C | 0.06
0x18D70 | 1.5 | Aerial Max Fallspeed
0x18D74 | 10
0x18D78 | 1.5 | Damage Growth Constant (Equation is roughly something like Speed (in Units) x this = damage output. At fullspeed with this set to 100, the hitbox did 699%-744%)
0x18D7C | 0.8 | Something with hitbox offset?
0x18D80 | 0.05 | Minimum speed to have a hitbox?
0x18D84 | 0.07
0x18D88 | 5.0
0x18D8C | 0.5 | ?? (read on grounded travel)
0x18D90 | 22.0 | ?? (read on grounded travel)
0x18D94 | 2.0 | Aerial Rotation Speed
0x18D98 | 2.3 | Air -> ground bounce height
0x18D9C | 0.15 | ?? (read when landing from air -> ground)
0x18DA0 | 4.0
0x18DA4 | 80.0 | Max rotation on ground
0x18DA8 | 6.0 | Something with rotating (at 0 you can't rotate)
0x18DAC | 3.0 | Rotating down air friction? (at 0 you can't rotate)
0x18DB0 | 0.5
0x18DB4 | 0.8
0x18DB8 | 10 | Something with how long you have to be at max rotation before falling off at slow speeds?
0x18DBC | 4 | Something with how long you have to be at max rotation before falling off at fast speeds?
0x18DC0 | 0.09 | ?? (read when falling off bike)
0x18DC4 | 14 | Falling chance on turn (i.e. one in this chance)
0x18DC8 | 4 | See above, but for higher speed?
0x18DCC | 0.015 | ?? (read when falling off bike)
0x18DD0 | 0.2
0x18DD4 | 0
0x18DD8 | 0.3
0x18DDC | 0.8
0x18DE0 | 0.2
0x18DE4 | 0
0x18DE8 | 0
0x18DEC | 3.0
0x18DF0 | -2.0
0x18DF4 | 0
0x18DF8 | 2.0
0x18DFC | -2.0
0x18E00 | 4.5
0x18E04 | -0.0 (0x80000000)
0x18E08 | 2
0x18E0C | 9
0x18E10 | 0
0x18E14 | 5.0
0x18E18 | 5.0
0x18E1C | 0
0x18E20 | 5.0
0x18E24 | 5.0
0x18E28 | 5.5
0x18E2C | -0.0 (0x80000000)
0x18E30 | 1
0x18E34 | 9
0x18E50 | 6.5
0x18E54 | -0.0 (0x80000000)
0x18E58 | 0
0x18E5C | 17
```
### Corkscrew
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x191F8 | 0.5 | Startup Horizontal Momentum Multiplier
0x191FC | -0.9 | Startup Vertical Momentum
0x19200 | 0.01 | Something with vertical momentum when using horizontal movement? (larger = less height)
0x19204 | 0.3 | Something with horizontal joystick threshold for reversal?
0x19208 | 40.0 | Horizontal movement during jump
0x1920C | 0.15 | Horizontal momentum added to end of corkscrew
0x19210 | -0.9 | Vertical momentum subtracted from end of corkscrew
```
### Wario Waft
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x197A8 | 110 | Seconds to fully charge
0x197AC | 15 | Seconds to reach charge level one
0x197B0 | 55 | Seconds to reach charge level two
0x197B4 | 1.3 | Charge level one damage multiplier (at the point just before level two begins)
0x197B8 | 1.5 | Charge level two damage multiplier (at the point just before level three begins)
0x197BC | 2.4 | Vertical momentum (level two)?
0x197C0 | 3.5 | Vertical momentum (level three)?
0x197C4 | 4.6 | Vertical momentum (level four?)
```
## Wario-Man
### Chomp?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18938 | 20
0x1893C | 70
0x18940 | 120.0
0x18944 | 0.5
0x18948 | 4.0
0x1894C | 5.0
0x18950 | 0.5
0x18954 | 6.0
0x18958 | 2.0
0x1895C | 15
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18A20 | 0.3
0x18A24 | 1.5
0x18A28 | 60.0
0x18A2C | 30.0
0x18A30 | 1.5
0x18A34 | 2.8
0x18A38 | 180
```
### Bike
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18BF8 | 5.0 | Initial speed (ground)?
0x18BFC | 5.0 | Initial speed (air)?
0x18C00 | 1.5 | Aerial Inital Jump Height
0x18C04 | 5.0 | Grounded top speed
0x18C08 | 0.05 | Grounded Air Resistance
0x18C0C | 3.0 | Grounded Acceleration
0x18C10 | 5.0 | Aerial top speed
0x18C14 | 0.01 | Aerial Air Resistance
0x18C18 | 0.5
0x18C1C | 0.1
0x18C20 | 1.5 | Aerial Max Fallspeed
0x18C24 | 30
0x18C28 | 2.0 | Damage Growth Constant (Equation is roughly something like Speed (in Units) x this = damage output. At fullspeed with this set to 100, the hitbox did 699%-744%)
0x18C2C | 0.8
0x18C30 | 0.05
0x18C34 | 0.07
0x18C38 | 5.0
0x18C3C | 0.5
0x18C40 | 1.0
0x18C44 | 2.0 | Aerial Rotation Speed
0x18C48 | 2.3
0x18C4C | 0.15
0x18C50 | 4.0
0x18C54 | 80.0
0x18C58 | 6.0
0x18C5C | 3.0
0x18C60 | 0.5
0x18C64 | 3.0
0x18C68 | 10
0x18C6C | 4
0x18C70 | 0.3
0x18C74 | 10 | Falling chance on turn (i.e. one in this chance)
0x18C78 | 10 | See above, but for higher speed?
0x18C7C | 0.015
0x18C80 | 0.2
0x18C84 | 0
0x18C88 | 0.3
0x18C8C | 0.8
0x18C90 | 0.2
0x18C94 | 0
0x18C98 | 0
0x18C9C | 3.0
0x18CA0 | -2.0
0x18CA4 | 0
0x18CA8 | 2.0
0x18CAC | -2.0
0x18CB0 | 4.5
0x18CB4 | -0.0 (0x80000000)
0x18CB8 | 2
0x18CBC | 9
0x18CC0 | 0
0x18CC4 | 5.0
0x18CC8 | 5.0
0x18CCC | 0
0x18CD0 | 5.0
0x18CD4 | 5.0
0x18CD8 | 5.5
0x18CDC | -0.0 (0x80000000)
0x18CE0 | 1
0x18CE4 | 9
0x18D00 | 6.5
0x18D04 | -0.0 (0x80000000)
0x18D08 | 0
0x18D0C | 17
```
### Corkscrew
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x18F10 | 1.0
0x18F14 | 0.0
0x18F18 | 0.0
0x18F1C | 0.3
0x18F20 | 60.0
0x18F24 | 0.15
0x18F28 | -0.9
```
### Wario Waft
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19540 | 110 | Seconds to fully charge
0x19544 | 1 | Seconds to reach charge level one
0x19548 | 5 | Seconds to reach charge level two
0x1954C | 2.0 | Charge level one damage multiplier (at the point just before level two begins)
0x19550 | 1.5 | Charge level two damage multiplier (at the point just before level three begins)
0x19554 | 2.3 | Vertical momentum (level two)?
0x19558 | 3.3 | Vertical momentum (level three)?
0x1955C | 4.6 | Vertical momentum (level four?)
```
## Wolf
### Laser
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19220 | 7.0 | X offset grounded laser
0x19224 | 1.2 | Y offset grounded laser
0x19228 | 7.0 | X offset aerial laser
0x1922C | 1.2 | Y offset aerial laser
0x19230 | 0 | Angle laser is fired at (degrees)
0x19234 | 2.6 | Laser speed
0x19238 | 20 | Landling lag?
0x1923C | 35 | ??
0x19240 | 3.0 | Laser length
0x19244 | 11.25 | Laser lengthening time? (higher = slower)
```
### SideB
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19650 | 13 | ?? (read on startup)
0x19654 | 1.5 | ?? (read on startup)
0x19658 | 0.05 | Horizontal momentum preservation? (lower = more)
0x1965C | 0.01666666 | Vertical momentum on aerial startup?
0x19660 | 2.5
0x19664 | 0.15
0x19668 | 2.3
0x1966C | 0.07
0x19670 | 5
0x19674 | 0.08
0x19678 | 0.4
0x1967C | 25
0x19680 | 3
0x19684 | 3
```
### UpB
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19DB4 | 1.5 | ?? (read on startup)
0x19DB8 | 0.01 | ?? (read on aerial startup)
0x19DBC | 0.02 | Vertical momentum on aerial startup
0x19DC0 | 0.125 | Something with input?
0x19DC4 | 0.5 | Default angle no input? (radians)
0x19DC8 | 22 | How many frames before you stay in place during upB kick?
0x19DCC | 15 | Frame count for something? (read on travel)
0x19DD0 | 16 | Travel distance (frames)
0x19DD4 | 4.0 | Travel speed (affects distance)
0x19DD8 | 0.55 | Momentum preservation at end of upB
0x19DDC | 0.16 | ?? (read at end of upB)
0x19DE0 | 20.0 | Something to do with angle when hitting ground?
0x19DE4 | 0.4 | How far you go when hitting ground angled
0x19DE8 | 0.65 | Special fall aerial mobility
0x19DEC | 36 | Landing lag (frames)
```
### Reflector
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x19F78 | 18
0x19F7C | 0 | Frames before 19F84 takes effect
0x19F80 | 2.0 | Momentum preservation (lower = more momentum preserved)
0x19F84 | 0.13 | Aerial momentum downward (applies to startup and holding)
0x19F88 | 8
0x19F8C | 50.0 | Break threshold?
0x19F90 | 0 | Reflection bubble X pos?
0x19F94 | 6.5 | Reflection bubble Y pos?
0x19F98 | 0 | Reflection bubble Z pos?
0x19F9C | 8.5 | Reflection bubble size?
0x19FA0 | 1.3 | Reflected projectile damage multiplier
0x19FA4 | 1.8 | Reflected projectile speed multiplier
0x19FA8 | 0.5
0x19FAC | 0 | rowspan="5" | Like Fox, a list of five 45-degree angles.
0x19FB0 | 45.0
0x19FB4 | 90.0
0x19FB8 | 135.0
0x19FBC | 180.0
```
### Landmaster
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1A0D0 | 5.0
0x1A0D4 | 10
0x1A0D8 | 0.13
0x1A0DC | 1.8
0x1A0E0 | 0.01
0x1A0E4 | 0.2
0x1A0E8 | 1.8
0x1A0EC | 0.13
0x1A0F0 | 0.08
0x1A0F4 | 5.0
0x1A0F8 | 12
0x1A0FC | 0.5
0x1A100 | 0.6
0x1A104 | 0.5
0x1A108 | 0
0x1A10C | 13.0
0x1A110 | 12.0
0x1A114 | 40.0
0x1A118 | 0.6
0x1A11C | 2.0
0x1A120 | 2.0
0x1A124 | 1.0
0x1A128 | 180
0x1A12C | 5
0x1A130 | 150.0 | Health?
0x1A134 | 1.0
0x1A138 | 1.0
0x1A13C | 2.0
0x1A140 | 1.2
0x1A144 | 0.26
0x1A148 | 12
0x1A14C | 1.8
0x1A150 | 0.002
0x1A154 | 0.2
0x1A158 | 1.6
0x1A15C | 0.06
0x1A160 | 2.5
0x1A164 | 0.8
0x1A168 | 1.5
0x1A16C | 1.8
0x1A170 | 1.25
0x1A174 | 0.3
0x1A178 | 1.0
0x1A17C | 0.5
0x1A180 | 0.4
0x1A184 | 3.0
0x1A188 | 0.1
0x1A18C | 4.0
0x1A190 | 5.0
0x1A194 | 20.0
0x1A198 | 1.0
0x1A19C | 2.0
```
## Yoshi
### Egg Roll (?)
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16D20 | 360 | Max number of frames you can be in egg before exiting automatically
0x16D24 | 30 | Minimum number of frames to be in egg before exiting with B
0x16D28 | 40 | ?? (Not read on sideB)
0x16D2C | -0.2 | ?? (Not read on sideB)
0x16D30 | 0 | startup horizontal momentum
0x16D34 | 1.5 | startup vertical momentum
0x16D38 | 5.0 | Read on Rolling?
0x16D3C | 1.5 | rolling momentum when you land for the first time
0x16D40 | 1.2 | ?? (read on aerial startup)
0x16D44 | 0.13 | gravity
0x16D48 | 2.1 | bounciness when hitting ground
0x16D4C | 0.08 | base rolling momentum?
0x16D50 | 0.07 | rolling momentum multiplier?
0x16D54 | 2.8 | something with rolling momentum?
0x16D58 | 3.8 | something with rolling momentum?
0x16D5C | 0.08
0x16D60 | 0.06
0x16D64 | 0.5
0x16D68 | 1.6 | air acceleration?
0x16D6C | 5.0
0x16D70 | 5.0
0x16D74 | 0.5
0x16D78 | 4.0
0x16D7C | 8
0x16D80 | 3.0
0x16D84 | 0.5
0x16D88 | 1.7
0x16D8C | 0.66 | bounce velocity multiplier?
0x16D90 | 1.0
0x16D94 | 1.3
0x16D98 | 1.5 | Used in damage formula?
0x16D9C | 3.0
0x16DA0 | 3.0
0x16DA4 | 2.0
0x16DA8 | 0.7 | ending air acceleration?
0x16DAC | 0.5 | Vertical multiplier on exit
0x16DB0 | 1.1
0x16DB4 | 32
0x16DB8 | 0.2 | ending horizontal speed?
0x16DBC | 0.78539818 | (45 degrees)
0x16DC0 | 30.0 | something to do with "freefall"?
```
### Egg Toss
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16E28 | 1.8 | Upward momentum of throwing
0x16E2C | 0.07 | Downward momentum of throwing
0x16E30 | 1.29 | Momentum preserved after throwing
0x16E34 | 0.84 | Upward momentum after throwing 2+ times in air
0x16E38 | 5.0 | Number of times Yoshi hops from Egg Toss in the air until landing
0x16E3C | 0.8 | affects angle of thrown egg backward and forward? (radians)
0x16E40 | 0.55850535 | affects angle of thrown egg backward and forward? (32 degrees)
0x16E44 | 0.06981316 | affects angle of thrown egg backward and forward? (4 degrees)
0x16E48 | 1.01229095 | angle of throwing (58 degrees affects all throws)
0x16E4C | 1.25 | Vertical launch speed multiplier
0x16E50 | 0.09 | Horizontal launch speed multiplier
0x16E54 | 5.0 | Egg X offset on toss
0x16E58 | 18.0 | Egg Y offset on toss
0x16E5C | -1.5 | Egg air friction?
0x16E60 | -2.1 | base egg spin?
0x16E64 | 42 | How long until it explodes (frames)
0x16E68 | 20 | How long explosion exists in frames? (at 0 it didn't have sfx on explode)
0x16E6C | 100.0 | Spinning?
0x16E70 | 0.07 | Egg vertical gravity
0x16E74 | 2.5 | Egg horizontal gravity
```
### Ground Pound
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x171C0 | -5.0 | Descent speed?
0x171C4 | 8.0
0x171C8 | 1.0
0x171CC | 0.8 | Horizontal movement of stars?
0x171D0 | -0.02 | Stars gravity?
0x171D4 | 0.48
0x171D8 | 1.0
0x171DC | 0.03
```
### Super Dragon (?)
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17428 | 0.3
0x1742C | 0.09
0x17430 | 2.4
0x17434 | 0.017
0x17438 | 0.09
0x1743C | 1.5
0x17440 | 0.013
0x17444 | 0.02
0x17448 | 0.15
0x1744C | 2.5
0x17450 | 0.5
0x17454 | 140.0
0x17458 | 6.0
0x1745C | 345.0
0x17460 | 60.0
0x17464 | 10.0
0x17468 | 5.0
0x1746C | 0
0x17470 | 60.0
0x17474 | 0
0x17478 | 5.0
0x1747C | 0
0x17480 | 30.0
0x17484 | 17.0
0x17488 | 60.0
0x1748C | 180.0
0x17508 | 6.0
0x1750C | 0.2
0x17510 | 15.0
0x175A8 | 5.0
0x175AC | 70.0
```
### Flutter Jump?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x177B8 | 12 | Number of frames to turn around during Double Jump
0x177BC | 0.3 | Joystick sensitivity to turn around during Double Jump
0x177C0 | 120.0 | Knockback resistance
```
### Standing Grab
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1F688 | 0 |<$h12> Animation frame set. Upon successfully grabbing, the grab animation is set to this frame to show Yoshi pulling his foe in.  The frame to switch to depends on the frame Yoshi grabbed his foe.  By default, a successful grab on the first frame of the grab sets the animation frame to 46 (tongue just returning to Yoshi's mouth) and a successful grab on the last frame of the grab, where Yoshi's tongue is extended to its max distance, sets the animation to frame 29, where Yoshi's tongue is just starting to return to his mouth from max distance.
0x1F68C | 46.0
0x1F690 | 44.0
0x1F694 | 42.0
0x1F698 | 40.0
0x1F69C | 38.0
0x1F6A0 | 36.0
0x1F6A4 | 34.0
0x1F6A8 | 33.0
0x1F6AC | 32.0
0x1F6B0 | 31.0
0x1F6B4 | 29.0
0x1F6B8 | 16.0 | Starting frame for the table above- equal to the starting frame of Yoshi's standing grab hitbox.
0x1F6BC | 26.0 | Ending frame for the table above- equal to the ending frame of Yoshi's standing grab hitbox minus one.
```
### Dash Grab
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1F6C4 | 35.0 |<$h12> Animation frame set. Upon successfully grabbing, the grab animation is set to this frame to show Yoshi pulling his foe in.  The frame to switch to depends on the frame Yoshi grabbed his foe.  By default, a successful grab on the first frame of the grab sets the animation frame to 34 (tongue just returning to Yoshi's mouth) and a successful grab on the last frame of the grab, where Yoshi's tongue is extended to its max distance, sets the animation to frame 22, where Yoshi's tongue is just starting to return to his mouth from max distance.
0x1F6C8 | 34.0
0x1F6CC | 32.0
0x1F6D0 | 30.0
0x1F6D4 | 29.0
0x1F6D8 | 28.0
0x1F6DC | 27.0
0x1F6E0 | 26.0
0x1F6E4 | 25.0
0x1F6E8 | 24.0
0x1F6EC | 23.0
0x1F6F0 | 22.0
0x1F6F4 | 10.0 | Starting frame for the table above- equal to the starting frame of Yoshi's dash grab hitbox.
0x1F6F8 | 21.0 | Ending frame for the table above- equal to the ending frame of Yoshi's dash grab hitbox minus one.
```
### Pivot Grab
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x1F700 | 0 |<$h12> Animation frame set. Upon successfully grabbing, the grab animation is set to this frame to show Yoshi pulling his foe in.  The frame to switch to depends on the frame Yoshi grabbed his foe.  By default, a successful grab on the first frame of the grab sets the animation frame to 26 (tongue just returning to Yoshi's mouth) and a successful grab on the last frame of the grab, where Yoshi's tongue is extended to its max distance, sets the animation to frame 20, where Yoshi's tongue is just starting to return to his mouth from max distance.
0x1F704 | 26.0
0x1F708 | 26.0
0x1F70C | 25.0
0x1F710 | 25.0
0x1F714 | 24.0
0x1F718 | 24.0
0x1F71C | 23.0
0x1F720 | 22.0
0x1F724 | 21.0
0x1F728 | 21.0
0x1F72C | 20.0
0x1F730 | 9.0 | Starting frame for the table above- equal to the starting frame of Yoshi's pivot grab hitbox.
0x1F734 | 19.0 | Ending frame for the table above- equal to the ending frame of Yoshi's dash grab hitbox minus one.
```
## Zelda
### Nayru's Love
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16970 | 1.0
0x16974 | 4
0x16978 | 2.0 | Horizontal momentum preservation (less = more)
0x1697C | 0.02666666 | Vertical momentum
0x16980 | 10
0x16984 | 50.0 | Break threshold?
0x16988 | 0 | Reflection bubble X pos?
0x1698C | 0 | Reflection bubble Y pos?
0x16990 | 0 | Reflection bubble Z pos?
0x16994 | 9.4 | Reflection bubble size?
0x16998 | 1.2 | Reflected projectile damage multiplier
0x1699C | 1.2 | Reflected projectile speed multiplier
0x169A0 | 0.5
```
### Din's Fire
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16A44 | 10 | Frame you start falling
0x16A48 | 10 | ?? (read on startup)
0x16A4C | 9.0 | X offset
0x16A50 | -0.8 | Y offset
0x16A54 | 0.019 | Falling gravity
0x16A58 | 24.0 | ?? (read when releasing B)
0x16A5C | 0 | ?? (not read)
0x16A60 | 60.0 | Max Travel Distance in frames
0x16A64 | 60.0 | Frames where damage grows with distance
0x16A68 | 1.0 | Initial hit+GFX size
0x16A6C | 1.9 | Terminal hit+GFX size
0x16A70 | 0 | Firing angle
0x16A74 | 0.5 | Initial speed
0x16A78 | 0.06 | Acceleration
0x16A7C | 7.0 | ?? (read during startup)
0x16A80 | 0.5 | ?? (higher than 1.0 you can't maneuver up/down)
0x16A84 | 0.02617993 |  Up/Down maneuverability
0x16A88 | 1.39626336 | Maximum curve projectile can angle (high numbers allow reversing direction)
0x16A8C | 7.0 | Detonation Timer
0x16AA0 | 16777216 (0x01000000)
0x16AA4 | 2.0 | ?? (read on article generation)
0x16AA8 | -2.0 | ?? (read on article generation)
0x16AAC | 2.0 | ?? (read on article generation)
0x16AB0 | 60.0 | ?? (read on explosion)
0x16AB4 | 1.0 | Initial Hitbox size multiplier
0x16AB8 | 1.9 | Terminal Hitbox size multiplier
0x16ABC | 7.0 | Initial damage
0x16AC0 | 0.15 | Damage growth rate
```
### Farore's Wind
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16E80 | 1.5 | horizontal momentum preservation (smaller = higher)
0x16E84 | 3.0 | vertical momentum preservation (smaller = higher)
0x16E88 | 0.03 | Vertical momentum preservation
0x16E8C | 0.75 | Something with momentum preservation?
0x16E90 | 20 | Travel distance (in frames)
0x16E94 | 3.0
0x16E98 | 0.5
0x16E9C | 2.2
0x16EA0 | 2.0
0x16EA4 | 0.6
0x16EA8 | 45
0x16EAC | 0.2
0x16EB0 | 0.8
0x16EB4 | 30.0
```
### Transform?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16F38 | 2.0
0x16F3C | 2.0
0x16F40 | 0.04
0x16F44 | 0.75
```
### Light Arrow?
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x171F0 | 50.0
0x171F4 | 38.0
0x171F8 | 5.0
0x171FC | 1.3
0x17200 | 0.6
0x17204 | 60.0
0x17208 | 0.75
0x1720C | 0
0x17210 | 0
0x17214 | 30
0x17218 | 10.0
0x1721C | 0.75
0x17220 | 0
0x17224 | 70
```
## Zero Suit Samus
### Paralyzer
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x16F18 | 3.0 | X offset
0x16F1C | 1.5 | Y offset
0x16F20 | 1.75
0x16F24 | 2.0
0x16F28 | 30.0
0x16F2C | 60.0
0x16F30 | 2.1
0x16F34 | 1.5
0x16F38 | 24 | Uncharged lifetime
0x16F3C | 45 | Charged lifetime
```
### Plasma Whip
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17468 | 0.5
```
### Flip Jump
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
0x17A6C | 0.5
0x17A70 | 3 | ?? (read on starting frame)
0x17A74 | 1.8 | Starting frame horizontal momentum multiplier
0x17A78 | 2.5 | Starting frame vertical momentum
0x17A7C | 0.5 | Flip Jump kick stick turn sensitivity
0x17A80 | 0 | ?? (read on starting frame)
0x17A84 | -2.0 | ?? (read on starting frame)
0x17A88 | 14.0 | ?? (read on starting frame)
0x17A8C | 10.0 | ?? (read on starting frame)
```
### Unknown
```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
File Offset {
  renderer: hex
}
Default
Description
# DATA
17D6C-17FF0 |  | Rather interesting-looking sequence with a few different patterns
0x18D64 | 70.0
0x18D68 | 20.0
0x18D6C | 4.0
```
