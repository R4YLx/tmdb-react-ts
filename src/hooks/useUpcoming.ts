import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useUpcoming = () => {
	return useQuery<IMovie[]>(["upcoming"], TMDB.getUpcomingMovies);
};

export default useUpcoming;
