import { useState } from 'react';
import './style.css';

const Note = () => {
  const [drag, setOnDrag] = useState(false);
  const [position, setPosition] = useState({
    deltaX: 0,
    deltaY: 0,
    x: '0px',
    y: '0px'
  });

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
      const x = `${e.clientX - position.deltaX}px`;
      const y = `${e.clientY - position.deltaY}px`;
      e.target.style.left = x;
      e.target.style.top = y;

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
    >
      <textarea onClick={e => e.stopPropagation() } />
    </div>
  );
}

export default Note;
