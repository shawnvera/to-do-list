import { useState } from "react";
import React from "react";
import './App.css';
import ToDoList from "./ToDoList";

let toDoListItem = {
  "id": uniqueId,
  "text": "What needs to be done?",
  "complete": true
}

function uniqueId() {
  const secondsSinceEpoch = Math.round(Date.now() / 1000)
  toDoItem.id.value = secondsSinceEpoch; //add unique ID to toDoItem object.
}

function App() {
  const [data, setData] = useState([]);
  const [tempData, setTemp] = useState("");

  function handleEvent(e) {
    if (e.key === 'Enter') {

      //  get from tempData 
      // create new item stored using setData
      setData(tempData);
      // get my to do list items
      let tempList = data; // proxy array

      // add new obj to tempList
      let newTempItem = { text: tempData, complete: false };

      tempList.push(newTempItem);

      // set state by pushing proxy array
      data.push(tempList);
      filterData();
    }
  }

  function activeToDo() {
    // conditional statment on status of completed
    if (toDoListItem.complete === false) {
      return <li>{toDoListItem.text}</li>
    }
  }

  function completedToDo() {
    // if true keep these filtered
    if (toDoListItem.complete === true) {
      return <li>{toDoListItem.text}</li>
    }
  }

  function filterData() {
    return
    <li>
      {toDoListItem.text}
    </li>
  }

  return (
    <>
    <header>
     



      <ToDoList toDoList={toDoList} />




      {/* <div className="text-center">
        <label className="text-center">
          <input type="text" placeholder={toDoListItem.text}
            onChange={e => setTemp(e.target.value)}
            onKeyDown={handleEvent}
          />
        </label>
      </div>

      <div className="list">
        <header>

          <div className="text-center">
          <button onClick={activeToDo}>Active</button>
          <button onClick={completedToDo}>Completed</button>
          <button onClick={filterData}>All</button>
          </div>
          
          // map through the data in state, display each toDoListItem
          <ul>
            {filterData()}
          </ul> */}



    </header >
    </>
  );
}

export default App;
