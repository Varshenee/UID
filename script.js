function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function filterMovies() {
    let input = document.getElementById('search-input').value.toUpperCase();
    let moviesContainer = document.getElementById('movies');
    let movies = moviesContainer.getElementsByClassName('movie');
    let searchText, movieTitle;

    for (let i = 0; i < movies.length; i++) {
        movieTitle = movies[i].getElementsByClassName("movie-title")[0];
        searchText = movieTitle.textContent || movieTitle.innerText;
        if (searchText.toUpperCase().indexOf(input) > -1) {
            movies[i].style.display = "";
        } else {
            movies[i].style.display = "none";
        }
    }
}



function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
