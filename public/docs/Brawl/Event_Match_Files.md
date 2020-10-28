# Introduction
Event Match Files are stored in Common2.pac as MiscData[6].
It's file is also known as sq_event_data.dat (found in the game folder).
This is the format that the event matches follow and what the known values do.

## Header
The Header Size is 80 bytes. Here are what some of them do.

### Header Format
```handsontable
# OPTIONS
# COLUMNS
Byte Offset {
  renderer: hex
}
Type
Function
Description
# DATA
0x00  |  uint32_t  |  Event extension  |  Determines the number of character entries that belong to the event.\n- 0: 4 entries\n- 1: 9 entries\n- 2: 38 entries
0x04  |  uint32_t  |  Unknown/Unused |  Always 0.
0x08  |  uint8_t  |  Match Type |  Type of the match\n- 0: Time\n- 1: Stock\n- 2: Coin
0x09  |  __padding[3]  |  Padding |  This data is likely part of a 4-byte alignment for the structure.
0x0C  |  uint32_t  |  Countdown |  The number of seconds on the countdown timer. If this value is 0, the timer will count up instead of down.
0x10  |  uint32_t  |  Unknown flags |  Not fully known, the only used values are as follows:\n-0x20000000: Makes the timer visible.\n-0x40000000: Hide the countdown (5..4..3..2..1), this happens even if the timer is counting up.\n-0x80000000: Unknown
0x14  |  float (4)  |  Unknown |
0x18  |  uint8_t  |  Unknown Flags |  The only known values are:\n-0x80: Hide the damage values.
0x19  |  bool  |  Is Team Game |  If this value is non-zero(true), then the match is a team game, otherwise it is a free-for-all.
0x1A  |  uint16_t  |  Item Level |  This controls the drop rate of items (item switch).\n- 0: Off\n- 1: Low\n- 2: Medium\n- 3: High\n- 4: Raining
0x1C  |  uint8_t  |  Unknown/Unused |  Always 1.
0x1D  |  uint8_t  |  Unknown/Unused |  Always 0.
0x1E  |  uint16_t  |  Stage ID |  The stage type/id that players are playing on. If the type is TargetTest then the difficulty of the event affects the target stage appropriately. The camera for the HomeRunContest does not follow any of the first three players.
0x20  |  uint32_t  |  Unknown flags |  Known values:\n-0x00200000: One player is on the screen at a time. (this is likely a bitwise shifted value)\n-0x00400000: Two players are on the screen.\n-0x00600000: Three players are on the screen.\n-0x00800000: Four players are on the screen.\n-0x10000000: Unknown
0x24  |  uint32_t  |  Unknown |  Always 0.
0x28  |  uint32_t  |  Item Switch 1 (?) |  Guessed.
0x2C |  uint32_t  |  Item Switch 2 (?) |  Guessed.
0x30  |  uint32_t  |  Pokemon Switch (?) |  Guessed.
0x34  |  uint32_t  |  Assist Trophy Switch (?) |  Guessed.
0x38  |  float (4)  |  Game Speed |  1.00 is normal speed. The speed does not go slower than a certain amount, even if specified. Higher values indicate a faster pace.
0x3C  |  float (4)  |  Camera Shake |  Indicates the intensity of the screen shaking when a player is hit or hits something. 0.00 indicates no shake, 1.00 is normal.
0x40  |  uint32_t  |  Unknown flag |  The only value that has been observed is\n-0x80000000: Unknown
0x44  |  uint32_t  |  Music Id |  The identifier for the music track to be played on the stage.
0x48  |  int16_t  |  Unknown |  Seen as 10, 20, 120, 150, 180, or -1 (most common). Related to0x4A.
0x4A  |  int16_t  |  Unknown |  Seen as 15, 60, 90, 150, or -1 (most common). Value is seen as <= the value at0x48.
0x4C  |  uint16_t  |  Unknown |  Always 0.
```

## Player Data
After the header is the Player data, which is 56 bytes per player.
There is only one slot per player.

The number of player entries are determined by the Event Extension value (see above).

### Player Header Format
```handsontable
# OPTIONS
# COLUMNS
Byte Offset {
  renderer: hex
}
Type
Function
Description
# DATA
0x00  |  uint8_t  |  Character Type |  The player's character type/id. Alloys crash the game, some bosses are replaced with Mario (but retain the boss portrait).
0x01  |  uint8_t  |  Character Status |  There are only 3 known character statuses.\n- 0: Normal\n- 1: Metal\n- 2: Invisible
0x02  |  __padding[2]  |  Padding |  This data is likely part of a 4-byte alignment for the structure.
0x04  |  float (4)  |  Character Scale |  Determines the size of the character. 1.00 is normal.
0x08  |  uint8_t  |  Team |  Sets the character's team. Note that the team flag must be set in the header.
0x09  |  uint8_t  |  Unknown |
0x0A  |  int8_t  |  Starting Position |  Sets the character's start position. The position is stage-dependent. -1 indicates no starting position.
0x0B  |  uint8_t  |  Unknown |
0x0C  |  uint8_t  |  Unknown |
0x0D  |  uint8_t  |  Unknown |
```

Following this structure are 3 entries of the Player Stats structure, one for Easy, Medium, and Hard.

### Player Stats Format
```handsontable
# OPTIONS
# COLUMNS
Byte Offset {
  renderer: hex
}
Type
Function
Description
# DATA
0x00  |  uint16_t  |  Offense Ratio |  The character's offense ratio.
0x02  |  uint16_t  |  Defense Ratio |  The character's defense ratio.
0x04  |  uint8_t  |  AI Type |  The character's AI controller type.\n- 0: Normal\n- 1: Stop/Idle\n- 2: Walk\n- 3: Jump\n- 4: Defend\n- 11: Event Specific
0x05  |  uint8_t  |  Costume (?) |  The character's costume.
0x06  |  uint8_t  |  Stock |  The amount of lives/stock the character has.
0x07  |  uint8_t  |  Unknown |
0x08  |  uint16_t  |  Hit Points |  The amount of HP the character starts with. A value of non-zero on any character makes the event an HP battle.
0x0A  |  uint16_t  |  Starting Damage |  The amount of % damage that the character starts with.
0x0C  |  uint8_t  |  Unknown |
0x0D  |  uint8_t  |  Unknown |
```



The file names that the event matches are labled do not match the numbers in game.
Here's which event match is which.

## 1-Player Event Matches

```
 1. eventStage1Tbl  = Two Trouble Kings
 2. eventStage2Tbl  = Pink Ball Repulsion
 3. eventStage4Tbl  = Cleaning House in Skyworld
 4. eventStage5Tbl  = Become the Champion!
 5. eventStage7Tbl  = Dragoon Strike
 6. eventStage9tbl   = Super Bowser Bros.
 7. eventStage10tbl = All-Star Battle Regulars
 8. eventStage12Tbl = Diddy Kong Panic
 9. eventStage13Tbl = Yoshi's Rainbow
10. eventStage14Tbl = Go! Triple Finish!
11. eventStage15Tbl = The Monster beneath the Earth
12. eventStage17Tbl = Sproutrage of the Flower Pikmin
13. eventStage19Tbl = Sleeping in the Eggs
14. eventStage20Tbl = All-Star Battle x 1
15. eventStage21Tbl = The Hammer of the King
16. eventStage22Tbl = Super Waterfall Climb
17. eventStage23Tbl = Landmaster Ignition
18. eventStage25Tbl = Dark Link Duel
19. eventStage26Tbl = Power Suit ON!
20. eventStage27Tbl = Wario Bros.
21. eventStage28Tbl = Visit to Onett
22. eventStage29Tbl = Molten Norfair
23. eventStage32Tbl = Come On, Blue Falcon
24. eventStage33Tbl = The Aura Is With Me
25. eventStage34Tbl = Monkeys Unite
26. eventStage35Tbl = The Slow and Easy Life
27. eventStage36Tbl = Three-Beast Carnage
28. eventStage37Tbl = Flower Blooms in the Echoes
29. eventStage38Tbl = All-Star Semifinal Regulars
30. eventStage39Tbl = The Ultimate Bodyguard
31. eventStage40Tbl = The Pirate Airship
32. eventStage42Tbl = All-Star Battle Melee
33. eventStage43Tbl = Bird in Darkest Night
34. eventStage44Tbl = Advent of the Evil King
35. eventStage45Tbl = Sonic Boom
36. eventStage46Tbl = High-Tech Special Forces
37. eventStage47Tbl = The Visitor to Flat Zone
38. eventStage48Tbl = The Wolf Hunts the Fox
39. eventStage49Tbl = All-Star Battle x 2
40. eventStage50Tbl = The Final Battle
41. eventStage51Tbl = The FINAL Final Battle
```

## 2-Player Event Matches

```
 1. eventStage1Tbl_2p = Two Trouble Kings
 2. eventStage5Tbl_2p = Master the Pokemon Tag Battle
 3. eventStage8Tbl_2p = Fastest, Shortest, Sudden Death
 4. eventStage12Tbl_2p = The DK Tag Calamity
 5. eventStage13Tbl_2p = The Yoshi Team of 50
 6. eventStage22Tbl_2p = Unwanted Suitors
 7. eventStage25Tbl_2p = Battle of the Dark Sides
 8. eventStage27Tbl_2p = All MINE!
 9. eventStage28Tbl_2p = Those Who Wait in Onett
10. eventStage30Tbl_2p = The R.O.B.'s of Tomorrow
11. eventStage31Tbl_2p = The Great Remodeling Battle
12. eventStage32Tbl_2p = Come Back, Falcon Flyer!
13. eventStage36Tbl_2p = The Dark Guardians
14. eventStage39Tbl_2p = Blades of the Quick and Mighty
15. eventStage40Tbl_2p = Four Swords Brawl
16. eventStage41Tbl_2p = Jigglypuff's Great Comeback
17. eventStage45Tbl_2p = Sonic & Mario
18. eventStage46Tbl_2p = The New Weapon of Shadow Moses
19. eventStage48Tbl_2p = Shadow of Andross
20. eventStage50Tbl_2p = The Final Battle for Two
21. eventStage51Tbl_2p = The True All-Star Battle
```
##  Menu

The menu data for events can be found in sc_sel_event_en.pac. MiscData[60] contains a mapping of strings to events and their messages (found in MiscData[30]).

MiscData[60] is a standard data file and contains two tables (one for single and co-op). Each entry in a table follows the format:

### Events Menu Entry
```handsontable
# OPTIONS
# COLUMNS
Byte Offset {
  renderer: hex
}
Type
Function
Description
# DATA
0x00 |  uint32_t |  Title String |  The index of the event title string found in MiscData[30].
0x04 |  uint32_t |  Description String |  The index of the event description string found in MiscData[30].
0x08 |  uint8_t |  Unknown |  Related to0x0A.
0x09 | uint8_t  | Unknown |
0x0A |  uint8_t |  Unknown |  Related to0x08.
0x0B |  uint8_t |  Flags |  Only value seen:\n-0x40: Unknown
0x0C |  uint8_t |  Event ID |  The 0-based index into the event table that this links to. (Example: 0 = eventStage1Tbl)
0x0D |  __padding[3] |  Padding |  Most likely padding for a 4-byte structure alignment.
```


##  References

- [Event Matches - We Can Edit them! All-Star and Classic too!](http://www.smashboards.com/showthread.php?t=288062)