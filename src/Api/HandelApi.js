
import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,

  // baseURL: process.env.REACT_APP_BASE_URL,
});

// Set the API key in the request interceptor
instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "54cad708d0a67a3a1c2b0b9bff908009";
  return config;
});

export default instance;




// import instance from "./HandelApi";

// export const getMovieDetails = (id) => {
//     return instance.get(`/movie/${id}`);
// }