import { Scoreboard } from './Scoreboard.jsx';
import { Gameboard } from './Gameboard.jsx';
import '../styles/App.css';

export default function App() {
  return (
    <div className='app'>
      <Scoreboard />
      <Gameboard />
    </div>
  );
}
