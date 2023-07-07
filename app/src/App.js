import { useState } from "react";
import React from "react";
import './App.css';

let toDoListItem = {
  "id": uniqueId,
  "text": "What needs to be done?",
  "complete": true
}

function uniqueId() {
  const secondsSinceEpoch = Math.round(Date.now() / 1000)
  toDoListItem.id.value = secondsSinceEpoch; //add unique ID to toDoItem object.
}

function App() {
  const [data, setData] = useState([]);
  const [tempData, setTemp] = useState("");

  function handleEvent(e) {
    if (e.key === 'Enter') {

      //  get from tempData 
      // create new item stored using setData
      setData(tempData);

      // get my to do list items in a proxy array
      let tempList = data; // proxy array

      // add new obj to tempList
      let newTempItem = { text: tempData, complete: false };

      tempList.push({newTempItem});

      // set state by pushing proxy array
      data.push(tempList);

      // render
      filterArray();
    }
  }

  function activeToDo() {
    // conditional statment on status of complete === false
    if (toDoListItem.complete === false) {
      return <li>{toDoListItem.text}</li>
    }
  }

  function completedToDo() {
    // conditional statment on status of complete === true
    if (toDoListItem.complete === true) {
      return <li>{toDoListItem.text}</li>
    }
  }

const filterArray = () => {
  const filteredArray = tempData.filter(item => item.complete === false)
   return <li>{filteredArray}</li>
}


{/*
  function toDoItems() { data.map(() => 
    // return list item of each to do item regardless of status of complete
    <li>
      {tempData.text}
    </li>
)}
  */}


  return (
    <>
      <header>

        <div className="text-center">
          <label className="text-center">
            <input type="text" placeholder={toDoListItem.text}
              onChange={e => setTemp(e.target.value)}
              onKeyDown={handleEvent}>
            </input>
          </label>
        </div>

        <div className="list">

          <div className="text-center">
            <button onClick={activeToDo}>Active</button>
            <button onClick={completedToDo}>Completed</button>
            <button onClick={filterArray}>All</button>
          </div>

          {/* // map through the data in state, display each toDoListItem */}
          <ul>
            {filterArray()}
          </ul>
        </div>
      </header >
    </>
  );
}

export default App;
