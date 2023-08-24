import './App.css';
import Progress from './components/Progress';
import Rating from './components/Rating';
import { PromiseAll } from './components/PromiseAll';

function App() {
  return (
    <div className="App">
      <Progress />
      <Rating />
      <PromiseAll />
    </div>
  );
}

export default App;
