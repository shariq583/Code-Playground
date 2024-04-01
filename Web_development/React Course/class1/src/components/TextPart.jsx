import React, { useState } from "react";

const TextFrom = (props) => {
  const handleUpClick = () => {
    console.log(text);
    let upText = text.toUpperCase();
  };
  const handleUpChange = () => {};
  const [text, setText] = useState("Enter some text");
  return (
    <div className="container my-3 mb-2">
      <h2>{props.heading}</h2>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder={text}
        onChange={handleUpChange}
      ></textarea>
      <button className="btn btn-primary btn-sm my-3" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
    </div>
  );
};

export default TextFrom;
