import { IPerson } from "./../interfaces/IPerson";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const usePopularPeople = () => {
	return useQuery<IPerson[]>(["popular-persons"], TMDB.getPopularPeople);
};

export default usePopularPeople;
