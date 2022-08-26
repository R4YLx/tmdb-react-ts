import {
	QueriesResults,
	QueryKey,
	useQuery,
	UseQueryResult,
} from "@tanstack/react-query";

import TMDBAPI from "../services/TMDBAPI";
import { IData } from "../interfaces/IData";

const useNowPlaying = (page: string) => {
	return useQuery<IData>(["now-playing", page], () =>
		TMDBAPI.getNowPlayingMovies(page)
	);
};

export default useNowPlaying;
