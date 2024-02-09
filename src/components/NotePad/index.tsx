import { useState } from 'react';
import './style.css';

const Notepad = () => {
  const [notes, setNotes] = useState<string[]>([]);

  const handleDoublClick = () => {
    console.log('Ahoy! Note created!');
    setNotes([...notes, 'newnote']);
  }

  console.log(notes);

  return (
    <div
      className="notepad"
      onDoubleClick={handleDoublClick}
    >
      <h1>
        Double click anywhere to create a new note
      </h1>
    </div>
  );
}

export default Notepad;
