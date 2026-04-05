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
import { Virtualization } from "./components/Virtualization";
import { PriorityAPIResolution } from "./components/PriorityAPIResolution";
import { Circles } from "./components/DrawCircles";
import { VirtualToDOM } from "./components/VirtualToDom";
import { UseEffect } from "./components/UseEffect";
import { NestedComments } from "./components/NestedComments";

// add router imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Typeahead } from "./components/Typeahead";
import { Notifications } from "./components/Notifications";

const routes = [
  { path: "/multilanguage", label: "Multilanguage", element: <Multilanguage /> },
  { path: "/file-explorer", label: "File Explorer", element: <FilExplorer /> },
  { path: "/drag-and-drop", label: "Drag & Drop", element: <DragAndDrop /> },
  { path: "/progress", label: "Progress", element: <Progress /> },
  { path: "/rating", label: "Rating", element: <Rating /> },
  { path: "/promise-all", label: "PromiseAll", element: <PromiseAll /> },
  { path: "/polyfills", label: "Polyfills", element: <Polyfills /> },
  { path: "/debouncing", label: "Debouncing", element: <Debouncing /> },
  { path: "/throttling", label: "Throttling", element: <Throttling /> },
  { path: "/chessboard", label: "ChessBoard", element: <ChessBoard /> },
  { path: "/hoc-1", label: "HOC Component1", element: <Component1 /> },
  { path: "/hoc-2", label: "HOC Component2", element: <Component2 /> },
  { path: "/tic-tac-toe", label: "TicTacToe", element: <TicTacToe /> },
  { path: "/stepper", label: "Stepper", element: <StepperComponent /> },
  { path: "/data-structures", label: "DataStructures", element: <DataStructures /> },
  { path: "/problem-solving", label: "ProblemSolving", element: <ProblemSolving /> },
  {
    path: "/virtualization",
    label: "Virtualization",
    element: <Virtualization renderItem={(item) => <div key={item}>{item}</div>} />,
  },
  {
    path: "/priority-api",
    label: "Priority API",
    element: <PriorityAPIResolution />,
  },
  { path: "/circles", label: "Draw Circles", element: <Circles /> },
  { path: "/virtual-dom", label: "VirtualToDOM", element: <VirtualToDOM /> },
  { path: "/use-effect", label: "UseEffect", element: <UseEffect /> },
  { path: "/nested-comments", label: "NestedComments", element: <NestedComments /> },
  { path: "/typeahead", label: "Typeahead", element: <Typeahead /> },
  { path: '/notifications', label: 'Notification', element: <Notifications /> }
];

function Home() {
  return (
    <div className="home">
      <h2>Welcome</h2>
      <p>Select a demo from the navigation bar above.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            <button>Home</button>
          </Link>
          {routes.map((r) => (
            <Link key={r.path} to={r.path} className="nav-link">
              <button>{r.label}</button>
            </Link>
          ))}
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
