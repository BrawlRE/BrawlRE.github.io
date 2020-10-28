## Donkey Kong
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE|ThrowFWait|Cargo stand|||All?
0x1CF|ThrowFWalkSlow|Cargo slow walk|||All?
0x1D0|ThrowFWalkMiddle|Cargo medium walk|||All?
0x1D1|ThrowFWalkFast|Cargo fast walk|||All?
0x1D2|ThrowFTurn|Cargo turn|||All?
0x1D3|ThrowFJumpSquat|Cargo jump "squat"|||All?
0x1D4|ThrowFJump|Cargo jump|||All?
0x1D5|ThrowFFall|Cargo fall|||All?
0x1D6|ThrowFLanding|Cargo landing|||All?
0x1D7|ThrowFWait|...same as previous set?|||All?
0x1D8|ThrowFWalkSlow|-|||All?
0x1D9|ThrowFWalkMiddle|-|||All?
0x1DA|ThrowFWalkFast|-|||All?
0x1DB|ThrowFTurn|-|||All?
0x1DC|ThrowFJumpSquat|-|||All?
0x1DD|ThrowFJump|-|||All?
0x1DE|ThrowFFall|-|||All?
0x1DF|ThrowFLanding|-|||All?
0x1E0|ThrowFF|Cargo f-throw|||All?
0x1E1|ThrowFB|Cargo b-throw|||All?
0x1E2|ThrowFHi|Cargo u-throw|||All?
0x1E3|ThrowFLw|Cargo d-throw|||All?
0x1E4|SpecialNStart|Giant Punch startup |ground||All?
0x1E5|SpecialNLoop|Giant Punch wind |ground||All?
0x1E6|SpecialNCancel|Giant Punch charge save |ground||All?
0x1E7|SpecialN|Giant Punch throw (not fully charged) |ground||All?
0x1E8|SpecialN|Giant Punch throw (fully charged) |ground||All?
0x1E9|SpecialAirNStart|Giant Punch startup |air||All?
0x1EA|SpecialAirNLoop|Giant Punch wind |ground||All?
0x1EB|SpecialAirNCancel|Giant Punch charge save |air||All?
0x1EC|SpecialAirN|Giant Punch throw (not fully charged) |air||All?
0x1ED|SpecialAirN|Giant Punch throw (fully charged) |air||All?
0x1EE|SpecialS|Headbutt |ground||All?
0x1EF|SpecialAirS|Headbutt |air||All?
0x1F0|SpecialHi|Spinning Kong |ground||All?
0x1F1|SpecialAirHi|Spinning Kong |air||All?
0x1E2|SpecialLw|Hand Slap startup|||All?
0x1F3|SpecialLwLoop|Hand Slap attack|||All?
0x1F4|SpecialLwEnd|Hand Slap finish|||All?
0x1F5|FinalStartL|Konga Beat startup |ground|left|All?
0x1F6|FinalStartR|Konga Beat startup |ground|right|All?
0x1F7|FinalAirStartL|Konga Beat startup |air|left|All?
0x1F8|FinalAirStartR|Konga Beat startup |air|right|All?
0x1F9|FinalBody|Konga Beat body rocking back and forth (no button presses)|||All?
0x1FA|FinalArm|Konga Beat hitting bongos (button presses)|||All?
0x1FB|FinalHandCrap|Konga Beat hand <s>crap</s> clap|||All?
0x1FC|FinalEndL|Konga Beat finish |ground|left|All?
0x1FD|FinalEndR|Konga Beat finish |ground|right|All?
0x1FE|FinalEndAirL|Konga Beat finish |air|left|All?
0x1FF|FinalEndAirR|Konga Beat finish |air|right|All?
0x200|FinalEndL|...same as previous set, but with extra sound effect?|||All?
0x201|FinalEndR|-|||All?
0x202|FinalEndAirL|-|||All?
0x203|FinalEndAirR|-|||All?
```

## Fox
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE| SpecialNStart|Blaster startup |ground||All?
0x1CF| SpecialNLoop|Blaster firing |ground||All?
0x1D0| SpecialNEnd|Blaster finish |ground||All?
0x1D1| SpecialAirNStart|Blaster startup |air||All?
0x1D2| SpecialAirNLoop|Blaster firing |air||All?
0x1D3| SpecialAirNEnd|Blaster finish |air||All?
0x1D4| SpecialSStart|Fox Illusion startup |ground||All?
0x1D5| SpecialS|Fox Illusion movement |ground||All?
0x1D6| SpecialSEnd|Fox Illusion finish |ground||All?
0x1D7| SpecialAirSStart|Fox Illusion startup |air||All?
0x1D8| SpecialAirS|Fox Illusion movement |air||All?
0x1D9| SpecialAirSEnd|Fox Illusion finish |air||All?
0x1DA| SpecialHiHold|Fire Fox startup |ground||All?
0x1DB| SpecialHiHoldAir|Fire Fox startup |air||All?
0x1DC| SpecialHi|Fire Fox movement|||All?
0x1DD| SpecialHiLanding|Fire Fox finish |ground||All?
0x1DE| SpecialHiFall|Fire Fox finish |air||All?
0x1DF| SpecialHiBound|Fire Fox stage collision|||All?
0x1E0| SpecialLwStart|Reflector startup |ground||All?
0x1E1| SpecialLwLoop|Reflector hold |ground||All?
0x1E2| SpecialLwHit|Reflector reflection |ground||All?
0x1E3| SpecialLwEnd|Reflector finish |ground||All?
0x1E4| SpecialAirLwStart|Reflector startup |air||All?
0x1E5| SpecialAirLwLoop|Reflector hold |air||All?
0x1E6| SpecialAirLwHit|Reflector reflection |air||All?
0x1E7| SpecialAirLwEnd|Reflector finish |air||All?
0x1E8| FinalStart |Landmaster summon |ground||All?
0x1E9| FinalEnd|Landmaster exit |ground||All?
0x1EA| FinalAirStart|Landmaster summon |air||All?
0x1EB| FinalAirEnd|Landmaster exit |air||All?
0x1EC| AppealSStartL |Smash Taunt startup ||left|All?
0x1ED| AppealSStartR |Smash Taunt startup ||right|All?
0x1EE| AppealSL |Smash Taunt focus ||left|All?
0x1EF| AppealSR |Smash Taunt focus ||right|All?
0x1F0| AppealSEndL |Smash Taunt activation ||left|All?
0x1F1| AppealSEndR |Smash Taunt activation ||right|All?
```

> comment from 2014:
>
> Kirby: Well this is a job and a half

## Link
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE| SpecialNStart |Hero's Bow startup |ground||All?
0x1CF| SpecialNLoop |Hero's Bow charge |ground||All?
0x1D0| SpecialNEnd |Hero's Bow release |ground||All?
0x1D1| SpecialAirNStart |Hero's Bow startup |air||All?
0x1D2| SpecialAirNLoop |Hero's Bow charge |air||All?
0x1D3| SpecialAirNEnd |Hero's Bow release |air||All?
0x1D4| SpecialS1 |Gale Boomerang throw |ground||All?
0x1D5| SpecialS1 |Gale Boomerang empty throw |ground||All?
0x1D6| SpecialS2 |Gale Boomerang catch |ground||All?
0x1D7| SpecialAirS1 |Gale Boomerang throw |air||All?
0x1D8| SpecialAirS1 |Gale Boomerang empty throw |air||All?
0x1D9| SpecialAirS2 |Gale Boomerang catch |air||All?
0x1DA| SpecialHiStart |Spin Attack startup |ground||All?
0x1DB| SpecialHi |Spin Attack release |ground||All?
0x1DC| SpecialHiHold |Spin Attack charge |ground||All?
0x1DD| SpecialAirHi |Spin Attack |air||All?
0x1DE| SpecialLw |Bomb pull |ground||All?
0x1DF| SpecialAirLw |Bomb pull |air||All?
0x1E0| FinalStart |Triforce Slash start/miss |ground||All?
0x1E1| FinalAirStart |Triforce Slash start/miss |air||All?
0x1E2| FinalDash |Triforce Slash dash|||All?
0x1E3| Final |Triforce Slash attack|||All?
```

## Luigi
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE| SpecialN |Fireball |ground||All?
0x1CF| SpecialAirN |Fireball |air||All?
0x1D0| SpecialSStart |Green Missile startup |ground||All?
0x1D1| SpecialSHold |Green Missile charge |ground||All?
0x1D2| SpecialS |Green Missle launch|||All?
0x1D3| SpecialS |Green Missle misfire|||All?
0x1D4| SpecialSEnd |Green Missile landing|||All?
0x1D5| SpecialSWall |Green Missile wall stick|||All?
0x1D6| SpecialSWallEnd |Green Missile wall extraction|||All?
0x1D7| SpecialAirSStart |Green Missile startup |air||All?
0x1D8| SpecialAirSHold |Green Missile charge |air||All?
0x1D9| SpecialAirSEnd |Green Missile aerial ending|||All?
0x1DA| SpecialHi |Super Jump Punch |ground||All?
0x1DB| SpecialAirHi |Super Jump Punch |air||All?
0x1DC| SpecialHiDrop |Super Jump Punch finish|||All?
0x1DD| SpecialLw |Luigi Cyclone |ground||All?
0x1DE| SpecialAirLw |Luigi Cyclone |air||All?
0x1DF| Final |Negative Zone|||All?
0x1E0| FinalEnd |Negative Zone finish |ground||All?
0x1E1| FinalAirEnd |Negative Zone finish |air||All?
```

## Mario
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE| SpecialN | Fireball |ground||All?
0x1CF| SpecialAirN | Fireball |air||All?
0x1D0| SpecialS | Cape |ground||All?
0x1D1| SpecialAirS | Cape |air||All?
0x1D2| SpecialHi | Super Jump Punch |ground||All?
0x1D3| SpecialAirHi | Super Jump Punch |air||All?
0x1D4| SpecialLwStart | FLUDD startup |ground||All?
0x1D5| SpecialLwHold | FLUDD charge |ground||All?
0x1D6| SpecialLwLight | FLUDD shoot (not fully charged) |ground||All?
0x1D7| SpecialLwHeavy | FLUDD shoot (fully charged) |ground||All?
0x1D8| SpecialAirLwStart | FLUDD startup |air||All?
0x1D9| SpecialAirLwHold | FLUDD charge |air||All?
0x1DA| SpecialAirLwLight | FLUDD shoot (not fully charged) |air||All?
0x1DB| SpecialAirLwHeavy | FLUDD shoot (fuly charged) |air||All?
0x1DC| Final | Mario Finale |ground||All?
0x1DD| FinalAir | Mario Finale |air||All?
```

## Pikachu
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE|SpecialN|Thunder Jolt |ground||All?
0x1CF|SpecialAirN|Thunder Jolt |air||All?
0x1D0|SpecialSStart|Skull Bash startup |ground||All?
0x1D1|SpecialSHold|Skull Bash charge |ground||All?
0x1D2|SpecialSReady|Skull Bash charge finish? |ground||All?
0x1D3|SpecialS|Skull Bash launch|||All?
0x1D4|SpecialSEnd|Skull Bash landing|||All?
0x1D5|SpecialAirSStart|Skull Bash startup |air||All?
0x1D6|SpecialAirSHold|Skull Bash charge |air||All?
0x1D7|SpecialAirSReady|Skull Bash charge finish? |air||All?
0x1D8|SpecialAirSEnd|Skull Bash aerial ending|||All?
0x1D9|SpecialHiStart|Quick Attack startup |ground||All?
0x1DA|SpecialHiEnd|Quick Attack |ground||All?
0x1DB|SpecialAirHiStart|Quick Attack startup |air||All?
0x1DC|SpecialAirHiEnd|Quick Attack |air||All?
0x1DD|SpecialLw|Thunder call/miss |ground||All?
0x1DE|SpecialLwHit|Thunder connection |ground||All?
0x1DF|SpecialAirLw|Thunder call/miss |air||All?
0x1E0|SpecialAirLwHit|Thunder connection |air||All?
0x1E1|Final|Volt Tackle startup |ground||All?
0x1E2|Final2|Volt Tackle finish |ground||All?
0x1E3|FinalAir|Volt Tackle startup |air||All?
0x1E4|FinalAir2|Volt Tackle finish |air||All?
0x1E5|FinalDummy|Volt Tackle|||All?
```

## Samus
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE| SpecialN |Charge Shot fire |ground||All?
0x1CF| SpecialNCancel |Charge Shot charge save |ground||All?
0x1D0| SpecialNHold |Charge Shot charge |ground||All?
0x1D1| SpecialNStart |Charge Shot startup |ground||All?
0x1D2| SpecialAirN |Charge Shot fire |air||All?
0x1D3| SpecialAirNStart |Charge Shot startup |air||All?
0x1D4| Special |Super(?) Missile |ground||All?
0x1D5| SpecialAir |Super(?) Missile |air||All?
0x1D6| SpecialS |Homing(?) Missile |ground||All?
0x1D7| SpecialAirS |Homing(?) Missile |air||All?
0x1D8| SpecialHi |Screw Attack |ground||All?
0x1D9| SpecialAirHi |Screw Attack |air||All?
0x1DA| SpecialLw |Bomb |ground||All?
0x1DB| SpecialLwRoll |Bomb jump? (frame {{eq}} rotation)|||All?
0x1DC| SpecialLwEnd |Bomb jump landing|||All?
0x1DD| SpecialAirLw |Bomb |air||All?
0x1DE| SpecialAirLwEnd |Bomb jump aerial ending|||All?
0x1DF| FinalSZerosuit |Latter half of ZSS -> Samus transformation |ground||All?
0x1E0| FinalAirSZerosuit |Latter half of ZSS -> Samus transformation |air||All?
0x1E1| Final |Zero Laser loop |ground||All?
0x1E2| FinalAir |Zero Laser loop |air||All?
0x1E3| FinalAirEnd |Zero Laser finish |air||All?
0x1E4| FinalAirStart |Zero Laser startup |air||All?
0x1E5| FinalEnd |Zero Laser finish |ground||All?
0x1E6| FinalStart |Zero Laser startup |ground||All?
0x1E7| FinalU |Zero Laser loop max up angle |ground||All?
0x1E8| FinalD |Zero Laser loop max down angle |ground||All?
0x1E9| FinalAirU |Zero Laser loop max up angle |air||All?
0x1EA| FinalAirD |Zero Laser loop max down angle |air||All?
0x1EB| ArmorReleaseSZerosuit |Samus -> ZSS taunt|||All?
```

## Yoshi
```handsontable
# OPTIONS
filters: true
# COLUMNS
hex id {
  renderer: hex
}
animation name
description
ground / air
left / right
characters
# DATA
0x1CE| SpecialN1 |Egg Lay use/miss |ground||All?
0x1CF| SpecialN1 |Egg Lay use/catch |ground||All?
0x1D0| SpecialN2 |Egg Lay lay |ground||All?
0x1D1| SpecialAirN1 |Egg Lay use/miss |air||All?
0x1D2| SpecialAirN1 |Egg Lay use/catch |air||All?
0x1D3| SpecialAirN2 |Egg Lay lay |air||All?
0x1D4| SpecialSStart |Egg Roll startup |ground||All?
0x1D5| SpecialSLoop |Egg Roll loop |ground||All?
0x1D6| SpecialSEnd |Egg Roll finish |ground||All?
0x1D7| SpecialAirSStart |Egg Roll startup |air||All?
0x1D8| SpecialAirSLoop |Egg Roll loop |air||All?
0x1D9| SpecialAirSEnd |Egg Roll finish |air||All?
0x1DA| SpecialHi |Egg Throw |ground||All?
0x1DB| SpecialAirHi |Egg Throw |air||All?
0x1DC| SpecialLw |Ground Pound hop/drop |ground||All?
0x1DD| SpecialAirLw |Ground Pound spin/drop |air||All?
0x1DE| SpecialLwLanding |Ground Pound landing|||All?
0x1DF| FinalStart |Super Dragon statup|||All?
0x1E0| FinalFly |Super Dragon idle/moving|||All?
0x1E1| FinalTurn |Super Dragon turn|||All?
0x1E2| FinalFireCannon |Super Dragon fireball|||All?
0x1E3| FinalEnd |Super Dragon finish|||All?
0x1E4| FinalBreathingFireStart |Super Dragon fire breath startup|||All?
0x1E5| FinalBreathingFire |Super Dragon fire breath loop|||All?
0x1E6| FinalBreathingFireEnd |Super Dragon fire breath finish|||All?
0x1E7| Dark |Shadow Bug clone tint (was Yoshi ever bugged in SSE?)|||All?
```

> Comment From 2014:
>
> Under construction and will be finished eventually.