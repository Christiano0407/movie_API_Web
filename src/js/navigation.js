//** ==== =====  Location And Hash =======   =====*/
//*? === Buttons Events */
searchFormBtn.addEventListener("click", () => {
  location.hash = "#search=";
});

trendingBtn.addEventListener("click", () => {
  location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
  location.hash = "#home";
});

//*? == Events Load and HashLocation */
window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

//*? == Navigation */
function navigator() {
  console.log({ location });

  if (location.hash.startsWith(`#trends`)) {
    trendsPage();
  } else if (location.hash.startsWith(`#search=`)) {
    searchPage();
  } else if (location.hash.startsWith(`#movie=`)) {
    movieDetailPage();
  } else if (location.hash.startsWith(`#category=`)) {
    categoryPage();
  } else {
    homePage();
  }
}

//** == Agregar y remover secciones con "add" and "remove"  ===== */
function homePage() {
  console.log("Home");

  headerSection.classList.remove(`header-container--long`);
  headerSection.style.background = " ";
  arrowBtn.classList.add("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.remove("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.remove("inactive");
  categoriesPreviewSection.classList.remove("inactive");
  genericSection.classList.add("inactive");
  movieDetails.classList.add("inactive");

  getCategoriesPreview();
  getTrendingMoviesPreviews();
}

function categoryPage() {
  console.log("Here!  Categories");

  headerSection.classList.remove(`header-container--long`);
  headerSection.style.background = " ";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetails.classList.add("inactive");

  //> Add function Category = Función para llamar las pelis en categorias  ====>
  // ["#category,  id.name"]
  const [_, categoryData] = location.hash.split("=");
  const [categoryId, categoryName] = categoryData.split("-");

  headerCategoryTitle.innerHTML = categoryName;

  getMoviesByCategory(categoryId);
}

function movieDetailPage() {
  console.log("Movies!!");
  headerSection.classList.add(`header-container--long`);
  // headerSection.style.background = " ";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.add("inactive");
  movieDetails.classList.remove("inactive");
}

function searchPage() {
  console.log("I´m Search, Yeah!!");
  headerSection.classList.remove(`header-container--long`);
  headerSection.style.background = " ";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetails.classList.add("inactive");
}

function trendsPage() {
  console.log("Here in Trends!");
  headerSection.classList.remove(`header-container--long`);
  headerSection.style.background = " ";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetails.classList.add("inactive");
}
