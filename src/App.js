import { useEffect, useRef } from 'react';
import './App.css';
import Routespages from './routes/Routespages';
function App() {


  const cursorRef = useRef(null);
  const cursorPointerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorPointer = cursorPointerRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursorPointer.style.left = e.clientX + "px";
      cursorPointer.style.top = e.clientY + "px";
    };

    const handleMouseDown = () => {
      cursor.style.height = "0.7rem";
      cursor.style.width = "0.7rem";
      cursorPointer.style.height = "3rem";
      cursorPointer.style.width = "3rem";
    };

    const handleMouseUp = () => {
      cursor.style.height = "0.3rem";
      cursor.style.width = "0.3rem";
      cursorPointer.style.height = "2rem";
      cursorPointer.style.width = "2rem";
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);



  return (
    <div>
<div className="cursor" ref={cursorRef} />
      <div className="cursor-pointer" ref={cursorPointerRef} />
   <Routespages/>
    </div>
  );
}

export default App;
