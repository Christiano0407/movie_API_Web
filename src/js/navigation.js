//** ==== =====  Location And Hash =======   =====*/
window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  console.log({ location });

  if (location.hash.startsWith(`#trends`)) {
    trendsPage();
  } else if (location.hash.startsWith(`#search=`)) {
    searchPage();
  } else if (location.hash.startsWith(`#movie=`)) {
    movieDetailPage();
  } else if (location.hash.startsWith(`#category`)) {
    categoryPage();
  } else {
    homePage();
  }
}

function homePage() {
  console.log("Home");

  getCategoriesPreview();
  getTrendingMoviesPreviews();
}

function categoryPage() {
  console.log("Here!  Categories");
}

function movieDetailPage() {
  console.log("Movies!!");
}

function searchPage() {
  console.log("I´m Search, Yeah!!");
}

function trendsPage() {
  console.log("Here in Trends!");
}
