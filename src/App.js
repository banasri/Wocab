import './App.css';
import Clue from './components/clue/clue';
import GameBox from './components/game_box/game_box';
import Keyboard from './components/keyboard/keyboard';

function App() {
  return (
    <div className="App">
      <h2>WOCAB</h2>
      <Clue row="1"/>
      <GameBox />
      <Keyboard />
    </div>
  );
}

export default App;
