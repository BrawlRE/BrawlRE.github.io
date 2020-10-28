# Introduction

Just like stages, all fighters have a constants section in their module. These constants mostly are floating points that control things, just like [[Article_Floating_Points|Article Floating Points]] and [[STDT (Stage Trap Data Table)]].

Alot of these values affect things like articles and such, however some do very obscure things like [https://www.youtube.com/watch?v=vX8AwgEGUqg changing what axis the fighter behaves on] as well as changing which axis gravity acts upon.

You can find the Constants section in a Fighter module file (all modules have them) by opening the module in [https://www.dropbox.com/s/awowmb3d66gjyvl/BrawlBox%20v0.71.zip BrawlBox v0.71] and viewing section[4].


## Mario

p1 training mode Memory offset: `0x010e11f0` - `0x010e128c`

```handsontable
# OPTIONS
# COLUMNS
offset {
  renderer: hex
}
BBox offset {
  renderer: hex
}
Default
Description
# DATA
0x19670 |0x00| 10 |
0x19674 |0x04| 1 |
0x19678 |0x08| 0 | [No idea. wtf](https://www.youtube.com/watch?v=vX8AwgEGUqg).
0x1967C |0x0C| 20 |
0x19680 |0x10| -1 |
0x19684 |0x14| 0 |
0x19688 |0x18| 0 | Vertical momentum gained on FLUDD
0x1968C |0x1C| 0 |
0x19690 |0x20| 176 |
0x19694 |0x24| 0x80000000 |
0x19698 |0x28| 0 | Vertical momentum gained from each cape after 1st
0x1969C |0x2C| 0 |
0x196A0 |0x30| 1 | FLUDD strength Multiplier + cape related?
0x196A4 |0x34| 0 |
0x196A8 |0x38| 1 |
0x196AC |0x3C| 20 |
0x196B0 |0x40| 0 |
0x196B4 |0x44| 2 | Z axis random ratio (or multiplier or something)
0x196B8 |0x48| 0 | Z axis random offset of FLUDD water
0x196BC |0x4C| 0 |
0x196C0 |0x50| 0 |
0x196C4 |0x54| 0 |
0x196C8 |0x58| 0 |
0x196CC |0x5C| 1 | Y axis starting position of FLUDD water
0x196D0 |0x60| -1 |
0x196D4 |0x64| 0 |
0x196D8 |0x68| 20 |
0x196DC |0x6C| 0 |
0x196E0 |0x70| 0x7F7FFFFF |
0x196E4 |0x74| 57.29578 |
0x196E8 |0x78| 176 | Divisor of FLUDD strength?
0x196EC |0x7C| 0x80000000 |
0x196F0 |0x80| 57.29578 | Z Rotation of water segments?
0x196F4 |0x84| 0 | Y Rotation of water segments?
0x196F8 |0x88| 1 |
0x196FC |0x8C| -1 |
0x19700 |0x90| 0 |
0x19704 |0x94| 20 |
0x19708 |0x98| 0 |
0x1970C |0x9C| 1 |
```

## Fox

p1 training mode Memory offset `0x010e5968` - `0x010e5984`

```handsontable
# OPTIONS
# COLUMNS
offset {
  renderer: hex
}
BBox offset {
  renderer: hex
}
Default
Description
# DATA
0x11168 |0x00| 10 |
0x1116C |0x04| 1 |
0x11170 |0x08| 0 | [No idea. wtf](https://www.youtube.com/watch?v=vX8AwgEGUqg).
0x11174 |0x0C| 20 |
0x11178 |0x10| -1 |
0x1117C |0x14| 0 |
0x11180 |0x18| 1 | Aerial fox illusion power multiplier. 3 = insta-kill
0x11184 |0x1C| 0 |
```