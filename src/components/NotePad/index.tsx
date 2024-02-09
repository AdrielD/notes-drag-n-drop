import { useState, ReactElement } from 'react';
import Note from '../Note';
import './style.css';

const noteSizes = {
  small: { width: 130, height: 150 },
  medium: { width: 280, height: 300 },
  large: { width: 430, height: 450 },
}

const Notepad = () => {
  const [notes, setNotes] = useState<ReactElement[]>([]);
  const [noteSize, setNoteSize] = useState(noteSizes.medium);

  const handleDoublClick = (e: any) => {
    const key = new Date().getTime();
    const note = <Note key={key} x={e.clientX} y={e.clientY} w={noteSize.width} h={noteSize.height} />;
    setNotes([...notes, note]);
  }

  const SizeSelect = () => {
    return (
      <select onChange={e => setNoteSize(noteSizes[e.target.value])}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    )
  }

  return (
    <div
      className="notepad"
      onDoubleClick={handleDoublClick}
    >
      <h1>
        Double click anywhere to create a <SizeSelect /> note
      </h1>
      {
        notes.map(note => note)
      }
    </div>
  );
}

export default Notepad;
