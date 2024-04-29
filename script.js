document.getElementById('searchButton').addEventListener('click', searchMovie);
// clave API
let api_key = 'e93337882eb81a084bf031152f5625c7';
// token de acceso de lectura a la API
let token_API = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTMzMzc4ODJlYjgxYTA4NGJmMDMxMTUyZjU2MjVjNyIsInN1YiI6IjY2MmZhNDYzZDk2YzNjMDEyODk5MTIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VueC2kI5TRzRHFb7ehsiUDbey5idQe44qVDSyqFqz5g';

let urlBase = 'https://api.themoviedb.org/3/search/movie'
// https://api.themoviedb.org/3/search/movie  
// ?query=Jack+Reacher&api_key=e93337882eb81a084bf031152f5625c7

function searchMovie() {
    let searchInput = document.getElementById('searchInput').value;

    fetch (`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response => response.json())
    .then(response => displayMovies(response))
}

function displayMovies(movies) {
    let moviesContainer = document.getElementById('results');
    moviesContainer.innerHTML = '';

    if(movies.results.length > 0) {
        movies.results.forEach(movie => {
            let movieCard = document.createElement('div');
            movieCard.classList.add('movie');
            movieCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
                <h3>${movie.title} - ${movie.release_date}</h3>
                <p>${movie.overview}</p>
            `;
            moviesContainer.appendChild(movieCard);
        });
    }else{
        alert('No hay resultados con ese nombre de pelicula')
    }
}