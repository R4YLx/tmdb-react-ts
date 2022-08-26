import { useSearchParams } from "react-router-dom";

import useDiscoverMovies from "../hooks/useDiscoverMovies";
import useGenresList from "../hooks/useGenresList";

import { IGenres } from "../interfaces/IGenres";
import { IMovie } from "../interfaces/IMovie";

import ErrorAlert from "../components/alerts/ErrorAlert";
import MovieCard from "../components/movie/MovieCard";
import DropdownList from "../components/partials/DropDownList";
import LoadingSpinner from "../components/partials/LoadingSpinner";
import PaginationComp from "../components/partials/PaginationComp";

const PopularPage = () => {
	// Setting current genre
	let currentGenre = "";
	const id = "";

	// Search params
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
		genre_id: "",
	});

	// Keeping track of search query and page
	const page = searchParams.get("page") ?? "";
	const genre_id = searchParams.get("genre_id") ?? "";

	// Data via useQuery
	const {
		data: movies,
		isSuccess,
		isLoading,
		isError,
		error,
	} = useDiscoverMovies("sort_by=popularity.desc", page, genre_id, id);

	const { data: genresData } = useGenresList();

	// Function for reseting filter
	const resetGenreFilter = () => {
		setSearchParams({
			page: "1",
			genre_id: "",
		});
	};

	genresData?.find((genre: IGenres) => {
		if (genre.id === Number(genre_id)) {
			currentGenre = `- ${genre.name}`;
		}
	});

	return (
		<>
			<div className="flex justify-center items-center">
				{isLoading && <LoadingSpinner />}

				{isError && <ErrorAlert error={error} />}
			</div>

			{isSuccess && movies && (
				<>
					{/* Container for top title and pagination */}
					<div className="grid grid-cols-2 md:grid-cols-3">
						{/* Title */}
						<h2 className="font-semibold text-xl pt-4 px-4 md:pt-0 md:text-2xl text-white self-center md:px-8">
							Popular Movies <span>{currentGenre}</span>
						</h2>

						{/* Top pagination visible on medium screens */}
						<div className="hidden md:block justify-self-center">
							<PaginationComp
								page={page}
								turnPage={setSearchParams}
								genre_id={Number(genre_id)}
							/>
						</div>

						{/* Genres dropdown */}
						<div className="justify-self-end self-center px-4 pt-4 md:pt-0 md:px-8">
							<DropdownList
								onResetGenreFilter={resetGenreFilter}
								genres={genresData}
								onGenre={setSearchParams}
							/>
						</div>
					</div>

					{/* Content */}
					<div className="grid grid-cols-1 gap-8 py-4 px-4 md:px-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
						{/* Movie cards */}
						{movies?.results?.map((movie: IMovie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>
					{/* Pagination */}
					<div className="flex justify-center md:pb-4">
						<PaginationComp
							page={page}
							turnPage={setSearchParams}
							genre_id={Number(genre_id)}
						/>
					</div>
				</>
			)}
		</>
	);
};

export default PopularPage;
