import "./App.css";
import Board from "./pages/Board";
import { dummyData } from "./utils/dummyData";

function App() {
  return <Board board={dummyData} />;
}

export default App;
