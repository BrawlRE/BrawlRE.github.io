# IC Variables

IC's are actually more like functions than they are constants. Depending on the number, it is either the return value of a ASM function, or a value read from someplace in memory. This can be a global value or function, or one directly linked to a character. Here is a breakdown of the IC-Basic values

```handsontable
# COLUMNS
Start
End
Type
Memory Address
# DATA
0|40|ASM|80AF2778
1000|1036|ASM|80B0AB40
3000|3116|float|Character Attribute
3117|3498|float|80B88270
3500|3507|ASM|80B0AC4C
3508|3508|float|80AD8640
10000|10036|ASM|80B0AB40
20000|20026|ASM|80AF281C
21000|21029|ASM|80B0ABD4
23000|23029|int|Character Attribute
23030|23179|int|80B88E60
23180|23193|int|Character IC-Const
```
* [IC-Constants](/Brawl/Variables/IC_Constants)
* [IC-MemoryMap](/Brawl/Variables/IC_Memory_Map)

## Table

```handsontable
# COLUMNS
Classification
Type
Number
Name
Description
# DATA
Internal Constant|Basic|0|CurrentFrame|Current Animation Frame|Unknown
Internal Constant|Basic|2|Damage|Current damage. Despite not showing on the HUD, reads negative and positive values past 999 and below 0; it's believed that damage past 999 is capped at 999 once knockback is calculated.|Unknown
Internal Constant|Basic|3|Character X Position|Horizontal location of the character|Unknown
Internal Constant|Basic|4|Character Y Position|Vertical location of the character|Unknown
Internal Constant|Basic|8|Character Direction?|Seems to be which way the character is facing. 1 -Right, -1 - Left|Unknown
Internal Constant|Basic|9|Character Direction(Opposite)|Seems to be which way the character is facing. -1 -Right, 1 - Left|Unknown
Internal Constant|Basic|23|Vertical Character Velocity|Positive -> Up, Negative -> Down|Unknown
Internal Constant|Basic|24|Current Frame Speed?|Seems to be 1 most of the time but has values of 80 and below during Mach Tornado, which has a frame speed modifier that starts at 80 and drops during the move.|MK action 0x117 (Mach Tornado spinning loop)
Internal Constant|Basic|28|Horizontal Character Velocity|Positive -> Right, Negative -> Left|Unknown
Internal Constant|Basic|38|Knockback|Knockback amount straight from KB formula. Does not include floor bounce multiplier|Unknown
Internal Constant|Basic|39|Surface Traction?|In action 0x001 (Walking), if this is less than 1, it goes to action 0x002 (WalkBrake) instead of going straight to action 0x000 (Standing).|Action 0x001 (Walking)
Internal Constant|Basic|1000|VelocityX|How fast the character is moving|0xA6E4 - Running into a wall
Internal Constant|Basic|1002|Unknown?|Something to do moving down?|Action AF:ItemScrew
Internal Constant|Basic|1004|Unknown?|Something to do moving down?|0x23A40
Internal Constant|Basic|1005|Launch Speed|Actual movement speed from knockback (KB * 0.03). Includes things like floor bounce multiplier and vertical being canceled below tumble|Unknown
Internal Constant|Basic|1006|VelocityRight|Higher -> Moving Right, 0 -> Not moving|Unknown
Internal Constant|Basic|1007|VelocityLeft|Higher -> Moving Left, 0 -> Not moving|Unknown
Internal Constant|Basic|1008|VelocityUp|Higher -> Moving Up, 0 -> Not moving|Unknown
Internal Constant|Basic|1009|VelocityDown|Higher -> Moving Down, 0 -> Not moving|Unknown
Internal Constant|Basic|1010|Control Stick X Axis|1 Right, -1 Left|Unknown
Internal Constant|Basic|1011|Control Stick Relative X Axis|1 Forward, -1 Backward|Unknown
Internal Constant|Basic|1012|Control Stick Relative X Axis|-1 Forward, 1 Backward|Unknown
Internal Constant|Basic|1013|Control Stick Absolute Value X Axis|1 Left or Right|Unknown
Internal Constant|Basic|1014|Control Stick X Axis|-1 Right, 1 Left|Unknown
Internal Constant|Basic|1015| ???||Unknown
Internal Constant|Basic|1016| ???||Unknown
Internal Constant|Basic|1017|Same as IC-Basic[1014]||Unknown
Internal Constant|Basic|1018|Control Stick Y Axis|1 Up, -1 Down|Used for Smash Inputs
Internal Constant|Basic|1019|Control Stick Absolute Value Y Axis|1 Up or Down|Unknown
Internal Constant|Basic|1020|Control Stick Y Axis|-1 Up, 1 Down|Used for Smash Inputs?
Internal Constant|Basic|1021|Same as IC-Basic[1018]||Unknown
Internal Constant|Basic|1022|Previous Control Stick X Axis|1 Right, -1 Left|Unknown
Internal Constant|Basic|1023|Previous Control Stick Relative X Axis|1 Forward, -1 Backward|Unknown
Internal Constant|Basic|1024|Previous Control Stick Relative X Axis|-1 Forward, 1 Backward|Unknown
Internal Constant|Basic|1025|Previous Control Stick Absolute Value X Axis|1 Left or Right|Unknown
Internal Constant|Basic|1026|Previous Control Stick Y Axis|1 Up, -1 Down|Unknown
Internal Constant|Basic|1027|Previous Control Stick Absolute Value Y Axis|1 Up or Down|Unknown
Internal Constant|Basic|1028|Previous Control Stick Y Axis|-1 Up, 1 Down|Unknown
Internal Constant|Basic|1029|ItemUnknown|Unknown|Unknown
Internal Constant|Basic|1030|ItemUnknown2|Unknown|Unknown
Internal Constant|Basic|1031|ItemUnknown3|Unknown|Unknown
Internal Constant|Basic|1034|FootstoolUnknown|Has something to do with manual footstools.|Unknown
<$w4>.\nIC-Basic 3117 through 3498 are constants on the Memory Map Page\n.
Internal Constant|Basic|3506|Stock advantage?|Used to calculate Lucario's stock lead aura multiplier|Unknown
Internal Constant|Basic|4000+|Floating Point Accessor|Used by (all?) moves with special, character-specific coding|Unknown
Internal Constant|Basic|20000|CurrentSubaction|Current Subaction|Unknown
Internal Constant|Basic|20001|CurrentAction|Current Action|Unknown
Internal Constant|Basic|20003|PreviousAction|Previous Action|Unknown
Internal Constant|Basic|20004|Unknown|Has something to do with action interrupt IDs?|Unknown
Internal Constant|Basic|20009|Held Item|Held Item|Unknown
Internal Constant|Basic|21001|FramesSinceNeutralStickX?|The number of frames since the stick was not tilted horizontally? (Compared with RollInputWindow for dodges)|Unknown
Internal Constant|Basic|21002|FramesSinceNeutralStickY?|The number of frames since the stick was not tilted vertically? (Compared with SidestepInputWindow for dodges)|Unknown
Internal Constant|Basic|21004|EffectOfAttack|Equal to the effect (as a number) of the last hitbox to hit (may or may not reset once said hitbox goes away). For example, used in an if statement in a hidden action of the Blast Box, which skips straight to action 7 (explosion) if this equals 5 (the ID of the flame effect).|Unknown
Internal Constant|Basic|21007|Unknown|Used a whole ton in the Primid file. Could be action- or subaction-related.|Unknown
Internal Constant|Basic|21010|FramesSinceNormal|The number of frames since button 0x00 was last pressed (254 if not mashed).|Unknown
Internal Constant|Basic|21012|FramesSinceSpecial|The number of frames since button 0x01 was last pressed (254 if not mashed).|Unknown
Internal Constant|Basic|21014|FramesSinceJump|The number of frames since button 0x02 was last pressed (254 if not mashed).|Unknown
Internal Constant|Basic|21016|FramesSinceShield|The number of frames since button 0x03 was last pressed (254 if not mashed).|Unknown
Internal Constant|Basic|21018|FramesSinceShield2|The number of frames since button 0x04 was last pressed (254 if not mashed).|Unknown
Internal Constant|Basic|21026|Unknown (item-based)|If this equals 5, then characters use the WaitItem subaction instead of their regular one.|Unknown
Internal Constant|Basic|21027|Unknown (item-based)|If this equals 45, then characters use the CrouchingWithItem subaction instead of their regular one.|Unknown
Internal Constant|Basic|23001|TurnRunFrameTimer||Unknown
Internal Constant|Basic|23002|JumpStartTimer||Unknown
Internal Constant|Basic|23003|MaxJumpCount||Unknown
Internal Constant|Basic|23004|GlideStartTimer||Unknown
Internal Constant|Basic|23007|TermVelFrameTimer|Counts how many frames have been spent at max falling speed, for determining whether to use hard or soft landing.|Unknown|-
<$w4> .\nIC-Basic 23030 through 23179 are constants on the Memory Map Page\n.
<$w4> .\nIC-Basic 23180 through 23193 are character specific constants on the IC-Constants Page\n.
Internal Constant|Basic|24000+|Integer Accessor|Accesses integer special move data|Used by various moves with special, character-specific coding```
```

## LA

```handsontable
# COLUMNS
Classification
Type
Number
Name
Description
# DATA
Runtime Longterm|Bit|0|IsDead|0 = Alive, 1 = Dead|Unknown
Runtime Longterm|Bit|1|CannotDie|0 = Can die off boundaries, 1 = Can't|Unknown
Runtime Longterm|Bit|5|Automatic Footstool|Set when within range of FSing Squirtle during Side-B, and some SSE enemies. Allows FSing automatically|Unknown
Runtime Longterm|Bit|8|HasFinal|Final Smash is availible (Forces FS to happen, freezes if FS isn't loaded for some characters)|Unknown
Runtime Longterm|Bit|9|HasFinalAura|Final Smash Aura activator (according to LA-Bit[8])|Unknown
Runtime Longterm|Bit|10|HasCurry|Goes into curry idle subaction while set|Unknown
Runtime Longterm|Bit|11|HasHammer|Goes into hammer actions while set|Unknown
Runtime Longterm|Bit|17|Hit by Paralyze|Set when hit by paralyze and unable to be stunned again while set. Cleared on landing and edgegrab.|Unknown
Runtime Longterm|Bit|19|HasScrewAttack|Goes into screw attack jumps while set|Unknown
Runtime Longterm|Bit|24|Stamina KOed|Goes into uninterruptible fall and downed actions while set|Unknown
Runtime Longterm|Bit|27|HasTag|0 = Tag Display, 1 = No tag|Unknown
Runtime Longterm|Bit|34|Can LedgeGrab?|Has something to do with ledge grabbing; ledge grabbing can only occur if this bit is not set.|Alloy's
Runtime Longterm|Bit|36|Can Teeter?|Has something to do with teetering; teetering can only occur if this bit is not set.|sub@ba6c
Runtime Longterm|Bit|57|Momentum Force?|If set to true, character momentum codes are unaffected by hitstun. Set this to true directly before the momentum and set this to false directly after the momentum.|Ike's special Hi3
Runtime Longterm|Bit|61|CanUseUpSpecial? Also used In Skull bash and Cypher somehow||Falcon/Pikachu/Snake
Runtime Longterm|Bit|65|Deflection Toggle?|If set to true, it deflects projectiles. Only seen to work on Link and Toon Link on their Wait animations, and on Kirby's Down-B.|Link's Wait1 animation.
Runtime Longterm|Basic|1|JumpsUsed|Number of jumps used.|Unknown
Runtime Longterm|Basic|3|WallJumpCount|Number of walljumps performed. Each walljump goes lower the higher this number gets.|Unknown
Runtime Longterm|Basic|4|WallJumpInterval|Frames until next walljump allowed on same wall|Unknown
Runtime Longterm|Basic|5|FootstoolCount|Number of footstools done since the last landing|Unknown
Runtime Longterm|Basic|13|FallTime|Falling Time|Unknown
Runtime Longterm|Basic|20|SwimTime|How long characters been swimming?|Unknown
Runtime Longterm|Basic|24|LipStickRefresh|Lip's Stick damage refresh timer(How many frames till the next self-damge?)|Unknown
Runtime Longterm|Basic|25|CurryRemainingTime|Curry Remaining Time|Unknown
Runtime Longterm|Basic|26|CurryAngle2|Related to Curry Angle|Unknown
Runtime Longterm|Basic|30|StarRemainingTime|Star Remaining Time|Unknown
Runtime Longterm|Basic|33|MushroomRemainingTime|Mushroom Remaining Time|Unknown
Runtime Longterm|Basic|34|LightningRemainingTime|Lightning Remaining Time|Unknown
Runtime Longterm|Basic|35|SizeFlag|Has something to do with the size effect. 0 = normal, 1 = "Growing to Normal," 2 = "Shrinking to normal," 3 = "Big," super mushroom does nothing, poison goes back to normal, 4 = "Growing," 5 = "Small," poison mushroom does nothing, super goes to normal, 6 = "Shrinking to Small"|Unknown
Runtime Longterm|Basic|37|MetalBlockRemainingTime|Metal Block Remaining Time|Unknown
Runtime Longterm|Basic|41|KO Type|The type of KO that the character is currently in. 0 = normal KO, 1 = star KO, 2 = screen KO|Unknown
Runtime Longterm|Basic|44|ComboCount|Combo Counter|Unknown
Runtime Longterm|Basic|46|BubbleTime?|Time spent outside camera range?|Unknown
Runtime Longterm|Basic|53|AttacksPerformed|Number of attacks done(per match)|Unknown
Runtime Longterm|Basic|54|Costume ID|Contains the current costumes ID.|Sonic's Run/Side-Taunt
Runtime Longterm|Basic|56|HitstunFrames|Number of frames of hitstun remaining|Unknown
Runtime Longterm|Basic|57|MeteorCancelWindow?||Unknown
Runtime Longterm|Basic|59|ScrewAttack?|Something with screw attack|Unknown
Runtime Longterm|Basic|61|MissedTechs|Increments every time the character bounces off a wall or ceiling. After 3 bounces, you can no longer bounce off of anything.|Unknown
Runtime Longterm|Basic|62|TetherCount|Increments every time the character tethers|Unknown
Runtime Longterm|Basic|64|Temp||Falcon/Pikachu
Runtime Longterm|Basic|65|Temp||Falcon
Runtime Longterm|Float|0|Special Landing Lag|Sets the number of frames of landing lag after your special move|Unknown
Runtime Longterm|Float|1|Special Fall mobility multiplier|Multiplier for mobility attributes during Special Fall|Unknown
Runtime Longterm|Float|3|ShieldCharge|Shield Charge. Maximum = 50 for all characters.|Unknown
Runtime Longterm|Float|4|ShieldUnknown|Used to deliver 12% damage to GW when a #1 comes up for Judge, but does not seem to be used for Ike's 10% self-damage from a fully charged Eruption.|Unknown
Runtime Longterm|Float|7|CurryAngle1|Curry Angle|Unknown
Runtime Longterm|Float|8|CurryRandomness|Curry Angle Randomness|Unknown
```

## Old Table
```handsontable
# COLUMNS
Classification
Type
Number
Name
Description
# DATA
Random Access|Basic|2|Throw Data 1|Used as the third parameter of all throw appliers (060F0500)|Throws
Random Access|Basic|3|Throw Data 2|Used as the fourth parameter of all throw appliers (060F0500)|Throws
Random Access|Basic|4|Throw Data 3|Used as the fifth parameter of all throw appliers (060F0500)|Throws
Random Access|Bit|0|CharacterFloat?|Makes the character float in place when set.|Unknown
Random Access|Bit|2|Fast Fall Toggle|When set to true, fastfalling is permitted.|Unknown
Random Access|Bit|6|Shorthop Setter|When set to true, the character shorthops instead of jumping.|0x00b (Jump)
Random Access|Bit|16|Action Transition?|When set to true, allows jabs to continue to the next jab attack [i.e. Attack12] if you press A or are hitting the foe. Also used for a ton of other things.|Snake's Attack11
Random Access|Bit|18|Specials Movement|Allows a character can slightly DI left and right during the animation when set to true.|Ike's SpecialHi
Random Access|Bit|19|Glide Toggle|If set to true, a character can begin gliding if holding down the jump button. Only seen to work in Metaknight, Charizard, and Pit.|Meta Knight's Jumps
Random Access|Bit|20|Jabloop Trigger|If set to true, if the attack lands and A is held down, it will continue on to the character's Attack100.|Fox's jab2
Random Access|Bit|22|Auto Jab Toggle|If set to true, the jab will automatically loop if A is being held down.|Snake's Jab
Random Access|Bit|25|Rapid Jab End|If set to true, the rapid jab will automatically transition to AttackEnd if A is not held down.|C. Falcon's Attack100
Random Access|Bit|30|Landing Lag|If set to true, the character will experience landing lag if the character touches the ground.|All Aerial A moves
Random Access|Float|4|Unknown|Used in action 0x004 (Run); if it's <= 0.0, then transitions can be made to RunTurn, PivotGrab, or TurnTrip.|Run
Runtime Longterm|Basic|5|Footstool Jump count|Footstool Jump count|Unknown
Runtime Longterm|Bit|10|Has spicy curry.|Has spicy curry.|Unknown
Runtime Longterm|Bit|11|Has hammer.|Has hammer.|Unknown
Runtime Longterm|Bit|14|Has starman.|Has starman.|Unknown
Runtime Longterm|Bit|15|Has screw attack.|Has screw attack.|Unknown
Runtime Longterm|Bit|18|Has metal box.|Has metal box.|Unknown
Runtime Longterm|Bit|19|Has bunny hood.|Has bunny hood.|Unknown
Runtime Longterm|Bit|20|.Large or small state from mushroom?|Large or small state from mushroom?.|Unknown
Runtime Longterm|Bit|42|Has cracker launcher?.|Has cracker launcher?.|Unknown
Runtime Longterm|Bit|43|Smash throwing item.|Smash throwing item.|Unknown
Runtime Longterm|Bit|47|Has assist trophy.|Has assist trophy.|Unknown
Runtime Longterm|Bit|50|Riding Item?.|Set when using warpstar or riding dragoon.|Unknown
Runtime Longterm|Bit|53|Has franklin badge.|Has franklin badge.|Unknown
```

## References
[Ra-Bits: Collection Project Thread](http://forums.kc-mm.com/index.php?topic=2708.0)
