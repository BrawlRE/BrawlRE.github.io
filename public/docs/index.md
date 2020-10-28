# Welcome to the Wiki

This will hopefully serve as a collective repository of research gathered
upon reverse-engineering and experimenting with Super Smash Brothers Brawl.

## About

This project is hosted on github using github pages. It was ultimately a repository
of knowledge created with the intent on making Brawl modding easier to get into, though
that goal may expand over-time.

fudgepop01 created the inital framework for this site because he wanted a more intuitive way for
contributors to ultimately contribute. This is discussed in the next section:

## Navigation

On desktop devices you will find the navigation menu to the left. This is the main way you'll
get around on this site, or by using special links.

On the right you'll find the different headings of an article. You can click one to instantly scroll
to that section.

On mobile (or if your screen is under 1000 pixels wide), there will be two menus icons on the top.
The one on the left will open the main navigation menu, and the one on the right will open the heading
navigation menu that lets you immediately jump to that respective part of the article.

## Linking

To link to a particular article in a particular place, write the following:

```
[text to display](/path/to/page#place_in_page_to_link)

or if you only want to link to the top

[text to display](/path/to/page)
```

For instance, if we wanted to link to Brawl/Article_Variables and instantly jump to Falco Laser,
it's as simple as going `[Falco Laser Article](/Brawl/Article_Variables#laser)` which results in
this link: [Falco Laser Article](/Brawl/Article_Variables#laser).

the locations in a webpage can be a bit tricky though -- for instance, if you wanted to link to
*fox*'s laser, you would need to end the link with `#laser-1` instead of simply `#laser` because
"laser" appears as a heading twice. If you're unsure, you can copy/paste the exact link from a
heading by navigating to the page and clicking on it, then putting that link in the markdown link.
If you do that with fox's laser it would look something like:

```
[Fox Laser Article](https://brawlre.github.io?page=Brawl/Article_Variables&location=laser-1)

or, if you're copying from a localhost version

[Fox Laser Article](http://localhost:5000?page=Brawl/Article_Variables&location=laser-1)
```

Don't worry about changing the part that says `localhost:number` or `brawlre.github.io` - as long
as it is either one of those the site will understand the intention and work just fine.

Here is how they'll both render in the end:

- [Fox Laser Article](https://brawlre.github.io?page=Brawl/Article_Variables&location=laser-1)
- [Fox Laser Article](http://localhost:5000?page=Brawl/Article_Variables&location=laser-1)

## Contributing

To contribute to this project you will need to have a [github account](https://github.com/login).

For those of you that are contributing a page to the site, your main focus will be in the `public/docs/`
folder.

This video [here](https://www.youtube.com/watch?v=yr6IzOGoMsQ) explains the process of how someone might
make changes to the repository.

> Note:
> you can create new folders directly on the website by adding a `/` to the title of a new page.
> Whatever is before the `/` will be the new folder name. For instance, if you wanted to create a
> `Melee` folder (it does not exist as of the writing of this page) by creating a new file, then
> where it says "Name your file..." you would write `Melee` followed by `/`, and then you name the file
> you wish to create in the new folder.

### _pages.txt

When making new pages, you will also need to edit the `_pages.txt` file. This is what controls what shows
up on the left navigation menu and tells the site where to find these files. Here is the structure of `_pages.txt`
when the very first iteration of this site began:

```txt
Brawl/
  Actions
  Article_Variables
Tools/
  TestPage
index
```

each file and folder here is rooted in the `docs` folder. To say something is a folder, you put a `/` at the end
of the line. To say something is a file within that folder, you move to the next line and indent it with
**two spaces**. This site uses markdown files, so it is assumed that every file specified ends with `.md`.
Otherwise nothing will show up.

### Tables

Tables are helpful but in regular markdown... they're boring. The standard way to make a table in
markdown (if you don't want fancy features or easy-editing) is by doing the following:

```md
header 1 | header 2 | header 3
:-- | :--: | --:
left text | center text | right text
item 4 | item 5 | item 6
```

That results in the following table:

header 1 | header 2 | header 3
:-- | :--: | --:
left text | center text | right text
item 4 | item 5 | item 6

each column here is separated by `|`. It starts with a row for the headers, then a row to define the
text alignment, then with whatever data you wish to include in these tables.

### Better Tables

Here is how the special tables work. They're similar to the typical tables seen above, but
significantly more configurable.

This will generate the same sort of table as seen above:

<pre><code>```handsontable
# OPTIONS
# COLUMNS
header 1
header 2
header 3
# DATA
left text | center text | right text
item 4 | item 5 | item 6
```
</code></pre>

which generates this:

```handsontable
# OPTIONS
# COLUMNS
header 1
header 2
header 3
# DATA
left text | center text | right text
item 4 | item 5 | item 6
```

Already, these tables are better because you can highlight rows and columns and copy data just like you
would in Excel or Google Sheets. Later-on, you'll be able to edit them in a similar way too!

You might be thinking:

> okay that's cool, but are there any more benefits?

yes - you can give the table **SUPERPOWERS** with the ability to filter and have right-click options
and have nested headers and basically do whatever you need it to do with the options provided by
the [handsontable API](https://handsontable.com/docs/8.1.0/demo-scrolling.html). Here is how you actually
use them:

<pre><code>```handsontable
# OPTIONS
# COLUMNS
header 1 [
  nested header 1
  nested header 2
]
header 2
header 3
header 4
# DATA
A1 | B1 |<$w3 h2> merged table cells
A2 | B2
A3 | B3 | C3 | D3 | E3
A4 | B4 |<$w3> merged cells\nwith new line
A5 | B5 | C5 | D5 | E5
A6 | B6 | C6 | D6 | E6
A7 | B7 | C7 | D7 | E7
A8 | B8 | C8 | D8 | E8
```
</code></pre>

```handsontable
# OPTIONS
# COLUMNS
header 1 [
  nested header 1
  nested header 2
]
header 2
header 3
header 4
# DATA
A1|B1|<$w3h2> merged table cells|||||
A2|B2||||
A3|B3|C3|D3|E3|||
A4|B4|<$w3h1> merged cells\nwith new line|||||
A5|B5|C5|D5|E5|||
A6|B6|C6|D6|E6|||
A7|B7|C7|D7|E7|||
A8|B8|C8|D8|E8|||
```

These tables can take a small amount of time to initially load, so when there are more
than 10 on a webpage, they will all automatically collapse until the "show table" button
is clicked.

You might notice the `edit table` button when the table is shown. This allows you to edit a table
just like you would in Excel / Google Sheets and then copy the markdown to create that table
straight to the clipboard! This probably took about 8 hours of fudge's life but it was *soooo*
worth-it to implement ahahah~