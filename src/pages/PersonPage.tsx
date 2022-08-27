import { useParams } from "react-router-dom";
import { useLocalStorage } from "../contexts/LocalStorageContextProvider";
import usePerson from "../hooks/usePerson";

import ErrorAlert from "../components/alerts/ErrorAlert";
import LoadingSpinner from "../components/partials/LoadingSpinner";
import PersonDetails from "../components/person/PersonDetails";
import RecentlyVisitedMovies from "../components/movie/RecentlyVisitedMovies";

const PersonPage = () => {
	//* Hook for getting local storage
	const { visited } = useLocalStorage();

	//* Id param
	const { id } = useParams();

	//* Data
	const { data: person, isLoading, isSuccess, isError, error } = usePerson(id);

	return (
		<div className="flex flex-col gap-10 items-center py-8 min-h-screen">
			{isError && <ErrorAlert error={error} />}

			{isLoading && <LoadingSpinner />}

			{isSuccess && person && <PersonDetails person={person} />}

			{/* Recently vied movies */}
			{visited.length > 0 && (
				<div className="md:w-4/5 lg:w-3/4 2xl:w-2/4">
					<RecentlyVisitedMovies />
				</div>
			)}
		</div>
	);
};

export default PersonPage;
