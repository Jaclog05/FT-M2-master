export function addMovieFavorite(payload){
    return { type: "ADD_MOVIE_FAVORITE", payload};
}

export function getMovies(titulo){
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=e121db82&s=" + titulo)
            .then(response => response.json())
            .then(json => dispatch({ type: "GET_MOVIES", payload: json}))
    }
}

export function getMovieDetail(details){
    return { type: "GET_DETAILS", payload: details}
}

export function removeMovieFavorite(payload){
    return { type: "REMOVE_FAVOURITE", payload}
}