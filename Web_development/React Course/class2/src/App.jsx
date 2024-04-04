import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextPart from "./components/TextPart";

function App() {
  const [mode, changeMode] = useState("light");
  const [btn, setBtn] = useState("bi bi-moon-stars");
  const changeTheme = () => {
    if (mode === "light") {
      changeMode("dark");
      setBtn("bi bi-brightness-high");
    } else {
      changeMode("light");
      setBtn("bi bi-moon-stars");
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
      <TextPart heading="Enter Your Text Below" />
      {/* <About /> */}
    </div>
  );
}

export default App;
