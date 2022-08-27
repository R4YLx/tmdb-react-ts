import { IMovie } from "./IMovie";

export interface IPerson {
	also_known_as?: string[];
	biography?: string;
	birthday?: string;
	character?: string;
	credits?: {
		cast?: IMovie[];
	};
	deathday?: string;
	id: number;
	name?: string;
	place_of_birth?: string;
	profile_path?: string;
}

// export type PersonProp = {
// 	cast?: IPerson[];
// 	person?: IPerson;
// 	people?: IPerson[];
// };
