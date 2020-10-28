# Introduction
Articles are detachable objects, sometimes referred to as props or projectiles. They have their own sets of variables, attributes, and are controlled primarily by [[Article Floating Points]].

The data below details the numerical IDs of articles, used in commands such as Generate Article (10000100) and Article Visibility (10050200).

Note that Final Smash-based articles will generally crash the game if said Final Smash has not been loaded. If they don't crash the game, they will likely lack pieces, such as being invisible. This is because the External Graphics and/or the model for the final smash is located in FitCharacterFinal.pac, which is only loaded in Final Smash Aura mode.

More information from vBrawl's default articles, including offsets and pointer locations, can be found in Dantarion's article data dump: [http://opensa.dantarion.com/tmp/ http://opensa.dantarion.com/tmp/].
Some articles are articles of articles (sub-articles); they can only be called by their parent article. For example, when Mario himself calls article 0 he will normally produce his Cape, but when FLUDD calls article 0, it will produce a water blob.

Likewise, articles have their own actions and subactions: a character's subaction 0x1 is always Wait2 (their second "standing idle" animation), while a projectile article's subaction 0x1 is often what the projectile does when it hits an opponent/wall or reaches end-of-life (e.g. Yoshi's thrown Eggs will create a large explosion hitbox, Samus's Homing Missile just makes a graphical effect). Many article lifespans are counted down in a [[Events#Module_0D:_Concurrent_Execution|concurrent infinite loop]] that calls the article's subaction 0x1 on termination.

 '''BE WARNED:''' the info dump mislabels these Concurrent Infinite Loops as "Animation Command-00".
 For example in [http://opensa.dantarion.com/tmp/samus.txt samus.txt]'s Homing Missiles (Article 3@1FDBC), the second command
 of Action 0x1 is labeled '''!Animation Command-00! 0D000200 - 0x4, @19C74''';
 that should instead be '''Concurrent Infinite Loop 0D000200: threadID?=0x4, offset=@19C74'''.

# Smasher Articles

## Bowser
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Fire Breath | Does nothing when called out of order?
```

## Charizard
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
? | | 0 | Flame (Flamethrower) |
? | | 1 | Rock (Rock Smash) |
```

## Captain Falcon
NONE

## Diddy Kong
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Popgun | Manipulating RA-Bit[16] and RA-Bit[17] changes which hand the popgun is held in.
1 | | 1 | Peanut (Rocketbarrel Barrage) |
2 | | 2 | Rocketbarrels (knocked off) |
3 | | 3 | Explosion (end of Rocketbarrel Barrage) |
4 | | 4 | Barrel (entry) |
```

## Donkey Kong
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Bongos |
1 | | 1 | Sound wave |
2 | | 2 | Barrel (entry) |
```

## Falco

- 01 Blaster Shot
- 00 Gun
- 03 CRASHES GAME
- 04 ?
- 05 ?

## Fox
- 01 Blaster Shot
- 00 Gun
- 02 Fox Illusion (Left/Right B)
- 03 Landmaster(Crashes Game when not in FS mode)

## Ganondorf
- 00 CRASHES GAME
- 01 CRASHES GAME
- 06 Sword (Unconfirmed)

## Game & Watch

includes A LOT of stuff.
I think that the object depends on what value Basic Variable 69 has.

- 00 Pump
- 01 Manhole
- 02 Torch
- 03 Fish bowl w/ fish
- 04 Trumpet
- 05 Turtle
- 06 Turtle, Trumpet, and a lot of other stuff.

## Giga Bowser
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Fire Breath | Does nothing when called out of order?
```

## Ice Climbers
- 00 Icy Wind (B DOWN)
- 01 Ice (B)
- 02 Giant Final Smash Icicle (CRASHES GAME)
- 03 Rope (UP B)

## Ike
- 00 Sword (UP B)
- 01 A Sword? Doesn't do anything
- 02 A Sword? Doesn't do anything

## Ivysaur
Corrupt .pac file.

## Jigglypuff
- 00 CRASHES GAME

## King Dedede
Corrupt .pac file.

## Kirby
- 00 Hammer (SIDE B)
- 01 Cutter (UP B)
- 03 Stone (DOWN B)
- 05/06/07/08 Cook Kirby CRASHES GAME
- D Suction (B)
- E Star (B, spit out instead of swallowed)

## Link
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 2 | Boomerang |
1 | | 1 | Bow |
2 | | 0 | Arrow |
3 | | 3/4? | Clawshot base? |
4 | | 3/4? | Clawshot chain? |
5 | | 3/4? | Clawshot claw? |
6 | | 5 | Fairy | Sticks in Link's hand until side taunt is used
```

## Lucario
- 00 Aura Sphere (B)
- 01 Force Palm (B Over)

## Lucas
- 00 Pk Freeze
- 01 Pk Fire
- 02 Pk Thunder (IF USED TWICE THE GAME WILL CRASH, DO NOT USE THIS)
- 03 PK Starstorm(Not visible)
- 04 Snake

## Luigi
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Fireball |
1 | | 1 | Negative Zone | Crashes game when FS not loaded
```

## Mario
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Cape |
1 | | 1 | Fireball |
2 | | 2 | FLUDD |
3 | FLUDD | 0 | Water blob |
4 | | 3 | Mario Finale | Crashes game when FS not loaded
5 | | 4 | Pipe (entry) |
```

## Marth
NONE

## Meta Knight
NONE

## Ness
- 00 Pk Flash
- 01 Pk Fire
- 02 Pk Thunder (IF USED TWICE THE GAME WILL CRASH, DO NOT USE THIS)
- 03 PK Starstorm(Not Visible)
- 04 Yo Yo String
- 05 Yo Yo

## Olimar
- 00 Pikmin (THE GAME WILL PROBABLY CRASH IF YOU GET MORE THAN 6)
- 01 CRASHES GAME

## Peach
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Umbrella |
1 | | 1 | Toad |
2 | Toad | 0 | Spore shot |
3 | | ? | Heart cloud? | Contains subactions of EntryL and EntryR
```

## Pikachu
- 00 Thunderbolt
- 01 Thunder (B DOWN)
- 02 Final Smash Aura WARNING, The screen will shake around and this is irreversible until pikachu dies.

## Pit
- 00 Bow
- 01 Arrow
- 02 CRASHES GAME

## R.O.B.
- 00 Gyro Stand
- 01 Laser Shot (LEFT/RIGHT B)
- 02 Gyro
- 03 FINAL SMASH

## Samus
- 00 Power Shot (B) (Just stays on your gun barrel, I don't see the point...?)
- 01 Bomb (DOWN B) GAME CRASHES WHEN SPAMMING A BUNCH OF THESE, DO NOT USE THESE!
- 02 Missle (SIDE B) Sticks to your barrel FOREVER, even if you die, prevents you from using side b.

## Shiek
- 00 Needles (B)
- 01 Needles in hand
- 02 Chain (Grab, comes out as a big sword)
- 03 Smoke (Before and After Up-B)
- 04 FS Bow (Freezes w/o FS)
- 05 FS Arrow (Freezes w/o FS)

## Snake
- 00 Land Mine (Down Smash)
- 01 Missle Silo Thing (Up Smash)
- 02 Rocket Launcher (Side Smash)
- 03 Cypher
- 04 C4
- 05 C4 Detonator
- 06 Remote Control Missle (Side B)
- 07 Nikita
- A Missle Launcher (Final Smash)
- B Missle Shot (Final Smash)
- D Grenade

## Sonic
- 00 Spring
- 01 Super Sonic(CRASHES GAME when not in FS mode)

## Squirtle
Corrupt .pac file.

## Toon Link
- 00 Arrow
- 01 Bow
- 02 Boomerang
- 03 Wand (taunt)
- 04/05 Hookshot
- 06 Bomb

## Wario
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Bike | If one called out of order exists, using the move will crash the game.
1 | | 1 | Garlic | Crashes game when FS not loaded
2 | | ? | Entry explosion? | Contains subactions of EntryL and EntryR
```

## Wario-Man
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Bike | If one called out of order exists, using the move will crash the game.
```

## Wolf
- 01 Blaster Shot
- 00 Gun
- 03 Landmaster(Crashes game when not in FS mode)

## Yoshi
```handsontable
# OPTIONS
# COLUMNS
OpenSA ID
Parent
Call ID
Article
Notes
# DATA
0 | | 0 | Ground Pound star |
1 | | 1 | Egg (tossed) |
2 | | 2 | Wings (Super Dragon) | Doesn't go away until FS is used properly
3 | | 3 | Fire breath (Super Dragon) | Invisible
4 | | 4 | Fireball (Super Dragon) | Invisible
```

## Zelda
- 00 Fireball (LEFT/RIGHT B)
- 01 CRASHES GAME
- 02 CRASHES GAME
- 03 Bow

## Zero Suit Samus
- 01 Stun Shot (B)
- 02 Whip (looks like a lightsaber)
- 03 CRASHES GAME

#  References
* [PSA Resource Thread](http://forums.kc-mm.com/index.php?PHPSESSID=kl2a8grbp6ehp9ura8tkv44p05&topic=1337.0)
