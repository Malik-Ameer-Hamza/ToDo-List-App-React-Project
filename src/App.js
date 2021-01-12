import { useState } from "react";
import ToDoList from './ToDoLists';
import Add from '@material-ui/icons/AddCircleRounded';
import Tooltip from '@material-ui/core/Tooltip';
import './index.css';


function App() {
  let [inputList , setInputList] = useState();
  let [items, setItems] = useState([]);

  
  const itemEvent=(event)=>{
    setInputList(event.target.value);

  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList('');
  
  }
  const delItems = (id)=>{
    console.log("hello ");

    setItems((oldItems)=>{
      return oldItems.filter((arrelem,index)=>{
        return index !==id;
      })
    })
  }
  

  return (
    <div className="main_div">
      <div className="center_div"><br />
        <h1>To Do List</h1><br />
        <input type="text" placeholder="Add Task" value={inputList } onChange={itemEvent}/>
        <Tooltip title="Add Task">
       <Add className="button" onClick={listOfItems}></Add>
       </Tooltip>

        <ol>
          {items.map(((itemVal,index)=>{
            return (
              <ToDoList text={itemVal} key={index} id={index} onSelect={delItems}/>
            )
          }))}

        </ol>
        <Tooltip title="Here is a Message for you from Ameer Hamza">
        <button onClick={()=>{alert(`Hey Friends! myself Ameer Hamza It is my first  project on react. Friends A good to-do list will shape your day and help you focus on the things that are most important to you. So how do you do it? let's try.`)}}>Author Message 🔈 </button>
        </Tooltip>
        
      </div>
      
  
  
    </div>
  );
}

export default App;
