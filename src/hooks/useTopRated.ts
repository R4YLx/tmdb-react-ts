import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDBAPI from "../services/TMDBAPI";

const useTopRated = (page: string | null) => {
	return useQuery<IMovie[]>(["top-rated", page], () =>
		TMDBAPI.getTopRatedMovies(page!)
	);
};

export default useTopRated;
