import { useLocalStorage } from "../../contexts/LocalStorageContextProvider";
import CarouselMoviesComp from "./CarouselMoviesComp";

const RecentlyVisitedMovies = () => {
	//* Custom hook for getting movies in local storage
	const { visited } = useLocalStorage();

	return (
		<>
			{/* Divider */}
			<div className="divider m-1"></div>

			{/* Content */}

			<h5 className="text-2xl font-semibold tracking-tight text-white text-center p-2">
				Recently Viewed Movies
			</h5>
			<div className="pb-8">
				<CarouselMoviesComp movies={visited} />
			</div>
		</>
	);
};

export default RecentlyVisitedMovies;
