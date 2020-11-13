# Introduction

Events are used in a variety of places, but mostly in moveset files commonly referred to as PSA. They
control a wide variety of things about each fighter action.

## Event Format:

The general format is as follows:

```
AABBCCDD

AA: ModuleID
BB: FuncID
CC: **arg count**
DD: "option" (according to the game's function calls)
```

### Example:

Take for instance the event: `02010500`. This contains four bytes:
- `02`: ModuleID (soStatusModuleImpl)
- `01`: FuncID (change action)
- `05`: Arg Count (5)
- `00`: option (... we still don't know what this does)

### Table of Modules:

Here are the modules where each event module ends up actually executing.

```
02 soStatusModuleImpl
03 soModelModuleImpl
03 soModelModuleImplVariable
04 soMotionModuleImpl
05 soPostureModuleImpl
06 soCollisionAttackModuleImpl
06 soCollisionHitModuleImpl
06 soCollisionShieldModuleImpl
06 soCollisionCatchModuleImpl
06 soCollisionSearchModuleImpl
07 ftControllerModuleImpl
07 soControllerModuleLinkRef
08 soGroundModuleImpl
09 soSituationMoudleImpl
0A soSoundModuleImpl
0B soVisibilityModuleImpl
0C ft<charname>
0D soAnimCmdModuleImpl
0E soKineticModuleGeneric
0F soLinkModuleImpl
10 soGenerateArticleManageModuleImpl
11 soEffectModuleImpl
12 soWorkManageModuleImpl
13 soComboModuleImpl
14 ftAreaModuleImpl
15 soTerritoryModuleImpl
16 soTargetSearchModuleImpl
17 soPhysicsModuleImpl
18 soSlopeModuleImpl
19 soShadowModuleImpl
1A soCameraModuleImpl
1B
1C ftStopModuleImpl
1D soShakeModuleImpl
1E soDamageModuleImpl
1F soItemManageModuleImpl
20 soTurnModuleImpl
21 soColorBlendModuleImpl
22 soTeamModuleImpl
23 soSlowModuleImpl
64 ftCancelModuleImpl
```



## Module 00: Flow of Execution
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x00010100|Synchronous Timer|Pause the current flow of events until the set time is reached. Synchronous timers count down when they are reached in the code.|Scalar|Frames|The number of frames to wait.
0x00020000|Nop|No action.|<$w3>
0x00020100|Asynchronous Timer|Pause the current flow of events until the set time is reached. Asynchronous Timers start counting from the beginning of the animation.|Scalar|Frames|The number of frames to wait.
0x00030000|Flow 03|undefined|<$w3>
0x00040100|Set Loop|Set a loop for X iterations.|Value|Iterations|The number of times to loop.
0x00050000|Execute Loop|Execute the the previously set loop.|<$w3>
0x00060000|Loop Break?|Breaks out of the current loop?|<$w3>
0x00070100|Subroutine|Enter the event routine specified and return after ending.|Pointer|Offset|The offset inside the file to jump to.
0x00080000|Return|Return from a Subroutine.|<$w3>
0x00090100|Goto|Goto the event location specified And execute.|Pointer|Offset|The offset inside the file to jump to.
0x000A0100|If|Start an If block until an Else Or an EndIf is reached.|Requirement|Requirement|The form of requirement used in evaluation of the if statement.
<$h2> 0x000A0200|<$h2> If Value|<$h2> Start an If block until an Else Or an EndIf is reached.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
<$h3> 0x000A0300|<$h3> If Unknown|<$h3> Start an If block until an Else Or an EndIf is reached.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
|||Value|Unknown|
<$h4> 0x000A0400|<$h4> If Comparison|<$h4> Start an If block until an Else Or an EndIf is reached.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
0x000B0100|And|Seems to be an "and" to an If statement.|Requirement|Requirement|The form of requirement used in evaluation of
<$h2> 0x000B0200|<$h2> And Value|<$h2> Seems to be an "and" to an If statement.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
<$h3> 0x000B0300|<$h3> And Unknown|<$h3> Seems to be an "and" to an If statement.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
|||Value|Unknown|Unknown
<$h4> 0x000B0400|<$h4> And Comparison|<$h4> Seems to be an "And" to an If statement.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
0x000C0100|Or|Insert an alternate requirement to fall back on if the above requirement(s) are not met.|Requirement|Requirement|The form of requirement used in evaluation of the event.
<$h2> 0x000C0200|<$h2> Or Value|<$h2> Insert an alternate requirement to fall back on if the above requirement(s) are not met.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
<$h3> 0x000C0300|<$h3> Or Unknown|<$h3> Insert an alternate requirement to fall back on if the above requirement(s) are not met.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
|||Value|Unknown|
<$h4> 0x000C0400|<$h4> Or Comparison|<$h4> Insert an alternate requirement to fall back on if the above requirement(s) are not met.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
0x000D0100|Else If|Insert an Else If block inside of an If block.|Requirement|Requirement|The form of requirement used in evaluation of the event.
<$h2> 0x000D0200|<$h2> Else If Value|<$h2> Insert an Else If block inside of an If block.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
<$h3> 0x000D0300|<$h3> Else If Unknown|<$h3> Insert an Else If block inside of an If block.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
|||Value|Unknown|
<$h4> 0x000D0400|<$h4> Else If Comparison|<$h4> Insert an Else If block inside of an If block.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
0x000E0000|Else|Insert an Else block inside an If block.|<$w3>
0x000F0000|End If|End an If block.|<$w3>
<$h2> 0x00100200|<$h2> Switch|<$h2> Begin a multiple case Switch block.|undefined|Undefined|Any type? Has shown to be an IC-Basic "disguised" as a value, i.e. set as Value 0x3E9 but really uses IC-Basic[1001] (the equivalent).
|||undefined|Undefined|Any Type? Has shown to be a Requirement "disguised" as a value, i.e. set as Value 2B but really uses Requirement 2B Roll a Die.
0x00110100|Case|Handler for if the variable in the switch statement equals the specified value.|Value|Undefined|
0x00120000|Default Case|The case chosen if none of the others are executed.|<$w3>
0x00130000|End Switch|End a Switch block.|<$w3>
0x00180000|Flow 18|Appears within Case statements.|<$w3>
```

## Module 01: Loop Rest
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x01000000|Goto Loop Rest 1?|Appears to work like Event 01010000, except used for loops created byEvent 00090100 (Goto).|<$w3>
0x01010000|Loop Rest|Briefly return execution back to the system to prevent crashes during infinite loops.|<$w3>
0x01020000|Goto Loop Rest 2?|Often follows Event 01000000.|<$w3>
```

## Module 02: Actions
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h3> 0x02000300|<$h3> Change Action Status|<$h3> Change the current action upon the specified requirement being met (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Status ID|The four-digit status ID of the change action event. Can later be disabled via Event 02080100 (Disable Action Status ID).
|||Value|Action|The ID of the action that the character will execute.
|||Requirement|Requirement|The form of requirement used in evaluation of the event.
<$h4> 0x02000400|<$h4> Change Action Status Value|<$h4> Change the current action upon the specified requirement being met (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Status ID|The four-digit status ID of the change action event. Can later be disabled via
|||Value|Action|The ID of the action that the character will execute.
|||Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
<$h5> 0x02000500|<$h5> Change Action Status Unknown|<$h5> Change the current action upon the specified requirement being met (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Status ID|The four-digit status ID of the change action event. Can later be disabled via Event 02080100 (Disable Action Status ID).
|||Value|Action|The ID of the action that the character will execute.
|||Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Value|Variable|The variable applied to the requirement.
|||Value|Unknown|Used as a specification for the requirement when necessary (for example, if the requirement is "button pressed", this denotes which button).
<$h5> 0x02000600|<$h5> Change Action Status Comparison|<$h5> Change the current action upon the specified requirement being met (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Undefined|
|||Value|Undefined|
|||Requirement|Undefined|
|||Value|Undefined|
|||Value|Undefined|
<$h2> 0x02010200|<$h2> Change Action|<$h2> Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Action|The id of the action that the character will execute.
|||Requirement|Requirement|The form of requirement used in evaluation of the event.
<$h3> 0x02010300|<$h3> Change Action|<$h3> Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Action|The id of the action that the character will execute.
|||Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
<$h4> 0x02010400|<$h4> Change Action|<$h4> Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Action|The id of the action that the character will execute.
|||Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
|||Value|Unknown|Used as a specification for the requirement when necessary (for example, if the requirement is "button pressed", this denotes which button).
<$h5> 0x02010500|<$h5> Change Action|<$h5> Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)|Value|Action|The id of the action that the character will execute.
|||Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
<$h3> 0x02020300|<$h3> Unknown|<$h3> Used in the Primid file as alternatives to calling an AI procedure.|Value|Undefined|In the Primid file, seems to always equal 200.
|||Value|Undefined|An action? (equals 7 when current action is not 7)
|||Requirement|Undefined|In the Primid file, seems to always be Article Exists (15).
0x02040100|Additional Change Action Requirement|Add an additional requirement to the preceeding Change Action statement.|Requirement|Requirement|The form of requirement used in evaluation of the event.
<$h2> 0x02040200|<$h2> Additional Change Action Requirement Value|<$h2> Add an additional requirement to the preceeding Change Action statement.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
<$h3> 0x02040300|<$h3> Additional Change Action Requirement Value|<$h3> Add an additional requirement to the preceeding Change Action statement.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
|||Value|Undefined|undefined
<$h4> 0x02040400|<$h4> Additional Change Action Requirement Comparison|<$h4> Add an additional requirement to the preceeding Change Action statement.|Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
0x02060100|Enable Action Status ID|Enables the given Status ID.|Value|Status ID|The Status ID to enable.
0x02080100|Disable Action Status ID|Disables the Action associated with the given Status ID.|Value|Status ID|The Status ID to disable. After this command, the associated Action will not activate.
<$h2> 0x02090200|<$h2> Invert Action Status ID|<$h2> Appears to invert (or possibly only disable) a specific Status ID's enabled/disabled status. For example, if a character can crawl, this is used to disable the ability to dash when crouched, even though naturally crouching allows dashing through Event 020A (Allow Specific Interrupt).|Value|Interrupt ID?|Appears to be a Interrupt ID as used by Event 020A (Allow Specific Interrupt).
|||Value|Status ID?|Appears to be a Status ID.
0x020A0100|Allow Specific Interrupt|Allows interruption only by specific commands.  See parameters for list of possible interrupts.|Value|Interrupt ID|Expand the window to view the full list.  List of types of commands: 1-Ground Special, 2-Ground Item, 3-Ground Catch, 4-Ground Attack, 5-Ground Escape, 6-Ground Guard, 7-Ground Jump, 8-Ground (other), 9-Air Landing, A-Grab Edge, B-Air Special, C-Air Item Throw, D-Air Lasso, E-Air Dodge, F-Air Attack, 10-Air Tread Jump, 11-Air Walljump, 12-Air Jump Aerial, 13-Fall Through Plat(only works in squat).
0x020B0100|Disallow Specific Interrupt|Closes the specific interruption window. Must be set to the same thing as the allow specific interrupt that you wish to cancel.|Value|Interrupt ID|Expand the window to view the full list.  List of types of commands: 1-Ground Special, 2-Ground Item, 3-Ground Catch, 4-Ground Attack, 5-Ground Escape, 6-Ground Guard, 7-Ground Jump, 8-Ground (other), 9-Air Landing, A-Grab Edge, B-Air Special, C-Air Item Throw, D-Air Lasso, E-Air Dodge, F-Air Attack, 10-Air Tread Jump, 11-Air Walljump, 12-Air Jump Aerial, 13-Fall Through Plat(only works in squat).
0x020C0100|Unregister Interrupt?|Possibly unregisters a previously created interrupt.|Value|Interrupt ID|Possibly the Interrupt ID to unregister.
0x020E0000|Unknown|Used when the Blast Box detonates from a flame attack just before the change to the explosion action. Could be some sort of "halt current action immediately" or "disable all possible statusID-based action changes".|<$w3>
```

## Module 04: Subactions
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x04000100|Change Subaction|Change the current subaction.|Value|Subaction|The ID of the subaction that the character will execute.
<$h2> 0x04000200|<$h2> Change Subaction|<$h2> Change the current subaction. Specifies whether or not to pass the current frame or start the animation over.|Value|Subaction|The ID of the subaction that the character will execute.
|||Boolean|Pass Frame|Whether to pass the current frame of the current animation onto the new animation or not.
<$h2> 0x04010200|<$h2> Subactions 01|<$h2> |Value|Undefined|
|||Requirement|Undefined|undefined
0x04020100|Subactions 02||Requirement|Requirement|The form of requirement used in evaluation of the event.
<$h2> 0x04020200|<$h2> Subactions 02 Value|<$h2> |Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
<$h3> 0x04020300|<$h3> Subactions 02 Unknown|<$h3> |Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
|||Value|Undefined|undefined
<$h4> 0x04020400|<$h4> Subactions 02 Compare|<$h4> |Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
0x04030100|Subactions 03|Seems to act as an additional requirement for Subactions 02.|Requirement|Requirement|The form of requirement used in evaluation of the event.
<$h2> 0x04030200|<$h2> Subactions 03 Value|<$h2> |Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
<$h3> 0x04030300|<$h3> Subactions 03 Unknown|<$h3> |Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The variable applied to the requirement.
|||Value|Undefined|undefined
<$h4> 0x04030400|<$h4> Subactions 03 Compare|<$h4> |Requirement|Requirement|The form of requirement used in evaluation of the event.
|||Variable|Variable|The first variable in the comparison requirement.
|||Value|Comparison Method|The method used to compare the two variables. From 0 to 5: <, <=, ==, !=, >=, >
|||Variable|Variable|The second variable in the comparison requirement.
0x04050100|Unknown|Used quite a bit in Meta Knight's special move actions.|Value|Undefined|undefined
0x04060100|Set Animation Frame|Changes the current frame of the animation. Does not change the frame of the subaction (i.e. timers and such are unaffected).|Scalar|Frame|The frame to skip to.
0x04070100|Frame Speed Modifier|Dictates the frame speed of the subaction. Example: setting to 2 makes the animation and timers occur twice as fast.|Scalar|Multiplier|How many times faster the frames are.
0x04090100|Unknown|Used a few times in the Primid file.|Value|Undefined|undefined
0x040A0100|Subactions 0A||Value|Undefined|undefined
0x040B0100|Subactions 0B||Scalar|Undefined|undefined
0x040C0100|Subactions 0C||Value|Subaction|A subaction ID.
0x040D0100|Subactions 0D||Value|Subaction|Subaction ID.
<$h2> 0x04100200|<$h2> Subactions 10|<$h2> |Value|Undefined|
|||Value|Undefined|undefined
0x04140100|Set Animation & Timer Frame|Changes the current frame of the animation and timers.|Scalar|Frame|The frame to skip to.
0x04180100|Subactions 18||Variable|Undefined|undefined
0x04180100|Subactions 19|undefined|<$w3>
0x041A0100|Subaction ??||Value|Subaction|Subaction ID. (Always seems to be 1CB[DamageFace], so could be something to do with multiple animations at once)
```

## Module 05: Posture
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x05000000|Reverse Direction|The object is now considered to be facing the other direction. It will not visually change direction until the current animation ends or is interrupted.|<$w3>
0x05010000|Posture 01|undefined|<$w3>
0x05020000|Posture 02|undefined|<$w3>
0x05030000|Posture 03|undefined|<$w3>
0x05040000|Posture 04|undefined|<$w3>
0x05050100|Posture 05||Scalar|Undefined|undefined
<$h3> 0x05070300|<$h3> Posture 07|<$h3> |Scalar|Undefined|
|||Variable|Undefined|
|||Scalar|Undefined|
0x050D0100|Posture 0D||Value|Undefined|undefined
```

## Module 06: Collisions
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h13> 0x06000D00|<$h13> Offensive Collision|<$h13> Generate an offensive collision bubble with the specified parameters.|Value|Bone/Id|The bone the collision bubble is attached to/The id number of the collision bubble. Where XXXXYYYY is X==Bone, Y==Id.
|||Value|Damage|The amount of damage inflicted to the target upon collision.
|||Value|Trajectory|The direction in which a target gets launched.
|||Value|Weight Knockback/Knockback Growth|The distance the target is launched proportional to weight for fixed knockback hits/The additional distance the target is launched proportional to its damage (launch force for fixed knockback hits). XXXXYYYY is X==Weight Knockback, Y==Knockback Growth.
|||Value|Shield Damage/Base Knockback|The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). XXXXYYYY is X==Shield Damage, Y==Base Knockback.
|||Scalar|Size|The size of the collision bubble.
|||Scalar|X Offset|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Y Offset|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Z Offset|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Tripping Rate|The percent possibility of the collision bubble inducing a trip, provided the target doesn't leave the ground from the knockback.
|||Scalar|Hitlag Multiplier|A multiplier affecting the time in which both parties pause when the collision bubble connects.
|||Scalar|Directional Influence Multiplier|A multiplier affecting the ability for the character to maneuver themselves while suffering from the hitlag generated by this collision bubble.
|||Value|Flags|Flags for various parameters such as hit effects and sound effects.
<$h2> 0x06010200|<$h2> Change Hitbox Damage|<$h2> Changes a specific hitbox's damage to the new amount. Only guaranteed to work on Offensive Collisions.|Value|Hitbox|ID of the hitbox to be changed.
|||Value|Damage|New damage of the hitbox.
<$h2> 0x06020200|<$h2> Change Hitbox Size|<$h2> Changes a specific hitbox's size to the new amount. Only guaranteed to work on Offensive Collisions.|Value|Hitbox|ID of the hitbox to be changed.
|||Value|Size|New size of the hitbox.
0x06030100|Delete Hitbox|Deletes a hitbox of the specified ID.  Only guaranteed to work on Offensive Collisions.|Value|Hitbox|ID of the hitbox to be deleted.
0x06040000|Terminate Collisions|Remove all currently present collision bubbles|<$w3>
0x06050100|Body Collision|Change how the character's own collision bubbles act. (primarily used to invoke invulnerability)|Value|State|0 = normal, 1 = invincible, 2 = intangible, 3 = intangible (no flashing), 4 = intangible (quick flashing)
0x06060100|Undo Bone Collision|Sets bones to their normal collision type.|<$w3>
0x06080200|Bone Collision|Sets specific bones to a type of body collision.|<$w3>
<$h30> 0x06091E00|<$h30> Simple Enemy Hitbox|<$h30> Seems to be a simpler version of 0619.|Value|ID|
|||Value|Segment|Allows the hitbox of this ID to hit even if the target has already been hit by it (and its segment at the time was a lower value). Allows moves to hit multiple times without a frame of dead space.
|||Value|Bone|
|||Value|Damage|
|||Scalar|Damage scale|
|||Value|Angle|
|||Value|Knockback growth|
|||Scalar|Knockback growth scale|
|||Value|Weight-based knockback|
|||Scalar|WBK scale|
|||Value|Base knockback|
|||Scalar|Base knockback scale|
|||Scalar|Size|
|||Scalar|Size scale|
|||Scalar|X Pos|
|||Scalar|Y Pos|
|||Scalar|Z Pos|
|||Value|Effect|i.e. Electric (3), Flame (5), etc
|||Scalar|Trip chance|
|||Scalar|Freeze frames multiplier|
|||Scalar|SDI multiplier|
|||Boolean|Undefined|
|||Boolean|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Boolean|Undefined|
|||Value|Undefined|
|||Variable|Difficulty level|
<$h8> 0x060A0800|<$h8> Catch Collision|<$h8> Generate a grabbing collision bubble with the specified parameters|Value|ID|ID of catch collision.
|||Value|Bone|The bone the grab is attached to.
|||Scalar|Size|The size of the catch collision bubble.
|||Scalar|X offset|Transition relative to the currently attached bone.
|||Scalar|Y Offset|Transition relative to the currently attached bone.
|||Scalar|Z Offset|Transition relative to the currently attached bone.
|||Value|Action|The Action ID that the foe executes if successfully grabbed.
|||Value|Air/Ground|0 == grabs nothing, 1 == grabs grounded only, 2 == grabs aerial only, 3 == grabs aerial and grounded.
<$h9> 0x060A0900|<$h9> Catch Collision 2|<$h9> Generate a grabbing collision bubble with the specified parameters|Value|ID|ID of catch collision.
|||Value|Bone|The bone the grab is attached to.
|||Scalar|Size|The size of the catch collision bubble.
|||Scalar|X offset|Transition relative to the currently attached bone.
|||Scalar|Y Offset|Transition relative to the currently attached bone.
|||Scalar|Z Offset|Transition relative to the currently attached bone.
|||Value|Action|The Action ID that the foe executes if successfully grabbed.
|||Value|Air/Ground|0 == grabs nothing, 1 == grabs grounded only, 2 == grabs aerial only, 3 == grabs aerial and grounded.
|||Value|Unknown|???
<$h10> 0x060A0A00|<$h10> Catch Collision 3|<$h10> Generate a grabbing collision bubble with the specified parameters. Used by Master Hand and Crazy Hand, As well as Olimar's Pikmin.|Value|ID|ID of catch collision.
|||Value|Bone|The bone the grab is attached to.
|||Scalar|Size|The size of the catch collision bubble.
|||Scalar|X offset|Transition relative to the currently attached bone.
|||Scalar|Y Offset|Transition relative to the currently attached bone.
|||Scalar|Z Offset|Transition relative to the currently attached bone.
|||Boolean|Action|The Action ID that the foe executes if successfully grabbed.
|||Value|Air/Ground|0 == grabs nothing, 1 == grabs grounded only, 2 == grabs aerial only, 3 == grabs aerial and grounded.
|||Value|Unknown|???
|||Boolean|Unknown|???
0x060C0100|Delete Catch Collision|Deletes the catch collision with the specified ID.|Value|ID|ID of the collision to delete
0x060D0000|Terminate Catch Collisions|Remove all currently present grab collision bubbles|<$w3>
<$h17> 0x060E1100|<$h17> Throw Specifier|<$h17> Specify the properties of the throw to be used when 060F0500 is executed. Used for other things as well, such as some Final Smashes.|Value|ID|ID of throw data. Seemingly, a "0" indicates this is the throw data, while a "1" indicates this is used if the opponent escapes during the throw. "2" has also been seen (by Light Arrow).
|||Value|Bone?|Possibly bone used by collision.
|||Value|Damage|The amount of damage inflicted to the target on throw.
|||Value|Trajectory|The direction in which the target gets launched.
|||Value|Knockback Growth|The additional distance the target is launched proportional to its damage.
|||Value|Weight Knockback|The distance the target is launched proportional to weight. Set to non-zero values only for fixed knockback throws.
|||Value|Base Knockback|The distance the target is launched regardless of its damage. Set to zero for fixed knockback throws.
|||Value|Effect|The effect of the throw. See the [[Hitbox Flags (Brawl)#Bits 28-32 (Effect)
|||Scalar|''Undefined''|
|||Scalar|''Undefined''|
|||Scalar|''Undefined''|
|||Value|''Undefined''|
|||Value|SFX|Sound effect played upon throw.
|||Value|Air/Ground|0 == Never Grabs, 1 == Only Grabs Grounded Foes, 2 == Only Grabs Aerial Foes, 3== Grabs Aerial and Grounded Foes.
|||Boolean|''Undefined''|
|||Boolean|''Undefined''|
|||Value|Type?|Almost always 8, which is typical invincibility frame length, but also the Throwing type - and it's 2 (Body-type) for Bowser's Flying Slam, 0 for most special moves and transformation Final Smashes. That said, if it's type, that would mean Nana's throws are Typeless.
<$h5> 0x060F0500|<$h5> Throw Applier|<$h5> Throws an opponent based on data provided by 060E1100.|Value|ID?|
|||Value|Bone|Appears to always be the bone the thrown character is attached to.
|||Variable|Undefined|
|||Variable|Undefined|
|||Variable|Undefined|
<$h17> 0x06101100|<$h17> Inert Collision|<$h17> Generates an oblivious hitbox only used to detect collision with other characters/objects.|Value|''Undefined''|When messed with, seemed to affect the accuracy of the collision detection. Should be set to 0 to be safe.
|||Value|Id|The ID of the hitbox
|||Value|Bone|The bone that the hitbubble is attached to.
|||Scalar|Size|The size of the hitbubble.
|||Scalar|X Offset|Transition relative to the currently attached bone.
|||Scalar|Y Offset|Transition relative to the currently attached bone.
|||Scalar|Z Offset|Transition relative to the currently attached bone.
|||Value|''Flags''|''+02 == Hits Normally, +04==Can be reflected....''
|||Value|''F''|''Undefined''
|||Value|Air/Ground|1 == hits grounded, 2 == hits aerial, 3 == hits grounded and aerial
|||Boolean|''Undefined''|''Undefined''
|||Value|''Undefined''|''Undefined''
|||Value|''Undefined''|''Undefined''
|||Boolean|''Undefined''|''Undefined''
|||Value|Rehit Rate?|The rehit rate of the hitbubble?
|||Boolean|''Affects Self?''|''Possibly if the uninteractive collision affects the host character.''
|||Value|''Undefined''|''Undefined''
<$h2> 0x06140200|<$h2> &nbsp;|<$h2> Used to increase the damage of the Giant Punch when not fully charged.|Value|Id|The ID of the hitbox to change the damage of.
|||Variable|Source|The variable to read to find out how much to change the damage.
<$h15> 0x06150F00|<$h15> Special Offensive Collision|<$h15> Generate an offensive collision bubble - is able to achieve unique effects.|Value|Bone/Id|The bone the collision bubble is attached to/The id number of the collision bubble. Where XXXXYYYY is X==Bone, Y==Id.
|||Value|Damage|The amount of damage inflicted to the target upon collision.
|||Value|Trajectory|The direction in which a target gets launched.
|||Value|Weight Knockback/Knockback Growth|The distance the target is launched proportional to weight for fixed knockback hits/The additional distance the target is launched proportional to its damage (launch force for fixed knockback hits). XXXXYYYY is X==Weight Knockback, Y==Knockback Growth.
|||Value|Shield Damage/Base Knockback|The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). XXXXYYYY is X==Shield Damage, Y==Base Knockback.
|||Scalar|Size|The size of the collision bubble.
|||Scalar|X Offset|Transition relative to the currently attached bone.
|||Scalar|Y Offset|Transition relative to the currently attached bone.
|||Scalar|Z Offset|Transition relative to the currently attached bone.
|||Scalar|Tripping Rate|The percent possibility of the collision bubble inducing a trip, provided the target doesn't leave the ground from the knockback.
|||Scalar|Hitlag Multiplier|A multiplier affecting the time in which both parties pause when the collision bubble connects.
|||Scalar|Directional Influence Multiplier|A multiplier affecting the ability for the character maneuver themselves while suffering from the hitlag generated by this collision bubble.
|||Value|Flags|Flags for various parameters such as hit effects and sound effects.
|||Value|Rehit Rate|How many frames between each hitbox refresh; for example a value of 8 will cause the hitbox to hit every 9 frames. A value of 0 disables refreshing; the hitbox will only hit once.
|||Value|Special Flags|Flags for hitbox type and attributes such as susceptibility to reflection and absorption.
<$h3> 0x06170300|<$h3> Defensive Collision|<$h3> Generate a defensive collision bubble.|Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
<$h3> 0x06180300|<$h3> Terminate Defensive Collision|<$h3> Removes defensive collisions.|Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
<$h47> 0x06192F00|<$h47> Enemy Hitbox|<$h47> The type of hitbox used for bosses and enemies in the Subspace Emissary.|Value|ID|
|||Value|Segment|Allows the hitbox of this ID to hit even if the target has already been hit by it (and its segment at the time was a lower value). Allows moves to hit multiple times without a frame of dead space.
|||Value|Bone|
|||Value|Damage|
|||Scalar|Damage scale|
|||Value|Angle|
|||Value|Knockback growth|
|||Scalar|Knockback growth scale|
|||Value|Weight-based knockback|
|||Scalar|WBK scale|
|||Value|Base knockback|
|||Scalar|Base knockback scale|
|||Scalar|Size|
|||Scalar|Size scale|
|||Scalar|X Pos|
|||Scalar|Y Pos|
|||Scalar|Z Pos|
|||Value|Effect|i.e. Electric (3), Flame (5), etc
|||Scalar|Trip chance|
|||Scalar|Freeze frames multiplier|
|||Scalar|SDI multiplier|
|||Boolean|Undefined|
|||Boolean|Undefined|
|||Value|Shield damage|
|||Value|SFX level|
|||Value|Sound type|Punch, kick, burn, shock, etc
|||Value|Air/ground|
|||Boolean|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Boolean|Undefined|
|||Value|Undefined|
|||Boolean|Undefined|
|||Boolean|Shieldable|
|||Boolean|Reflectable|
|||Boolean|Absorbable|
|||Value|Rehit rate|
|||Boolean|Undefined|
|||Boolean|Undefined|
|||Value|Undefined|
|||Boolean|Undefined|
|||Boolean|Undefined|
|||Boolean|Undefined|
|||Boolean|Stretchy|Hitbox is a tube from origin to offset instead of a sphere at offset.
|||Boolean|Undefined|
|||Value|Undefined|
|||Variable|Difficulty level|
<$h22> 0x061A1600|<$h22> Enemy Pummel/Throw|<$h22> Used for Master Hand and Crazy Hand's throws.|Value|ID|
|||Value|Undefined|
|||Value|Damage|
|||Scalar|Damage scale|
|||Value|Angle|
|||Value|Knockback growth|
|||Scalar|Knockback growth scale|
|||Value|Weight-based knockback|
|||Scalar|WBK scale|
|||Value|Base knockback|
|||Scalar|Base knockback scale|
|||Value|Effect|i.e. Electric (3), Flame (5), etc
|||Scalar|Trip chance|
|||Scalar|Freeze frames multiplier|
|||Scalar|SDI multiplier|
|||Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Boolean|Undefined|
|||Boolean|Undefined|
|||Value|Undefined|
|||Variable|Difficulty level|
<$h23> 0x061A1700|<$h23> Enemy Pummel/Throw|<$h23> Used for Master Hand and Crazy Hand's pummels.|Value|ID|
|||Value|Undefined|
|||Value|Damage|
|||Scalar|Damage scale|
|||Value|Angle|
|||Value|Knockback growth|
|||Scalar|Knockback growth scale|
|||Value|Weight-based knockback|
|||Scalar|WBK scale|
|||Value|Base knockback|
|||Scalar|Base knockback scale|
|||Value|Effect|i.e. Electric (3), Flame (5), etc
|||Scalar|Trip chance|
|||Scalar|Freeze frames multiplier|
|||Scalar|SDI multiplier|
|||Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Boolean|Undefined|
|||Boolean|Undefined|
|||Value|Undefined|
|||Variable|Difficulty level|
|||Boolean|Undefined|
<$h5> 0x061B0500|<$h5> Move Hitbox?|<$h5> Repositions an already-existing hitbox?|Value|Hitbox ID?|
|||Value|New Bone?|
|||Scalar|New X Offset?|
|||Scalar|New Y Offset?|
|||Scalar|New Z Offset?|
<$h15> 0x06240F00|<$h15> Unknown|<$h15> Used a single time in the Primid file.|Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Scalar|Size?|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Boolean|Undefined|
|||Scalar|Undefined|
<$h13> 0x062B0D00|<$h13> Collateral Hitbox|<$h13> Generates a damage collision bubble surrounding the character being thrown.|Value|Bone/Id|The bone the collision bubble is attached to/The id number of the collision bubble. Where XXXXYYYY is X==Bone, Y==Id.
|||Value|Damage|The amount of damage inflicted to the target upon collision.
|||Value|Trajectory|The direction in which a target gets launched.
|||Value|Weight Knockback/Knockback Growth|The distance the target is launched proportional to weight for fixed knockback hits/The additional distance the target is launched proportional to its damage (launch force for fixed knockback hits). XXXXYYYY is X==Weight Knockback, Y==Knockback Growth.
|||Value|Shield Damage/Base Knockback|The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). XXXXYYYY is X==Shield Damage, Y==Base Knockback.
|||Scalar|Size|The size of the collision bubble.
|||Scalar|X Offset|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Y Offset|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Z Offset|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Tripping Rate|The percent possibility of the collision bubble inducing a trip, proving the target doesn't leave the ground from the knockback.
|||Scalar|Hitlag Multiplier|A multiplier affecting the time in which both parties pause when the collision bubble connects.
|||Scalar|Directional Influence Multiplier|A multiplier affecting the ability for the character maneuver themselves while suffering from the hitlag generated by this collision bubble.
|||Value|Flags|Flags for various parameters such as hit effects and sound effects.
<$h15> 0x062C0F00|<$h15> Special Collateral Collision|<$h15> Used for the "bump" collisions that occur when a character in knockback collides with another body.|Value|Bone/ID?|The bone the collision bubble is attached to/The ID number of the collision bubble. Where XXXXYYYY is X==Bone, Y==Id.
|||Value|Damage|The amount of damage inflicted to the target upon collision.
|||Value|Trajectory|The direction in which a target gets launched.
|||Value|Weight Knockback/Knockback Growth?|The distance the target is launched proportional to weight for fixed knockback hits/The additional distance the target is launched proportional to its damage (launch force for fixed knockback hits). XXXXYYYY is X==Weight Knockback, Y==Knockback Growth.
|||Value|Shield Damage/Base Knockback?|The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). XXXXYYYY is X==Shield Damage, Y==Base Knockback.
|||Scalar|Size?|The size of the collision bubble.
|||Scalar|X Offset?|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Y Offset?|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Z Offset?|The amount the collision bubble is transitioned relative to the currently attached bone.
|||Scalar|Tripping Rate?|The percent possibility of the collision bubble inducing a trip, provided the target doesn't leave the ground from the knockback.
|||Scalar|Hitlag Multiplier?|A multiplier affecting the time in which both parties pause when the collision bubble connects.
|||Scalar|Directional Influence Multiplier?|A multiplier affecting the ability for the character maneuver themselves while suffering from the hitlag generated by this collision bubble.
|||Value|Flags 1|Flags for various parameters such as hit effects and sound effects.
|||Value|Undefined|
|||Value|Flags 2|Flags for various parameters such as hit effects and sound effects.
0x062D0000|Collisions 2D|undefined|<$w3>
```

## Module 07: Controller
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x07000000|ResetFlickX||<$w3>
0x07010000|ResetFlickY|undefined|<$w3>
0x07020000|ResetTrigger|undefined|<$w3>
0x07060100|Controller 06||Boolean|Undefined|undefined
<$h2> 0x07070200|<$h2> SetRumble|<$h2> Affects the rumble feature of the controller.|undefined|Undefined|
|||undefined|Undefined|undefined
<$h2> 0x070B0200|<$h2> SetRumbleLoop|<$h2> Creates a rumble loop on the controller.|undefined|Undefined|
|||undefined|Undefined|undefined
0x070C0000|ClearLog | Clears Buffer?|<$w3>
```

## Module 08: soGroundModuleImpl

has to do with the ECB

```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x08000100|Set Edge Slide|Determines whether or not the character will slide off the edge. (calls "setCorrect")|Value|Character State|1: Can drop off side of stage.  2: Can't drop off side of stage.  5: Treated as in air; can leave stage vertically.  Other states currently unknown.
0x08010100|setCliffCheck||Boolean|shouldCheck|whether or not the character should try to grab the ledge
0x08020100|selectCliffHangData|Sets which ledge grabbox is used?|Value|ledge grabbox used|
0x08030100|???|Calls "setExclusiveLineAir" - sounds like it should be powerful but idk what it means|Value|???|
0x08040100|Edge Interaction 04||Boolean|Undefined|undefined
0x08050000|???|based on modifyRhombus|<$w3h1>||
0x08070000|Edge Interaction 07|undefined|<$w3h1>||
0x08070100|???|Calls "ignoreTouchLine"|Value|???|
0x08080000|attachGroundF|Like calling 8080100 with 0 passed as the arg|<$w3h1>null||
0x08080100|attachGround|lets you tell the character to land properly\n(very powerful in theory)|Scalar|Controller|???
<$w1h2>0x08080200|<$w1h2>attachGround|<$w1h2>^|Scalar|Controller|???
|||Variable|Result Var|Writes some result into this variable
0x08090100|Unknown|Something to do with controlling shape of ECB|Value|???|
0x080A0100|Unknown|unsure what it controls specifically|Boolean|SetGrCollision Bool|
0x080B0100|Attach|Attaches to a wall|Value|Collision Type|same as thing used for "isTouchingWall/Ceiling/etc"
0x080C0000|Detach|Detaches to move from a wall collision|<$w3h1>null||
0x080D0000|Start Trace|<$w1h7>(Subspace/Item-exclusive?)|<$w3h1>null||
0x080E0000|getTraceTargetVector||<$w3h1>null||
0x080F0000|getTraceTargetPosturePos||<$w3h1>null||
0x08100000|renewTrace||<$w3h1>||
0x08110000|endTrace||<$w3h1>||
0x08130000|getDistanceFromCurrentTrace||<$w3h1>null||
0x08140000|getTraceVecFromLine||<$w3h1>null||
0x08150000|getTraceDistanceFromLine|calls update/[soGroundModule|<$w3h1>null||
0x08160000|initRhombus||<$w3h1>null||
0x08170000|???|based on modifyRhombus|<$w3h1>null||
0x08180000|???|based on modifyRhombus|<$w3h1>null||
0x08190000|???|based on modifyRhombus|<$w3h1>null||
0x081A0100|???|turns on some flag with no helpful function call|Boolean|???|
0x081B0100|setEventToGroundStatus|Might let you tell the game to put the character on the ground?|Boolean|???|
```

## Module 09: Situation?
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x09000100|Module09 00|Air/ground related. In the air, it's set to 2, and the edge to 5. On the ground, it's almost always 0. Setting this to any setting other than 2 while in the air will replenish jumps and recovery moves|Value|Undefined|undefined
```

## Module 0A: Sounds
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x0A000100|Sound Effect|Play a specified sound effect.|Value|Sound Effect|the ID number for the sound effect called.
0x0A010100|Footstep Sound Effect|Play a specified sound effect plus a sound for stepping on the current terrain.|Value|Sound Effect|the ID number for the sound effect called.
0x0A020100|Sound Effect (Transient)|Play a specified sound effect. The sound effect ends with the animation.|Value|Sound Effect|the ID number for the sound effect called.
0x0A030100|Stop Sound Effect|Stops the specified sound effect immediately.|Value|Sound Effect|the ID number for the sound effect called.
0x0A050100|Sounds 05| Is used during victory poses.|Value|Undefined|
0x0A080000|Sounds 08||<$w3>
0x0A090100|Landing Sound Effect|Play a specified sound effect plus a sound for landing on the current terrain - the values are different from normal sound effects.|Value|Sound Effect|the ID number for the sound effect called.
0x0A0A0100|Impact? Sound Effect|Play a specified sound effect (plus a sound for smacking the current terrain?) - the values are different from normal sound effects.|Value|Sound Effect|the ID number for the sound effect called.
```

## Module 0B: Models
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h2> 0x0B000200|<$h2> Model Changer|<$h2> Changes the char's model in certain preset ways.  (Examples: sheathe sword, retreat into shell, etc.)|Value|BoneSwitch ID|The target switch for model changes.  (Example: Link's sword is 1, his shield is 2)
|||Value|BoneGroup ID|Typically, 0 changes to the normal state, 1 changes the location or shape, and 2 removes it entirely.  (Example: Bowser is normal on 0, Bowser is in his shell on 1, and Bowser is invisible on 2)
<$h2> 0x0B010200|<$h2> Model Display Toggle?|<$h2> Changes what entries of Hidden and Visible bone indexes from Model Display are used in some fashion. |Value|Entry to use?|Appears to correspond to what entry of the Model Display is used in the subaction.
|||Value|Undefined|undefined
0x0B020100|Visibility|Shows whether you're visible or not.|Boolean|Visibility|Set Boolean: True == Visible, False == Invisible
```

## Module 0C: Character Specific
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x0C010000|Character Specific 01|undefined|<$w3>
0x0C040000|Character Specific 04|undefined|<$w3>
0x0C050000|Terminate Instance|Causes the acting instance to terminate (if possible). Will load secondary instance if available (i.e. character transformation).|<$w3>
0x0C060000|Enter Final Smash State|Allows use of Final Smash locked articles, variables, etc. Highly unstable.|<$w3>
0x0C070000|Exit Final Smash State?|undefined|<$w3>
0x0C080000|Terminate Self|Used by certain article instances to remove themselves.|<$w3>
0x0C090100|Allow/Disallow Ledgegrab|Allow or disallow grabbing ledges during the current subaction.|Value|Allow/Disallow|0 == cannot, 1 == Only in front, 2 == Always
0x0C0A0100|Character Specific 0A||Value|Undefined|undefined
0x0C0B0000|Low Voice Clip|Play a random voice clip from the selection of low voice clips.|<$w3>
0x0C130000|Character Specific 13|undefined|<$w3>
0x0C160000|Character Specific 16|undefined|<$w3>
0x0C170100|Character Specific 17|Undefined. Often appears before Event 0C25 (Tag Display).|Boolean|Undefined|
<$h2> 0x0C170200|<$h2> Character Specific 17 Variable|<$h2> Undefined. Often appears before Event 0C25 (Tag Display).|Boolean|Undefined|
|||Variable|Undefined|undefined
0x0C190000|Damage Voice Clip|Play a random voice clip from the selection of damage voice clips.|<$w3>
<$h2> 0x0C1A0200|<$h2> Character Specific 1A|<$h2> |Value|Undefined|
|||Value|Undefined|undefined
0x0C1B0100|Character Specific 1B||Variable|Undefined|undefined
<$h2> 0x0C1C0200|<$h2> Character Specific 1C|<$h2> Used in Fighter.pac to do something based on which throw is in progress.|Value|Undefined|
|||Value|Undefined|undefined
<$h3> 0x0C1C0300|<$h3> Character Specific 1C Boolean|<$h3> |Value|Undefined|
|||Value|Undefined|
|||Boolean|Undefined|undefined
0x0C1D0000|Ottotto Voice Clip|Play one of the voice clip for [[Ottotto]].|<$w3>
0x0C1E0000|Final Smash Voice Clip|Plays a voice clip for a Final Smash. Only used in Meta Knight's FinalStart and FinalAirStart subactions.|<$w3>
0x0C1F0000|Eating Voice Clip|Play a random voice clip from the selection of eating voice clips.|<$w3>
<$h2> 0x0C200200|<$h2> Character Specific 20|<$h2> |Value|Undefined|
|||Boolean|Undefined|undefined
<$h2> 0x0C230200|<$h2> Time Manipulation|<$h2> Change the speed of time for various parts of the environment.|Value|Undefined|
|||Value|Undefined|
0x0C240100|Character Specific 24||Boolean|Undefined|undefined
0x0C250100|Tag Display|Disables or enables tag display for the current subaction.|Boolean|Tag On/Off|True == On, False == Off
0x0C260100|Character Specific 26||Boolean|Undefined|undefined
0x0C270000|Character Specific 27|Undefined. Often appears within Switch statements.|<$w3>
0x0C290000|Character Specific 29|undefined|<$w3>
0x0C2A0100|Character Specific 2A||Boolean|Undefined|undefined
0x0C2B0000|Character Specific 2B|undefined|<$w3>
```

## Module 0D: Concurrent Execution
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h2> 0x0D000200|<$h2> Concurrent Infinite Loop|<$h2> Runs a subroutine once per frame for the current action.|Value|PSA Stack|The event stack to run the subroutine (use 4, 6, or 9 or you risk crashes)
|||Pointer|Offset|The subroutine location that contains the events that you would like to loop infinitely.
0x0D010100|Terminate Concurrent Infinite Loop?|Seems to stop the execution of a loop created withEvent 0D000200 (Concurrent Infinite Loop).|Value|Thread ID?|Possibly the thread ID of the concurrent routine. Sometimes 4, sometimes 6, sometimes 9.
```

## Module 0E: Movement
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x0E000100|Set Kinetic State (Set Air/Ground)|Sets the current physics state.|Value|State|The state of the character's air/ground status. 0 ==  In Air, 1 ==  On Ground,File 10 == Control stick does not affect  horizontal movement (or fastfall?)
<$h2> 0x0E010200|<$h2> Add/Subtract Character Momentum|<$h2> Adds or subtracts speed to the character's current momentum.|Scalar|Horizontal Velocity|The speed of the character moving left/right.
|||Scalar|Vertical Velocity|The speed of the character moving up/down.
0x0E020100|Disallow Vertical Movement|When set to 1, vertical speed and acceleration are reset back to 0.|<$w3>
0x0E040100|Disable Horizontal Gravity|When set to 1, horizontal speed and decay rate are reset back to 0.|<$w3>
0x0E050100|Movement 05||Value|Undefined|undefined
0x0E060100|Disallow Certain Movements|When set to 2, sideways movement is disallowed.  When set to 1, disables vertical gravity.|<$w3>
0x0E070100|Disallow Disallow Certain Movements|This must be set to the same value as Disallow Certain Movements to work.  Disallow is a funny word.|<$w3>
<$h2> 0x0E080200|<$h2> Set Momentum|<$h2> Controls the movement velocity of the object.|Scalar|Horizontal Velocity|The speed of the object moving left/right.
|||Scalar|Vertical Velocity|The speed of the object moving up/down.
<$h4> 0x0E080400|<$h4> Set/Add Momentum|<$h4> Controls the movement velocity of the object.|Scalar|Horizontal Velocity|The speed of the object moving left/right.
|||Scalar|Vertical Velocity|The speed of the object moving up/down.
|||Value|Set/Add Horizontal|0 == Add, 1 == Set
|||Value|Set/Add Vertical|0 == Add, 1 == Set
```

## Module 0F: Link?
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h2> 0x0F030200|<$h2> Link 03|<$h2> |Value|Undefined|
|||Value|Undefined|undefined
```


[[Category:Brawl Documentation]]

## Module 10: Articles
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x10000100|Generate Article|Generate a pre-made prop effect from the prop library.|Value|Article ID|The id of the prop article to be called.
<$h2> 0x10000200|<$h2> Generate Article|<$h2> Generate a pre-made prop effect from the prop library.|Value|Article ID|The id of the prop article to be called.
|||Boolean|Subaction Exclusive?|Whether or not you want the article to be automatically deleted when the subaction ends.
<$h2> 0x10010200|<$h2> Set Ex-Anchored Article Action|<$h2> Does the same thing as Set Article Action and Set Article Action 2 but seems to work on articles that are only initially attached to the character. (Used on Lucario's Aura Sphere)|Value|Article ID|ID of the article to be affected.
|||Value|Action|The action you would like the article to execute.
0x10030100|Remove Article|Removes an article.|Value|Article|ID of the article to be affected.
<$h2> 0x10040200|<$h2> Set Article Action|<$h2> Sets the specified article to execute the specified action immediately. Only works on anchored articles (Cape, FLUDD, not fireball, water).|Value|Article ID|The ID of the article you would like to edit.
|||Value|Action|The action you would like the article to execute.
<$h3> 0x10040300|<$h3> Set Anchored Article Action|<$h3> Sets the specified article to execute the specified action immediately. Only works on anchored articles (Cape, FLUDD, not fireball, water).|Value|Article ID|The ID of the article you would like to edit.
|||Value|Action|The action you would like the article to execute.
|||Boolean|Subaction Exclusive?|Whether or not you want the article to be automatically deleted when the subaction ends.
<$h2> 0x10050200|<$h2> Article Visibility|<$h2> Makes an article visible or invisible.|Value|Article|ID of the article to be affected.
|||Boolean|Visibility|Set Boolean: True == Visible, False == Invisible
<$h2> 0x10070200|<$h2> Set Article Action|<$h2> Does the same thing as Set Article Action but seems to work on articles that aren't attached to the character.|Value|Article ID|ID of the article to be affected.
|||Value|Action|The action you would like the article to execute.
<$h2> 0x10080200|<$h2> Set Remote Article Action|<$h2> Does the same thing as Set Article Action but seems to work on articles that aren't attached to the character... God why are there so many of these. (Used on Snake's downB)|Value|Article ID|ID of the article to be affected.
|||Value|Action|The action you would like the article to execute.
<$h3> 0x100A0300|<$h3> Link Article to Bone|<$h3> Used in Snake's Neutral B to attach the grenade to his hand.|Value|Article|ID of the article to be affected.
|||Value|Bone|ID of the bone to attach to.
|||Value|???|Possibly decides which article to attach if multiple copies of a certain article are present.
<$h2> 0x100C0200|<$h2> Article Frame Speed?|<$h2> |Value|ID?|
|||Scalar|Multiplier?|undefined
<$h2> 0x100E0200|<$h2> |<$h2> Used by Rock Smash's boulder with parameters [3,2]. Potentially some sort of "generate multiple articles".|Value|Count?|
|||Value|ID?|undefined
0x10130100|Link Character and Article?|Seems to be used whenever a detached article needs to change its action...|Value|Article ID|ID of the article to be affected.
```

## Module 11: Graphics
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h16> 0x11001000|<$h16> Graphic Effect|<$h16> Generate a generic graphical effect with the specified parameters.|Value|Graphic|The graphical effect to call.
|||Value|Bone|The bone to attach the graphical effect to.
|||Scalar|Z Offset|Transition from the attached bone along the Z axis.
|||Scalar|Y Offset|Transition from the attached bone along the Y axis.
|||Scalar|X Offset|Transition from the attached bone along the X axis.
|||Scalar|Z Rotation|Rotation along the Z axis.
|||Scalar|Y Rotation|Rotation along the Y axis.
|||Scalar|X Rotation|Rotation along the X axis.
|||Scalar|Size|The size of the graphic.
|||Scalar|Random Z Offset|A random value lesser than the specified value and added to the Z Offset.
|||Scalar|Random Y Offset|A random value lesser than the specified value and added to the Y Offset.
|||Scalar|Random Z Offset|A random value lesser than the specified value and added to the X Offset.
|||Scalar|Random Z Rotation|A random value lesser than the specified value and added to the Z Rotation.
|||Scalar|Random Y Rotation|A random value lesser than the specified value and added to the Y Rotation.
|||Scalar|Random X Rotation|A random value lesser than the specified value and added to the X Rotation.
|||Boolean|Terminate With Animation|Sets whether or not this graphic effect terminates when the animation ends.
<$h10> 0x11010A00|<$h10> External Graphic Effect|<$h10> Generate a graphical effect from an external file. (usually the Ef_ file)|Value|Graphic|The file from which to call from/The graphical effect to call. Where XXXXYYYY is X==File# Y==Graphic id
|||Value|Bone|The bone to attach the graphical effect to.
|||Scalar|Z Offset|Transition from the attached bone along the Z axis.
|||Scalar|Y Offset|Transition from the attached bone along the Y axis.
|||Scalar|X Offset|Transition from the attached bone along the X axis.
|||Scalar|Z Rotation|Rotation along the Z axis.
|||Scalar|Y Rotation|Rotation along the Y axis.
|||Scalar|X Rotation|Rotation along the X axis.
|||Scalar|Size|The size of the graphic.
|||Boolean|Terminate With Animation|Sets whether or not this graphic  effect terminates when the animation ends.
<$h10> 0x11020A00|<$h10> External Graphic Effect|<$h10> Generate a graphical effect from an external file. (usually the Ef_ file)|Value|Graphic|The file from which to call from/The graphical effect to call. Where XXXXYYYY is X==File# Y==Graphic id
|||Value|Bone|The bone to attach the graphical effect to.
|||Scalar|Z Offset|Transition from the attached bone along the Z axis.
|||Scalar|Y Offset|Transition from the attached bone along the Y axis.
|||Scalar|X Offset|Transition from the attached bone along the X axis.
|||Scalar|Z Rotation|Rotation along the Z axis.
|||Scalar|Y Rotation|Rotation along the Y axis.
|||Scalar|X Rotation|Rotation along the X axis.
|||Scalar|Size|The size of the graphic.
|||Boolean|Terminate With Animation|Sets whether or not this graphic  effect terminates when the animation ends.
<$h20> 0x11031400|<$h20> Sword Glow|<$h20> Creates glow of sword.  Only usable when the proper effects are loaded by their respective characters.|Value|Trace ID|ID of one of the [[Traces]] to use.
|||Value|Blur Length|The length of the glow's aftershadow.
|||Value|Trail Bone #1|Bone the 1st point of the sword trail follows.
|||Scalar|X Offset|X offset of the 1st point of the sword trail.
|||Scalar|Y Offset|Y offset of the 1st point of the sword trail.
|||Scalar|Z Offset|Z offset of the 1st point of the sword trail.
|||Value|Trail Bone #2|Bone the 2nd point of the  sword trail follows.
|||Scalar|X Offset|X offset of the 2nd point of the sword trail.
|||Scalar|Y Offset|Y offset of the 2nd point of the sword trail.
|||Scalar|Z Offset|Z offset of the 2nd point of the sword trail.
|||Boolean|Glow State|If set to true, glow/trail disappears at the end  of the subaction.
|||Value|Graphic ID|The ID of  the External Graphic Effect referenced.
|||Value|Glow Bone|Bone the sword glow follows.
|||Scalar|X Offset|X offset of the sword glow.
|||Scalar|Y Offset|Y offset  of the sword glow.
|||Scalar|Z Offset|Z offset  of the sword glow.
|||Scalar|X Rotation|Rotation of the sword glow around the X axis.
|||Scalar|Y Rotation|Rotation  of the sword glow around the Y axis.
|||Scalar|Z Rotation|Rotation  of the sword glow around the Z axis.
|||Scalar|Glow Length|Length of the sword glow, i.e. halving this  value will make it half the  sword's length.
<$h23> 0x11041700|<$h23> Sword Glow related?|<$h23> Values seem to be the same as Sword glow's with 3 extra parameters. Found in Kirby's SpecialS GFX.|Value|Trace ID|ID of one of the [[Traces]] to use.
|||Value|Blur Length|The length of the glow's aftershadow.
|||Value|Trail Bone #1|Bone the 1st point of the sword trail follows.
|||Scalar|X Offset|X offset of the 1st point of the sword trail.
|||Scalar|Y Offset|Y offset of the 1st point of the sword trail.
|||Scalar|Z Offset|Z offset of the 1st point of the sword trail.
|||Value|Trail Bone #2|Bone the 2nd point of the  sword trail follows.
|||Scalar|X Offset|X offset of the 2nd point of the sword trail.
|||Scalar|Y Offset|Y offset of the 2nd point of the sword trail.
|||Scalar|Z Offset|Z offset of the 2nd point of the sword trail.
|||Boolean|Glow State|If set to true, glow/trail disappears at the end  of the subaction.
|||Value|Graphic ID|The ID of  the External Graphic Effect referenced.
|||Value|Glow Bone|Bone the sword glow follows.
|||Scalar|X Offset|X offset of the sword glow.
|||Scalar|Y Offset|Y offset  of the sword glow.
|||Scalar|Z Offset|Z offset  of the sword glow.
|||Scalar|X Rotation|Rotation of the sword glow around the X axis.
|||Scalar|Y Rotation|Rotation  of the sword glow around the Y axis.
|||Scalar|Z Rotation|Rotation  of the sword glow around the Z axis.
|||Scalar|Glow Length|Length of the sword glow, i.e. halving this  value will make it half the  sword's length
|||Value|Undefined|
|||Value|Undefined|
|||Scalar|Undefined|
0x11050100|Terminate Sword Glow|Eliminates sword glow graphics when set to 1. May have unknown applications.|Value|Fade Time|The time it takes for the sword glow to fade out.
<$h3> 0x11150300|<$h3> Terminate Graphic Effect|<$h3> Terminate a lingering graphical effect.|Value|Undefined|
|||Boolean|Undefined|
|||Boolean|Undefined|
0x110D0100|Unknown||Value|Undefined|undefined
<$h6> 0x11170600|<$h6> Screen Tint|<$h6> Tint the screen to the specified color.|Value|Undefined|
|||Value|Transition Time|The time taken to transition from its current color to the specified color.
|||Value|Red|The red value.
|||Value|Green|The green value.
|||Value|Blue|The blue value.
|||Value|Alpha|The transperency.
<$h7> 0x11170700|<$h7> Screen Tint|<$h7> Tint the screen to the specified color.|Value|Transition Time|The time taken to transition from its current color to the specified color.
|||Value|Red|The red value.
|||Value|Green|The green value.
|||Value|Blue|The blue value.
|||Value|Alpha|The transperency.
|||Value|Undefined|
|||Value|Undefined|
<$h8> 0x11170800|<$h8> Screen Tint|<$h8> Tint the screen to the specified color.|Value|Undefined|
|||Value|Transition Time?|The time taken to transition from its current color to the specified color.
|||Value|Red|The red value.
|||Value|Green|The green value.
|||Value|Blue|The blue value.
|||Value|Alpha|The transperency.
|||Value|Undefined|
|||Value|Undefined|
<$h2> 0x11180200|<$h2> End Screen Tint?|<$h2> |Value|Undefined|
|||Value|Undefined|undefined
<$h16> 0x111A1000|<$h16> Graphic Effect|<$h16> Generate a generic graphical effect with the specified parameters.|Value|Graphic|The graphical effect to call.
|||Value|Bone|The bone to attach the graphical effect to.
|||Scalar|Z Offset|Transition from the attached bone along the Z axis.
|||Scalar|Y Offset|Transition from the attached bone along the Y axis.
|||Scalar|X Offset|Transition from the attached bone along the X axis.
|||Scalar|Z Rotation|Rotation along the Z axis.
|||Scalar|Y Rotation|Rotation along the Y axis.
|||Scalar|X Rotation|Rotation along the X axis.
|||Scalar|Size|The size of the graphic.
|||Scalar|Random Z Offset|A random value lesser than the specified value and added to the Z Offset.
|||Scalar|Random Y Offset|A random value lesser than the specified value and added to the Y Offset.
|||Scalar|Random Z Offset|A random value lesser than the specified value and added to the X Offset.
|||Scalar|Random Z Rotation|A random value lesser than the specified value and added to the Z Rotation.
|||Scalar|Random Y Rotation|A random value lesser than the specified value and added to the Y Rotation.
|||Scalar|Random X Rotation|A random value lesser than the specified value and added to the X Rotation.
|||Boolean|Terminate With Animation|Sets whether or not this graphic  effect terminates when the animation ends.
<$h16> 0x111B1000|<$h16> Graphic Effect|<$h16> Generate a generic graphical effect with the specified parameters.|Value|Graphic|The graphical effect to call.
|||Value|Bone|The bone to attach the graphical effect to.
|||Scalar|Z Offset|Transition from the attached bone along the Z axis.
|||Scalar|Y Offset|Transition from the attached bone along the Y axis.
|||Scalar|X Offset|Transition from the attached bone along the X axis.
|||Scalar|Z Rotation|Rotation along the Z axis.
|||Scalar|Y Rotation|Rotation along the Y axis.
|||Scalar|X Rotation|Rotation along the X axis.
|||Scalar|Size|The size of the graphic.
|||Scalar|Random Z Offset|A random value lesser than the specified value and added to the Z Offset.
|||Scalar|Random Y Offset|A random value lesser than the specified value and added to the Y Offset.
|||Scalar|Random Z Offset|A random value lesser than the specified value and added to the X Offset.
|||Scalar|Random Z Rotation|A random value lesser than the specified value and added to the Z Rotation.
|||Scalar|Random Y Rotation|A random value lesser than the specified value and added to the Y Rotation.
|||Scalar|Random X Rotation|A random value lesser than the specified value and added to the X Rotation.
|||Boolean|Terminate With Animation|Sets whether or not this graphic  effect terminates when the animation ends.
```

## Module 12: Variables
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h2> 0x12000200|<$h2> Basic Variable Set|<$h2> Set a basic variable to the specified value.|Value|Value|the value to place inside the specified variable.
|||Variable|Variable|The Basic type variable to access.
<$h2> 0x12010200|<$h2> Basic Variable Add|<$h2> Add a specified value to a basic variable.|Value|Value|the value add to the specified variable.
|||Variable|Variable|The Basic type variable to access.
<$h2> 0x12020200|<$h2> Basic Variable Subtract|<$h2> Subtract a specified value from a basic variable.|Value|Value|the value to subtract from the specified variable.
|||Variable|Variable|The Basic type variable to access.
0x12030100|Basic Variable Increment| Variable++|Variable|Variable|The variable to increment.
0x12040100|Basic Variable Decrement| Variable-- |Variable|Variable|The variable to decrement.
<$h3> 0x12050300|<$h3> Basic Variable Randi|<$h3> Load a basic variable with a random integer.|Scalar|Value|The minimum random value to load.
|||Scalar|Value|The maximum random value to load.
|||Variable|Variable|The Basic type variable to access.
<$h2> 0x12060200|<$h2> Float Variable Set|<$h2> Set a floating point variable to the specified value.|Scalar|Value|The floating point value to place inside the specified variable.
|||Variable|Variable|The Float type variable to access.
<$h2> 0x12070200|<$h2> Float Variable Add|<$h2> Add a specified value to a float variable.|Scalar|Value|The floating point value to add to the specified variable.
|||Variable|Variable|The Float type variable to access.
<$h2> 0x12080200|<$h2> Float Variable Subtract|<$h2> Subtract a specified value from a float variable.|Scalar|Value|The floating point value to subtract from the specified variable.
|||Variable|Variable|The Float type variable to access.
0x120A0100|Bit Variable Set|Set a bit variable to true.|Variable|Variable|The Bit type variable to set.
0x120B0100|Bit Variable Clear|Set a bit variable to false.|Variable|Variable|The Bit type variable to clear.
<$h2> 0x120D0200|<$h2> Basic Variable Multiply|<$h2> Multiply a basic value by the specified value.|Value|Value|The value to multiply the selected variable by.
|||Variable|Variable|The Basic type variable to be multiplied.
<$h2> 0x120E0200|<$h2> Basic Variable Divide|<$h2> Divide a basic value by the specified value.|Value|Value|The value to divide the selected variable by.
|||Variable|Variable|The Basic type variable to be divided.
<$h2> 0x120F0200|<$h2> Float Variable Multiply|<$h2> Multiply a specified value with a float variable.|Scalar|Value|The floating point value to multiply with the specified variable.
|||Variable|Variable|The Float type variable to access.
<$h2> 0x12100200|<$h2> Float Variable Divide|<$h2> Divide a specified value with a float variable.|Scalar|Value|The floating point value to divide with the specified variable.
|||Variable|Variable|The Float type variable to access.
<$h2> 0x12011200|<$h2> Basic Variable Set Absolute|<$h2> Sets a Basic type variable to the absolute value of the specified value|Value|Value|The value to set the basic equal to.
|||Variable|Variable|The Basic type variable to be set.
<$h2> 0x12120200|<$h2> Float Variable Set Absolute|<$h2> Set a float variable equal to the absolute value of some float|Scalar|Value|The floating point value to set the variable equal to.
|||Variable|Variable|The Float type variable to access.
```

## Module 13: Combo?

## Module 14: Aesthetic Wind
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x14040100|Terminate Wind Effect|Ends the wind effect spawned by the &quot;Aesthetic Wind Effect&quot; event.|Value|Undefined|Usually set to 0.
0x14050100|Aesthetic Wind 05||Boolean|Undefined|undefined
<$h8> 0x14070A00|<$h8> Aesthetic Wind Effect|<$h8> Moves nearby movable model parts (capes, hair, etc) with a wind specified by the parameters.|Value|Undefined|
|||Scalar|Undefined|
|||Scalar|Strength|The power of the wind.
|||Scalar|Speed|The speed of the wind.
|||Scalar|Size?|Perhaps the size of the wind.
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Value|Undefined|undefined
<$h8> 0x14080800|<$h8> Unknown|<$h8> |Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
```

## Module 15: Unknown
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x15000000|Unknown|Used in the Goomba file in places where Req[0x11] is true.|<$w3>
```

## Module 17: Physics?
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x17000000|Physics 00|Tends to be used after 17010000 is used.|<$w3>
0x17010000|Physics 01|undefined|<$w3>
0x17050000|Physics 05|undefined|<$w3>
```

## Module 18: Sloped Terrain Interaction
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x18000100|Slope Contour Stand|Moves specific parts of the character if on sloped ground?|<$w3>
0x18010200|Slope Contour Full?|Moves entire character to match sloped ground?|<$w3>
```

## Module 19: Undefined
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x19010000|Module19 01|undefined|<$w3>
```

## Module 1A: Camera
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x1A000100|Screenshake|Shakes the screen.|Scalar|Magnitude|The intensity of the screenshake.
<$h2> 0x1A020200|<$h2> Camera 02|<$h2> |Scalar|Undefined|
|||Scalar|Undefined|undefined
<$h4> 0x1A030400|<$h4> Set Camera Boundaries|<$h4> Changes the camera boundaries of your character. Does not reset the camera boundaries; rather, it adds to them. Reverts to normal when the animation ends.|Scalar|Front Boundary|The boundary in front of the character.
|||Scalar|Back Boundary|The boundary behind the character.
|||Scalar|Top Boundary|The boundary above the character.
|||Scalar|Bottom Boundary|The boundary below the character.
<$h5> 0x1A040500|<$h5> Camera Closeup|<$h5> Zoom the camera on the character.|Value|Zoom Time|The time it takes to zoom in on the target.
|||Value|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
|||Scalar|Undefined|
0x1A060100|Detach/Attach Camera (Close)|Causes the camera to follow or stop following a character.|Boolean|Detached/Attached|False&nbsp;==&nbsp;detached, true&nbsp;==&nbsp;attached.
0x1A070100|Detach/Attach Camera (Far)|Causes the camera to follow|<$w3>
|||Boolean|Detached/Attached|False&nbsp;==&nbsp;detached, true&nbsp;==&nbsp;attached.
0x1A080000|Normal Camera|Return the camera to its normal settings.|<$w3>
0x1A090000|Camera 09||<$w3>
0x1A0A0100|Camera 0A||Value|Undefined|
0x1A0B0000|Force Camera Control|Appears to override any other settings in favor of the character's preference.|<$w3>
0x1A0C0000|Camera 0C||<$w3>
```

## Module 1B: Procedure Calls?
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x1B020100|Procedure Call?||File|Target Procedure|
```

## Module 1E: Damage and Super Armor
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h2> 0x1E000200|<$h2> Super/Heavy Armor|<$h2> Begins super armor or heavy armor.  Set both parameters to 0 to end the armor.|Value|Armor State|0 == None, 1 == Super Armor, 2 == Knockback Based Heavy Armor 3 == Damage Based Heavy Armor
|||Scalar|Heavy Armor Tolerance|The minimum damage or KB that will cause the character to flinch when using heavy armor.
0x1E010100|Set Damage Immunity?|Used at the start of Withdraw; might have something to do with Squirtle's immunity to damage during the move.|Boolean|Undefined|undefined
0x1E030100|Add/Subtract Damage|Adds or subtracts the specified amount of damage from the character's current percentage.|Scalar|Damage|The amount of damage to add or subtract.
```

## Module 1F: Items
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x1F000100|Pickup Item|Cause the character to recieve the closest item in range.|Value|Undefined|
<$h2> 0x1F000200|<$h2> Pickup Item|<$h2> Cause the character to recieve the closest item in range.|Value|Undefined|
|||Value|Undefined|
<$h4> 0x1F000400|<$h4> Pickup Item|<$h4> Cause the character to receive the closest item in range.|Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
<$h3> 0x1F010300|<$h3> Throw Item|<$h3> Cause the character to throw the currently held item.|Variable|Undefined|
|||Variable|Undefined|
|||Variable|Undefined|
0x1F020000|Drop Item|Cause the character to drop any currently held item.|<$w3>
0x1F030100|Consume Item|Cause the character to consume the currently held item.|Value|Undefined|
<$h2> 0x1F040200|<$h2> Item Property|<$h2> Modify a property of the currently held item.|Value|Undefined|
|||Scalar|Undefined|
0x1F050000|Fire Weapon|Fires a shot from the currently held item.  (May have other unknown applications)|<$w3>
0x1F060100|Fire Projectile|Fires a projectile of the specified degree of power.|<$w3>
0x1F070100|Items 1F| Is used when firing a cracker launcher.|Variable|Undefined|
0x1F080100|Generate Item|Generate an item in the character's hand.|Value|Undefined|
0x1F090100|Item Visibility|Determines visibilty of the currently held item.|Boolean|Item Visibility|Set Boolean: True == Visible, False == Invisible
0x1F0A0000|Obliterate Held Item|Deletes the item that the character is holding|<$w3>
0x1F0C0100|Beam Sword Trail|Creates a beam sword trail. Probably has more uses among battering weapons.|Value|Undefined|
<$h5> 0x1F0E0500|<$h5> Throw Item|<$h5> Causes the character to throw the currently held item.|Scalar|Undefined|
|||Scalar|Undefined|
|||Variable|Undefined|
|||Variable|Undefined|
|||Variable|Undefined|
```


[[Category:Brawl Documentation]]

## Module 20: Turn?
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h2> 0x20000200|<$h2> Turn 00|<$h2> |Variable|Undefined|
|||Boolean|Undefined|undefined
```

## Module 21: Flash Overlays
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x21000000|Terminate Flash Effect|Terminate all currently active flash effects.|<$w3>
<$h4> 0x21010400|<$h4> Flash Overlay Effect|<$h4> Generate a flash overlay effect over the character with the specified colors and opacity. Replaces any currently active flash effects.|Value|R|The red value from 0-255.
|||Value|G|The green value from 0-255.
|||Value|B|The blue value from 0-255.
|||Value|A|The alpha value from 0-255 (0 == fully transparent, 255 == fully opaque).
<$h5> 0x21020500|<$h5> Change Flash Overlay Color|<$h5> Changes the color of the current flash overlay effect.|Value|Transition Time|The number of frames the colour change takes.
|||Value|R|The red value (0-255) of the target colour.
|||Value|G|The green value (0-255) of the target colour.
|||Value|B|The blue value (0-255) of the target colour.
|||Value|A|The alpha value (0-255) of the target colour.
<$h6> 0x21050600|<$h6> Flash Light Effect|<$h6> Generate a flash lighting effect over the character with the specified colors, opacity and angle.  Replaces any currently active flash effects.|Value|R|The red value from 0-255.
|||Value|G|The green value from 0-255.
|||Value|B|The blue value from 0-255.
|||Value|A|The alpha value from 0-255 (0 == fully transparent, 255 == fully opaque).
|||Scalar|Angle|The angle in degrees of the virtual light source.
|||Scalar|''Unknown''|Possibly the distance of the virtual light source?
<$h5> 0x21070500|<$h5> Change Flash Light Colour|<$h5> Changes the colour of the current flash light effect.|Value|Transition Time|The number of frames the colour change takes.
|||Value|R|The red value (0-255) of the target colour.
|||Value|G|The green value (0-255) of the target colour.
|||Value|B|The blue value (0-255) of the target colour.
|||Value|A|The alpha value (0-255) of the target colour.
```

## Module 22: Team-Based?
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x22000100|Set Team?|Used with a parameter of -1 for a few explosives just before they go off (possibly to remove team allegiance and therefore hit the user).|Value|Undefined|undefined
0x22020100|Set Ownership|used in explosives to enable damage to the original attacker|Value|Owner|Usually 0x14
```

## Module 64: Cancel
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x64000000|Allow Interrupt|Allow the current action to be interrupted by another action.|<$w3>
0x64010000|Disallow Interrupt|Disable all interrupts on the current action|<$w3>
0x64020000|Cancel 02|undefined|<$w3>
```

## Module 65: Unknown
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x65000000|Destroy Item||<$w3h1>||
<$w1h2> 0x65030200|<$w1h2> Unknown|<$w1h2> Something with rotation on item spawning.|Scalar|Undefined|
|||Scalar|Undefined|
<$w1h3>0x65030300|<$w1h3>Set Model Rotation|<$w1h3>null|Scalar|Pitch|<$w1h3>https://en.wikipedia.org/wiki/Aircraft_principal_axes
|||Scalar|Yaw|
|||Scalar|Roll|
0x65040100|Deletion Timer|Sets how many frames an item has to live? (Also used in enemy files.)|Value|Lifetime (frames)?|
0x65050100|Unknown|Unknown. Appears to be another timer.|Value|Undefined|
0x65070100|Find Target|Sets the target of the item's AI, which it will then follow|Value|???|usually 0x2 or 0x4
<$w1h2> 0x65070200|<$w1h2> Unknown|<$w1h2> Unknown. Appears to affect float variables. Used twice in the Jyk file.|Variable|Undefined|
|||Variable|Undefined|
<$w1h3> 0x65070300|<$w1h3> Unknown|<$w1h3> Unknown. Appears to affect float variables. Used in one of Manaphy's Actions.|Variable|Undefined|
|||Variable|Undefined|
|||Variable|Undefined|
<$w1h2> 0x65090200|<$w1h2> Unknown|<$w1h2> Unknown. Appears to affect float variables.|Variable|Undefined|
|||Variable|Undefined|
<$w1h2> 0x650F0200|<$w1h2> Unknown|<$w1h2>|Variable|Undefined|
|||Value|Undefined|undefined
<$w1h9> 0x65130900|<$w1h9> Generate Ratio-Based Random Number|<$w1h9> Generates a random number from 0 to [number of arguments-2], with the arguments starting at 1 being based on ratios.|Variable|Result Variable|The result of the function is put in this variable.
|||Scalar|Ratio 1|
|||Scalar|Ratio 2|
|||Scalar|Ratio 3|
|||Scalar|Ratio 4|
|||Scalar|Ratio 5|
|||Scalar|Ratio 6|
|||Scalar|Ratio 7|
|||Scalar|Ratio 8|
<$w1h2> 0x65170200|<$w1h2> Unknown|<$w1h2> Has something to do with sounds?|Value|Undefined|
|||Value|Undefined|undefined
0x651B0100|Activate slow motion?|Used in the Dragoon.|Value|Duration?|
0x651C0000|Deactivate slow motion?|Used in the Dragoon.|<$w3h1>||
<$w1h2>0x651D0200|<$w1h2>Set Ownership|<$w1h2>null|Value|Owner?|0xFFFFFFFF to be neutral
|||Value|Team?|
0x651F0100|Unknown|Unknown. Used in the bumper item at least.|Value|Undefined|
0x652C0000|Unknown|Unknown. In charizard's sideB subaction. If you nop it, he will not make rock shards or play the rock break sfx. wtf.|<$w3h1>||
```

## Module 66: Unknown (SSE-related?)
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$w1h2> 0x66000200|<$w1h2> Unknown|<$w1h2>|Value|Undefined|
|||Value|Undefined|
<$w1h4>0x66000400|<$w1h4> Unknown|<$w1h4> Unknown. Used five times in the Jyk file with the values increasing somewhat constantly for each one (difficulty-related?).|Value|Undefined|
|||Value|Undefined|
|||Scalar|Undefined|
|||Value|Undefined|
<$w1h13>0x66000D00|<$w1h13>Apply Momentum|<$w1h13>|Scalar|x speed|
|||Scalar|y speed|
|||Scalar|x multiplier|
|||Scalar|y multiplier|
|||Value|???|
|||Value|???|
|||Value|???|
|||Value|???|
|||Value|???|
|||Value|???|<$w1h3>Based on facing direction
|||Value|???|
|||Value|???|
|||Value|???|
<$w1h3>0x66010300|<$w1h3>Constant Model Rotation|<$w1h3>Call this and the model will rotate at this rate continuously|Scalar|Pitch|<$w1h3>https://en.wikipedia.org/wiki/Aircraft_principal_axes
|||Scalar|Yaw|
|||Scalar|Roll|
<$w1h3>0x66020300|<$w1h3>Remove Momentum|<$w1h3>null|Scalar|x amount|
|||Scalar|y amount|
|||Value|???|possibly Z amount?
<$w1h3>0x66050300|<$w1h3>Metroid Movement?|<$w1h3>"metroid-like movement, has to be called once"|Value|???|Usually 0x4
|||Scalar|Speed|
|||Value|Timer|Time until it moves again?
0x66060100|Unknown|Unknown. Used in action C of bumper at least.|Value|Undefined|
0x66070100|Unknown||Value|Undefined|
<$w1h2> 0x66090200|<$w1h2> Unknown|<$w1h2>|Value|Undefined|
|||Value|Undefined|
<$w1h2> 0x660A0200|<$w1h2> Unknown|<$w1h2>|Value|Undefined|
|||Value|Undefined|
<$w1h2> 0x660B0200|<$w1h2> Unknown|<$w1h2>|Value|Undefined|
|||Value|Undefined|
<$w1h3>0x660B0300|<$w1h3>Set Model Rotation|<$w1h3>|Scalar|Pitch|<$w1h3>https://en.wikipedia.org/wiki/Aircraft_principal_axes
|||Scalar|Yaw|
|||Scalar|Roll|
```
## Module 69: Unknown (SSE-related?)
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x69000100|Unknown|Only known to be used in cases where "Req[0x12], 1, <the variable>" is true.|Variable|Undefined|
```

## Module 6A: Unknown (SSE-related?)
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
0x6A000100|Unknown||Value|Undefined|
<$h2> 0x6A000200|<$h2> Unknown|<$h2> |Value|Undefined|
|||Value|Undefined|
<$h4> 0x6A000400|<$h4> Unknown|<$h4> |Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
|||Value|Undefined|
0x6A010100|Unknown||Value|Undefined|
0x6A020000|Unknown||<$w3>
0x6A030000|Unknown||<$w3>
```

## Module 6B: Unknown (SSE-related?)
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h3> 0x6B020300|<$h3> Unknown|<$h3> |Boolean|Undefined|
|||Variable|Undefined|
|||Variable|Undefined|
```

## Module 6E: Unknown (SSE-related?)
```handsontable
# OPTIONS
# COLUMNS
Hex id {
  renderer: hex
}
label
description
parameters [
  type
  label
  description
]
# DATA
<$h2> 0x6E000200|<$h2> Unknown|<$h2> |Value|Undefined|
|||Value|Undefined|
```

