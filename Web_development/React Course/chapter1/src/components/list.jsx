import React from "react";
import TodoItem from "./todoItem";
import "../App.css";
const list = (props) => {
  return (
    <div className="container">
      <h4 className="text-center ">To Do List</h4>
      <div className="task">
        {props.todo.map((todo) => {
          return (
            <TodoItem task={todo} key={todo.sno} onDelete={props.deleteFunc} />
          );
        })}
      </div>
    </div>
  );
};

export default list;
