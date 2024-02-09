### Intro
Project started with:

`npm create vite@latest notes-drag-n-drop -- --template=react-ts`

To start, run the following:

```
cd notes-drag-n-drop
npm install
```

### Bugs & Known Issues
- note's movement is not done in the most "react way", it's using some imperative code, but it works. Will experiment later with useRef, useLayoutEffect or animation frames;
- when notes overlap, they loose their drag state. Setting `e.preventDefault()` on mouseMove didn't seem to solve this issue;
- resizing the textarea causes the note to reset it's position;
