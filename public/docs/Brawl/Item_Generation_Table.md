# Item Generation Table

These table files, found inside the ItemCommonGen.pac, inside Common3.pac, and ItemMelee###Gen.pac files as MiscData[0], determine how frequent an item/Pokémon/assist appears, and if available, which subtype is used. This table can also be used to define what items the stage can use, such as stage specific items like the apple from green greens. In order to spawn items like these, the item must have a directory inside the "item" folder such as "item/apple/". It seems the folder and the name of the itm__Param.pac and Itm__Brres.pac is static. This means to use them, we will need a list of directories to make items common.

The general file structure follows the same layout as the [[Moveset File Format]], and can be broken down in the same fashion.

### genParamSet
The DataTable entry for "genParamSet" will take you to a list of offsets that is universally 0x28 in length and called the Table List. Each of the entries here will be 0x08 bytes in length and points to another list of offsets into the group list for a table. ([http://i.imgur.com/5tmyks1.png Visual representation of the Table List])

```handsontable
# COLUMNS
Offset {
  renderer: hex
}
Type
Description
# DATA
0x00|Pointer|Pointer to Group List for table
0x04|Pointer|Number of entries in Group List
```

### Group List
The group list is a section of data containing pointers to the actual Frequency Entries in the table, each pertaining to a specific group of Frequency entries. The number of entries in the list is specified in the second parameter of the Table List. Each entry in the Group List is 0x14 in length and is structured as followed:

NOTE: It is likely that the groups are created in order to provide separate tables for Modes/Pokeballs/assists to look up for specific items. I.e for sudden death to choose the bob-omb variant which is already primed to explode. In addition, the unknown values in the group entries seem to be quite important, as the standard items always have 0x08 equal to the file index of the stage specific tables (10,000)


Offset|Type|Description
0x00|Hex|Related to next group's 0x08?
0x04|Hex|Unknown
0x08|Hex|Related to 0x00 in previous group?
0x0C|Pointer|Pointer to the beginning of the Frequency entries in this group.
0x10|Hex|Number of Frequency Entries in this group at the position in the table specified by 0x0C

----
The common table inside common3.pac seems to have organized the groups by mode, type, assist, and Pokemon. The common table is laid out as follows.

```handsontable
# COLUMNS
Group
Type
# DATA
group[0]|Unknown
group[1]|Unknown
group[2]|Unknown
group[3]|Unknown
group[4]|Sudden Death
group[5]|Pokemon
group[6]|Assists
group[7]|Unknown
group[8]|Unknown
group[9]|Standard Items
```

### Frequency Entry
The data in each of these entries governs how often a given item will appear randomly within a stage. The length of each entry is 0x10 bytes, and the structure is as follows


```handsontable
# COLUMNS
Offset {
  renderer: hex
}
Type
Description
# DATA
0x00|Hex|Item ID
0x04|Hex|Sub Item Type (Barrel/Crate skin). Only read from stage-specific tables.
0x08|Float|Base appearance frequency. Most likely only read from the Common3 table.
0x0C|Split (2 shorts)|Could be "initial action"/"initial subaction", given how if so there's an entry for Bob-ombs already in their ready-to-explode state (which would be used for Sudden Death).
```