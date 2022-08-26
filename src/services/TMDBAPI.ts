import axios from "axios";

type QueryFn = { [key: string]: string | number };

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY: string = import.meta.env.VITE_API_KEY;
const adultCont: string = "&include_adult=false";
const credits: string = "&append_to_response=credits";

//* General fetch method
const get = async (endpoint: string) => {
	const response = await axios.get(endpoint);

	return response.data;
};

/**
 * Get top rated movies
 *
 * @param {number} page Page of movies to get
 * @returns Promise
 */
export const getTopRatedMovies = async ({ queryKey }: any) => {
	const [_key, { page }] = queryKey;

	return get(
		`/movie/top_rated?api_key=${API_KEY}&language=en-US&region=US&page=${page}${adultCont}`
	);
};

/**
 * Get top rated movies
 *
 * @param {number} page Page of movies to get
 * @returns Promise
 */
export const getNowPlayingMovies = async ({ queryKey }: any) => {
	const [_key, { page }] = queryKey;

	return get(
		`/movie/now_playing?api_key=${API_KEY}&language=en-US&region=US&page=${page}${adultCont}`
	);
};

/**
 * Get single movie details
 *
 * @param {number} id movie id
 * @returns Promise
 */
export const getSingleMovie = async (id: number) => {
	return get(
		`/movie/${id}?api_key=${API_KEY}&language=en-US${adultCont}${credits},similar`
	);
};

/**
 * Discover movies
 *
 * @param {page, genre_id} page number and genre id
 * @returns Promise
 */
export const discoverMovies = async ({ queryKey }: any) => {
	const [_key, { page, genre_id }] = queryKey;
	return get(
		`discover/movie?api_key=${API_KEY}&language=en-US&popularity.desc${adultCont}&page=${page}&with_genres=${genre_id}`
	);
};

/**
 * Discover persons movies
 *
 * @param {page, id} page number and person id
 * @returns Promise
 */
export const discoverPersonsMovies = async ({ queryKey }: any) => {
	const [_key, { page, id }] = queryKey;
	return get(
		`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc${adultCont}&page=${page}&with_cast=${id}`
	);
};

/**
 * Genres list
 *
 * @returns Promise
 */
export const getGenresList = async () => {
	return get(`genre/movie/list?api_key=${API_KEY}&language=en-US`);
};

/**
 * Get person
 *
 * @param {number} id person id
 * @returns Promise
 */
export const getPerson = async ({ queryKey }: any) => {
	const [_key, { id }] = queryKey;
	return get(`person/${id}?api_key=${API_KEY}&language=en-US${adultCont}`);
};

/**
 * Get upcoming movies
 *
 * @returns Promise
 */
export const getUpcomingMovies = async () => {
	return get(
		`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=us${adultCont}`
	);
};

/**
 * Get most popular people
 *
 * @returns Promise
 */
export const getPopularPeople = async () => {
	return get(`person/popular?api_key=${API_KEY}&language=en-US&page=1`);
};

/**
 * Search query
 *
 * @param {query} search query
 * @returns Promise
 */
export const searchQuery = async ({ queryKey }: any) => {
	const [_key, { page, query }] = queryKey;
	return get(
		`search/movie?api_key=${API_KEY}&query=${query}&page=${page}${adultCont}`
	);
};

/**
 * Trending movies by day or week
 *
 * @param {time, type} day or week and type of media
 * @returns Promise
 */
export const getTrending = async ({ queryKey }: any) => {
	const [_key, { time }] = queryKey;
	return get(`/trending/movie/${time}?api_key=${API_KEY}${adultCont}`);
};

const exports = {
	getTopRatedMovies,
	getNowPlayingMovies,
	getSingleMovie,
	discoverMovies,
	discoverPersonsMovies,
	getGenresList,
	getPerson,
	getUpcomingMovies,
	getPopularPeople,
	searchQuery,
	getTrending,
};

export default exports;
