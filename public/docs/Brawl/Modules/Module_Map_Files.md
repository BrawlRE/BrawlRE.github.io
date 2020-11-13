Near the end of Brawl's modding life, various hackers discovered .map files on the Korean version of the Brawl game disc. Ported to the US version of the game, these files document most if not all symbols and functions in Brawl's code.

[Brawl Map Files](https://mega.nz/#!iMYz2DhJ!c5gaEwbte4A0q9MnGHaKbhGJsO3tGx_Eeg1wEqu8Hq0)

## Using the .map files

Using the map files is relatively simple. The offsets contained in the files are file offsets relative to the start of the `.text` section (typically `section[1]`). You can manually look up these code using Brawlbox and the offsets, or you can alternatively use IDA in combination with the `.rel`/`.dol` loader and run [this script](https://mega.nz/#!PVJxVAoA!H49Y7YEmsf_5ygPXyJIfpCnYX047MiXAsH9v-lW53Rg) to apply the map file to the IDA database. You can also use IDA to export a dolphin compatible .map file, see below for more information.

## Exporting from IDA to dolphin

The real power of these map files comes from when you combine them with Dolphin Emulator's debugger. This will fill in all the functions, called functions, and call stack. To get a Dolphin Compatible map file from IDA, you first must rebase the program IDB to the correct memory address used in Brawl. (read through Brawl's log until you see the correct `<gfModule>` line. The `.text` section there will be what you want to rebase to. Then run [this script](https://mega.nz/#!bYJ3Fa7C!PFaozAwH3xcwhZ0IY072PI1iOnhpFTx-BGA5ujkTwCQ) to export the now dolphin compatible map file. You can now load these map files into dolphin via `Symbols->Load Other Map File`