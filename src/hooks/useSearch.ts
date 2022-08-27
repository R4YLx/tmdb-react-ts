import { IMovie } from "./../interfaces/IMovie";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";
import { IData } from "../interfaces/IData";

const useSearch = (page: string | number, query: string) => {
	return (
		useQuery<IData>(["search", page, query], () =>
			TMDB.searchQuery(page, query)
		),
		{
			enabled: !!query,
		}
	);
};

export default useSearch;
