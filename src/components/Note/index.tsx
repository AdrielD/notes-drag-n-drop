import { useEffect, useState, useRef } from 'react';
import './style.css';

interface NoteInterface {
  x: number;
  y: number;
  w: number;
  h: number;
}

const Note = ({ x = 0, y = 0, w = 0, h = 0, }: NoteInterface) => {
  const noteRef = useRef<any>(null);
  const textareaRef = useRef<any>(null);
  const [drag, setOnDrag] = useState(false);
  const [position, setPosition] = useState({
    deltaX: 0,
    deltaY: 0,
    x: `${x}px`,
    y: `${y}px`
  });

  useEffect(() => {
    const note = noteRef.current;
    note.style.left = position.x;
    note.style.top = position.y;
    note.style.width = `${w}px`;
    note.style.height = `${h}px`;
    textareaRef.current.style.width = `${w}px`;
    textareaRef.current.style.height = `${h}px`;

    new ResizeObserver(() => {
      note.style.width = textareaRef.current.style.width;
      note.style.height = textareaRef.current.style.height;
    }).observe(textareaRef.current);
  }, []);

  const handleMouseDown = (e :any) => {
    setOnDrag(true);
    setPosition({
      ...position,
      deltaX: e.clientX - e.target.offsetLeft,
      deltaY: e.clientY - e.target.offsetTop
    });
  }

  const handleMouseUp = () => {
    setOnDrag(false);
  }

  const handleMouseLeave = () => {
    setOnDrag(false);
  }

  const handleMouseMove = (e: any) => {
    if (drag) {
      console.log(e.clientX, e.clientY, position);
      const x = `${e.clientX - position.deltaX}px`;
      const y = `${e.clientY - position.deltaY}px`;
      const note = noteRef.current;
      note.style.left = x;
      note.style.top = y;

      setPosition({...position, x, y });
    }
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="note"
      ref={noteRef}
    >
      <textarea
        ref={textareaRef}
        placeholder="Type something you don't want to forget later"
      />
    </div>
  );
}

export default Note;
