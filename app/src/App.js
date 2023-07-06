import {useState} from "react";
import React from "react";
import './App.css';





function App() {
  const [initialText, setInitialText] = useState("");
  let toDoListItem = {
    "className": "text-decoration-line-through",
    "initialText": ""
  
  }
  return (
    <>
    <div className="text-center">
  <label className="text-center">
  <input type="text" value={toDoListItem.initialText} 
  onInputCapture={e => setInitialText(e.target.value)}
  />
    </label>
    </div>

    <div className="App">
      <header>
    
       
        <p>
          
        </p>
       
      </header>
    </div>
    </>
  );
}

export default App;
