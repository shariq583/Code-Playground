import React from "react";
import TodoItem from "./todoItem";
import "../App.css";
const list = (props) => {
  return (
    <div className="container">
      <h4 className="text-center ">To Do List</h4>
      <div className="task">
        <TodoItem task={props.todo[0]} />
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default list;
