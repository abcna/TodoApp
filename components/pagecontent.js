import React from "react";
import { useState } from "react";
export default function Pagecontent({ todo,disspatchtodos }) {

  return (
    <li className={todo.iscomplited ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          {" "}
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.iscomplited}
            onClick={()=>disspatchtodos({type : 'changestatus' , payload: todo})}
          />
          {todo.titel}
          <i className="input-helper"></i>
        </label>
      </div>{" "}
      <i
       onClick ={() => disspatchtodos({type: 'remove' , payload : todo})}
        className="remove mdi mdi-close-circle-outline"
      ></i>
    </li>
  );
}
