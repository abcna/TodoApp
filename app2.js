import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Pagecontent from "./components/pagecontent";
import Addbutt from "./components/Addbutt";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";


function App() {
  const initialTodo = [
    {
      id: uuid(),
      titel: "kharide 360 tomani",
      iscomplited: false,
      
    },
    {
      id: uuid(),
      titel: "Buy spray",
      iscomplited: false,
    },
    {
      id: uuid(),
      titel: "Buy vodka",
      iscomplited: false,
    },
  ];
  const [todos, disspatchtodos] = useReducer(func, initialTodo);
  

  function func(state, action) {
    switch (action.type) {
      case "add": {
        if (action.payload.titel === '') {
          return (alert('u should write something to add') , state)
        }
        else{
        return [action.payload, ...state];
      }}
      case "changestatus": {
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, iscomplited: !action.payload.iscomplited };
          } else {
            return item;
          }
        });
      }
      case "remove": {
        return state.filter((item) => {
         if (action.payload.id !== item.id){
           return {...item , }
         };
        });
      }
      default : return state
    }
    
  }
  
  return (
    <body>
      <div className="page-content page-container" id="page-content">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <Addbutt disspatchtodos={disspatchtodos} />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column todo-list">
                    {todos.map((todoitem) => {
                      return (
                        <Pagecontent
                          todo={todoitem}
                          disspatchtodos={disspatchtodos}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

// const newTodos = todos.map((todo) => {
//   if (todo.id === todoId) {
//     return { ...todos, iscomplited: !todo.iscomplited };
//   } else {
//     return todo;
//   }
// });

/* {todos.map((todo) => (
                      <Pagecontent handletuggles={handletuggle} todo={todo} key={uuid()} />
                    ))} */

// -------------------------
// const [todos, setTodos] = useState(initialTodo);

// function handletuggle(todoId) {
//   const temptodos = [...todos];
//   const foundedItem = temptodos.find((item) => {
//     return item.id === todoId;
//   });

//   foundedItem.iscomplited = !foundedItem.iscomplited;
//   setTodos(temptodos);
// }
