import { Link } from "react-router-dom";
import { useLocalStorage } from "../../contexts/LocalStorageContextProvider";
import { StoreDataType } from "../../contexts/types";
import { IMovie, MovieProp } from "../../interfaces/IMovie";
import placeholder from "../../assets/movie_placeholder.png";

//* Base url for images
const imgUrl: string = "https://image.tmdb.org/t/p/w500";

const CarouselMoviesComp = ({ movies }: MovieProp) => {
	//* Custom hook for setting movie to local storage
	const { storeVisited }: StoreDataType = useLocalStorage();

	return (
		<div className="w-full">
			<div className="carousel carousel-center p-4 space-x-4 bg-white shadow-inner shadow-zinc-200 rounded-box">
				{movies &&
					movies?.map((movie: IMovie) => (
						<figure
							key={movie?.id}
							className="carousel-item relative"
							onClick={() => {
								storeVisited(movie?.title, movie?.id, movie?.poster_path);
							}}
						>
							<Link to={`/movie/${movie?.id}`}>
								<img
									src={
										movie?.poster_path
											? `${imgUrl}${movie?.poster_path}`
											: placeholder
									}
									alt="Movie poster"
									className="rounded-box max-h-60 shadow-sm shadow-zinc-700"
								/>
							</Link>
							<figcaption className="absolute bottom-0 p-2 h-2/6 text-white text-base bg-black bg-opacity-60 rounded-b-xl w-full">
								{movie?.title}
							</figcaption>
						</figure>
					))}
			</div>
		</div>
	);
};

export default CarouselMoviesComp;
