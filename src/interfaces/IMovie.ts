import { IPerson } from "./IPerson";
import { IGenres } from "./IGenres";

export interface IMovie {
	adult?: boolean;
	budget?: number;
	credits?: {
		cast?: IPerson[];
	};
	genres_ids?: IGenres[];
	id?: number;
	overview?: string;
	poster_path?: string | null;
	revenue?: number;
	release_date?: string;
	title?: string;
	vote_count?: number;
	vote_average?: number;
}
