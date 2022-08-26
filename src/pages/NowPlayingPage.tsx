import { useState } from "react";
import useNowPlaying from "../hooks/useNowPlaying";

import { IMovie } from "../interfaces/IMovie";

const NowPlayingPage = () => {
	const [page, setPage] = useState("1");

	const { data } = useNowPlaying(page);

	return <div>NowPlayingPage</div>;
};

export default NowPlayingPage;
