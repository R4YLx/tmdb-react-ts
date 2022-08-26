import { useParams } from "react-router-dom";
import usePerson from "../hooks/usePerson";

import ErrorAlert from "../components/alerts/ErrorAlert";
import LoadingSpinner from "../components/partials/LoadingSpinner";
import PersonDetails from "../components/person/PersonDetails";

const PersonPage = () => {
	const { id } = useParams();

	const { data: person, isLoading, isSuccess, isError, error } = usePerson(id);

	return (
		<div className="flex flex-col gap-10 items-center py-8 min-h-screen">
			{isError && <ErrorAlert error={error} />}

			{isLoading && <LoadingSpinner />}

			{isSuccess && person && <PersonDetails person={person} />}
		</div>
	);
};

export default PersonPage;
