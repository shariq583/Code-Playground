import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import List from "./components/list";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Nav web="My To List" />
      <List />
      <Footer />
    </>
  );
}

export default App;
