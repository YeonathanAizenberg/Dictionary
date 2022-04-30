import DataDisplay from './components/dataDisplay/DataDisplay';
import QuerySelector from './components/querySelector/QuerySelector';
import LetterSelector from './components/letterSelector/LetterSelector';
import './App.css';

function App() {
  return (
    <div className="App">
      <QuerySelector/>
      <LetterSelector/>
      <DataDisplay/>
    </div>
  );
}

export default App;
