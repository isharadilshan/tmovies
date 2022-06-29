export const TOP_RATED_MOVIES = (apiKey, page = 1) =>
  `/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
