import React from "react";
const todoItem = ({ task }) => {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.desc}</p>
    </div>
  );
};

export default todoItem;
