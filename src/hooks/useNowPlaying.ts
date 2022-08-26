import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useNowPlaying = (page: string | null) => {
	return useQuery<IMovie[]>(["now-playing", page], () =>
		TMDB.getNowPlayingMovies(page!)
	);
};

export default useNowPlaying;
