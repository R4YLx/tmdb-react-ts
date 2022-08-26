import { useNavigate } from "react-router-dom";

import { MovieProp } from "../../interfaces/IMovie";
import { IGenres } from "../../interfaces/IGenres";

import VotesAndRating from "../partials/VotesAndRating";
import ActorList from "../person/ActorList";
import ButtonComp from "../partials/ButtonComp";

import placeholder from "../../assets/movie_placeholder.png";

const MovieDetails = ({ movie }: MovieProp) => {
	const imgUrl = "https://image.tmdb.org/t/p/original/";

	const navigate = useNavigate();

	const onPrevious = () => {
		navigate(-1);
	};

	return (
		<>
			{movie && (
				<div className="card w-auto bg-base-100 shadow-xl image-full z-0 md:w-4/5 lg:w-3/4 2xl:w-2/4">
					{/* Poster for movie */}
					<figure>
						<img
							src={
								movie?.poster_path
									? `${imgUrl}${movie?.poster_path}`
									: placeholder
							}
							alt="Movie poster"
						/>
					</figure>

					{/* Card body */}
					<div className="card-body flex h-full flex-col gap-4 md:gap-2">
						{/* Div for title and button */}
						<div className="flex justify-between">
							<h5 className="text-2xl font-bold tracking-tight text-white">
								{movie?.title}
							</h5>

							{/* Back button */}
							<ButtonComp string={"Back"} onPrevious={onPrevious} />
						</div>

						{/* Rating and vote elements */}
						<div className="flex flex-row items-center">
							<VotesAndRating
								rating={movie?.vote_average?.toFixed(1)}
								votes={movie?.vote_count}
							/>
						</div>

						{/* Divider */}
						<div className="divider m-1"></div>

						{/* Genres */}
						<div>
							<p className="font-medium text-white">Genres:</p>
							<ul className="flex gap-4">
								{movie?.genres?.map((genre: IGenres) => (
									<li key={genre.id} className="text-sm ">
										{genre.name}
									</li>
								))}
							</ul>
						</div>

						{/* Divider */}
						<div className="divider m-0"></div>

						<ul>
							{/* Release date */}
							<li className="font-medium text-white pb-2">
								Release date: {""}
								<span className="font-light text-sm">
									{movie?.release_date}
								</span>
							</li>
							{/* Divider */}
							<div className="divider m-0"></div>
							{/* Budget */}
							<li className="font-medium text-white py-2">
								Budget: {""}
								<span className="font-light text-sm">${movie?.budget}</span>
							</li>
							{/* Divider */}
							<div className="divider m-0"></div>
							{/* Revenue */}
							<li className="font-medium text-white pt-2">
								Revenue: {""}
								<span className="font-light text-sm">${movie?.revenue}</span>
							</li>
						</ul>

						{/* Divider */}
						<div className="divider m-0"></div>

						{/* Plot */}
						<span className="font-medium text-white">
							Plot: <br />
							<span className="font-light text-sm">{movie?.overview}</span>
						</span>

						{/* Divider */}
						<div className="divider m-0"></div>

						{/* Cast */}
						<p className="font-medium text-white ">Cast:</p>
						<ActorList cast={movie?.credits?.cast} />

						{/* Back button */}
						<div className="flex justify-end">
							<ButtonComp string={"Back"} onPrevious={onPrevious} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MovieDetails;
