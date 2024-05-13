import "./App.css";
import Progress from "./components/Progress";
import Rating from "./components/Rating";
import { PromiseAll } from "./components/PromiseAll";
import { Polyfills } from "./components/Polyfills";
import { Debouncing } from "./components/Debouncing";
import { Throttling } from "./components/Throttling";
import { ChessBoard } from "./components/ChessBoard";
import Component1 from "./components/HigherOrderComponent/Component1";
import Component2 from "./components/HigherOrderComponent/Component2";
import { TicTacToe } from "./components/TicTacToe";
import { DataStructures } from "./components/DataStructures";
import { ProblemSolving } from "./components/Problem Solving";
import { Multilanguage } from "./components/Multilanguage";
import { StepperComponent } from "./components/StepperComponent";
import { FilExplorer } from "./components/FileExplorer";
import { DragAndDrop } from "./components/DragAndDrop";

function App() {
  return (
    <div className="App">
      <Multilanguage />
      <FilExplorer />
      <DragAndDrop />
      <Progress />
      <Rating />
      <PromiseAll />
      <Polyfills />
      <Debouncing />
      <Throttling />
      <ChessBoard />
      <Component1 />
      <Component2 />
      <TicTacToe />
      <StepperComponent />
      <DataStructures />
      <ProblemSolving />
    </div>
  );
}

export default App;
