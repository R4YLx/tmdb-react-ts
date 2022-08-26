import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useTopRated = (page: string | null) => {
	return useQuery<IMovie[]>(["top-rated", page], () =>
		TMDB.getTopRatedMovies(page!)
	);
};

export default useTopRated;
