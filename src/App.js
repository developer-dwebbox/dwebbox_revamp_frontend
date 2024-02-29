import './App.css';
import Routespages from './routes/Routespages';

function App() {

  const moveCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    }
  };

  // Add event listener to track mouse movement
  document.addEventListener('mousemove', moveCursor);


  return (
    <div>
  <div className="cursor"></div>
   <Routespages/>
    </div>
  );
}

export default App;
