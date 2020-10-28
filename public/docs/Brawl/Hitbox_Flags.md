# Hitbox Flags

Hitbox flags are a set of eight hex digits, found as the thirteenth parameter of offensive collisions.

## Visualization / Flag Creator

the following is a link to fudgepop01's creation to assist in understanding exactly how these
flags work:

https://docs.google.com/spreadsheets/d/1EBDvGdVSXn9THzz6HSVgT4TElFumO_D-mrT2eMqHzp4/edit#gid=0

## Introduction

A flag is basically a bit. Bits can be either 0 or 1. Often, bits work together to store numbers or text, but flags sometimes work alone as well.

These bits are shown as hex in PSA and OpenSA. Hex (or hexadecimal) is a way to write down four bits in one number - for example, the bit string 0110 is equal to 6. Letters are used because there are only 10 digits, whilere there are 16 possible 4-digit bit strings. For example, D is equal to 13, which is equal to a bit string of 1101.

This is a list of decimal-hex-binary conversions for reference:

### Conversion Table

```handsontable
# OPTIONS
# COLUMNS
decimal
hex
string
# DATA
0 | 0 | 0000
1 | 1 | 0001
2 | 2 | 0010
3 | 3 | 0011
4 | 4 | 0100
5 | 5 | 0101
6 | 6 | 0110
7 | 7 | 0111
8 | 8 | 1000
9 | 9 | 1001
10 | A | 1010
11 | B | 1011
12 | C | 1100
13 | D | 1101
14 | E | 1110
15 | F | 1111
```

While it seems like the flags are digit-based, they are not. What they are based off of are the bits that the digits are made of - they don't work together in evenly-distributed groups. This leads to one attribute overlapping two or even three of a flag's hex digits.
Let's take the simple 39030200 as an example:

```
- Hex:             39030200
- Binary:          0011 1001 0000 0011 0000 0010 0000 0000
- Alignment:       00111001000000110000001000000000
- Type seperation: 00 1 1 1 00100 0000 1 1 00 00001000 0 00000
```

The bits are in unevenly-sized groups so they have to be converted into decimal.

```
00 1 1 1 4 0000 1 1 00 8 0 0
```

Now the numbers are meaningful and can be used with the defintions below.

## Regular flags
### Bits 1-2
These bits are recorded in memory during hitbox generation but don't seem to do anything.

### Bit 3 (Direct)
If this is set, the hitbox is identified by the sticker system as not being Special:Indirect. Yes it's a bit backwards.

### Bit 4 (Rebound)
Based on position (next to the clang bit) and patterns when compared with Melee, this is the bit that would have controlled whether the move would rebound if it clangs. As this bit is immediately discarded during hitbox generation, it doesn't seem to do anything.  Bug or late design decision?

### Bit 5 (Clank)
This is the clanking bit. Technically, this is whether an attack can clang with other attacks (provided it's otherwise able to clang, that is it deals within 9% damage and is a ground or sometimes special attack), but many people understand it better if defined with the following table:

```
1: Can clank
0: Cannot clank
```

### Bit 6-10 (Type)
These are important to the Subspace Emissary as these determine the type of attack the hitbox is, and therefore what stickers affect it.

#### Conversion Table
```handsontable
# COLUMNS
Value
Type
Notes
# DATA
0 | Typeless | Used for things that don't appear in SSE, such as Giga Bowser. Also used for things that don't fit into any other category such as Mario's fireball.
1 | Head |
2 | Body | Used mainly for belly flops and shoulder rams.
3 | Butt |
4 | Hand |
5 | Elbow |
6 | Foot |
7 | Knee |
8 | Throwing | The only currently known case of this is for throws such as Mario's back throw, which causes the character being thrown to slightly damage bystanders. Presumably this is also the type of throws.
9 | Weapon |
10 | Sword |
11 | Hammer |
12 | Explosive |
13 | Spin |
14 | Bite |
15 | Magic |
16 | PK |
17 | Bow | This type is used for most of Pit's attacks (including his arrows), but not for the Hero's Bow.
18 | Unknown |
19 | Bat |
20 | Umbrella |
21 | Pikmin | All of the Pikmin count towards this.
22 | Water | Only Squirtle gets this as FLUDD is labeled as a weapon. Note that not all attacks with Water as a type have Water as their effect; it's theorized that this is so an attack can be boosted by water stickers without being water in the type effectiveness triangle.
23 | Whip | Used by Zero Suit Samus's Plasma Whip, Ivysaur's vines, and Sheik's chain.
24 | Tail |
25 | Energy | Used by the Starfox characters' lasers, Samus' charge shot, and so on.
```

Note: The developers appear to have merged certain effects together for sticker effects, such as Body/Butt, Foot/Knee, Hand/Elbow, and Weapon/Sword/Hammer/Bat/Umbrella.

### Bits 11-14 (Unused?)
All currently documented hitboxes have a value of 0000, so it is unknown what they do.  Based on analysis of command parsing code, bits 11-13 are discarded during hitbox generation while bit 14 is used along with bits 15 and 16.

### Bits 15 (targets aerial) and 16 (targets grounded)
Setting bit 15 to '1' lets a hitbox target an aerial opponent, and bit 16 to '1' lets a hitbox target a grounded opponent. Most hitboxes will have these bits as "11" to target both grounded and aerial targets. Some moves will have two hitboxes of the same size in the same place, with one hitting air and the other hitting ground; this is used so attacks can have different behaviour on different opponents. A good example is Samus's u-tilt, which has a pair of Meteor Smash hitboxes set to "01" (grounded targets only) and at the same locations with the same sizes, a pair of Sakurai angle hitboxes set to "10" (aerial targets only). Earthquake-type moves like DK's down-B and Charizard's d-smash are set to "01" (ground-only).

As a result, a ground-only hitbox will have flags "xxx1xxxx", an aerial-only hitbox will have flags "xxx2xxxx", and an omnitarget hitbox will have flags "xxx3xxxx".

Shields and most stage elements can be hit by both aerial-only and grounded-only hitboxes.

### Bits 17-18 (Unused?)
These bits are always 00 for all currently documented hitboxes and do not seem to be used during hitbox generation.

### Bits 19-23 (Sound)
When interpreted as an integer, these bits determine what noise you hear when the hitbox strikes an opponent. (Most non-Smasher targets override these sounds, such as breakable walls and such). If an attack deals no damage, the sound will not play.

#### Converstion Table
```handsontable
# COLUMNS
Value
Type
Notes
# DATA
0 | None/Unique | Appears to (depending on level) do nothing or produce a sound unique to the source (Bumper, squeaky hammer, Triforce Slash last hit, etc).
1 | Punch |
2 | Kick |
3 | Slash |
4 | Coin |
5 | Bat | As in Home-Run Bat. Large Bat is the ping noise.
6 | Paper |
7 | Shock |
8 | Burn |
9 | Splash |
10 | Blank? |
11 | Explosion |
12 | Blank? |
13 | Thud | As in Snake's attacks. Exclusive.
14 | Slam | As in Ike's attacks. Exclusive.
15 | Thwomp | As in Dedede's attacks. Exclusive.
16 | Magic zap |
17 | Shell |
18 | Slap | Peach exclusive.
19 | Pan | Same as Slap.
20 | Club | Idem.
21 | Racket | Eadem.
22 | Aura | As in Lucario's attacks. Exclusive.
23 | Treble | Marth exclusive. Unused?
24 | Coin | Mario exclusive. Unused (sounds exactly the same as Coin 4).
25 | Static? | Mario exclusive. Unused.
26 | Coin | Luigi exclusive. Unused (sounds exactly the same as Coin 4).
27 | Bat | As in Ness' bat. Exclusive.
28 | Frost |
```

### Bit 24 (unused)
This bit is discarded during hitbox generation.

### Bits 25-26 (Sound Level)

This number determines how much oomph the impact sound has.

```
0: Small
1: Medium
2: Large
3: Huge
```

Not all sound types have all levels; for example most of the categories don't have a Huge variant, and you'll get nothing.

### Bit 27 (???)
This bit is always 0 for all currently documented hitboxes and is discarded during hitbox generation.

### Bits 28-32 (Effect)
This is a rather significant attribute. These are used for both status effects (burying, freezing) and sticker purposes in the Subspace Emissary, although they have a much greater effect, so no hitboxes have been skirted like they were for type. Note that the eighth parameter of throws use this data as well.

#### Converstion Table
```handsontable
# COLUMNS
Value
Effect
Notes
# DATA
0 | Normal|The basic effect for most hitboxes. May be the effect that activates Battering Resistance stickers.
1 | None|Seen only for the detection hitboxes of Raptor Boost.
2 | Slash|
3 | Electric|
4 | Freezing|
5 | Flame|
6 | Coin|Used only in the Super Jump Punch.
7 | Reverse|For example, Mario's Cape.
8 | Trip|Forces a trip; does not require the opponent to take low knockback for a trip to happen.
9 | Sleep|
10 | None?|
11 | Bury|
12 | Stun|
13 | None?|
14 | Flower|
15 | None?|
16 | None?|
17 | Grass|
18 | Water|
19 | Darkness|
20 | Paralyze|What attacks like ZSS's Paralyzer shots do.
21 | Aura|A move must be this type for Lucario's damage-based-on-damage mechanic to occur. When used by someone other than Lucario (e.g. Kirby), the move remains aura-based but does not have its damage altered.
22 | Plunge|Buries like a Pitfall (targets drop through soft platforms).
23 | Down|Used by Snake's down throw; puts the target on their back.
24 | Flinchless|Does not fully count as a hit in Training Mode.
```

## Special Hitboxes
These are for the last parameter for Special offensive collisions.

### Bit 1 (Flinchless)
Having this bit set seems to stop the target from flinching.

### Bit 2 (???)
Unknown at the moment.

### Bit 3 (Hitlag Disable)
When set to 1 hitlag on the hitbox is disabled, so no freeze frames will be added when it connects. It's unknown what the difference is between having this bit set and giving the hitbox a hitlag multiplier of 0.

### Bit 4 (Team Damager)
If this bit is 1, you can hurt your teammates even if friendly fire is off.

### Bit 5 (Grippy)
With the exception of Giga Bowser's and Jigglypuff's pummels, it appears that all pummels and multihit throws have this bit set. This can mean that it stops hitboxes from causing targets to break out of grabs and throws.

### Bit 6 (???)
Unknown at the moment.

### Bit 7 (Piercing)
Allow the hitbox to hit through invincibility (but not intangibility). It's used in Isaac's hand hitboxes.

### Bit 8 (Absorbability)
If it's 1, the hitbox is absorbable by moves like Oil Panic and PSI Magnet. If it's 0, the hitbox is not absorbable.

### Bit 9 (Reflectability)
If this bit is 1, Capes and Reflectors will reflect the hitbox. This does not naturally cause the attack to alter course; projectiles themselves must recognize that they've been reflected to change direction (case in point: Thunder proceeds uninhibited when reflected).

### Bit 10 (Shieldability)
1 means it's blockable, 0 means it's not blocklable. Not that unblockables will penetrate counter-based moves such as Marth's Counter.

### Bit 11-12 (???)
Seem to always be 00.

### Bit 13-26 (Hit Bits)
These bits appear to control what kind of targets the hitbox will be able to hit.

#### Converstion Table
```handsontable
# COLUMNS
Bit Number
Notes
# DATA
Bit 13|Apparently this bit must always be 1 to make the hitbox has any effect
Bit 14|
Bit 15|Waddle Dee/Doo, Pikmin
Bit 16|Link & Toon Link Bomb, R.O.B. Gyro, Snake Grenade, Bob-omb, Mr Saturn, All Stage Related Hurtboxes?
Bit 17|
Bit 18|Link & Toon Link Bomb, Bob-omb
Bit 19|Damageable Walls/Ceilings/Floors
Bit 20|Other Stage Hurtboxes (Non-Wall/Ceiling/Floor)
Bit 21|
Bit 22|
Bit 23|R.O.B. Gyro, Snake Grenade, Mr Saturn
Bit 24|
Bit 25|SSE Enemies
Bit 26|Smashers, Waddle Dee/Doo, Pikmin
```

### Bit 27 (???)
Unknown.

### Bit 28: Stretchy
When set, the hitbox will turn from a sphere into a tube, stretching from its position to the bone it's attached to. Basically, it starts at the bone with an offset of [0,0,0], it ends at the position it's specified at, and it also covers all the space in between. Used for long attacks like Zero Laser, as well as thrown battering items.

### Bit 29 (???)
Unknown.

### Bit 30-32 (Angle Flipping/Reversible Knockback Toggle)
Normally, an attack will always send the target away from the attacker. However, these bits can change it up a bit, depending on what the value is:

```handsontable
# COLUMNS
value
notes
# DATA
0, 2, 5|Regular angles; the target is always sent away from the attacker.
1, 3|The target is always sent the direction the attacker is facing. Examples include Toon Link's f-smash (second hit) and the Knee.
4|The target is always sent the direction the attacker is not facing. The only known example so far is the first hit of Peach's back throw.
6, 7|Now THIS is a wacky one. A hitbox with this as an angle flipper will cause the target to face the screen. They will be unable to walk or run, but they can move through the air normally. They will be unable to use f-tilts, and using an air attack in either direction produces a fair. Special moves tend to act as if the character is facing right. Knockback taken by these hitboxes will have no horizontal component. Getting hit by something else, using an f-smash, or using a side special will end the strangeness.
```
(It's possible the merged numbers have distinct less-noticible effects.)

More information will be added as it becomes available.

## References
[The Big PSA List Thread](http://www.smashboards.com/showthread.php?t=246651)

[Binary operations in C](http://my-web-base.com/e-nor/c-3.htm)

[Salute To The Flags: The Hitbox Flag Directory](http://www.smashboards.com/showthread.php?t=286748)
