import './App.css';
import Progress from './components/Progress';
import Rating from './components/Rating';
import { PromiseAll } from './components/PromiseAll';
import { Polyfills } from './components/Polyfills';

function App() {
  return (
    <div className="App">
      <Progress />
      <Rating />
      <PromiseAll />
      <Polyfills />
    </div>
  );
}

export default App;
