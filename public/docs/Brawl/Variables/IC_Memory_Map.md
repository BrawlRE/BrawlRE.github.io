## Global? Float IC-Basics
```handsontable
# COLUMNS
Memory Address {
  renderer: hex
}
OverlayCommon Offset {
  renderer: hex
}
IC#
Default Value
Label
# DATA
0x80B87AA8 | 0x514648 |   2002 |        0.4 | Hitstun Constant
0x80B87AAC | 0x51464C |   2003 |         10 | Hitstun frames threshold for entering Damage_2 non-tumble animations
0x80B87AB0 | 0x514650 |   2004 |         21 | Hitstun frames threshold for entering Damage_3 non-tumble animations
0x80B87AB4 | 0x514654 |   2005 |         32 | Hitstun frames threshold for entering DamageFly_ tumble animations (80 KB with a 0.4 hitstun constant)
0x80B87AB8 | 0x514658 |   2006 |   0.785398 | Move angle against aerial opponents for Sakurai angle (radians)
0x80B87ABC | 0x51465C |   2007 |         37 | 361 aka Sakurai angle cap (vs grounded opponents, angle scales from 0 to this within the KB thresholds below)
0x80B87AC0 | 0x514660 |   2008 |         60 | 361 aka Sakurai angle lower KB threshold
0x80B87AC4 | 0x514664 |   2009 |         88 | 361 aka Sakurai angle upper KB threshold
0x80B87AC8 | 0x514668 |   2010 |       0.03 | Multiplier to convert Knockback into Launch Speed (tumble threshold is 2.4 with 0.4 hitstun constant)
0x80B87ACC | 0x51466C |   2011 |        8.3 | Maximum grounded Launch Speed
0x80B87AD0 | 0x514670 |   2012 |        0.5 | Launch Speed multiplier for 365 angle moves
0x80B87AD4 | 0x514674 |   2013 |   0.174533 | Min Launch angle below ground to bounce off while grounded (radians)
0x80B87AD8 | 0x514678 |   2014 |        0.8 | Grounded stage bounce V launch speed multiplier.
0x80B87ADC | 0x51467C |   2015 |    1.22173 | Min angle for DamageFlyTop
0x80B87AE0 | 0x514680 |   2016 |    1.91986 | Max angle for DamageFlyTop
0x80B87AE4 | 0x514684 |   2017 |        0.3 | Odds for DamageFlyRoll KB animation when 100+ damage
0x80B87AE8 | 0x514688 |   2018 |         30 | Hitlag Maximum
0x80B87AEC | 0x51468C |   2019 |   0.384615 | Hitlag Multiplier
0x80B87AF0 | 0x514690 |   2020 |          5 | Base Hitlag Amount
0x80B87AF4 | 0x514694 |   2021 |       0.75 | Affects amount of time spent shaking in hitlag (does not apply to electrical hitlag)
0x80B87AF8 | 0x514698 |   2022 |          4 | Affects amount of time spent shaking in hitlag (does not apply to electrical hitlag)
0x80B87AFC | 0x51469C |   2023 |          2 | V launch speed multiplier for moves with Reverse Effect (cape)
0x80B87B00 | 0x5146A0 |   2024 |       2.25 | H launch speed multiplier for moves with Reverse Effect (cape)
0x80B87B04 | 0x5146A4 |   2025 |          7 | Minimum knockback to lock characters during DownDamage
0x80B87B08 | 0x5146A8 |   2026 |         15 | Minimum knockback for longer lock animation
0x80B87B0C | 0x5146AC |   2027 |         35 | Maximum launch angle to lock (only matters on very steep slopes)
0x80B87B10 | 0x5146B0 |   2028 |        1.5 | Electric Hitlag Constant
0x80B87B14 | 0x5146B4 |   2029 |         80 | Time spent in paralyze hitlag
0x80B87B18 | 0x5146B8 |   2030 |       0.05 | Time spent in paralyze hitlag multiplier?
0x80B87B1C | 0x5146BC |   2031 |         14 | Paralyze effect hitlag for opponent
0x80B87B20 | 0x5146C0 |   2032 |         55 | Minimum KB before tripping is possible when hit
0x80B87B24 | 0x5146C4 |   2033 |         11 | Total damage from outside sources per hit while grabbed to cause grab break
0x80B87B28 | 0x5146C8 |   2034 |         10 | Total damage from outside sources while grabbed to cause a grab break
0x80B87B2C | 0x5146CC |   2035 |         50 | KB threshold for screen shaking (weak)
0x80B87B30 | 0x5146D0 |   2036 |         70 | KB threshold for screen shaking (strong)
0x80B87B34 | 0x5146D4 |   2037 |          9 | Damage difference threshold for clanking
0x80B87B38 | 0x5146D8 |   2038 |        0.3 | rowspan=4| Rebound pushback formula: (((damage * [2038]) + [2039]) * [2040]) + [2041]. First constants control rebound duration.
0x80B87B3C | 0x5146DC |   2039 |          3
0x80B87B40 | 0x5146E0 |   2040 |      0.007
0x80B87B44 | 0x5146E4 |   2041 |        0.5
0x80B87B48 | 0x5146E8 |   2042 |        0.4 | Repeat from start of this table? Presumably for Subspace
0x80B87B4C | 0x5146EC |   2043 |         10
0x80B87B50 | 0x5146F0 |   2044 |         21
0x80B87B54 | 0x5146F4 |   2045 |         32
0x80B87B58 | 0x5146F8 |   2046 |   0.785398
0x80B87B5C | 0x5146FC |   2047 |         37
0x80B87B60 | 0x514700 |   2048 |         60
0x80B87B64 | 0x514704 |   2049 |         88
0x80B87B68 | 0x514708 |   2050 |       0.03
0x80B87B6C | 0x51470C |   2051 |        8.3
0x80B87B70 | 0x514710 |   2052 |        0.5
0x80B87B74 | 0x514714 |   2053 |   0.174533
0x80B87B78 | 0x514718 |   2054 |        0.8
0x80B87B7C | 0x51471C |   2055 |    1.22173
0x80B87B80 | 0x514720 |   2056 |    1.91986
0x80B87B84 | 0x514724 |   2057 |        0.3
0x80B87B88 | 0x514728 |   2058 |         18
0x80B87B8C | 0x51472C |   2059 |   0.384615
0x80B87B90 | 0x514730 |   2060 |          4
0x80B87B94 | 0x514734 |   2061 |       0.75
0x80B87B98 | 0x514738 |   2062 |          4
0x80B87B9C | 0x51473C |   2063 |          2
0x80B87BA0 | 0x514740 |   2064 |       2.25
0x80B87BA4 | 0x514744 |   2065 |          7
0x80B87BA8 | 0x514748 |   2066 |         15
0x80B87BAC | 0x51474C |   2067 |         35
0x80B87BB0 | 0x514750 |   2068 |        1.5
0x80B87BB4 | 0x514754 |   2069 |         80
0x80B87BB8 | 0x514758 |   2070 |       0.05
0x80B87BBC | 0x51475C |   2071 |         14
0x80B87BC0 | 0x514760 |   2072 |         55
0x80B87BC4 | 0x514764 |   2073 |         11
0x80B87BC8 | 0x514768 |   2074 |         10
0x80B87BCC | 0x51476C |   2075 |         50
0x80B87BD0 | 0x514770 |   2076 |         70
0x80B87BD4 | 0x514774 |   2077 |          9
0x80B87BD8 | 0x514778 |   2078 |        0.3
0x80B87BDC | 0x51477C |   2079 |          3
0x80B87BE0 | 0x514780 |   2080 |      0.007
0x80B87BE4 | 0x514784 |   2081 |        0.5
```

## Global? Int IC-Basics
```handsontable
# COLUMNS
Memory Address {
  renderer: hex
}
OverlayCommon Offset {
  renderer: hex
}
IC#
Default Value
Label
# DATA
0x80B87BE8 | 0x514788 |  22001 |       230 | Lower angle threshold for meteor smash range
0x80B87BEC | 0x51478C |  22002 |       310 | Upper angle threshold for meteor smash range
0x80B87BF0 | 0x514790 |  22003 |       100 | Minimum damage to use the DamageFlyRoll knockback animation
0x80B87BF4 | 0x514794 |  22004 |         8 | Odds of 2nd type of getting-hit GFX
0x80B87BF8 | 0x514798 |  22005 |         7 | Max amount of times projectiles can be reflected
0x80B87BFC | 0x51479C |  22006 |       230 | Repeat from start of this table??
0x80B87C00 | 0x5147A0 |  22007 |       310
0x80B87C04 | 0x5147A4 |  22008 |       100
0x80B87C08 | 0x5147A8 |  22009 |         8
0x80B87C0C | 0x5147AC |  22010 |         7
```

## Float IC-Basics
```handsontable
# COLUMNS
Memory Address {
  renderer: hex
}
OverlayCommon Offset {
  renderer: hex
}
IC#
Default Value
Label
# DATA
0x80B88270 | 0x514E10 | 3117 | 0.18 | Walk Sensitivity
0x80B88274 | 0x514E14 | 3118 | 0.5 | Walk Accel Multiplier
0x80B88278 | 0x514E18 | 3119 | 2
0x80B8827C | 0x514E1C | 3120 | 3 | Walk Maximum Animation Speed
0x80B88280 | 0x514E20 | 3121 | -0.25 | Turn Sensitivity
0x80B88284 | 0x514E24 | 3122 | 0.8 | Dash, Pivot, & F-Smash Sensitivity
0x80B88288 | 0x514E28 | 3123 | 5 | Dash > Item Toss/Drop Input Window (Frames)
0x80B8828C | 0x514E2C | 3124 | 5
0x80B88290 | 0x514E30 | 3125 | 0.3 | Dash Exit Momentum Multiplier
0x80B88294 | 0x514E34 | 3126 | 0.625 | Run Sensitivity
0x80B88298 | 0x514E38 | 3127 | 0.4 | Run Accel Multiplier
0x80B8829C | 0x514E3C | 3128 | 1 | Dash > RunBrake Friction Multiplier
0x80B882A0 | 0x514E40 | 3129 | 0.5 | Max Run Speed Multiplier to occur Dash > RunBrake
0x80B882A4 | 0x514E44 | 3130 | -0.375 | Turn Grab Sensitivity
0x80B882A8 | 0x514E48 | 3131 | 10 | Turn > F-Tilt/F-Smash/Side B/Item-Toss input window
0x80B882AC | 0x514E4C | 3132 | 2.5 | TurnRun Accel Multiplier on the Ledge
0x80B882B0 | 0x514E50 | 3133 | -0.66 | Crouch/TetherDrop Sensitivity
0x80B882B4 | 0x514E54 | 3134 | 0.3 | CrawlF Min Sensitivity
0x80B882B8 | 0x514E58 | 3135 | 0.65 | CrawlF Max Sensitivity
0x80B882BC | 0x514E5C | 3136 | -0.3 | CrawlB Min Sensitivity
0x80B882C0 | 0x514E60 | 3137 | -0.65 | CrawlB Max Sensitivity
0x80B882C4 | 0x514E64 | 3138 | 0.6625 | Tap Jump Sensitivity
0x80B882C8 | 0x514E68 | 3139 | 0.125 | JumpF/JumpB Sensitivity
0x80B882CC | 0x514E6C | 3140 | 0.3 | Shorthop with Tap Jump Sensitivity
0x80B882D0 | 0x514E70 | 3141 | 0.5625 | Dash/Run Tap Jump Sensitivity
0x80B882D4 | 0x514E74 | 3142 | 0.3 | (Related to Footstools.)
0x80B882D8 | 0x514E78 | 3143 | 0.03
0x80B882DC | 0x514E7C | 3144 | 1
0x80B882E0 | 0x514E80 | 3145 | 0.1 | (Related to FallF & FallB animations.)
0x80B882E4 | 0x514E84 | 3146 | 0.1 | Animation Blend Speed for Fall > FallF/FallB
0x80B882E8 | 0x514E88 | 3147 | 0.05 | Minimum Blend Speed for Fall > FallF/FallB
0x80B882EC | 0x514E8C | 3148 | -0.7 | Spotdodge Sensitivity
0x80B882F0 | 0x514E90 | 3149 | 0.7 | Roll Sensitivity
0x80B882F4 | 0x514E94 | 3150 | 0.9
0x80B882F8 | 0x514E98 | 3151 | 0.25 | Ftilt Threshold
0x80B882FC | 0x514E9C | 3152 | 0.279253 | Ftilt Up Threshold
0x80B88300 | 0x514EA0 | 3153 | -0.279253 | Ftilt Down Threshold
0x80B88304 | 0x514EA4 | 3154 | 0.25 | Utilt Threshold
0x80B88308 | 0x514EA8 | 3155 | -0.25 | Dtilt Threshold
0x80B8830C | 0x514EAC | 3156 | 0.279253 | Fsmash Up Threshold
0x80B88310 | 0x514EB0 | 3157 | -0.279253 | Fsmash Down Threshold
0x80B88314 | 0x514EB4 | 3158 | 0.6625 | Upsmash Sensitivity
0x80B88318 | 0x514EB8 | 3159 | 4 | Up smash input window
0x80B8831C | 0x514EBC | 3160 | -0.6625 | Dsmash Sensitivity
0x80B88320 | 0x514EC0 | 3161 | 4 | Down smash input window
0x80B88324 | 0x514EC4 | 3162 | 1.4 | Fully charged smash damage multiplier
0x80B88328 | 0x514EC8 | 3163 | 1.2 | Smash charge interrupt knockback multiplier
0x80B8832C | 0x514ECC | 3164 | 0.25 | Fair/Bair Sensitivity
0x80B88330 | 0x514ED0 | 3165 | 0.25 | Uair/Dair Sensitivity
0x80B88334 | 0x514ED4 | 3166 | 0.56
0x80B88338 | 0x514ED8 | 3167 | -0.6625 | Fastfall Sensitivity
0x80B8833C | 0x514EDC | 3168 | 0.85 | Y Sensitivity to JumpSquat while RunBrake
0x80B88340 | 0x514EE0 | 3169 | 60 | Minimum Gliding frames required to go to GlideLanding
0x80B88344 | 0x514EE4 | 3170 | 1 | Minimum Speed upon landing for GlideLanding
0x80B88348 | 0x514EE8 | 3171 | 0.666667 | Hitlag Multiplier while Crouching or Entering Crouch
0x80B8834C | 0x514EEC | 3172 | 0.666667 | KB Multiplier while Crouching (Unused)
0x80B88350 | 0x514EF0 | 3173 | 0.7 | Input Distance Threshold for Smash DI
0x80B88354 | 0x514EF4 | 3174 | 6 | Smash DI Distance
0x80B88358 | 0x514EF8 | 3175 | 3 | Automatic Smash DI Distance
0x80B8835C | 0x514EFC | 3176 | 0.66 | Shield SDI Distance Multiplier
0x80B88360 | 0x514F00 | 3177 | 5 | Downward Velocity required to hit the floor in action 44
0x80B88364 | 0x514F04 | 3178 | 0.5
0x80B88368 | 0x514F08 | 3179 | 220 | Lay auto-stand timer
0x80B8836C | 0x514F0C | 3180 | 0.2 | Trip Stand Sensitivity
0x80B88370 | 0x514F10 | 3181 | 0.2 | Trip Roll Sensitivity
0x80B88374 | 0x514F14 | 3182 | 60
0x80B88378 | 0x514F18 | 3183 | 0.6625
0x80B8837C | 0x514F1C | 3184 | 0 | B-Reverse or Turnaround B Sensitivity
0x80B88380 | 0x514F20 | 3185 | 0.6 | Side+B Sensitivity
0x80B88384 | 0x514F24 | 3186 | 0.55 | Up+B/Down+B Sensitivity
0x80B88388 | 0x514F28 | 3187 | -0.6875 | Platform Drop Sensitivity
0x80B8838C | 0x514F2C | 3188 | -0.5 | Platform Drop Momentum
0x80B88390 | 0x514F30 | 3189 | 14
0x80B88394 | 0x514F34 | 3190 | 1
0x80B88398 | 0x514F38 | 3191 | 0.051
0x80B8839C | 0x514F3C | 3192 | -0.66 | Holding down to stop Ledgegrab and Tether AutoPull up
0x80B883A0 | 0x514F40 | 3193 | 100 | CliffQuick/CliffSlow damage %
0x80B883A4 | 0x514F44 | 3194 | 0.25 | Ledge Release/Getup Sensitivity
0x80B883A8 | 0x514F48 | 3195 | 0.872665 | Analog Range for IC-Basic[3194] (Radians; or ~50 Degrees)
0x80B883AC | 0x514F4C | 3196 | 0.6 | Reverse Edge Grab Box Width Multiplier
0x80B883B0 | 0x514F50 | 3197 | 25
0x80B883B4 | 0x514F54 | 3198 | 0.2 | Ukemi Roll Sensitivity
0x80B883B8 | 0x514F58 | 3199 | 0.1 | Ukemi H Speed Multiplier
0x80B883BC | 0x514F5C | 3200 | 400 | Base Disabled Time on Shield Break
0x80B883C0 | 0x514F60 | 3201 | 90 | Minimum Disabled Time on Shield Break (does not work due to coding error)
0x80B883C4 | 0x514F64 | 3202 | 1 | Reduction per Frame on Shield Break
0x80B883C8 | 0x514F68 | 3203 | 3 | Reduction per Input on Shield Break
0x80B883CC | 0x514F6C | 3204 | 0.5 | Directional Input Threshold on Shield Break
0x80B883D0 | 0x514F70 | 3205 | 10
0x80B883D4 | 0x514F74 | 3206 | 0.25 | Base trip rate on attacks = (IC-Basic[3206] + IC-Basic[3207]) / 2 = 0.135. If a move has a bonus trip rate equal to 0, it requires Damage_3 animation to trip.
0x80B883D8 | 0x514F78 | 3207 | 0.02 | Used for Base Trip Rate on Attacks
0x80B883DC | 0x514F7C | 3208 | 1 | Trip rate multiplier on dash or dash-turn
0x80B883E0 | 0x514F80 | 3209 | 0.02 | Upper value used to calculate trip chance when dashing (0.02 - 0)*0.5 + 0.
0x80B883E4 | 0x514F84 | 3210 | 0 | Lower value used to calculate trip chance when dashing.
0x80B883E8 | 0x514F88 | 3211 | 0.025 | Upper value used to calculate trip chance on dash-turn (0.025 - 0)*0.5 + 0.
0x80B883EC | 0x514F8C | 3212 | 0 | Lower value used to calculate trip chance on dash turn.
0x80B883F0 | 0x514F90 | 3213 | 150 | Maximum % to Receive from Magnifying-Glass
0x80B883F4 | 0x514F94 | 3214 | 1 | % Received when Off Screen
0x80B883F8 | 0x514F98 | 3215 | 2 | Min Launch Speed to display player cursor
0x80B883FC | 0x514F9C | 3216 | 80 | Farthest Camera distance to display player cursor
0x80B88400 | 0x514FA0 | 3217 | 10
0x80B88404 | 0x514FA4 | 3218 | 3
0x80B88408 | 0x514FA8 | 3219 | 30
0x80B8840C | 0x514FAC | 3220 | 0.8
0x80B88410 | 0x514FB0 | 3221 | 0.7
0x80B88414 | 0x514FB4 | 3222 | 0.66
0x80B88418 | 0x514FB8 | 3223 | 0.8 | WallJump Sensitivity
0x80B8841C | 0x514FBC | 3224 | 0.96 | WallJump Decay Multiplier
0x80B88420 | 0x514FC0 | 3225 | 0.9 | Wall Jump Initial H Speed Multiplier
0x80B88424 | 0x514FC4 | 3226 | 0.75 | Footstool Height Decay Multiplier
0x80B88428 | 0x514FC8 | 3227 | 0.5 | Initial V Speed needed for Footstool
0x80B8842C | 0x514FCC | 3228 | 30 | Maximum Stage Wall Tilt for Wall Cling (Degrees)
0x80B88430 | 0x514FD0 | 3229 | -20 | Minimum Stage Wall Tilt for Wall Cling (Degrees)
0x80B88434 | 0x514FD4 | 3230 | 0.5 | Consecutive Wall Cling Time Multiplier; Equation for Timer: INT(180 * IC-Basic[3230] ^ (Wall Cling Count - 1)); Only effective if Wall Cling Count > 1.
0x80B88438 | 0x514FD8 | 3231 | 0.5
0x80B8843C | 0x514FDC | 3232 | 0.35 | Aerial attack landing lag speed mod
0x80B88440 | 0x514FE0 | 3233 | 50 | Max Shield Strength
0x80B88444 | 0x514FE4 | 3234 | 0.15 | Minimum Shield Size Multiplier
0x80B88448 | 0x514FE8 | 3235 | 8
0x80B8844C | 0x514FEC | 3236 | 16
0x80B88450 | 0x514FF0 | 3237 | 0.28 | Shield Degeneration
0x80B88454 | 0x514FF4 | 3238 | 0.07 | Shield Regeneration
0x80B88458 | 0x514FF8 | 3239 | 30 | Shield Reset (when broken, shield strength resets to this value)
0x80B8845C | 0x514FFC | 3240 | 1 | Shield Damage multiplier. Used with IC-Basic[3241] and IC-Basic[3248]
0x80B88460 | 0x515000 | 3241 | 0 | Bonus Shield Damage. Used with IC-Basic[3240] and IC-Basic[3248]
0x80B88464 | 0x515004 | 3242 | 1.15 | Shield Stun = FLOOR(((1 - IC-Basic[3249])*Damage*IC-Basic[3242] + IC-Basic[3243]) - 2).
0x80B88468 | 0x515008 | 3243 | 2 | Used with IC-Basic[3242] and IC-Basic[3249] to determine shield stun.
0x80B8846C | 0x51500C | 3244 | 0.2 | Shield Pushback equals this multiplied by shield stun formula
0x80B88470 | 0x515010 | 3245 | 1.6 | Maximum Shield Pushback
0x80B88474 | 0x515014 | 3246 | 80
0x80B88478 | 0x515018 | 3247 | 1 | Shield Health Multiplier for Calculating Shield Size. Formula: {Shield-Size} * (IC-Basic[3234] + (Current Shield HP / IC-Basic[3233]) * IC-Basic[3247] * (1 - IC-Basic[3234])); {} = Character Attributes
0x80B8847C | 0x51501C | 3248 | 0.3 | Shield Damage Resistance Ratio for calculating shield HP (Shield Damage = Damage * (1 - this) * IC-Basic[3240] + IC-Basic[3241] )
0x80B88480 | 0x515020 | 3249 | 0.7 | Shield Damage Resistance Ratio for calculating shield stun and pushback
0x80B88484 | 0x515024 | 3250 | 0.5 | Shield tilting
0x80B88488 | 0x515028 | 3251 | 0.15 | Powershield pushback multiplier
0x80B8848C | 0x51502C | 3252 | 0.04 | Attacker shield pushback damage multiplier
0x80B88490 | 0x515030 | 3253 | 0.025 | Base attacker shield pushback
0x80B88494 | 0x515034 | 3254 | 0.05 | Attacker Shield Pushback Deceleration while in the Air
0x80B88498 | 0x515038 | 3255 | 1.1 | Attacker shield pushback friction multiplier (not affected by terrain)
0x80B8849C | 0x51503C | 3256 | 1.3 | Franklin Badge reflected damage multiplier
0x80B884A0 | 0x515040 | 3257 | 1.3 | Franklin Badge reflected speed multiplier
0x80B884A4 | 0x515044 | 3258 | 1
0x80B884A8 | 0x515048 | 3259 | 1 | Grab hold time reduced per frame
0x80B884AC | 0x51504C | 3260 | 8 | Grab hold time reduced per input
0x80B884B0 | 0x515050 | 3261 | 10 | (Related to H Speed after a Dash Grab has connected.)
0x80B884B4 | 0x515054 | 3262 | 2
0x80B884B8 | 0x515058 | 3263 | 2 | Added Y Offset Threshold required for an immediate Grab Break
0x80B884BC | 0x51505C | 3264 | 6 | X Distance required for an immediate Grab Break
0x80B884C0 | 0x515060 | 3265 | 6 | Y Distance required for an immediate Grab Break
0x80B884C4 | 0x515064 | 3266 | 1.7 | Multiplier for grab hold time added from total damage\nFormula: (''Opponent's %'' * IC-Basic[3266]) + IC-Basic[23085]
0x80B884C8 | 0x515068 | 3267 | -3
0x80B884CC | 0x51506C | 3268 | 1
0x80B884D0 | 0x515070 | 3269 | 1.9 | H Speed on normal Grab Break
0x80B884D4 | 0x515074 | 3270 | 1.2 | H Speed on Jump Grab Break
0x80B884D8 | 0x515078 | 3271 | 2.3 | Y Speed on Jump Grab Break
0x80B884DC | 0x51507C | 3272 | 0.01 | Weight factor of weight dependent throw speed formula (i.e. weight is multiplied by this)
0x80B884E0 | 0x515080 | 3273 | 2.0 | Maximum Weight Factor (Cannot go higher than this)
0x80B884E4 | 0x515084 | 3274 | 0.5 | Minimum Weight Factor (Cannot go lower than this)
0x80B884E8 | 0x515088 | 3275 | 0.2
0x80B884EC | 0x51508C | 3276 | 0.04
0x80B884F0 | 0x515090 | 3277 | 0.3
0x80B884F4 | 0x515094 | 3278 | 0.3
0x80B884F8 | 0x515098 | 3279 | 1.5
0x80B884FC | 0x51509C | 3280 | 160
0x80B88500 | 0x5150A0 | 3281 | 4 | Minimum Launch Speed for Smoke Trails GFX
0x80B88504 | 0x5150A4 | 3282 | 5 | How much distance between smoke puffs
0x80B88508 | 0x5150A8 | 3283 | 160 | Minimum KB for the screen to flash white
0x80B8850C | 0x5150AC | 3284 | 1 | Minimum H Launch Speed for Wall Bounce
0x80B88510 | 0x5150B0 | 3285 | 0.85 | Knockback Multiplier on Wall/Ceiling Bounce
0x80B88514 | 0x5150B4 | 3286 | 3 | (Related to Wall Bouncing)
0x80B88518 | 0x5150B8 | 3287 | 20
0x80B8851C | 0x5150BC | 3288 | 0.075 | Used in Vertical KB Boost formula: IC-Basic[3289] * ({Gravity} - IC-Basic[3288])
0x80B88520 | 0x5150C0 | 3289 | 5 | Used in Vertical KB Boost Formula.
0x80B88524 | 0x5150C4 | 3290 | 0.314159 | Maximum changed Trajectory via DI (Radians)
0x80B88528 | 0x5150C8 | 3291 | 2 | Minimum downward launch speed to move through stage floor collisions that are considered as clouds
0x80B8852C | 0x5150CC | 3292 | 0.5 | Hitstun Frames multiplier when going through clouds, when reaching IC-Basic[3291]'s requirements
0x80B88530 | 0x5150D0 | 3293 | 1 | Global Grounded Hitstun Friction Multiplier
0x80B88534 | 0x5150D4 | 3294 | 0.051 | Knockback Decay
0x80B88538 | 0x5150D8 | 3295 | 2 | Max Launch Speed Difference required to trigger KB Armor
0x80B8853C | 0x5150DC | 3296 | 0.8 | Multiplier for KB Velocity Stack/Overwrite Threshold
0x80B88540 | 0x5150E0 | 3297 | 0.1
0x80B88544 | 0x5150E4 | 3298 | 0.2 | Maximum KB to Execute Momentum Commands with LA-Bit[57] not Set
0x80B88548 | 0x5150E8 | 3299 | 0.8 | Tumble Wiggle Sensitivity
0x80B8854C | 0x5150EC | 3300 | 0.2 | Distance Multiplier from the corner blastline to use diagonal blast GFX
0x80B88550 | 0x5150F0 | 3301 | 1.2 | GFX Size multiplier for KO Blast GFX when used diagonally
0x80B88554 | 0x5150F4 | 3302 | 2.4 | Minimum vertical knockback to die off top boundary
0x80B88558 | 0x5150F8 | 3303 | 90 | Minimum launch speed for Mid KB SFX (the wind wooshes)
0x80B8855C | 0x5150FC | 3304 | 180 | Minimum launch speed for High KB SFX
0x80B88560 | 0x515100 | 3305 | 80 | Minimum launch distance for Low Crowd SFX
0x80B88564 | 0x515104 | 3306 | 80 | Minimum launch distance for Mid Crowd SFX; this stacks with IC-Basic[3305], so it's 160.
0x80B88568 | 0x515108 | 3307 | 80 | Minimum launch distance for High Crowd SFX; this stacks with both IC-Basic[3305] and IC-Basic[3306], so it's 240.
0x80B8856C | 0x51510C | 3308 | 3.8 | Upper Threshold of Launch Speed for Max DMG for tumble collateral hitbox
0x80B88570 | 0x515110 | 3309 | 2.3 | Lower Threshold of Launch Speed for Min DMG for tumble collateral hitbox
0x80B88574 | 0x515114 | 3310 | 0.3
0x80B88578 | 0x515118 | 3311 | 1.2
0x80B8857C | 0x51511C | 3312 | 10 | Base sleep time\nFormula: (IC-B[3312] + (IC-B[3314] * Hitbox0x0) + (IC-B[3313] * (3 - ''Unk Hbox El.''))) + (IC-B[3315] * KB) + (IC-B[3316] * ''Opponent's % After Hit'')
0x80B88580 | 0x515120 | 3313 | 10 | Base sleep time (this * 3 frames added)
0x80B88584 | 0x515124 | 3314 | 30 | Used on sleep effect (unknown)
0x80B88588 | 0x515128 | 3315 | 25 | Multiplier for sleep time added from KB
0x80B8858C | 0x51512C | 3316 | 1 | Multiplier for sleep time added from Total DMG
0x80B88590 | 0x515130 | 3317 | 1 | Sleep time reduced per frame
0x80B88594 | 0x515134 | 3318 | 8 | Sleep time reduced per input
0x80B88598 | 0x515138 | 3319 | 3 | ''This is related to a hitbox element that's unused.''
0x80B8859C | 0x51513C | 3320 | 60 | Base Stun Time\nFormula: (IC-B[3320] + (IC-B[3322] * Hitbox0x0) + (IC-B[3321] * (3 - ''Unk Hbox El.''))) + (IC-B[3323] * KB) + (IC-B[3324] * ''Opponent's % After Hit'')
0x80B885A0 | 0x515140 | 3321 | 15 | Used on stun effect
0x80B885A4 | 0x515144 | 3322 | 50 | Additional Base Stun Time (Only if Hitbox Element of 0x0 is used.)
0x80B885A8 | 0x515148 | 3323 | 1 | Multiplier for Stun Time added from KB
0x80B885AC | 0x51514C | 3324 | 0 | Multiplier for Stun Time added from Total DMG
0x80B885B0 | 0x515150 | 3325 | 1 | Stun time reduced per frame
0x80B885B4 | 0x515154 | 3326 | 5 | Stun time reduced per input
0x80B885B8 | 0x515158 | 3327 | 10 | Base Bury Time\nFormula: (IC-B[3327] + (IC-B[3329] * Hitbox0x0) + (IC-B[3328] * (3 - ''Unk Hbox El.''))) + (IC-B[3330] * KB) + (IC-B[3331] * ''Opponent's % After Hit'')
0x80B885BC | 0x51515C | 3328 | 15 | Used on Bury Effect
0x80B885C0 | 0x515160 | 3329 | 40 | Additional Base Bury Time (Only if Hitbox Element of 0x0 is used.)
0x80B885C4 | 0x515164 | 3330 | 1.5 | Multiplier for Bury Time added from KB
0x80B885C8 | 0x515168 | 3331 | 0.5 | Multiplier for Bury Time added from Total DMG
0x80B885CC | 0x51516C | 3332 | 1 | Bury Time reduced per Frame
0x80B885D0 | 0x515170 | 3333 | 5 | Bury Time reduced per Input
0x80B885D4 | 0x515174 | 3334 | 1.2 | Vertical momentum out of bury escape
0x80B885D8 | 0x515178 | 3335 | 12 | Frame you can interrupt bury escape jump
0x80B885DC | 0x51517C | 3336 | 100 | Knockback resistence while buried
0x80B885E0 | 0x515180 | 3337 | 0.7 | Frozen terminal velocity
0x80B885E4 | 0x515184 | 3338 | 100
0x80B885E8 | 0x515188 | 3339 | 0.8
0x80B885EC | 0x51518C | 3340 | 0.5 | Frozen Damage Mutliplier
0x80B885F0 | 0x515190 | 3341 | 0.25 | Frozen Knockback Multiplier
0x80B885F4 | 0x515194 | 3342 | 0.03 | Frozen gravity multiplier
0x80B885F8 | 0x515198 | 3343 | -25 | Maximum rotation?
0x80B885FC | 0x51519C | 3344 | -4 | Minimum rotation?
0x80B88600 | 0x5151A0 | 3345 | 12 | Multiplier for Base freeze Time (KB of at least 52.5 is needed for freeze to take effect.)\nFormula: IC-Basic[3345] * DMG
0x80B88604 | 0x5151A4 | 3346 | 1 | Freeze time reduced per frame
0x80B88608 | 0x5151A8 | 3347 | 4 | Freeze time reduced per input
0x80B8860C | 0x5151AC | 3348 | 2
0x80B88610 | 0x5151B0 | 3349 | 8.5
0x80B88614 | 0x5151B4 | 3350 | 0.6 | Ladder Grab Sensitivity (Up/Down)
0x80B88618 | 0x5151B8 | 3351 | 7 | Ladder Grab Lag
0x80B8861C | 0x5151BC | 3352 | 0.8
0x80B88620 | 0x5151C0 | 3353 | 0.7 | Leaving Ladder Sensitivity (Left/Right)
0x80B88624 | 0x5151C4 | 3354 | 0.081
0x80B88628 | 0x5151C8 | 3355 | 0.4 | (Related to swimming upwards)
0x80B8862C | 0x5151CC | 3356 | 0.04
0x80B88630 | 0x5151D0 | 3357 | 0.91
0x80B88634 | 0x5151D4 | 3358 | 2.5 | Swim scale (swim timer starts at damage * this)
0x80B88638 | 0x5151D8 | 3359 | 0.6
0x80B8863C | 0x5151DC | 3360 | 3
0x80B88640 | 0x5151E0 | 3361 | 200
0x80B88644 | 0x5151E4 | 3362 | 2.5
0x80B88648 | 0x5151E8 | 3363 | 1
0x80B8864C | 0x5151EC | 3364 | 500
0x80B88650 | 0x5151F0 | 3365 | 0
0x80B88654 | 0x5151F4 | 3366 | 1
0x80B88658 | 0x5151F8 | 3367 | 0
0x80B8865C | 0x5151FC | 3368 | 0
0x80B88660 | 0x515200 | 3369 | 1
0x80B88664 | 0x515204 | 3370 | 0
0x80B88668 | 0x515208 | 3371 | 40
0x80B8866C | 0x51520C | 3372 | 1.3
0x80B88670 | 0x515210 | 3373 | 20
0x80B88674 | 0x515214 | 3374 | 20
0x80B88678 | 0x515218 | 3375 | 120 | Wario bite base time\nFormula: IC-Basic[3375] + (IC-Basic[3376] * ''Opponent's % After Hit'')
0x80B8867C | 0x51521C | 3376 | 0.5 | Multiplier for Wario bite time added from total damage
0x80B88680 | 0x515220 | 3377 | 10 | Wario bite time reduced per input
0x80B88684 | 0x515224 | 3378 | 2 | Used on Wario bite
0x80B88688 | 0x515228 | 3379 | 5 | Used on Wario bite
0x80B8868C | 0x51522C | 3380 | 0.5 | Used on Wario bite
0x80B88690 | 0x515230 | 3381 | 5.4 | Horizontal location victim falls towards when entering Kirby's mouth
0x80B88694 | 0x515234 | 3382 | 6.8 | Vertical location victim falls towards when entering Kirby's mouth
0x80B88698 | 0x515238 | 3383 | 0.9 | Horizontal velocity while falling into Kirby's mouth
0x80B8869C | 0x51523C | 3384 | 1.2 | Vertical velocity while falling into Kirby's mouth
0x80B886A0 | 0x515240 | 3385 | 1 | Affects time it takes to enter Kirby's mouth (higher is faster)
0x80B886A4 | 0x515244 | 3386 | 10 | Kirby inhale time reduced per input
0x80B886A8 | 0x515248 | 3387 | 1 | Kirby inhale time reduced per frame
0x80B886AC | 0x51524C | 3388 | 250 | Kirby inhale base time
0x80B886B0 | 0x515250 | 3389 | 12 | Used on Kirby spit/swallow
0x80B886B4 | 0x515254 | 3390 | 1 | Used on Kirby spit/swallow
0x80B886B8 | 0x515258 | 3391 | 30 | Time spent in star on Kirby spit
0x80B886BC | 0x51525C | 3392 | 10 | Time spent in star on Kirby swallow
0x80B886C0 | 0x515260 | 3393 | 4 | Time after Kirby spit star exit before they can act
0x80B886C4 | 0x515264 | 3394 | 0.73 | Horizontal velocity on Kirby spit star exit
0x80B886C8 | 0x515268 | 3395 | 2.3 | Vertical velocity on Kirby spit star exit
0x80B886CC | 0x51526C | 3396 | 0
0x80B886D0 | 0x515270 | 3397 | 10
0x80B886D4 | 0x515274 | 3398 | 30
0x80B886D8 | 0x515278 | 3399 | 30
0x80B886DC | 0x51527C | 3400 | 100 | DK Cargo Hold: Base Time\nFormula: IC-Basic[3400] + (IC-Basic[3401] * ''Opponent's % After Hit'')
0x80B886E0 | 0x515280 | 3401 | 5 | DK Cargo Hold: Time Increase per Damage
0x80B886E4 | 0x515284 | 3402 | 10 | DK Cargo Hold: Time Reduction per Directional Input
0x80B886E8 | 0x515288 | 3403 | 18 | DK Cargo Hold: Time Reduction per Button Input
0x80B886EC | 0x51528C | 3404 | 5.4 | Horizontal location victim falls towards when entering Dedede's mouth
0x80B886F0 | 0x515290 | 3405 | 8.4 | Vertical location victim falls towards when entering Dedede's mouth
0x80B886F4 | 0x515294 | 3406 | 0.9 | Horizontal velocity while falling into Dedede's mouth
0x80B886F8 | 0x515298 | 3407 | 1.2 | Vertical velocity while falling into Dedede's mouth
0x80B886FC | 0x51529C | 3408 | 1 | Affects time it takes to enter Dedede's mouth (higher is faster)
0x80B88700 | 0x5152A0 | 3409 | 12 | Dedede inhale time reduced per input
0x80B88704 | 0x5152A4 | 3410 | 0 | Dedede inhale time reduced per frame
0x80B88708 | 0x5152A8 | 3411 | 250 | Dedede inhale base time
0x80B8870C | 0x5152AC | 3412 | 12 | Dedede spit star time reduced per input
0x80B88710 | 0x5152B0 | 3413 | 1 | Dedede spit star time reduced per frame
0x80B88714 | 0x5152B4 | 3414 | 30 | Time spent in star on Dedede spit
0x80B88718 | 0x5152B8 | 3415 | 4 | Time after Dedede spit star exit before they can act
0x80B8871C | 0x5152BC | 3416 | 0.73 | Horizontal velocity on Dedede spit star exit
0x80B88720 | 0x5152C0 | 3417 | 2.3 | Vertical velocity on Dedede spit star exit
0x80B88724 | 0x5152C4 | 3418 | -5 | Horizontal location on Dedede inhale escape
0x80B88728 | 0x5152C8 | 3419 | 10 | Vertical location on Dedede inhale escape
0x80B8872C | 0x5152CC | 3420 | 2.8 | Used on Dedede inhale escape
0x80B88730 | 0x5152D0 | 3421 | 1.309 | Used on Dedede inhale escape
0x80B88734 | 0x5152D4 | 3422 | 4 | Used on Dedede inhale escape
0x80B88738 | 0x5152D8 | 3423 | 70 | Diddy flip base hold time
0x80B8873C | 0x5152DC | 3424 | 1.3 | Multiplier for Diddy flip hold time added from total damage
0x80B88740 | 0x5152E0 | 3425 | 24 | Used on Diddy flip
0x80B88744 | 0x5152E4 | 3426 | 0.4 | Used on Diddy flip
0x80B88748 | 0x5152E8 | 3427 | 6 | Diddy flip hold time reduced per input
0x80B8874C | 0x5152EC | 3428 | 0.8 | (Related to Diddy Flip's Base Hold Time)
0x80B88750 | 0x5152F0 | 3429 | 0.68 | horizontal momentum from Egg Lay
0x80B88754 | 0x5152F4 | 3430 | 2.2 | vertical momentum from Egg Lay
0x80B88758 | 0x5152F8 | 3431 | 0.5 | Damage taken multiplier in egg
0x80B8875C | 0x5152FC | 3432 | 0.45 | Starting egg size
0x80B88760 | 0x515300 | 3433 | 20 | Egg lay growing time
0x80B88764 | 0x515304 | 3434 | 200 | Button mashing time
0x80B88768 | 0x515308 | 3435 | 1 | Something with button mashing time?
0x80B8876C | 0x51530C | 3436 | 14 | Something with egg wiggling? (negative makes it shake rapidly)
0x80B88770 | 0x515310 | 3437 | 10 | egg lay??
0x80B88774 | 0x515314 | 3438 | 2 | Wiggle Speed? Caps out at 3??
0x80B88778 | 0x515318 | 3439 | 0 | horizontal velocity out of egg break?
0x80B8877C | 0x51531C | 3440 | 2.4 | vertical velocity out of egg break
0x80B88780 | 0x515320 | 3441 | 2 | something to do with breakout time
0x80B88784 | 0x515324 | 3442 | 0.66 | egg lay??
0x80B88788 | 0x515328 | 3443 | 0.3
0x80B8878C | 0x51532C | 3444 | 0.625
0x80B88790 | 0x515330 | 3445 | 0.5
0x80B88794 | 0x515334 | 3446 | 0.6
0x80B88798 | 0x515338 | 3447 | 0.325 | Heavy Item Walk Threshold
0x80B8879C | 0x51533C | 3448 | -0.25 | Heavy Item Pivot Threshold
0x80B887A0 | 0x515340 | 3449 | 35
0x80B887A4 | 0x515344 | 3450 | 10
0x80B887A8 | 0x515348 | 3451 | 120
0x80B887AC | 0x51534C | 3452 | 2
0x80B887B0 | 0x515350 | 3453 | 0.87 | (Related to using a Heavy Weapon Item)
0x80B887B4 | 0x515354 | 3454 | 1
0x80B887B8 | 0x515358 | 3455 | 0.9 | LightWalkGet Animation Speed Multiplier
0x80B887BC | 0x51535C | 3456 | 20 | Max angle difference from vertical that dropped Dragoon part is sent. Actual value is random from 0 to this
0x80B887C0 | 0x515360 | 3457 | 3 | Speed that Dragoon part is dropped
0x80B887C4 | 0x515364 | 3458 | 1 | Flower time reduced per frame
0x80B887C8 | 0x515368 | 3459 | 16 | Flower time reduced per input
0x80B887CC | 0x51536C | 3460 | 300 | Flower time maximum (only used when stacking existing flower time)\nFormula: IC-Basic[3460] + (IC-Basic[3461] * ''Opponent's % After Hit'')
0x80B887D0 | 0x515370 | 3461 | 40 | Multiplier for flower time added from hitbox damage
0x80B887D4 | 0x515374 | 3462 | 0.7 | Minimum Flower Size
0x80B887D8 | 0x515378 | 3463 | 3.5 | Maximum Flower Size
0x80B887DC | 0x51537C | 3464 | 0.04 | Affects flower size
0x80B887E0 | 0x515380 | 3465 | 2
0x80B887E4 | 0x515384 | 3466 | 2 | Curry Run animation speed multiplier
0x80B887E8 | 0x515388 | 3467 | 25
0x80B887EC | 0x51538C | 3468 | 5
0x80B887F0 | 0x515390 | 3469 | -25
0x80B887F4 | 0x515394 | 3470 | 50
0x80B887F8 | 0x515398 | 3471 | 1.05
0x80B887FC | 0x51539C | 3472 | 2 | Super Mushroom Size Multiplier during Giant Special Smash
0x80B88800 | 0x5153A0 | 3473 | 1.7 | Super Mushroom size multiplier
0x80B88804 | 0x5153A4 | 3474 | 0.5 | Poison Mushroom Size Multiplier during Giant Special Smash
0x80B88808 | 0x5153A8 | 3475 | 0.5 | Poison Mushroom size multiplier
0x80B8880C | 0x5153AC | 3476 | 0.84 | Super Mushroom Voice Pitch
0x80B88810 | 0x5153B0 | 3477 | 1.25 | Poison Mushroom voice pitch
0x80B88814 | 0x5153B4 | 3478 | 100 | Read after finishing size change animation (unsure what it does)
0x80B88818 | 0x5153B8 | 3479 | 3 | Lightning Backfire Size Multiplier during Giant Special Smash
0x80B8881C | 0x5153BC | 3480 | 2.4 | Lightning Backfire Size Multiplier during Standard/Tiny Special Smash
0x80B88820 | 0x5153C0 | 3481 | 0.5 | Lightning Size Multiplier during Giant Special Smash
0x80B88824 | 0x5153C4 | 3482 | 0.5 | Lightning Size multiplier during Standard/Tiny Special Smash
0x80B88828 | 0x5153C8 | 3483 | 0.7 | Lightning voice pitch (Grow) higher value = lower voice
0x80B8882C | 0x5153CC | 3484 | 1.25 | Lightning voice pitch (shrink) higher value = higher voice
0x80B88830 | 0x5153D0 | 3485 | 50 | MetalBox HP (Lose the armor after taking said damage.)
0x80B88834 | 0x5153D4 | 3486 | 30 | KB Resistance while Metal (Works similar to Yoshi's Mid-Air Jump KB Resistance Armor.)
0x80B88838 | 0x5153D8 | 3487 | 0.3 | Min Healing Multiplier; Team Healer Applies
0x80B8883C | 0x5153DC | 3488 | 0.75 | Heal to Hurt Ratio, when thrown at opponents
0x80B88840 | 0x5153E0 | 3489 | 0.7 | Max Healing Multiplier; Team Healer Applies
0x80B88844 | 0x5153E4 | 3490 | 3
0x80B88848 | 0x5153E8 | 3491 | 0.1
0x80B8884C | 0x5153EC | 3492 | 1.5
0x80B88850 | 0x5153F0 | 3493 | 0.5
0x80B88854 | 0x5153F4 | 3494 | 0.5
0x80B88858 | 0x5153F8 | 3495 | 4
0x80B8885C | 0x5153FC | 3496 | 3.5 | Is read at any time (unsure what it does)
0x80B88860 | 0x515400 | 3497 | 0
0x80B88864 | 0x515404 | 3498 | 3.2 | Downward Speed during Ganondorf Side-B Drop
```

## Int IC-Basics
```handsontable
# COLUMNS
Memory Address {
  renderer: hex
}
OverlayCommon Offset {
  renderer: hex
}
IC#
Default Value
Name / Description
# DATA
0x80B88E60 | 0x515A00 |  23030 |         8 | Read on left/right input on joystick on ground (unsure of what it does)
0x80B88E64 | 0x515A04 |  23031 |         2 | Dash/Turn Input Window??
0x80B88E68 | 0x515A08 |  23032 |         6 | Dashdance window? (allows Turn2 for 6 frames at the start of a dash)
0x80B88E6C | 0x515A0C |  23033 |        15 | Foxtrot window? (allows Dash from Dash on this frame and later)
0x80B88E70 | 0x515A10 |  23034 |         5
0x80B88E74 | 0x515A14 |  23035 |         4 | Tap Jump Input Window??
0x80B88E78 | 0x515A18 |  23036 |         3 | Fall->Jump...??
0x80B88E7C | 0x515A1C |  23037 |         4 | SpotDodge Input Window
0x80B88E80 | 0x515A20 |  23038 |         4 | Roll Input Window
0x80B88E84 | 0x515A24 |  23039 |         4 | FastFall Input Window
0x80B88E88 | 0x515A28 |  23040 |         5
0x80B88E8C | 0x515A2C |  23041 |         4 | SDI Input Window
0x80B88E90 | 0x515A30 |  23042 |        30 | Caped reversed control time (minus 5)
0x80B88E94 | 0x515A34 |  23043 |         3 | Reversal Window (B reversals)
0x80B88E98 | 0x515A38 |  23044 |         4
0x80B88E9C | 0x515A3C |  23045 |        20 | Turnaround B Window
0x80B88EA0 | 0x515A40 |  23046 |         6 | Platform Drop/Edge Drop Input Window
0x80B88EA4 | 0x515A44 |  23047 |         3 | Ledgesnap Duration
0x80B88EA8 | 0x515A48 |  23048 |       360 | Ledge Hang Timer
0x80B88EAC | 0x515A4C |  23049 |       300
0x80B88EB0 | 0x515A50 |  23050 |        30 | Frames between Ledgegrabs
0x80B88EB4 | 0x515A54 |  23051 |        23 | Ledge Invincibility
0x80B88EB8 | 0x515A58 |  23052 |        16 | Tech Window
0x80B88EBC | 0x515A5C |  23053 |        40 | Tech Fail Window
0x80B88EC0 | 0x515A60 |  23054 |         6 | Tech WallJump Input Window
0x80B88EC4 | 0x515A64 |  23055 |         5 | Tech WallJump Input Window?
0x80B88EC8 | 0x515A68 |  23056 |        14 | Tech->Tech WallJump Window
0x80B88ECC | 0x515A6C |  23057 |        60 | Trip???
0x80B88ED0 | 0x515A70 |  23058 |       240 | Trip AutoStand Timer
0x80B88ED4 | 0x515A74 |  23059 |       600 | Random Trip Timer from dashing. Also Lay AutoStand Timer?
0x80B88ED8 | 0x515A78 |  23060 |        60
0x80B88EDC | 0x515A7C |  23061 |         4
0x80B88EE0 | 0x515A80 |  23062 |        80 | Crouch
0x80B88EE4 | 0x515A84 |  23063 |         2 | This * Int(damage taken) is the percent chance that Smashball is dropped when hit
0x80B88EE8 | 0x515A88 |  23064 |        30
0x80B88EEC | 0x515A8C |  23065 |        60
0x80B88EF0 | 0x515A90 |  23066 |       120
0x80B88EF4 | 0x515A94 |  23067 |         4 | Point Difference when behind to get free final smash (Pity Final Smash)
0x80B88EF8 | 0x515A98 |  23068 |         5 | Minimum Points that must be earned (by anyone) in a match for Pity Final Smashes to be handed out.
0x80B88EFC | 0x515A9C |  23069 |       130 | WallJump Timer
0x80B88F00 | 0x515AA0 |  23070 |         3
0x80B88F04 | 0x515AA4 |  23071 |         5 | Walljump Startup
0x80B88F08 | 0x515AA8 |  23072 |         4 | Walljump Air Mobility Delay
0x80B88F0C | 0x515AAC |  23073 |         8 | Footstool?
0x80B88F10 | 0x515AB0 |  23074 |       180 | Wallcling Timer
0x80B88F14 | 0x515AB4 |  23075 |        60 | Time between wallclings
0x80B88F18 | 0x515AB8 |  23076 |         8 | Minimum Shield Hold Time
0x80B88F1C | 0x515ABC |  23077 |         4
0x80B88F20 | 0x515AC0 |  23078 |         4 | Powershield Window
0x80B88F24 | 0x515AC4 |  23079 |         4 | Window to drop shield after powershield to get interrupts
0x80B88F28 | 0x515AC8 |  23080 |         8 | Shield Drop Lag
0x80B88F2C | 0x515ACC |  23081 |         3 | Dash Attack -> Grab Window
0x80B88F30 | 0x515AD0 |  23082 |         3 | TurnRun -> Pivot Grab Window
0x80B88F34 | 0x515AD4 |  23083 |        16 | Grabbed?
0x80B88F38 | 0x515AD8 |  23084 |        30 | Grab Jump Break
0x80B88F3C | 0x515ADC |  23085 |        90 | First part of the grab break formula
0x80B88F40 | 0x515AE0 |  23086 |         8 | How many frames of invincibility you have after a throw
0x80B88F44 | 0x515AE4 |  23087 |     10800 | Frames after touching the ground until KO ownership is lost
0x80B88F48 | 0x515AE8 |  23088 |     26 | Frame you can interrupt hitstun with an aerial
0x80B88F4C | 0x515AEC |  23089 |     14 | Frame you can interrupt hitstun with an airdodge
0x80B88F50 | 0x515AF0 |  23090 |         4
0x80B88F54 | 0x515AF4 |  23091 |         4
0x80B88F58 | 0x515AF8 |  23092 |        15
0x80B88F5C | 0x515AFC |  23093 |        15
0x80B88F60 | 0x515B00 |  23094 |         3 | Frames after hitlag before you can hit the floor in tumble
0x80B88F64 | 0x515B04 |  23095 |         1
0x80B88F68 | 0x515B08 |  23096 |        40
0x80B88F6C | 0x515B0C |  23097 |        18
0x80B88F70 | 0x515B10 |  23098 |        60
0x80B88F74 | 0x515B14 |  23099 |        16
0x80B88F78 | 0x515B18 |  23100 |        60
0x80B88F7C | 0x515B1C |  23101 |       240 | Frames spent in respawn plat
0x80B88F80 | 0x515B20 |  23102 |       120 | Frames of invincibility exiting respawn plat
0x80B88F84 | 0x515B24 |  23103 |        45 | Read on exiting respawn plat (unsure of what it does)
0x80B88F88 | 0x515B28 |  23104 |         3 | Number of frames entering buried state
0x80B88F8C | 0x515B2C |  23105 |         8 | Read when entering buried state (unsure of what it does)
0x80B88F90 | 0x515B30 |  23106 |        16 | Read when exiting frozen state (number of frames on exit?)
0x80B88F94 | 0x515B34 |  23107 |        30
0x80B88F98 | 0x515B38 |  23108 |         8
0x80B88F9C | 0x515B3C |  23109 |         8 | How many frames of falling from JumpStart in water
0x80B88FA0 | 0x515B40 |  23110 |         4 | Read when surfacing water (unsure of what it does)
0x80B88FA4 | 0x515B44 |  23111 |        20 | Number of frames between ripples in water when swimming
0x80B88FA8 | 0x515B48 |  23112 |       240 | Swimming Time
0x80B88FAC | 0x515B4C |  23113 |       150 | Flailing Time
0x80B88FB0 | 0x515B50 |  23114 |        10 | Read when going from swim to flail (unsure of what it does)
0x80B88FB4 | 0x515B54 |  23115 |       100 | Read when going from swim to flail (usnure of what it does)
0x80B88FB8 | 0x515B58 |  23116 |        20 | Stamina match effective damage
0x80B88FBC | 0x515B5C |  23117 |        70 | Stamina match effective damage after death
0x80B88FC0 | 0x515B60 |  23118 |         2
0x80B88FC4 | 0x515B64 |  23119 |       150
0x80B88FC8 | 0x515B68 |  23120 |        28
0x80B88FCC | 0x515B6C |  23121 |       240
0x80B88FD0 | 0x515B70 |  23122 |         4
0x80B88FD4 | 0x515B74 |  23123 |        14 | Frames of intangibility after breaking out of Yoshi's egg lay
0x80B88FD8 | 0x515B78 |  23124 |         6 | HeavyItem Smash Throw Input
0x80B88FDC | 0x515B7C |  23125 |         8 | Item Smash Throw Input Window
0x80B88FE0 | 0x515B80 |  23126 |         5 | Dash attack item catch window
0x80B88FE4 | 0x515B84 |  23127 |         5 | Aerial Item Catch
0x80B88FE8 | 0x515B88 |  23128 |         5 | Picking up Item?
0x80B88FEC | 0x515B8C |  23129 |         8
0x80B88FF0 | 0x515B90 |  23130 |        70 | Regular item drop chance constant. Drop chance = damage taken / 70
0x80B88FF4 | 0x515B94 |  23131 |         2
0x80B88FF8 | 0x515B98 |  23132 |         5 | Item..
0x80B88FFC | 0x515B9C |  23133 |        16
0x80B89000 | 0x515BA0 |  23134 |         6
0x80B89004 | 0x515BA4 |  23135 |       100
0x80B89008 | 0x515BA8 |  23136 |         5
0x80B8900C | 0x515BAC |  23137 |         5
0x80B89010 | 0x515BB0 |  23138 |         6
0x80B89014 | 0x515BB4 |  23139 |        20
0x80B89018 | 0x515BB8 |  23140 |         2 | ItemLegsDash
0x80B8901C | 0x515BBC |  23141 |         2
0x80B89020 | 0x515BC0 |  23142 |         2 | Dragoon part drop probability = 2*Int(Damage taken) / 100
0x80B89024 | 0x515BC4 |  23143 |        15 | this * 0? added to base damage for Dragoon drop. Useless?
0x80B89028 | 0x515BC8 |  23144 |       120
0x80B8902C | 0x515BCC |  23145 |        30
0x80B89030 | 0x515BD0 |  23146 |         1
0x80B89034 | 0x515BD4 |  23147 |        20
0x80B89038 | 0x515BD8 |  23148 |       780 | Curry effect duration
0x80B8903C | 0x515BDC |  23149 |         5 | Frames between Curry flames
0x80B89040 | 0x515BE0 |  23150 |       450
0x80B89044 | 0x515BE4 |  23151 |         6 | Hammer something
0x80B89048 | 0x515BE8 |  23152 |        10
0x80B8904C | 0x515BEC |  23153 |       800
0x80B89050 | 0x515BF0 |  23154 |       120
0x80B89054 | 0x515BF4 |  23155 |        60
0x80B89058 | 0x515BF8 |  23156 |       120
0x80B8905C | 0x515BFC |  23157 |        15 | How many frames of time is added when you press A with a Golden Hammer
0x80B89060 | 0x515C00 |  23158 |        50
0x80B89064 | 0x515C04 |  23159 |       600
0x80B89068 | 0x515C08 |  23160 |       120
0x80B8906C | 0x515C0C |  23161 |       480
0x80B89070 | 0x515C10 |  23162 |       180
0x80B89074 | 0x515C14 |  23163 |       780
0x80B89078 | 0x515C18 |  23164 |        80
0x80B8907C | 0x515C1C |  23165 |       780
0x80B89080 | 0x515C20 |  23166 |         4 | Strength of Timer's slowdown effect
0x80B89084 | 0x515C24 |  23167 |       720
0x80B89088 | 0x515C28 |  23168 |       120
0x80B8908C | 0x515C2C |  23169 |        60
0x80B89090 | 0x515C30 |  23170 |        15
0x80B89094 | 0x515C34 |  23171 |         8
0x80B89098 | 0x515C38 |  23172 |         2
0x80B8909C | 0x515C3C |  23173 |         6
0x80B890A0 | 0x515C40 |  23174 |        15
0x80B890A4 | 0x515C44 |  23175 |         5 | Swimming...
0x80B890A8 | 0x515C48 |  23176 |         4
0x80B890AC | 0x515C4C |  23177 |         3
0x80B890B0 | 0x515C50 |  23178 |         4
0x80B890B4 | 0x515C54 |  23179 |         4
```
