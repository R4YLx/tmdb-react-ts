import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useMovie = (id: string | undefined) => {
	return useQuery<IMovie>(["movie", id], () => TMDB.getSingleMovie(id!));
};

export default useMovie;
