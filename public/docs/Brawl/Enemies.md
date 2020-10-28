## Enemies

This list, while mostly complete, does not include sub-type enemies such as the boomerang prim, or the sword prim. In addition to that, the names seen here are untranslated and internal names that the sora_enemy module uses NOT the ingame names. For example, "Spar" is actually the "Spaak", and "Robobeam" is actually the Laser rob minion.

```handsontable
# OPTIONS
# COLUMNS
hex id {
  renderer: hex
}
numeric id
Name
# DATA
0x00|0|Kuribo
0x01|1|Popperam
0x02|2|Pochi
0x03|3|Jyakeel
0x04|4|Aroaros
0x05|5|Cymal
0x06|6|Deathpod
0x07|7|Boobas
0x08|8|Dekakuribo
0x09|9|Botron
0x0A|10|Bucyulus
0x0b|11|Gyraan
0x0c|12|Siralamos
0x0d|13|Killer
0x0e|14|Roada
0x0F|15|Spar
0x10|16|Mite
0x11|17|Teckin
0x12|18|Tautau
0x13|19|Hammerbros
0x14|20|Bitan
0x15|21|Flows
0x16|22|Kokkon
0x17|23|Prim
0x18|24|Shelly
0x19|25|Patapata
0x1A|26|Jdus
0x1B|27|Bombhead
0x1D|29|Ngagog
0x1E|30|Faulong
0x24|36|Ghamgha
0x25|37|Robobeam
0x26|38|Robodistance
0x27|39|Robohoming
0x28|40|Robopunch
0x29|41|Cataguard
0x2A|42|Arman
0x2B|43|Galfire
0x2E|46|Bosspackun
0x2F|47|Ghamghabase
0x33|51|Galleom
0x34|52|Ridley
0x35|53|Rayquaza
0x36|54|Duon
0x37|55|Porky
0x38|56|Metaridly
0x39|57|Falconflyer
0x3A|58|Taboo
0x3B|59|Masterhand
0x3C|60|Crazyhand
```

## Header Data

Like playable characters, enemies have a group of header info. The header is the same as moveset files (which this basically is, really), and is omitted.

```handsontable
# OPTIONS
# COLUMNS
offset {
  renderer: hex
}
Name
Description
# DATA
0x20 | ? | Usually 1.0. Only Roturret is below that at 0.98; various enemies are above it up to 1.6.
0x24 | Weight? | Always 56 except for Metal Primids, where it's 99. Good candidate for weight, since all enemies are thrown extremely fast.
0x28 | ? | Usually 0.75. Can range from 0.5 to 1.0.
0x2C | ? | Always 2.
0x30 | ? | Usually 3. Varies from 2 (Hands) to 16 (Tabuu). No visible pattern.
0x34 | ? | Boolean, usually false. No apparent pattern.
0x38 | ? | Always 0.
0x3C | ? | Usually 1.0, ranges from 1.2 to 0.1.
0x40 | Normal death? | Boolean, usually true. Seems to indicate if the enemy goes into BulletMode when it dies; it's false for all bosses and Ticken.
0x44 | ? | Always 120.
0x48 | ? | Always 1.
0x4C | ? | Always 0.
0x50 | ? | Always 0.7 (except Greap, which is 0.5).
0x54 | ? | Always 1.0 (except Greap, which is 0.8).
0x58 | ? | Always 0.
0x5C | ? | Either 7 (more common) or 9.
0x60 | ? | Boolean - always true when 0x5C is 9, and false when it's 7 (except for Big Primid's 9/false and Ticken's 7/true). Must be related somehow.
0x64 | ? | Always -1.0 (except Petey, which is 1.0).
0x68 | ? | Almost always 0.1 - Big Primid is 0.24, and Duon, Galleom, Porky, and Rayquaza are all 1.8.
0x6C | ? | Always 0.1.
0x70 | ? | Always 0.1.
0x74 | ? | Always 1.4.
0x78 | ? | Always 0.
0x7C | ? | Always -15 (except for Roturret, which is -20).
0x80 | ID? | Int. Doesn't quite match the IDs in the above table.
0x84 | Weak point? | rowspan=2|Usually 0xFFFFFFFF, but for enemies with a weak point (Armank, Autolance, Greap, Shaydas, Shellpod, Spaak, Ticken, Trowlon), it's a pattern of bits. Could be specifying which hurtboxes are weak points.
0x88 | Weak point?
0x8C | ? | Always 8.
0x90 | ? | Always 0.
0x94 | ? | Always 12.
0x98 | ? | Always 0.
0x9C | Points | Point worth.
0xA0 | ? | Always 0.
0xA4 | ? | Boolean, usually true. Could be "can be grabbed"; most of the falses are bosses or large enemies.
0xA8 | ? | Ranges from 4 to 142. No idea.
0xAC | ? | Ranges from -1 to 91. Also no idea.
0xB0 | ? | Always 50.
0xB4 | ? | Always 45.
0xB8 | ? | Always either 0x01040000 or 0x03050000. Looks like a boss thing.
0xBC | ? | Usually 50, only other two values are 10 (bosses) and 100 (Floow, Koopa, Mite).
0xC0 | ? | Ranges from 0.0 to 110.0.
0xC4 | ? | Ranges from 4.1 to 49.0.
0xC8 | ? | Ranges from 0 to 844 and one 28672. 516 and 780 are common. Might not be a number.
0xCC | ? | Usually 1.5; the Hands have a 1.0 while all other bosses have 2.2 (with one or two other outliers).
0xD0 | Base HP | rowspan=2|Enemy HP = base + scaling * stage's difficulty value
0xD4 | HP Scaling
0xD8 | ? | Always 25 (except Jyk, which is 30).
0xDC | ? | Usually 10.0, but for bosses it's 12.5.
0xE0 | ? | Usually 20. Ranges from 10 to 25.
0xE4 | ? | Always 8.
0xE8 | ? | Usually 15, but also 10.
0xEC | ? | Always 0.
0xF0 | ? | Always 0.
0xF4 | ? | Always 0.
0xF8 | ? | Usually 0, but also 50.
0xFC | ? | Always 20.
0x100 | ? | Always 0.
0x104 | ? | Always 0.
0x108 | ? | Usually 25, ranges from 5 to 100.
0x10C | ? | Usually 50, ranges from 6 to 180.
0x110 | ? | Usually 80, ranges from 50 to 600.
0x114 | ? | Almost always 90; Scope Primid is 80 while Big Primid is 122.
0x118 | ? | Usually 1, sometimes 0 and -101.
0x11C | Normal damage | Damage multiplier for attacks not in below categories.
0x120 | Slash damage | Damage multiplier for slash attacks.
0x124 | Electric damage | Damage multiplier for electric attacks.
0x128 | Ice damage | Damage multiplier for freezing attacks.
0x12C | Fire damage | Damage multiplier for flame attacks.
0x130 | Grass damage | Damage multiplier for grass attacks.
0x134 | Water damage | Damage multiplier for water-effect attacks.
0x138 | Dark damage? | Damage multiplier for darkness attacks?
0x13C | Aura damage? | Damage multiplier for aura attacks?
0x140 | Direct damage? | Damage multiplier for Special:Direct attacks?
0x144 | Indirect damage | Damage multiplier for Special:Indirect attacks.
0x148 | WP normal damage | Damage multiplier for generic attacks on weak point.
0x14C | WP slash damage | Damage multiplier for slash attacks on weak point.
0x150 | WP electric damage | Damage multiplier for electric attacks on weak point.
0x154 | WP ice damage | Damage multiplier for freezing attacks on weak point.
0x158 | WP fire damage | Damage multiplier for flame attacks on weak point.
0x15C | WP grass damage | Damage multiplier for grass attacks on weak point.
0x160 | WP water damage | Damage multiplier for water-effect attacks on weak point.
0x164 | WP dark damage? | Damage multiplier for darkness attacks on weak point?
0x168 | WP aura damage? | Damage multiplier for aura attacks on weak point?
0x16C | WP direct damage? | Damage multiplier for Special:Direct attacks on weak point?
0x170 | WP indirect damage | Damage multiplier for Special:Indirect attacks on weak point.
0x174 | ? | Always 100.
0x178 | ? | Always 0.
0x17C | Base flinch resistance? | rowspan=2|If so, flinch resistance = base + scaling * stage's difficulty value
0x180 | Flinch resistance scaling?
0x184 | Trophyable | True if Trophy Stands can turn it into a trophy of itself, false otherwise. Only false for Jyk and Gamyga base.
```