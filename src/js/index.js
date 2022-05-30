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
    const trendingPreviewMovieContainer = document.querySelector(
      `#trendingPreview   .trendingPreview-movieList  `
    );

    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=` + API_KEY
    );
    const data = await response.json();
    //console.log(data.results);

    let movies = data.results;

    movies.forEach((movie) => {
      const movieContainer = document.createElement("div");
      movieContainer.classList.add("movie-container");

      const movieImg = document.createElement("img");
      movieImg.classList.add("movie-img");
      movieImg.setAttribute(`alt`, movie.title);
      movieImg.setAttribute(
        `src`,
        `https://image.tmdb.org/t/p/w300/` + movie.poster_path
      );
      // == Add Movies HTML ==
      movieContainer.appendChild(movieImg);
      trendingPreviewMovieContainer.appendChild(movieContainer);
    });
  } catch (error) {
    console.log("Error get Movies Trending");
  }
};

getTrendingMoviesPreviews();
