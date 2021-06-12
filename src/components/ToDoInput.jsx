import React, { useState } from "react";
function ToDoInput(props) {
  const date = new Date();
  const [toDo, setToDo] = useState("");
  return (
    <div className="input">
      <input
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        type="text"
        placeholder="🖍 Add Item...."
      />
      <i
        onClick={() => {
          props.addToTodoList({ id: Date.now(), text: toDo, status: false, time:date.getHours()+":"+date.getMinutes() });
          setToDo("");
        }}
        class="fas fa-plus"
      ></i>
    </div>
  );
}

export default ToDoInput;
