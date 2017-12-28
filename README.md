# License

[AGPL-3.0](https://opensource.org/licenses/AGPL-3.0) ([summary](https://tldrlegal.com/license/gnu-affero-general-public-license-v3-(agpl-3.0)))

### ToDo's

- Progress bar on book download
- Speed up initial page load by only doing load of BookPages and BookContents when it is done
- Make edges of page clickable for turning pages, etc
- Do not start a download if there is no internet connection
- Handle book download error
- Add refresh library menu item
- Before pushing live, make sure the cache policy on the reader files is right (or use a bust string). Also, handle scenario where they have no internet connection.
- Back button from BookPages / BookContents should go back to reading (?)
- Library listing should become a FlatList (both views) to ensure it is still fast even on a big library
- Get images for each page for BookPages (redo necessary pages on every highlight, be it on this device or another)

### Bugs

- One book page parsing cuts off another so that the first does not finish
- "Remove from device" option not showing on iOS (when viewing in BookPages or BookContents)
- It is possible to double tap a book and then it opens twice--disallow this (and other double taps on a slow device)
- pinching or double tapping zooms when reading (it shouldn't)
- On some books, characters might be corrupted by android ajax hack
- I believe that internal links also cause page turns or middle tab (they shouldn't)
- I believe external links are not handled properly
- Bloodlines does not display
- first time I open the app, book images do not show (still a problem?)