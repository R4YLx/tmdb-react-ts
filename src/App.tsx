import "./css/App.css";

import { Route, Routes } from "react-router-dom";

import Navigation from "./components/partials/Navigation";

import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import MoviePage from "./pages/MoviePage";

import FooterComp from "./components/partials/FooterComp";
import PersonPage from "./pages/PersonPage";

function App() {
	return (
		<div className="App bg-gradient-to-b from-slate-900 to-indigo-900 min-h-screen h-full grid grid-row-3 relative">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now-playing" element={<NowPlayingPage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/person/:id" element={<PersonPage />} />
			</Routes>

			<FooterComp className="row-end-3" />
		</div>
	);
}

export default App;
