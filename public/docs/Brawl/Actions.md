# Actions

This is a list of action IDs common among fighters

## Fighter.pac

```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
hex id {
  renderer: hex
}
short name
description
subactions called
# DATA
0x00|Wait|Idle.
0x01|Walk|Walking.
0x02|WalkBrake|Stopping from a walk.
0x03|Dash|Initial dash.
0x04|Run|Running.
0x05|RunBrake|Stopping from a run.
0x06|Turn 1|Turning while standing.
0x07|Turn 2|Turning while dashing.
0x08|TurnRun|Turning while running.
0x09|TurnRunBrake|Turning while running and stopping during the turn.
0x0A|JumpSquat|Preparing to jump.
0x0B|JumpF/JumpB|First jump.
0x0C|JumpAerial(F/B)|Double jump.
0x0D|MultiJump|Multijump.
0x0E|Fall|Regular fall.
0x0F|FallAerial|Regular fall after having used last jump.
0x10|FallSpecial|Falling while disabled.
0x11|Squat|Entering crouching state.
0x12|SquatWait|Crouching.
0x13|SquatF|Crawling forwards.
0x14|SquatB|Crawling backwards.
0x15|SquatRv|Standing up from crouching state.
0x16|LandingHeavy|Hardlanding.
0x17|LandingLight|Light landing.
0x18||Landing during an aerial attack.
0x19|LandingFallSpecial|Land Dissabled
0x1A|GuardOn|Enter Shield
0x1B|Guard|Shield
0x1C|GuardOff|Exit Shield
0x1D|GuardDamage|shield stun
0x1E|EscapeN|Spotdodge
0x1F|EscapeF|Roll Forward
0x20|EscapeB|Roll Back
0x21|EscapeAir|Air Dodge
0x22||Rebound (transitions to 23)
0x23||Rebound
0x24||Jab1, Jab2, Jab3
0x25||Rapid jab
0x26|AttackDash|Dash attack.
0x27|AttackS3|Forward tilt.
0x28|AttackHi3|Up tilt.
0x29|AttackLw3|Down tilt.
0x2A|AttackS4Start|Side Smash Windup
0x2B|AttackS4Hold|Side Smash Charge
0x2C|AttackS4S|Side Smash Attack
0x2D|AttackLw4Start|Down Smash Windup
0x2E|AttackLw4Hold|Down Smash Charge
0x2F|AttackLw4|Down Smash Attack
0x30|AttackHi4Start|Up Smash Windup
0x31|AttackHi4Hold|Up Smash Charge
0x32|AttackHi4|Up Smash Attack
0x33||Air Attack(All)
0x34|Catch|Grab
0x35|CatchWait|Grabbing Enemy
0x36|CatchDash|Dash Grab
0x37||Holding Enemy
0x38|CatchTurn|Pivot Grab
0x39|CatchWait|Hold
0x3A|CatchAttack|Grab Attack
0x3B|CatchCut|Release
0x3C||Throw
0x3D||Grabbed
0x3E|CaptureWaitHi|Held
0x3F||Held Damage
0x40|CaptureCut|Escape
0x41|CaptureJump|jump break
0x42||Thrown
0x43|GroundHit|Occurs when you get hit and remain grounded?
0x44|AirHitLand|Occurs when landing after being hit in the air?
0x45||Hitstun
0x46||Hit ground
0x47||Hit wall
0x48||Hit ceiling
0x49|DamageFall|Tumble
0x4A||Hit ground (tumble)
0x4B||Hit wall (tumble)
0x4C||Hit ceiling (tumble)
0x4D||Lying
0x4E||tech roll from lying on ground
0x4F||struggle on ground a bit
0x50||tech roll from lying on ground
0x51||get up
0x52||tech roll from lying on ground
0x53||get up attack
0x54||bounce on ground
0x55||hit ground hard
0x56||broken shield that flies up
0x57||hit ground hard with broken shield
0x58||hit ground softly with broken shield
0x59||get up from lying on ground with broken shield
0x5A||shield broken dizziness
0x5B||recover from broken shield
0x5C||fall asleep
0x5D||something in the middle of sleep
0x5E||wake up from sleep
0x5F||stunned from Deku Nut
0x60||tech (gound)
0x61||tech roll
0x62||tech (wall)
0x63||tech jump
0x64||tech (ceiling)
0x65||Running into a wall
0x66||Hitting head on ceiling
0x67||WallJump
0x68||Wallcling initial
0x69||Wallcling wait
0x6A||Wallcling end
0x6B||Goes to 6A
0x6C||Jump from wallcling
0x6D||Footstool
0x6E||Getting Footstooled
0x6F||Getting back up from being footstooled
0x70||get footstooled in air
0x71||Spinning after being footstooled in air
0x72||Flipping through platform
0x73||Begin to grab ledge [if forced in air, puts you in fal1 state with aerial jumps restored]
0x74||Ledge grab
0x75||Ledge hang
0x76||Ledge attack
0x77||Ledge climb
0x78||Ledge roll
0x79||Ledge jump start
0x7A||Ledge jump end
0x7B||Ledge jump end?
0x7C||Begins to teeter off a ledge
0x7D||Teetering off a ledge
0x7E|EdgeSlip|When knocked back off an edge
0x7F|FireTether|Z-Air
0x80||Tether aiming
0x81||Tether grabbing stage
0x82||Rising from tether wait
0x83||big smoke cloud landing effect ???
0x84|GlideStart| - begins glide. - Will flop over if on the ground.
0x85|GlideDirection| - The part of the glide animation in which you control your angle
0x86|GlideLanding| - get up from lying on stomach???
0x87|Glide Attack| Glide Attack
0x88|GlideEnd|GlideEnd - The end of a glide.
0x89||Trip on rear end, running over banana peel activates this
0x8A||Hitting ground from slip
0x8B||turn around and trip
0x8C||fall forward and trip
0x8D||on the ground in a tripped state
0x8E||get up from tripped state
0x8F||attack from tripped state
0x90||roll forward out of tripped state
0x91||roll backward out of tripped state
0x92||grab,climb ladder
0x94||waiting on ladder
0x96|GrabItem|
0x97|GrabHeavyItem|
0x98||Heavy item stand
0x99||Heavy item turn
0x9A||Heavy item walk
0x9B|ThrowItem|Throwing/dropping item
0x9C|ThrowItemRun|Throwing item from running
0x9D|ThrowHeavyItem|Throwing heavy item
0x9E|NeutralSwingItem|
0x9F|TiltSwingItem|
0xA0|SmashSwingItemWindup|
0xA1|SmashSwingItem|
0xA2|SmashSwingItemCharge|
0xA3|DashSwingItem|
0xA4||Shooting item stand/Cracker Launcher stand
0xA5||Shooting item f-walk/Cracker Launcher walk
0xA6||
0xA7||Shooting item b-walk
0xA8||
0xA9||Shooting item f-dash/Cracker Launcher dash
0xAA||Shooting item b-dash
0xAB||Shooting item/Cracker Launcher jumpsquat
0xAC||Shooting item/Cracker Launcher jump/fall
0xAD||Shooting item air fire/Cracker Launcher platform drop and air fire
0xAE||Shooting item/Cracker Launcher land
0xAF|ItemScrew|Screw attack first jump
0xB0|ItemScrew|Screw attack second jump
0xB1|ItemScrewFall|Falling from screw attack
0xB2|ItemAssist|Assist trophy
0xB3|Fall|Falling in water
0xB4|SwimRise|surfacing animation
0xB5|SwimDamage|SwimUp,surfacing animation (same?)
0xB6|Swim|treading water (good health)
0xB7|SwimF|actively swimming (as in swimming forward)
0xB8|SwimEnd|going from swimming forward to treading
0xB9|SwimTurn|turning around in water
0xBA|JumpF|about to jump out of water (essentially JumpCrouch)
0xBB|SwimDrown|floundering (about to drown)
0xBC|SwimDrownOut|drowning
0xBD||Death
0xBE||Respawn
0xBF||
0xC0||
0xC1||
0xC2||
0xC3||
0xC4||Spring Jump
0xC5||
0xC6||Eaten by fish on summit
0xC7||Enter grounded state
0xC8||In grounded state
0xC9||Exit grounded state
0xCA||Frozen state
0xCB||Exiting frozen state
0xCC|ChompGrabbed|Caught in Chomp
0xCD||Being chomped?
0xCE||
0xCF|FalconDiveGrabbed|Caught in Falcon Dive
0xD0|BeingInhaled|Kirby/Dedede Inhaled Flying
0xD1||Kirby/Dedede Inhaled Swallowed
0xD2||Kirby/Dedede Inhaled Inside
0xD3||Kirby/Dedede Inhaled Spit/Copy
0xD4||Kirby/Dedede Inhaled Post Spit/Copy Recoil (1 frame)
0xD5||
0xD6|MonkeyFlipGrabbed|Caught in Monkey Flip
0xD7||Diddy Kong Monkey Flip thrown (either)
0xD8||
0xD9||Start of DK's Cargo
0xDA||Caught in DK's Cargo
0xDB||
0xDC||Riding Warp Star
0xDD||Diving Warp Star
0xDE||Using Dragoon
0xDF||Hammer stand
0xE0||Hammer turn
0xE1||Hammer walk
0xE2||Hammer jumpsquat
0xE3||Hammer jump/fall
0xE4||
0xE5||Hammer landing
0xE6|DarkDiveGrabbed|Caught in Dark Dive
0xE7|FlameChokeGroundGrabbed|Caught in Flame Choke (initially) (ground)
0xE8|FlameChokeAirGrabbed|Caught in Flame Choke (air)
0xE9|FlameChokeAirPlummetingGrabbed|Caught in Flame Choke and plummeting (?)
0xEA|FlameChokeScramble|Caught in Flame Choke and flailing (ground)
0xEB|EggImmiment|Caught by Egg Lay (being dragged by tongue)
0xEC|Egged|Caught in an egg
0xED||Action victims go into when caught by Link's/Toon Link's Final Smash.
0xEE|FlyingSlamGrabbed|Caught in Flying Slam
0xEF||Action victims go into when caught by Meta Knight's Final Smash.
0xF0||Plunged (i.e. Pitfall through soft platform)
0xF1||This action is what Kirby and MK go into when they use their Uthrows
0xF2||Enlarge(and Size Revert)
0xF3||Shrink(and Size Revert)
0xF4||
0xF5||
0xF6||
0xF7||First Action victims go into for Ike's Final Smash.
0xF8||Second Action victims go into for Ike's Final Smash.
0xF9||
0xFA||Action victims go into when grabbed by Master/Crazy Hand.
0xFB||
0xFC||
0xFD||First Action victims go into for Captain Falcon's Final Smash.
0xFE||Second Action victims go into for Captain Falcon's Final Smash.
0xFF||
0x100||First Action victims go into for Kirby's Final Smash.
0x101||Second Action victims go into for Kirby's Final Smash.
0x102||Swallowed by kirby/dedede?
0x103||Shot out by kirby/dedede?
0x104||Action victims go into for Tabuu's whip/chain grab.
0x105||Action victims go into when grabbed by the Bucculus Enemy on the ground.
0x106||Action victims go into when grabbed by the Buccluls Enemy in the air.
0x107||Yoshi normal grabbed
0x108||Yoshi held grab?
0x109||Yoshi held pummel?
0x10A||Yoshi held pummel/release?
0x10B||Unloaded
0x10C||Taunt(All 3)
0x10D||smash taunt
0x10E||Entrance
0x10F||Victory(All)
0x110||Loss
0x111||??
```

## Fit*.pac

```handsontable
# OPTIONS
dropdownMenu: true
filters: true
contextMenu: true
# COLUMNS
hex id {
  renderer: hex
}
short name
description
subactions called
# DATA
0x112|SpecialN|Neutral special.
0x113|SpecialS|Side special.
0x114|SpecialHi|Up special.
0x115|SpecialLw|Down special.
0x116|Final|Final Smash.
```

## References

- [The ActionID Thread](http://www.smashboards.com/showthread.php?t=239768)