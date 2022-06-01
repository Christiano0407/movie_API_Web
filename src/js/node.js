console.log("Node Javascript");
//** ===  <<<< Sections >>>>> ===  */
const headerSection = document.querySelector("#headeer");
const trendingPreviewSection = document.querySelector("#trendingPreview");
const categoriesPreviewSection = document.querySelector("#categoriesPreview");
const genericSection = document.querySelector("#genericList");
//const movieContainer = document.querySelector(".movie-container");
const movieDetails = document.querySelector("#movieDetails");

//** ======== Lists & Container ======== */
const searchForm = document.querySelector("#searchForm");
const trendingMoviesPreviewList = document.querySelector(
  ".trendingPreview-movieList"
);
const categoriesPreviewList = document.querySelector(".categoriesPreview-list");
const movieDetailsCategoriesList = document.querySelector(
  "#movieDetail .categories-list"
);
const relatedMoviesContainer = document.querySelector(
  ".relatedMovies-scrollContainer"
);

//*? ======== Elements ======== */
const headerTitle = document.querySelector(".header-title");
const arrowBtn = document.querySelector(".header-arrow");
const headerCategoryTitle = document.querySelector(
  ".header-title--categoryView"
);
const searchFormInput = document.querySelector("#searchForm input");
const searchFormBtn = document.querySelector("#searchBtn");
const trendingBtn = document.querySelector(".trendingPreview-btn");

const movieDetailTitle = document.querySelector(".movieDetail-title");
const movieDetailDescription = document.querySelector(
  ".movieDetail-description"
);
const movieDetailScore = document.querySelector(".movieDetail-score");
