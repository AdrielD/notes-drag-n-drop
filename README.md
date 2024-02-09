### Intro
Project started with:

`npm create vite@latest notes-drag-n-drop -- --template=react-ts`

To start, run the following:

```
cd notes-drag-n-drop
npm install
```

### Bugs & Known Issues
- note's movement is not done in the most "react way", it's using imperative code, but it works. Will experiment later with useRef, useLayoutEffect or animation frames;
- when notes overlap, they loose their drag state. Setting `e.preventDefault()` on mouseMove didn't seem to solve this issue;
- textarea's height is not limited and does not auto-adjust, requires some calculations that will take time to get right;
- resizing the textarea maycause the note to reset it's position;
