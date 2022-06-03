//** === ==== ====  Function General API REST ======= ====== ====  */
//*?  == No repetir el mismo código para la API / = Utils ( funciones que voy a usar )  = */

function createMovies(movies, container) {
  // => Limpiar antes mi "caché"
  container.innerHTML = " ";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("category-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute(`alt`, movie.title);
    movieImg.setAttribute(
      `src`,
      `https://image.tmdb.org/t/p/w300/` + movie.poster_path
    );
    // == Add Movies HTML ==
    movieContainer.appendChild(movieImg);
    container.appendChild(movieContainer);
  });
}