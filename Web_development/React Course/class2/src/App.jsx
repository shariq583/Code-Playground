import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextPart from "./components/TextPart";

function App() {
  const [mode, changeMode] = useState("dark");
  return (
    <div className="firstDiv">
      <NavBar title="Text Tool" aboutTxt="About" mode={mode} />
      <TextPart heading="Enter Your Text Below" />
      {/* <About /> */}
    </div>
  );
}

export default App;
