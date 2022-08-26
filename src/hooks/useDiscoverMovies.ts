import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useDiscoverMovies = (
	sort?: string,
	id?: number,
	genre_id?: number | string,
	page?: number
) => {
	return useQuery(
		["related-movies", sort, id, genre_id, page],
		() => TMDB.discoverMovies(sort, id, genre_id, page),
		{ keepPreviousData: true }
	);
};

export default useDiscoverMovies;
