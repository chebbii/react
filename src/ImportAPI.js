import axios from "axios";

const API_URL = http://www.omdbapi.com/?apikey=b502738f&s=matrix

export const getMovies = async () => {
  const response = await axios.get(API_URL);

  return  getMovies.data.Search.filtre(
      movie => movie.Year > 2002
  ).map(({ Title, Year}) => '${Title}' - '${Year}');
};
