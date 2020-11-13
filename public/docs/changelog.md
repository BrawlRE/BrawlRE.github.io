## 11/13/2020

- fixed bug where merged cells weren't being properly recorded when copying as markdown
- WIP struct documentation functionality
  - added github actions workflow where changing the repo will auto-refresh the
    autocompletion structures
- added quite a few things in "Events"
- you can now comment things out in "_pages.txt" (use `? ` to comment)
- you can now specify which folders you wish to start as collapsed (begin an entry with `?c ` to accomplish this)
- semi-modularized backend allowing new features to be added/debugged easier

---

### Struct Documentation Planner

- [x] Turn C-like representation into tables
  - [x] specify arbitrary offsets for functions
  - [ ] inline function documentation
    - [ ] good way to distinguish between function pointers and functions that are
      at a fixed location in memory
    - [x] comments for return address and parameters
  - [x] support for arrays and array lengths
  - [x] support for comments
  - [x] support for jumping to known offsets (`use $ to accomplish this`)
- [ ] easy editing with auto-updating and hidden "_spacer" entries
- [ ] Serialization
- [ ] Auto-Generation of files for use in Fracture's C++ framework