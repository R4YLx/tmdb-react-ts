import axios from "axios";

//* Interfaces and type
import { IGenres } from "./../interfaces/IGenres";
import { IMovie } from "../interfaces/IMovie";
import { IPerson } from "./../interfaces/IPerson";
import { IDiscoverMovie } from "./../interfaces/IMovie";
import { IData } from "../interfaces/IData";

//* Defaults and variables
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY: string = import.meta.env.VITE_API_KEY;
const adultCont: string = "&include_adult=false";
const creditsAndSimilar: string = "&append_to_response=credits,similar";

/**
 * Discover movies
 *
 */
const discoverMovies = async (
	sort?: string,
	page?: number | string,
	genre_id?: number | string,
	person_id?: number | string
): Promise<IDiscoverMovie> => {
	const res = await axios.get(
		`discover/movie?api_key=${API_KEY}&language=en-US&${sort}${adultCont}&page=${page}&with_genres=${genre_id}&with_cast=${person_id}`
	);

	return res.data;
};

/**
 * Genres list
 *
 */
const getGenresList = async (): Promise<IGenres[]> => {
	const res = await axios.get(
		`genre/movie/list?api_key=${API_KEY}&language=en-US`
	);
	return res.data.genres;
};

/**
 * Get now playing movies
 *
 */
const getNowPlayingMovies = async (
	page: number | string
): Promise<IMovie[]> => {
	const res = await axios.get(
		`/movie/now_playing?api_key=${API_KEY}&language=en-US&region=US&page=${page}${adultCont}`
	);

	return res.data.results;
};

/**
 * Get person
 *
 */
const getPerson = async (id: number | string): Promise<IPerson> => {
	const res = await axios.get(
		`person/${id}?api_key=${API_KEY}&language=en-US${adultCont}${creditsAndSimilar}`
	);

	return res.data;
};

/**
 * Get most popular people
 *
 */
const getPopularPeople = async (): Promise<IPerson[]> => {
	const res = await axios.get(
		`person/popular?api_key=${API_KEY}&language=en-US&page=1`
	);

	return res.data.results;
};

/**
 * Get single movie details
 *
 */
const getSingleMovie = async (id: number | string): Promise<IMovie> => {
	const res = await axios.get(
		`/movie/${id}?api_key=${API_KEY}&language=en-US${adultCont}${creditsAndSimilar}`
	);

	return res.data;
};

/**
 * Get top rated movies
 *
 */
const getTopRatedMovies = async (page: number | string): Promise<IMovie[]> => {
	const res = await axios.get(
		`/movie/top_rated?api_key=${API_KEY}&language=en-US&region=US&page=${page}${adultCont}`
	);

	return res.data.results;
};

/**
 * Trending movies by day or week
 *
 */
const getTrending = async (time: string): Promise<IMovie[]> => {
	const res = await axios.get(
		`/trending/movie/${time}?api_key=${API_KEY}${adultCont}`
	);

	return res.data.results;
};

/**
 * Get upcoming movies
 *
 */
export const getUpcomingMovies = async (): Promise<IMovie[]> => {
	const res = await axios.get(
		`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=us${adultCont}`
	);

	return res.data.results;
};

/**
 * Search query
 *
 */
const searchQuery = async (
	page: number | string,
	query: string | undefined
): Promise<IData> => {
	const res = await axios.get(
		`search/movie?api_key=${API_KEY}&query=${query}&page=${page}${adultCont}`
	);

	return res.data;
};

const exports = {
	discoverMovies,
	getGenresList,
	getNowPlayingMovies,
	getPerson,
	getPopularPeople,
	getSingleMovie,
	getTopRatedMovies,
	getTrending,
	getUpcomingMovies,
	searchQuery,
};

export default exports;
