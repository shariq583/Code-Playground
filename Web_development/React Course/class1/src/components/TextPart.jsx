import React, { useState, useRef } from "react";
import { loremIpsum } from "lorem-ipsum";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [separator, setSeparator] = useState("-");
  const sepRef = useRef(null);
  const randomTextRef = useRef(null); // Define randomTextRef
  const [numWords, setNumWords] = useState(100);

  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
  };

  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleSepChange = (e) => {
    setSeparator(e.target.value);
  };

  const handleSepClick = () => {
    let newText = text.split(" ").join(separator);
    setText(newText);
  };

  const handleRanClick = () => {
    const randNumber = parseInt(randomTextRef.current.value); // Get value using ref
    console.log(randNumber);
    setNumWords(randNumber); // Update numWords state
    const loremText = loremIpsum({ count: numWords, units: "words" });
    setText(loremText);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container my-3 mb-2">
      <h2>{props.heading}</h2>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
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
      <button className="btn btn-primary mx-3 my-3" onClick={handleSepClick}>
        Add some separator
      </button>
      <select
        name="separator"
        ref={sepRef}
        onChange={handleSepChange}
        value={separator}
      >
        <option value="-">-</option>
        <option value="_">_</option>
        <option value="|">|</option>
      </select>
      <button className="btn btn-primary mx-3 my-3" onClick={handleRanClick}>
        Add random text
      </button>
      <input type="number" name="textNo" id="randomText" ref={randomTextRef} />
      <button
        className="btn btn-danger my-3 float-end"
        onClick={handleClearText}
      >
        Clear Text
      </button>
      <h2>Text Details:</h2>
      <p>
        {text.split(` `).length} words {text.length} characters
      </p>
      <p>{0.008 * text.split(` `).length} mins to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
};

export default TextForm;
