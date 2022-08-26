import { useParams } from "react-router-dom";

import useMovie from "../hooks/useMovie";

import MovieDetails from "../components/movie/MovieDetails";
import ErrorAlert from "../components/alerts/ErrorAlert";
import LoadingSpinner from "../components/partials/LoadingSpinner";

const MoviePage = () => {
	const { id }: { id?: string } = useParams();

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
						{/* <CarouselMoviesComp movies={movieDetails?.similar?.results} /> */}
					</div>
				</>
			)}
		</div>
	);
};

export default MoviePage;
