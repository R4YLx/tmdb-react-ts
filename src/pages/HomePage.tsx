import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import usePopularPeople from "../hooks/usePopularPeople";
import useTrending from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";
import { useLocalStorage } from "../contexts/LocalStorageContextProvider";
import { StoreDataType } from "../contexts/types";

import { Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import CarouselMoviesComp from "../components/movie/CarouselMoviesComp";
import CarouselPersonComp from "../components/person/CarouselPersonComp";
import ButtonComp from "../components/partials/ButtonComp";
import RecentlyVisitedMovies from "../components/movie/RecentlyVisitedMovies";

const HomePage = () => {
	//* Hook for getting local storage
	const { visited }: StoreDataType = useLocalStorage();

	//* State for api time window
	const [searchParams, setSearchParams] = useSearchParams({ time: "week" });
	const time = String(searchParams.get("time"));

	//* Data via useQuery
	const { data: trending, isSuccess: trendingSuccess } = useTrending(time);
	const { data: upcoming, isSuccess: upcomingSuccess } = useUpcoming();
	const { data: people, isSuccess: peopleSuccess } = usePopularPeople();

	return (
		<div className="min-h-screen">
			{/* Hero section */}
			<div className="hero pt-6">
				<div className="bg-opacity-60"></div>
				<div className="hero-content text-center">
					<div className="w-11/12 md:w-10/12 lg:w-4/6 2xl:w-4/5">
						<h1 className="mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-500">
							Explore the world of movies
						</h1>
						<p className="mb-5 text-left text-white">
							Find a movie to explore. You maybe want to see if there's a new
							movie of your liking to watch at the cinema or some old ones to
							walk down the memory lane? Or maybe you just want an excuse to eat
							popcorn?{" "}
							<span className="italic text-sm">
								(Any time is popcorn time <span className="not-italic">😉</span>
								)
							</span>
						</p>

						{/* Button leading to Now Playing */}
						<p className="mb-5 text-left text-white">
							Ethier way, we've got you covered! See what's playing right now at
							the cinemas.
						</p>
						<div className="flex justify-center pt-3">
							<Link to={"/now-playing"}>
								<ButtonComp string={"Now Playing "} />
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Carousel containers */}
			<div className="flex flex-col gap-10 items-center py-4">
				{/* Trending movies div */}
				<div className="flex justify-center flex-col items-center gap-4 w-11/12 md:w-4/5 2xl:w-4/6">
					<div className="flex justify-between w-full">
						<h5 className="text-2xl font-semibold tracking-tight text-white self-end">
							Trending Movies by {time.charAt(0).toUpperCase() + time.slice(1)}
						</h5>
						<Dropdown
							gradientDuoTone="purpleToBlue"
							label={time}
							size="sm"
							floatingArrow={true}
							arrowIcon={true}
						>
							<DropdownItem
								onClick={() => {
									setSearchParams({ time: "day" });
								}}
							>
								<span className="text-sm">day</span>
							</DropdownItem>
							<DropdownItem
								onClick={() => {
									setSearchParams({ time: "week" });
								}}
							>
								<span className="text-sm">week</span>
							</DropdownItem>
						</Dropdown>
					</div>

					<div className="flex justify-center">
						{trendingSuccess && <CarouselMoviesComp movies={trending} />}
					</div>
				</div>

				{/* Upcoming movies div */}
				<div className="flex justify-center flex-col items-center gap-4 w-11/12 md:w-4/5 2xl:w-4/6">
					<h5 className="text-2xl font-semibold tracking-tight text-white self-start">
						Upcoming Movies
					</h5>

					<div className="flex justify-center ">
						{upcomingSuccess && <CarouselMoviesComp movies={upcoming} />}
					</div>
				</div>

				{/* Popular people div */}
				<div className="flex justify-center flex-col items-center gap-4 w-11/12 md:w-4/5 2xl:w-4/6">
					<h5 className="text-2xl font-semibold tracking-tight text-white self-start">
						20 Most Popular People
					</h5>

					<div className="flex justify-center pb-8">
						{peopleSuccess && <CarouselPersonComp people={people} />}
					</div>
				</div>

				{/* Recently viewed movies */}
				{visited.length > 0 && (
					<div className="flex justify-center flex-col items-center gap-4 w-11/12 md:w-4/5 2xl:w-4/6">
						<div className="w-full">
							<RecentlyVisitedMovies />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default HomePage;
