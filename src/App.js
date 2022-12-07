import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/game" element={<Game />}></Route>
			<Route path="/score" element={<Scoreboard />}></Route>
		</Routes>
	);
}

export default App;
