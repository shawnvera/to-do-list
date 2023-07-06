import { useState } from "react";
import React from "react";
import './App.css';

let toDoListItem = {
  "className": "text-decoration-line-through",
  "text": "What needs to be done?",
  "completed": true
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
      let newTempItem = { text: tempData };

      tempList.push(newTempItem);
      // set state by pushing proxy array
      data.push(tempList);
    }
  }

let array = tempData;
console.log(typeof data);

 

  return (
    
    <>

      <div className="text-center">
        <label className="text-center">
          <input type="text" placeholder={tempData}
            onChange={e => setTemp(e.target.value)}
            onKeyDown={handleEvent}
          />
        </label>
      </div>


      <div className="list">
        <header>

          {/*map through the data in state, display each toDoListItem*/}
          <ul>
            {/*filteredLIst.map(item => item.toDoListItem.toDo)*/}
          {data.filter(toDo => toDo.text).map(item => (
            <li>
              {item.text}
            </li>
            ))}
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
