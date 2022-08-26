import { IPerson } from "./../interfaces/IPerson";
import { useQuery } from "@tanstack/react-query";
import TMDB from "../services/TMDBAPI";

const usePerson = (id: string | undefined) => {
	return useQuery<IPerson>(["person", id], () => TMDB.getPerson(id!));
};

export default usePerson;
