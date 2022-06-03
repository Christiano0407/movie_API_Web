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
  const { data } = await API(`trending/movie/day`);
  //console.log(data.results);
  const movies = data.results;
  //> Llamar a mi function Movies >>
  createMovies(movies, trendingMoviesPreviewList);
};

// &language=es-Mx (API)
//*? 03  =========== New AXIOS  */
//** ====== Categorias Movies === */
async function getCategoriesPreview() {
  const { data } = await API("genre/movie/list");
  const categories = data.genres;
  // => No repetir al cargar ==
  //  categoriesPreviewList.innerHTML = " ";

  createCategories(categories, categoriesPreviewList);
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
  //genericSection.innerHTML = " ";

  createMovies(movies, genericSection);
}

//*?====== CALL Functions ======= */
/* getCategoriesPreview();
 getTrendingMoviesPreviews(); */
