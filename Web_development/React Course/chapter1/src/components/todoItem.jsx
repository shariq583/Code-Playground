import React from "react";
const todoItem = ({ task, onDelete }) => {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.desc}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(task);
        }}
      >
        Delete
      </button>
      ;
    </div>
  );
};

export default todoItem;
