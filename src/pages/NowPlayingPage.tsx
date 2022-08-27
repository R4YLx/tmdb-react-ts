import { useSearchParams } from "react-router-dom";
import useNowPlaying from "../hooks/useNowPlaying";
import { useLocalStorage } from "../contexts/LocalStorageContextProvider";
import { IMovie } from "../interfaces/IMovie";
import { StoreDataType } from "../contexts/types";

import ErrorAlert from "../components/alerts/ErrorAlert";
import MovieCard from "../components/movie/MovieCard";
import LoadingSpinner from "../components/partials/LoadingSpinner";
import PaginationComp from "../components/partials/PaginationComp";
import RecentlyVisitedMovies from "../components/movie/RecentlyVisitedMovies";

const NowPlayingPage = () => {
	//* Hook for getting local storage
	const { visited }: StoreDataType = useLocalStorage();

	//* Search params
	const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

	//* Keeping track of search query and page
	const page = searchParams.get("page");

	//* Data
	const {
		data: movies,
		isSuccess,
		isLoading,
		isError,
		error,
	} = useNowPlaying(page);

	return (
		<>
			<div className="flex justify-center items-center">
				{isLoading && <LoadingSpinner />}

				{isError && <ErrorAlert error={error} />}
			</div>

			{isSuccess && movies && (
				<>
					{/* Container for top title and pagination */}
					<div className="grid md:grid-cols-3">
						{/* Title */}
						<h2 className="font-semibold text-xl pt-4 px-4 md:pt-0 md:text-2xl text-white self-center md:px-8">
							Now Playing
						</h2>

						{/* Top pagination visible on medium screens */}
						<div className="hidden md:block col-start-2 col-end-3 justify-self-center">
							<PaginationComp page={Number(page)} turnPage={setSearchParams} />
						</div>
					</div>

					{/* Content */}
					<div className="grid grid-cols-1 gap-8 py-4 px-4 md:px-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
						{/* Movie cards */}
						{movies?.map((movie: IMovie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>

					{/* Pagination */}
					<div className="flex justify-center md:pb-4">
						<PaginationComp page={Number(page)} turnPage={setSearchParams} />
					</div>

					{/* Recently viewed movies */}
					{visited.length > 0 && (
						<div className="grid grid-cols-1 items-center justify-center px-4 md:px-8">
							<RecentlyVisitedMovies />
						</div>
					)}
				</>
			)}
		</>
	);
};

export default NowPlayingPage;
