import { useState } from "react";
import React from "react";
import './App.css';


function uniqueId() {
  const secondsSinceEpoch = Math.round(Date.now() / 1000)
  return secondsSinceEpoch; //add unique ID to toDoItem object.
}

function App() {
  const [data, setData] = useState([]);
  const [tempData, setTemp] = useState("");
const [filteredItems, setFilteredItems] = useState([]);

  function handleEvent(e) {
    if (e.key === 'Enter') {

      //  get from tempData 
      // create new item stored using setData


      setData([...data, tempData]);

      // get my to do list items in a proxy array
      let tempList = data; // proxy array

      // add new obj to tempList GIVE TIMESTAMP FOR UNIQUE ID
      let newTempItem = { id: uniqueId(), text: tempData, complete: false };

      tempList.push(newTempItem);

      // set state by pushing proxy array
      setData(tempList);
      // set state of temp data to nothing = clear out
      setTemp("");

      // render
      filterArray();
    }
  }

  function activeToDo() {
    // conditional statment on status of complete === false
    const filteredArray = data.map(item =>
      { if(!item.complete) {
        return ( <li key={item.id} id={item.id}>{item.text}</li> ) }
      }
      )
      setFilteredItems(filteredArray);
  }

  function completedToDo() {
    // conditional statment on status of complete === true
    const filteredArray = data.map(item =>
      { if(item.complete) {
        return ( <li key={item.id} id={item.id}>{item.text}</li> )}
      }
        )
      setFilteredItems(filteredArray);
  }

  const filterArray = () => {
    const filteredArray = data.map(item =>
    { return ( <li key={item.id} id={item.id}>{item.text}</li> )}
    )
    setFilteredItems(filteredArray);
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
            <input type="text" value={tempData}
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
            {filteredItems}
          </ul>
        </div>
      </header >
    </>
  );
}

export default App;
