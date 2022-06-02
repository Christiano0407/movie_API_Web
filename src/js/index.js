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

//*?  === AXIOS part 02====  */
//** === Project API MOVIES Container === */
//*? ==== Trending and Preview  View add HTML  ==== */
const getTrendingMoviesPreviews = async () => {
  try {
    const { data } = await API(`trending/movie/day`);
    //console.log(data.results);
    let movies = data.results;
    // Limpiar e quitar doble carga
    trendingMoviesPreviewList.innerHTML = " ";

    movies.forEach((movie) => {
      const trendingMoviesPreviewList = document.querySelector(
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
      trendingMoviesPreviewList.appendChild(movieContainer);
    });
  } catch (error) {
    console.log("Error get Movies Trending");
  }
};

// &language=es-Mx (API)
//*? 03  =========== New AXIOS  */
//** ====== Categorias Movies === */
async function getCategoriesPreview() {
  const { data } = await API("genre/movie/list");
  const categories = data.genres;
  // => No repetir al cargar ==
  categoriesPreviewList.innerHTML = " ";

  categories.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", "id" + category.id);
    //> Unir ID + Btn
    categoryTitle.addEventListener("click", () => {
      //location.hash = "#category=" + category.id + " - " + category.name;
      location.hash = `#category=${category.id}-${category.name}`;
    });
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    categoriesPreviewList.appendChild(categoryContainer);
  });
}

//** Add Categories  and Movies */
//*? ==== 04 =====> With AXIOS */
async function getMoviesByCategory(id) {
  const { data } = await API("discover/movie", {
    params: {
      with_genres: id,
    },
  });
  const movies = data.results;
  // Limpiar e quitar doble carga
  genericSection.innerHTML = " ";

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
    genericSection.appendChild(movieContainer);
  });
}

//*?====== CALL Functions ======= */
/* getCategoriesPreview();
 getTrendingMoviesPreviews(); */
