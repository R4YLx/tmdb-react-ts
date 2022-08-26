import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useMovie = (id: string | undefined) => {
	return useQuery(["movie", id], () => TMDB.getSingleMovie(id!));
};

export default useMovie;
