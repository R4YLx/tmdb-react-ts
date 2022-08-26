type VotesAndRatingProps = {
	rating?: number | string;
	votes?: number;
};

const VotesAndRating = ({ rating, votes }: VotesAndRatingProps) => {
	return (
		<div className="flex items-center">
			{/* Rating */}
			<p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded">
				{rating}
			</p>

			{/* Dot */}
			<span className="mx-2 w-1 h-1 bg-indigo-600 rounded-full"></span>

			{/* Votes */}
			<p className="text-sm font-medium text-gray-500">{votes} votes</p>
		</div>
	);
};

export default VotesAndRating;
