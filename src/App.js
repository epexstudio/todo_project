import React, { useState, useEffect } from "react";
import "./App.css";
import BtnTodo from "./components/BtnTodo";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { Selector } from "./constants";

function App() {
  const [toDos, setToDos] = useState([]);

  const [selector, setSelector] = useState(Selector.All);

  const [filterdList, setfilterdList] = useState([]);

  useEffect(() => {
    let filtedTods = [...toDos];
    if (selector === Selector.Completed) {
      filtedTods = toDos.filter((toDo) => toDo.status);
    }
    if (selector === Selector.ToDo) {
      filtedTods = toDos.filter((toDo) => !toDo.status);
    }
    setfilterdList(filtedTods);
  }, [selector,toDos]);

  function onSelecrtorChange(selectedType) {
    setSelector(selectedType);
  }

  function updateTodo(todoItemId) {
    const index = toDos.findIndex((item) => item.id === todoItemId);
    const updatedArray = [...toDos];
    updatedArray[index].status = !updatedArray[index].status;
    setToDos(updatedArray);
  }

  function addToTodoList(todoItem) {
    setToDos([...toDos, todoItem]);
  }

  function deleteTodo(id){
    console.log(toDos);
    const deletedArray = toDos.filter(todoItem=>todoItem.id!==id);
    setToDos(deletedArray);
  }
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = days[new Date().getDay()];
  return (
    <div className="App">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>
      <div className="subHeading">
        <h2>Whoop, it's {day} 🥤</h2>
      </div>
      <ToDoInput addToTodoList={addToTodoList} />
      <br />
      <BtnTodo selector={selector} setSelector={onSelecrtorChange} />
      <ToDoList
        selector={selector}
        toDos={filterdList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
