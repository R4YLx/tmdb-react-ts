import { IMovie } from "./IMovie";

export interface IPerson {
	id: number;
	name?: string;
	profile_path?: string;
	character?: string;
	biography?: string;
	birthday?: string;
	deathday?: string;
	credits?: {
		cast?: IMovie[];
	};
}
