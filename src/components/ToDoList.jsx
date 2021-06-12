import React from "react";
import ToDoItem from "./ToDoItem";
function ToDoList(props) {
  return (
    <>
      {props.toDos.map((obj) => {
        return (
          <ToDoItem  updateTodo={props.updateTodo} deleteTodo={props.deleteTodo} obj={obj} />
        )
      })}
    </>
  );
}

export default ToDoList;
