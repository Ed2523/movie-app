import axios from 'axios'

export const movieList = () => async (dispatch) => {
    let today = new Date();
    let releaseDate = today.getFullYear() + '-0' + (today.getMonth()) + '-' + today.getDate();
    const moviesInTheather = `${process.env.REACT_APP_MOVIES_API}/discover/movie?primary_release_date.gte=${releaseDate}&primary_release_date.lte=${releaseDate}${process.env.REACT_APP_KEY}`


    try {
        dispatch({ type: 'MOVIE_LIST_REQUEST' })
        const { data } = await axios.get(moviesInTheather)

        dispatch({
            type: 'MOVIE_LIST_SUCCESS',
            payload: data.results
        })
    } catch (error) {
        dispatch({
            type: 'MOVIE_LIST_FAIL',
            payload: error
        })
    }


}