
const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_MOVIE_FAVORITE": 
            return {
                ...state, 
                moviesFavourites: [...state.moviesFavourites, action.payload]
            }
        case "GET_MOVIES":
            return {
                ...state, 
                moviesLoaded: action.payload.Search
            }
        case "GET_DETAILS":
            return {
                ...state, 
                movieDetail: action.payload
            }
        case "REMOVE_FAVOURITE":
            return {
                ...state, 
                moviesFavourites: state.moviesFavourites.filter((p, i) => p.Title === action.payload)
            }
        default: 
            return {
                ...state
            }
    }
}

export default rootReducer