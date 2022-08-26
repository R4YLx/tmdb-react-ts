import { IGenres } from "./../interfaces/IGenres";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useGenresList = () => {
	return useQuery<IGenres[]>(["genres-list"], TMDB.getGenresList);
};

export default useGenresList;
