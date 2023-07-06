import { useState } from "react";
import React from "react";
import './App.css';

let toDoListItem = {
  "className": "text-decoration-line-through",
  "toDo": "What needs to be done?"

}



function App(props) {
  const [data, setData] = useState([]);
  const [tempData, setTemp] = useState("");

  function handleEvent(e) {
    if (e.key === 'Enter') {

      //  get from tempData 
      // create new item stored using setData
      let newToDo = setData(tempData);
      // get my to do list items
      let tempList = data; // proxy array

      // add new obj to tempList
      let newTempItem = { toDo: tempData };

      tempList.push(newTempItem);

      // set state by pushing proxy array
      //setData(tempList);
    }
  }

  let filteredList = data.filter(item => data.toDo);

  return (
    <>
      <form>
        <div className="text-center">
          <label className="text-center">
            <input type="text" placeholder={tempData}
              onChange={e => setTemp(e.target.value)}
              onKeyDown={handleEvent}
            />
          </label>
        </div>
      </form>

      <div className="list">
        <header>

          {/*map through the data in state, display each toDoListItem*/}

          {/*filteredLIst.map(item => item.toDoListItem.toDo)*/}
          <ul className="text-center">
            <li>
              {toDoListItem.toDo}
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
