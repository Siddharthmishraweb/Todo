import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";
import InputArea from './InputArea'
console.log(ToDoItem)
function App() {

    const [inputText , setInputText] = useState("");
    const [items , setItems] = useState([]);
    function addItem(inputTExt){
      setItems(prevItems => {
        return [...prevItems , inputTExt];
      });
      // setInputText("");
    }
    function handleEvent(event){
       const newValue = event.target.value;
       setInputText(newValue);
    }
    function handleClick(inputTExt){
        setItems(prevItems => {
            return [...prevItems , inputText];
        });
        setInputText("");
    }
    
    function deleteItem(id){
      setItems(prevItems => {
        return prevItems.filter(
          (item,index) => {
            return index !== id;
          }
        )
      });


    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
       onAdd = {addItem}
      
      />
      <div>
        <ul>
          {items.map((todoItem,index )=> 
          <ToDoItem 
           key={index}
           id = {index}
           text = {todoItem}
           onChecked = {deleteItem}
          />
          
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
