import './App.css';
import { useEffect, useRef } from 'react';

function App() {

  const inputElemRef = useRef();

  useEffect(() => {
    inputElemRef.current.style.border = "5px solid red";
  }, []);

  return (
    <div className='App'>
      <input type="text" ref={inputElemRef} />
    </div>
  );
}

export default App;
