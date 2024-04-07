import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextPart from "./components/TextPart";
import Alert from "./components/Alert";

function App() {
  const [mode, changeMode] = useState("light");
  const [btn, setBtn] = useState("bi bi-moon-stars");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("grey");

  const showAlert = (message, state) => {
    setAlert({ message: message, state: state });
    setTimeout(() => {
      setAlert(null);
    }, 875);
  };
  const changeTheme = (newColor) => {
    if (mode === "light") {
      changeMode("dark");
      setBtn("bi bi-brightness-high");
      document.body.style.backgroundColor = newColor; // Update body background color directly
      document.body.style.color = "white";
      showAlert("Changed To Costume ", "Success");
    } else {
      changeMode("light");
      setBtn("bi bi-moon-stars");
      document.body.style.backgroundColor = "white"; // Update body background color directly
      document.body.style.color = "black";
      showAlert("Changed To Light ", "Success");
    }
  };

  const getData = (colorFunc) => {
    setColor(colorFunc);
    console.log(colorFunc);
    changeTheme(colorFunc); // Call changeTheme to update the body background color
  };

  return (
    <div className="firstDiv">
      <NavBar
        title="Text Tool"
        aboutTxt="About"
        mode={mode}
        btnStyle={btn}
        changeFunc={changeTheme}
        costumeTheme={getData} // Pass the callback function as a prop
      />
      <Alert aboutTxt={alert} />
      <TextPart heading="Enter Your Text Below" changeFunc={showAlert} />
    </div>
  );
}

export default App;
