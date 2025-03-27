import ToDoApp from "./ToDoApp";
import Nav from "./Navbar";

function App() {
  return (
    <>
      <Nav />
      <div className="appCnt">
        <ToDoApp />
      </div>
    </>
  );
}

export default App;
