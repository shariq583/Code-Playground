import React, { useState, useRef } from "react";
import { loremIpsum } from "lorem-ipsum";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [separator, setSeparator] = useState("-");
  const sepRef = useRef(null);
  const randomTextRef = useRef(null); // Define randomTextRef
  const [numWords, setNumWords] = useState(100);
  const [char, setChar] = useState(0);

  const handleUpClick = () => {
    if (text !== "") {
      let upText = text.toUpperCase();
      setText(upText);
      props.changeFunc("Converted To Uppercase  ", "Success");
    } else {
      props.changeFunc("No text not found ", "Warning");
    }
  };

  const handleLowClick = () => {
    if (text !== "") {
      let lowText = text.toLowerCase();
      setText(lowText);
      props.changeFunc("Converted To Lowercase ", "Success");
    } else if (text === "") {
      props.changeFunc("No text not found ", "Warning");
    }
  };

  const handleClearText = () => {
    setText("");
    props.changeFunc("Text Cleared ", "Success");
  };

  const handleSepChange = (e) => {
    setSeparator(e.target.value);
  };

  const handleSepClick = () => {
    if (text !== "") {
      let newText = text.split(" ").join(separator);
      setText(newText);
      props.changeFunc(`separator "${separator}" added!`, "Success");
    } else {
    }
  };

  const handleRanClick = () => {
    const randNumber = parseInt(randomTextRef.current.value);
    setNumWords(randNumber); // Update numWords state
    const loremText = loremIpsum({ count: numWords, units: "words" });
    setText(loremText);
    props.changeFunc("Random text added!", "Success");
  };

  const handleChange = (e) => {
    setText(e.target.value);
    // Update the char state with the number of characters
    const newText = e.target.value;
    const numChars = newText.replace(/\s/g, "").length; // Count non-whitespace characters
    setText(newText);
    setChar(numChars);
  };
  return (
    <div className="container my-3 mb-2">
      <h2>{props.heading}</h2>
      <textarea
        className="form-control"
        id="textInput"
        rows="8"
        placeholder="Enter text here"
        value={text}
        onChange={handleChange}
      ></textarea>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary  my-3" onClick={handleSepClick}>
        Add some separator
      </button>
      <select
        name="separator"
        ref={sepRef}
        onChange={handleSepChange}
        value={separator}
        id="selectElement"
        className="mx-2"
      >
        <option value="-">-</option>
        <option value="_">_</option>
        <option value="|">|</option>
      </select>
      <button className="btn btn-primary my-3" onClick={handleRanClick}>
        Add random text
      </button>
      <input
        type="number"
        name="textNo"
        id="randomText"
        ref={randomTextRef}
        className="mx-3"
      />
      <button
        className="btn btn-danger float-end my-3"
        onClick={handleClearText}
      >
        Clear Text
        <i className="bi bi-trash3-fill mx-2"></i>
      </button>
      <h2>Text Details:</h2>
      <p>
        {text.trim().split(" ").length} words {char} characters
      </p>
      <p>{0.008 * text.trim().split(" ").length} mins to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
};

export default TextForm;
