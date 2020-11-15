# Getting Started

### Quick List of Things you'll Need:

- Visual Studio Code
  - https://code.visualstudio.com/
  - blue, not purple
- the "aiscriptpad editor" extension
  - https://marketplace.visualstudio.com/items?itemName=fudgepops.aiscriptpad-editor
  - made with love
- the basic "include" files necessary for the extension to work
  - https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/fudgepop01/PPlusAI/tree/master/Include
  - tells the language how things work
- the `<character>MotionEtc.pac` file(s) of the character whose AI you'll be modifying
  - you'll need to get these yourself

## Tutorial

As of mid 2020, fudgepop01 has developed an AI development extension for a text editor called Visual Studio Code ("vscode" for short). **THE ICON FOR IT IS BLUE, NOT PURPLE** and here is the place you can get it: https://code.visualstudio.com/

Here is a guide on how to install extensions:

https://code.visualstudio.com/docs/editor/extension-gallery

You'll want to search for and install one called "aiscriptpad editor" by "fudgepops." This is the extension I have developed.

This extension is very powerful. It contains everything you need to build AI. AIScriptPad was the name of the original program created by Bero. His creation is what is responsible for actually converting the text code we'll edit into something that Brawl can understand.

Finally, you'll need the "include" files that tell the extension and its compiler how to interpret the code. These are provided for you here:

https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/fudgepop01/PPlusAI/tree/master/Include

### Setting Up

Create a folder - this can be called anything but I'll refer to it from this point-on as the `workspace` directory. This will be the place where we work on the AI. Within this `workspace` directory, **unzip** and place the contents of the include files you downloaded.

Now that we have that in order, we can actually open up `workspace` in vscode. If you happened to be creating these folders in vscode already, then just press `Ctrl + Shift + P` to open up the command menu, then type in and select "Developer: Reload Window" (or just press `Ctrl + R`).

At this point you should have the `workspace` folder open with the include folder inside.

### Organizing for development

Now that you're in `workspace`, you can begin to setup the structure of your project. This is necessary to keep files in one project from interfering with those of others. So... make another folder. This can be called anything you see fit. From now on though, I'm going to refer to it as `character` folder.

Go ahead and place your `<character>MotionEtc.pac` file into the `character` folder. In `character`, you should also make a new folder called `src`. With that done, you're finally done with organization!

### Extracting the AI Scripts

This is where we actually start using the aiscriptpad editor extension. Right click on the `MotionEtc.pac` file, and click the "export data from pac file" option that should be at/around the bottom of the right click menu. In the menu that appears, select the `src` folder you made earlier and confirm your selection with the "Select Folder" button.

Congrats, you should now see a number of different files:

- `.as` files are the scripts responsible for the individual inputs that the AI performs
- `AIPD.aipd` is responsible for forcing the AI into the `.as` scripts in certain situations
- `ATKD.atkd` is the attack definition file. This tells the default AI the ranges in which the move can hit the opponent, along with the move's start/end frames.

You'll learn more about these files in other tutorials. For now the important part is that they exist and you can see them.

### Creating the new PAC File

Once you finish editing the files you'll of course need a way to put them back into Brawl. Right click on the `src` folder with all the scripts, and select the "compile AI to pac file" option near the bottom of the right click menu. In the menu that appears, navigate to and select the original `MotionEtc.pac` file from which you got the scripts in the first place.

This will do two things:

1. create a folder called `__preprocessed` within the `src` folder. This contains the script files after they've gone through some initial processing that will be discussed in a different tutorial.
2. create an `out` folder within the `character` folder that should contain the new `MotionEtc.pac` file. This ensures you don't overwrite the original file just to be safe.

You can now put this in your build and test it out!

## Congratulations!

You now have the basic knowledge necessary to look at an AI's scripts and rebuild the AI!

...But you'll probably want to learn how to actually *modify* the AI's scripts.

Remember the `.as`, `.aipd`, and `.atkd` files from earlier? Well, there are tutorials for each of those and more! Check 'em out!