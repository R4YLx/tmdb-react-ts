import "./css/App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";

function App() {
	return (
		<div className="App bg-gradient-to-b from-slate-900 to-indigo-900 min-h-screen h-full grid grid-row-3 relative">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now-playing" element={<NowPlayingPage />} />
			</Routes>
		</div>
	);
}

export default App;
