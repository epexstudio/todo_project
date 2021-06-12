import React from 'react';

function ToDoItem(props) {
    return (
        <div key={props.obj.id}>
            <div className={`toDos ${props.obj.status?'completed':'notCompleted'}`}>
              <div className="toDo">
                <input onChange={()=>props.updateTodo(props.obj.id)} type="checkbox" name="" id="" checked={props.obj.status}/>
                <p>{props.obj.text}</p>
                <p className="time">{props.obj.time}</p>
                <i onClick={()=>props.deleteTodo(props.obj.id)} class="fas fa-trash-alt"></i>
              </div>
            </div> 
        </div>
    )
}

export default ToDoItem
