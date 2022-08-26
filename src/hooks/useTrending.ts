import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDBAPI from "../services/TMDBAPI";

const useTrending = (time: string) => {
	return useQuery<IMovie[]>(["trending"], () => TMDBAPI.getTrending(time));
};

export default useTrending;
