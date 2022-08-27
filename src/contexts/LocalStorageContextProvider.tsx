import { createContext, useContext, useEffect, useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import { LocalStorageProviderProps, StoreDataType } from "./types";

const LocalStorageContext = createContext<StoreDataType | any>(null);

// Custom hook of context to minimize code
export const useLocalStorage = () => {
	return useContext(LocalStorageContext);
};

const LocalStorageContextProvider = ({
	children,
}: LocalStorageProviderProps) => {
	const [visited, setVisted] = useState<IMovie[]>(() => {
		const storedData = localStorage.getItem("visited-movies");

		return storedData ? JSON.parse(storedData) : [];
	});

	const storeVisited = (title: string, id: number, poster_path: string) => {
		if (!visited.some((movie: IMovie) => movie.id === id))
			setVisted([...visited, { title, id, poster_path }]);
	};

	useEffect(() => {
		if (visited.length <= 10) {
			localStorage.setItem("visited-movies", JSON.stringify(visited));
		} else {
			visited.shift();
			localStorage.setItem("visited-movies", JSON.stringify(visited));
		}
	}, [visited]);

	return (
		<LocalStorageContext.Provider value={{ visited, storeVisited }}>
			{children}
		</LocalStorageContext.Provider>
	);
};

export default LocalStorageContextProvider;
