import { IMovie } from "./../interfaces/IMovie";

export type LocalStorageProviderProps = {
	children: React.ReactNode;
};

export type StoreDataType = {
	visited: IMovie[];
	storeVisited: any;
};
