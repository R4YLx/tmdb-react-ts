import { IDiscoverMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useDiscoverMovies = (
	sort?: string,
	id?: number | string,
	genre_id?: string,
	page?: string | number
) => {
	return useQuery<IDiscoverMovie>(
		["discover-movies", sort, id, genre_id, page],
		() => TMDB.discoverMovies(sort, id, genre_id, page),
		{ keepPreviousData: true }
	);
};

export default useDiscoverMovies;
