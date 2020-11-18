# The `ATKD` file

This is a file used to tell other CPUs when a move is considered "dangerous." Each move/offsensive subaction has:

- `unk`
  - don't worry about this; it's always 0
- `start`
  - when the "dangerous" part of the move starts
- `end`
  - when the "dangerous" part of the move ends
- `xmin`, `xmax`
  - the **x** position of the "dangerous" part of the move relative to the attacker
- `ymin`, `ymax`
  - the **y** position of the "dangerous" part of the move relative to the attacker

At the top of the file there are two flags:

- flag1
  - no idea what this does, probably don't touch it
- flag2
  - no idea what this does, probably don't touch it

This file is extremely important when making AI fight eachother, telling them when and where they should try to avoid the move.