import "./App.css";
import NavBar from "./components/NavBar";
import TextPart from "./components/TextPart";
function App() {
  return (
    <div className="firstDiv">
      <NavBar title="Text Tool" aboutTxt="About" />
      <TextPart heading="Enter Your Text Below" />
    </div>
  );
}

export default App;
