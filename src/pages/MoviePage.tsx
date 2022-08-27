import { useParams } from "react-router-dom";

import { useLocalStorage } from "../contexts/LocalStorageContextProvider";
import useMovie from "../hooks/useMovie";

import MovieDetails from "../components/movie/MovieDetails";
import ErrorAlert from "../components/alerts/ErrorAlert";
import LoadingSpinner from "../components/partials/LoadingSpinner";
import CarouselMoviesComp from "../components/movie/CarouselMoviesComp";
import RecentlyVisitedMovies from "../components/movie/RecentlyVisitedMovies";

const MoviePage = () => {
	//* Getting id
	const { id }: { id?: string } = useParams();

	//* Hook for getting local storage
	const { visited } = useLocalStorage();

	//* Data
	const { data: movie, isLoading, isSuccess, isError, error } = useMovie(id);

	return (
		<div className="flex flex-col gap-10 items-center md:py-8 min-h-screen">
			{isError && <ErrorAlert error={error} />}

			{isLoading && <LoadingSpinner />}

			{isSuccess && movie && (
				// Movie Card
				<>
					<MovieDetails movie={movie} />
					<div className="md:w-4/5 lg:w-3/4 2xl:w-2/4">
						<h5 className="text-2xl font-semibold tracking-tight text-white text-center p-2">
							Similar Movies
						</h5>
						<CarouselMoviesComp movies={movie?.similar?.results} />

						{/* Recently viewed movies */}
						{visited.length > 0 && (
							<div className="grid grid-cols-1 items-center justify-center">
								<RecentlyVisitedMovies />
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default MoviePage;
