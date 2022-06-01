console.log("Hello World API REST");
//** API  Edit */
/* import { API_KEY } from "./secrets.js"; */
//console.log(`Key: ${API_KEY}`);
/* import { API_URL } from "./secrets.js"; */
//console.log(`URL: ${API_URL}`);
//*? Agregar a tu gitignore*/
// => add .gitignore ( add )

//** <<<< === === AXIOS API REST === === >>>> */
const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

//*?  === AXIOS part 03 ====  */
//** === Project API MOVIES Container === */
//*? ==== Trending and Preview  View add HTML  ==== */
const getTrendingMoviesPreviews = async () => {
  try {
    const { data } = await API(`trending/movie/day`);
    //console.log(data.results);
    let movies = data.results;

    movies.forEach((movie) => {
      const trendingPreviewMovieContainer = document.querySelector(
        `#trendingPreview   .trendingPreview-movieList  `
      );

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

// &language=es-Mx (API)
//*? 02  =========== New AXIOS  */
//** ====== Categorias Movies === */
const getCategoriesPreview = async () => {
  try {
    const { data } = await API(`genre/movie/list`);
    const categories = data.genres;
    /*  console.log(categories); */

    let plus = " ";

    categories.forEach((category) => {
      plus += `  
           
           <div class="category-container">
           <h3 class="category-title" id=id${category.id}> ${category.name}</h3> 
           </div>
           `;
    });

    document.getElementById("categoriesPreviewList").innerHTML = plus;
  } catch (error) {
    console.log("Sorry! Your not Access a Genres");
  }
};
//*?====== CALL Functions ======= */
/* getCategoriesPreview();
 getTrendingMoviesPreviews(); */
