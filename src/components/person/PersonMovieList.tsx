import { useState } from "react";
import { Link } from "react-router-dom";

import useDiscoverMovies from "../../hooks/useDiscoverMovies";
import { IMovie } from "../../interfaces/IMovie";

import { useLocalStorage } from "../../contexts/LocalStorageContextProvider";
import { StoreDataType } from "../../contexts/types";

import placeholder from "../../assets/movie_placeholder.png";

//* Base URL for images
const imgUrl: string = "https://image.tmdb.org/t/p/w500/";

const PersonMovieList = ({ id }: { id?: number }) => {
	//* default for genre id
	const genre_id: string = "";

	//* page number for actor's movies
	const [page, setPage] = useState<number>(1);

	//* Data
	const { data: relatedMovies, isSuccess } = useDiscoverMovies(
		"sort_by=release_date.desc",
		page,
		genre_id,
		id
	);

	//* Hook for setting to local storage
	const { storeVisited }: StoreDataType = useLocalStorage();

	return (
		<>
			{isSuccess && relatedMovies && (
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
				>
					<input type="checkbox" className="peer" />
					<div className="collapse-title text-xl font-medium">Filmography</div>
					<div className="collapse-content ">
						{relatedMovies?.results?.map((movie: IMovie) => (
							<div key={movie.id} className="flex items-center space-x-3 py-4">
								{/* Movie image */}
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										{/* Movie image */}
										<img
											src={
												movie.poster_path
													? `${imgUrl}${movie?.poster_path}`
													: placeholder
											}
											alt="Movies image"
										/>
									</div>
								</div>

								{/* Movies name */}
								<p className="font-bold text-sm hover:underline">
									<Link
										to={`/movie/${movie.id}`}
										onClick={() => {
											storeVisited(movie?.title, movie?.id, movie?.poster_path);
										}}
									>
										{movie.title}{" "}
									</Link>
									{movie.release_date ? (
										<span className="text-sm font-light">
											{" "}
											- {movie.release_date}
										</span>
									) : (
										""
									)}
								</p>
							</div>
						))}
						<div className="flex justify-center items-center"></div>
						<div className="btn-group grid grid-cols-2">
							<button
								onClick={() => {
									setPage(page - 1);
								}}
								className="btn btn-outline btn-sm"
								disabled={page <= 1 ? true : false}
							>
								Previous
							</button>
							<button
								onClick={() => {
									setPage(page + 1);
								}}
								className="btn btn-outline btn-sm"
								disabled={relatedMovies?.total_pages! <= page ? true : false}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PersonMovieList;
