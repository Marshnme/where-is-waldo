import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import Nav from './components/Nav';

function App() {
	return (
		<div>
			<nav>
				<Nav />
			</nav>
			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/game" element={<Game />}></Route>
					<Route path="/scoreboard" element={<Scoreboard />}></Route>
				</Routes>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
