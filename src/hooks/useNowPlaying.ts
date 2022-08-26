import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";

import TMDBAPI from "../services/TMDBAPI";

const useNowPlaying = (page: string | number | null) => {
	return useQuery<IMovie[]>(["now-playing", page], () =>
		TMDBAPI.getNowPlayingMovies(page!)
	);
};

export default useNowPlaying;
