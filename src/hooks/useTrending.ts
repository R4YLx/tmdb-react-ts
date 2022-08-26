import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const useTrending = (time: string) => {
	return useQuery<IMovie[]>(["trending"], () => TMDB.getTrending(time));
};

export default useTrending;
