console.log("Node Javascript");
//*? === Tip >>> Evitar poner siempre document.querySelector ========> */
const $ = (id) => document.querySelector(id);

//** ===  <<<< Sections >>>>> ===  */
const headerSection = $(`#header`);
const trendingPreviewSection = $("#trendingPreview");
const categoriesPreviewSection = $("#categoriesPreview");
const genericSection = $("#genericList");
//const movieContainer = document.querySelector(".movie-container");
const movieDetails = $("#movieDetail");

//** ======== Lists & Container ======== */
const searchForm = $("#searchForm");
const trendingMoviesPreviewList = $(".trendingPreview-movieList");
const categoriesPreviewList = $(".categoriesPreview-list");
const movieDetailsCategoriesList = $("#movieDetail .categories-list");
const relatedMoviesContainer = $(".relatedMovies-scrollContainer");

//*? ======== Elements ======== */
const headerTitle = $(".header-title");
const arrowBtn = $(".header-arrow");
const headerCategoryTitle = $(".header-title--categoryView");
const searchFormInput = $("#searchForm input");
const searchFormBtn = $("#searchBtn");
const trendingBtn = $(".trendingPreview-btn");

const movieDetailTitle = document.querySelector(".movieDetail-title");
const movieDetailDescription = document.querySelector(
  ".movieDetail-description"
);
const movieDetailScore = document.querySelector(".movieDetail-score");
const categoryTitle = $(".category-container");
