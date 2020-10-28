# Graphical Effects

An illustrated guide of the universal GFX is located here: http://www.youtube.com/watch?v=_-mwMQQHDn0.

```handsontable
# OPTIONS
#COLUMNS
Value {
  renderer: hex
}
Effect
# DATA
0x1 | Normal Hit
0x2 | Normal Hit Directional Indicator
0x3 | Fire Hit
0x4 | Electric Hit
0x5 | Slash Hit
0x6 | Slash Hit Directional Indicator
0x7 | Heavy Landing Smoke
0x8 | Light Landing Smoke
0x9 | "Crown" Shockwave (effect when someone bounces off a surface)
0xA | Dash Smoke
0xB | FallSpecial Landing Smoke (circular arrangement of small dust clouds)
0xC | Launch Smoke
0xD | Smash Smoke 1
0xE | Counter-clockwise Spinning Smoke
0xF | Clockwise Spinning Smoke
0x10 | Smash Start Flash (used at the start of a smash attack)
0x11 | Smash Charge Flash (used during a smash attack's charge)
0x12 | Fire Hit After-Effect
0x13 | Electric Hit After-Effect
0x14 | Shield (L,R Shield)
0x15 | Small Dust
0x16 | Shield Damage
0x17 | Red KO Explosion (SHOOPDAWOOP)
0x18 | Standard Fiery Explosion (used by Bob-ombs)
0x19 | Small Fire Explosion with Smoke (used by Mario's f-smash)
0x1A | Running Footstep Smoke
0x1B | Ground Jump Dust
0x1C | Run Brake Smoke
0x1D | Magic Flash with Golden Ring (used by Zelda's Lightning Kicks and Ness's f-air)
0x1E | Midair Jump Rings
0x1F | Sleep Hit (small green energy circles)
0x20 | Clash / Small Shield Impact (used when attacks clash; also is used where a shield gets hit)
0x21 | Smash Smoke 2
0x22 | Item Disappearance Smoke
0x23 | Medium-Sized Fire Explosion with Smoke (used by Samus's d-tilt)
0x24 | Spinning Attack Wind (used by various moves that rapidly spin)
0x25 | Expanding Radial Smoke (used by Samus's ground jump)
0x26 | Glancing Blow Sparks
0x27 | Smash Smoke 3
0x28 | Smash Smoke 4
0x29 | Radial Smoke Blast 1
0x2A | Radial Smoke Blast 2 (used in Bowser's down-B landing)
0x2B | Claw Attack
0x2C | Grabbed Effect
0x2D | Multiple Dizzy Sparks (used when dizzy from shield breaking or deku nut)
0x2E | Wake-Up Spark
0x2F | Sleep Bubbles
0x30 | Aura Hit After-Effect
0x31 | Pair of small lines/sparks (used on footstools)
0x32 | Bright Yellow Orb (permanent?)
0x33 | Item Smoke (used when some items bounce off a surface)
0x34 | Grabbed Effect (identical to 2C)
0x35 | Item Pickup (small circular green flash)
0x36 | Item Healing Effect
0x37 | Item Spawn (stars, energy, dust, sparkles)
0x38 | Pokeball Open (the effect when they are about to come out the ball)
0x39 | Earthquake (either Charizard's d-smash or DK's down-B, or both)
0x3A | fire Explosion
0x3B | Better fire explosion
0x3C | Ice Shattering
0x3D | Partyball Confetti
0x3E | Iceberg (When a character gets frozen)
0x3F | Snowflake
0x40 | Frost Smoke
0x41 | Fire explosion (non smoke)
0x42 | Smokeball smoke (changes color too)
0x43 | Circular Lightning
0x44 | Thunder Striking Down
0x45 | Mud (When you get grounded) (dig)
0x46 | Spinning Flat Circle thing (is it used in Bowser's n-air?)
0x47 | Pokemon stadium 1 windmill fan outlines
0x48 | Animated Sphere that changes color (permanent?)
0x49 | Cracker flare effect upon firing
0x4A | Dark Circle with flames flowing off
0x4B | Dust Smoke Cloud things
0x4C | Red then Blue Fireworks
0x4D | Bomb-omb explosion- has a circular shockwave
0x4E | Water splash
0x4F | Water
0x50 | Water splash
0x51 | Magenta Burst
0x52 | Dark Orb
0x53 | Fire Sun (permanent)
0x54 | Flame Orb
0x55 | Stars (permanent)
0x56 | Blue shockwave flash (used at start of many grounded up-B's, or when slamming into solid objects)
0x57 | Huge coin
0x58 | Green Laser
0x59 |  Conical green energy shockwave (used when Ray Gun is fired)
0x5A | Cone of yellow stars and starbursts (used when shooting smash attack stars from Star Rod)
0x5B | Kirby Warp star
0x5C | Cone of yellow stars (used for impact of Star Rod's star shots?)
0x5D | A lot of Small White Stars (used for Star Rod)
0x5E | Infinite loop of bubbles
0x5F | Pair of jagged spinning energy discs (used as part of Samus's up-B graphics/ screw attack badge)
0x60 | Small Jagged Red Ball With Fire Coming From the Top (Permanent)
0x61 | Shadow Smoke
0x62 | Respawn Platform
0x63 | Small Yellow Sparkles (Permanent)
0x64 | Deku nut explosion (creates light and casts shadows for an instant)
0x65 | Smart Bomb Graphic
0x66 | Wooden Planks burst
0x67 | Glass Shatter and Green Lines burst
0x68 | Confetti and Weird White Symbols (Red Blast in Middle)
0x69 | Confetti and Weird White Symbols (Green Blast in Middle)
0x6A | Awesome Ice Effect (Only works one time, Second Use and After is a White Blast)
0x6B | White Sparkles, then a Bunch of Kirby Stars (Permanent Kirby Stars)
0x6C | Circle of Red Sparks (Permanent)
0x6D | Two Red Circles with Lightning Inside
0x6E | Red Circle with Lightning Inside
0x6F | Oval-esque Light (Green|White|Light Blue) Then Fades to the Left
0x70 | Huge Vertical Ring of Fire
0x71 | Oval-esque Light (Colors Change From Top to Bottom, From Light Blue to Green)
0x72 | Small Glass Shatter
0x73 | Red Ball of Fire
0x74 | White Lines that Form a Cone (Small Part at Bottom) and Green Flakes Appear Halfway Through the Grahpic
0x75 | Circle of Sparkles (Permanent)
0x76 | Random Red Sparkles (Permanent)
0x77 | White Circle Expanding Outwards with a Few Sparkles and Music Notes
0x78 | Random White Sparkles
0x79 | Small White Puff of Smoke
0x7A | White Sphere then Shadow Sphere Inside
0x7B | Circular Splash of Water
0x7C | Big Water Splash That Goes Outward and Up
0x7D | Small White Blast (used while charging smash attacks? not quite but looks similar)
0x7E | White Sparkles and Kirby Starts (Not Permanent; used as Warp Star impact?)
0x7F | Big White Circle That Goes Outward, Then Inside of that Another White Circle Appears
0x80 | Glass Shatter
0x81 | Big Electric Blast
0x82 | Small White flashing circle within Big Red flashing circle
0x83 | Permanent Sparkles
0x84 | Permanent (Really Bright) White Ball of Energy (Samus to ZSS transform graphic?)
0x85 | Small Red Lightning
0x86 | Cloud of Dust
0x87 | Larger(?) White Sparkly Ball of Energy (used when attacks clash, looks very similar to 0x1F)
```