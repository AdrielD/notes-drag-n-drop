import { useState, ReactElement } from 'react';
import Note from '../Note';
import './style.css';

const Notepad = () => {
  const [notes, setNotes] = useState<ReactElement[]>([]);

  const handleDoublClick = () => {
    const note = <Note key={new Date().getTime()} />;
    setNotes([...notes, note]);
  }

  return (
    <div
      className="notepad"
      onDoubleClick={handleDoublClick}
    >
      <h1>
        Double click anywhere to create a new note
      </h1>
      {
        notes.map(note => note)
      }
    </div>
  );
}

export default Notepad;
