import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextPart from "./components/TextPart";
import Alert from "./components/Alert";

function App() {
  const [mode, changeMode] = useState("light");
  const [btn, setBtn] = useState("bi bi-moon-stars");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("#808080"); // State to hold color

  const showAlert = (message, state) => {
    setAlert({ message: message, state: state });
    setTimeout(() => {
      setAlert(null);
    }, 875);
  };
  const getColor = (selectedColor) => {
    setColor(selectedColor); // Set color state with selected color
    console.log(selectedColor); // Print selected color
  };
  const changeTheme = () => {
    if (mode === "light") {
      changeMode("dark");
      setBtn("bi bi-brightness-high");
      document.body.style.backgroundColor = color;
      document.body.style.color = "white";
      document.querySelector("#textInput").style.backgroundColor = "grey";
      document.querySelector("#textInput").style.color = "white";
      showAlert("Changed To Dark ", "Success");
      console.log(color);
    } else {
      changeMode("light");
      setBtn("bi bi-moon-stars");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelector("#textInput").style.backgroundColor = "white";
      document.querySelector("#textInput").style.color = "black";
      showAlert("Changed To Light ", "Success");
    }
  };

  return (
    <div className="firstDiv">
      <NavBar
        title="Text Tool"
        aboutTxt="About"
        mode={mode}
        btnStyle={btn}
        changeFunc={changeTheme}
        colorFunc={getColor} // Pass getColor as colorFunc prop
      />
      <Alert aboutTxt={alert} />
      <TextPart heading="Enter Your Text Below" changeFunc={showAlert} />
    </div>
  );
}

export default App;
