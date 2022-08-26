import { CirclesWithBar } from "react-loader-spinner";

const LoadingSpinner = () => {
	return (
		<div className="py-32">
			<CirclesWithBar
				height="150"
				width="150"
				color="#5b21b6"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				outerCircleColor="#4f46e5"
				innerCircleColor=""
				barColor="#6b21a8"
				ariaLabel="circles-with-bar-loading"
			/>
		</div>
	);
};

export default LoadingSpinner;
