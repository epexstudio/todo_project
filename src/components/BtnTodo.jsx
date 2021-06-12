import React from "react";
import { Selector } from "../constants";

function BtnTodo(props) {
  return (
    <div class="buttons">
      {Object.keys(Selector).map((item,index) => {
        return (
          <button key={item}
            class={`button ${props.selector===Selector[item]?'active':''}`}
            onClick={() => props.setSelector(Selector[item])}
          >
            {Selector[item]}
          </button>
        );
      })}
    </div>
  );
}

export default BtnTodo;
