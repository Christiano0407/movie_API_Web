console.log("Hello World API REST");
//** API  Edit */
/* import { API_KEY } from "./secrets.js"; */
//console.log(`Key: ${API_KEY}`);
/* import { API_URL } from "./secrets.js"; */
//console.log(`URL: ${API_URL}`);
//*? Agregar a tu gitignore*/
// => add .gitignore ( add )
//** === Project API MOVIES === */

const getTrendingMoviesPreviews = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=` + API_KEY
    );
    const data = await response.json();

    const movies = data.results;
    console.log(movies);
  } catch (error) {
    console.log("Error get Movies Trending");
  }
};

getTrendingMoviesPreviews();
