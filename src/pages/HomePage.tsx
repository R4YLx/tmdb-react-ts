import { useState } from "react";
import useTrending from "../hooks/useTrending";

const HomePage = () => {
	// State for api time window
	const [time, setTime] = useState<string>("week");

	// Data via useQuery
	const { data: trending, isSuccess: trendingSuccess } = useTrending(time);

	return <div>HomePage</div>;
};

export default HomePage;
