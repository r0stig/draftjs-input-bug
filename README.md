Draftjs input bug:

To recreate:

- start with npm start
- Focus the element and write one letter
- Click somewhere else to blur the draftjs element
- Press backspace
- Now try and write, first letter will be ignored and backspace won't work
