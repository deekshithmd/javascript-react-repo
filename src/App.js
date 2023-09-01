import './App.css';
import Progress from './components/Progress';
import Rating from './components/Rating';
import { PromiseAll } from './components/PromiseAll';
import { Polyfills } from './components/Polyfills';
import { Debouncing } from './components/Debouncing';
import { Throttling } from './components/Throttling';
import { ChessBoard } from './components/ChessBoard';

function App() {
  return (
    <div className="App">
      <Progress />
      <Rating />
      <PromiseAll />
      <Polyfills />
      <Debouncing />
      <Throttling/>
      <ChessBoard/>
    </div>
  );
}

export default App;
