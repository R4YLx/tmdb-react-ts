import { useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import { useLocalStorage } from "../contexts/LocalStorageContextProvider";
import { IMovie } from "../interfaces/IMovie";

import ErrorAlert from "../components/alerts/ErrorAlert";
import WarningAlert from "../components/alerts/WarningAlert";
import MovieCard from "../components/movie/MovieCard";
import LoadingSpinner from "../components/partials/LoadingSpinner";
import PaginationComp from "../components/partials/PaginationComp";
import SearchBar from "../components/partials/SearchBar";
import RecentlyVisitedMovies from "../components/movie/RecentlyVisitedMovies";

const SearchPage = () => {
	//* Hook for getting local storage
	const { visited } = useLocalStorage();

	//* Search params
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	});

	//* Keeping track of search query and page
	const query = searchParams.get("query") ?? "";
	const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

	//* Data
	const { data, isLoading, isError, error, isSuccess } = useSearch(page, query);

	//* Click event to set params
	const handleSearch = async (query: string) => {
		setSearchParams({ page: "1", query });
	};

	return (
		<div className="min-h-screen grid">
			<SearchBar onSearch={handleSearch} />

			{/* Section for loading spinner and error handling */}
			<div className="flex justify-center items-center">
				{isLoading && query !== "" && <LoadingSpinner />}

				{isError && <ErrorAlert error={error} />}

				{data?.total_results === 0 && <WarningAlert query={query} />}
			</div>

			{/* Content */}
			{isSuccess && data?.total_results !== 0 && (
				<>
					{/* Container for top title and pagination */}
					<div className="grid md:grid-cols-3 h-full">
						{/* Title */}
						<h2 className="font-semibold text-xl pt-4 px-4 md:pt-0 md:text-2xl text-white self-center md:px-8">
							Found {`${data?.total_results} results of "${query}"`}
						</h2>

						{/* Top pagination visible on medium screens */}
						<div className="hidden md:block col-start-2 col-end-3 justify-self-center">
							<PaginationComp
								page={page}
								turnPage={setSearchParams}
								data={data}
								query={query}
							/>
						</div>
					</div>

					{/* Content */}
					<div className="grid grid-cols-1 gap-8 py-4 px-4 md:px-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
						{/* Movie cards */}
						{data.results?.map((movie: IMovie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
					</div>

					{/* Pagination */}
					<div className="flex justify-center md:pb-4">
						<PaginationComp
							page={page}
							turnPage={setSearchParams}
							data={data}
							query={query}
						/>
					</div>
				</>
			)}

			{/* Recently viewed movies */}

			{visited.length > 0 && (
				<div className="self-end px-4 md:px-8">
					<RecentlyVisitedMovies />
				</div>
			)}
		</div>
	);
};

export default SearchPage;
