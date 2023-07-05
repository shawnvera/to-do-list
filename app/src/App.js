import {useState} from "react";
import React from "react";
import './App.css';

let toDoListItem = {
  "className": "text-decoration-line-through",
  "initialText": "What needs to be done?"

}



function App() {
  const [initialText, setInitialText] = useState("");
  return (
    <>
    <div className="text-center">
  <label className="text-center">
  <input type="text" name="myInput" value={toDoListItem.initialText} 
  onInput={e => setInitialText(e.target.value)}
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
