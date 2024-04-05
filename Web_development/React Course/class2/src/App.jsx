import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextPart from "./components/TextPart";
import Alert from "./components/Alert";

function App() {
  const [mode, changeMode] = useState("light");
  const [btn, setBtn] = useState("bi bi-moon-stars");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, state) => {
    setAlert({ message: message, state: state });
  };
  const changeTheme = () => {
    if (mode === "light") {
      changeMode("dark");
      setBtn("bi bi-brightness-high");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      document.querySelector("#textInput").style.backgroundColor = "grey";
      document.querySelector("#textInput").style.color = "white";
      showAlert("Changed To Dark ", "Success");
    } else {
      changeMode("light");
      setBtn("bi bi-moon-stars");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelector("#textInput").style.backgroundColor = "white";
      document.querySelector("#textInput").style.color = "black";
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
      />
      <Alert aboutTxt={alert} />
      <TextPart heading="Enter Your Text Below" />
      {/* <About /> */}
    </div>
  );
}

export default App;
