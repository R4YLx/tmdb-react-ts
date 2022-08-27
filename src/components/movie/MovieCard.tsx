import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";

import { useLocalStorage } from "../../contexts/LocalStorageContextProvider";
import { MovieProp } from "../../interfaces/IMovie";

import placeholder from "../../assets/movie_placeholder.png";
import VotesAndRating from "../partials/VotesAndRating";

const MovieCard = ({ movie }: MovieProp) => {
	//* Base url for images
	const imgUrl = "https://image.tmdb.org/t/p/w500";

	//* Hook for setting to local storage
	const { storeVisited } = useLocalStorage();

	return (
		<Card
			imgAlt="Movie poster"
			// Image path
			imgSrc={
				movie?.poster_path ? `${imgUrl}${movie?.poster_path}` : placeholder
			}
		>
			<div className="flex h-full flex-col gap-4">
				{/* Title */}
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{movie?.title}
				</h5>

				{/* Rating and votes */}
				<div className="flex items-center">
					<VotesAndRating
						rating={movie?.vote_average}
						votes={movie?.vote_count}
					/>
				</div>

				{/* Release date */}
				<p className="text-sm font-medium text-gray-500">
					Release date:&nbsp;
					<span className="font-light">{movie?.release_date}</span>
				</p>

				{/* Button for more info */}
				<Link to={`/movie/${movie?.id}`} className="mt-auto">
					<Button
						gradientDuoTone="purpleToBlue"
						onClick={() => {
							storeVisited(movie?.title, movie?.id, movie?.poster_path);
						}}
					>
						<p className="hover:text-pink-400 text-base">Read more</p>
					</Button>
				</Link>
			</div>
		</Card>
	);
};

export default MovieCard;
