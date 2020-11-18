# CPU Level Values

AI in Brawl ranges from 1 through 9. ProjectM/+ has a level 0, but this is only visual. In reality this is just equivalent to level 1. Each AI has a specific value associated with it:

```handsontable
# COLUMNS
CPU Level
Value
# DATA
1 | 0
2 | 15
3 | 21
4 | 31
5 | 42
6 | 48
7 | 60
8 | 75
9 | 100
```

Previously, in aiscriptpad you would need to memorize these values... but now with the aiscriptpad editor extension, you can define [global constants](/Brawl/AI_Modding/Basics/as_files#Constant-Variables) for each of them and use them everywhere. Here's something you can easily copy and paste into your `globals.as` file if you so desire:

```as
// AI values
#const LV1 = 0
#const LV2 = 15
#const LV3 = 21
#const LV4 = 31
#const LV5 = 42
#const LV6 = 48
#const LV7 = 60
#const LV8 = 75
#const LV9 = 100
```

### Differences Between AI Levels

Levels 1 through 3 are unique:

- they don't really target opponents nearly as much as the others
- they can't run - their stick value is capped at 0.5.

Levels 4 through 9 appear to be blank slates for the most part - so do whatever you want with those.

> **Note:**
>
> I recommend making the best AI you can first, then tweaking its capabilities by using the AI levels.