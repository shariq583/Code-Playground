import "./App.css";
import Nav from "./components/nav";
import List from "./components/list";
import Footer from "./components/footer";
function App() {
  let titleVar = "TItle here";
  let todoList = [
    {
      sno: 1,
      title: "To code",
      desc: "This is used to code",
    },
    {
      sno: 2,
      title: "To work",
      desc: "This is used to work",
    },
  ];
  return (
    <>
      <Nav title={titleVar} />
      <List todo={todoList} />
      <Footer />
    </>
  );
}

export default App;
