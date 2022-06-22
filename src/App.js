import "./App.css";
import Actors from "./components/Actors";
import Counter from "./components/Counter";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <User /> */}
      <h1 className="title">Game of Thrones Character</h1>
      <Actors />
    </div>
  );
}

export default App;
