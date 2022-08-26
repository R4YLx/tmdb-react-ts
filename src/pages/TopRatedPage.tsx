import { useSearchParams } from "react-router-dom";
import useTopRated from "../hooks/useTopRated";

const TopRatedPage = () => {
	// Search params
	const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

	// Keeping track of search query and page
	const page = searchParams.get("page");

	// Data
	const {
		data: movies,
		isSuccess,
		isLoading,
		isError,
		error,
	} = useTopRated(page);

	console.log(movies);

	return <div>TopRatedpage</div>;
};

export default TopRatedPage;
