import './App.css';
import Progress from './components/Progress';
import Rating from './components/Rating';
import { PromiseAll } from './components/PromiseAll';
import { Polyfills } from './components/Polyfills';
import { Debouncing } from './components/Debouncing';
import { Throttling } from './components/Throttling';

function App() {
  return (
    <div className="App">
      <Progress />
      <Rating />
      <PromiseAll />
      <Polyfills />
      <Debouncing />
      <Throttling/>
    </div>
  );
}

export default App;
