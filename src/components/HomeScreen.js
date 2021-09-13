import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import { movieList } from '../redux/actions/movieActions'
// import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';


const HomeScreen = () => {

    const dispatch = useDispatch()

    const listOfMovies = useSelector(state => state.movieList)
    const { movies, loading } = listOfMovies
    // const [movies, setMovies] = useState([])
    // let today = new Date();
    // let releaseDate = today.getFullYear() + '-0' + (today.getMonth()) + '-' + today.getDate();
    // const moviesInTheather = `${process.env.REACT_APP_MOVIES_API}/discover/movie?primary_release_date.gte=${releaseDate}&primary_release_date.lte=${releaseDate}${process.env.REACT_APP_KEY}`

    useEffect(() => {

        // let cancel = false

        // const getData = async () => {
        //     const res = await axios.get(moviesInTheather)
        //     const { results } = res.data
        //     if (cancel) return;//  Cancel checks if the component has been unmounted and then calls the return clean up function
        //     setMovies(results)
        // }
        // getData()

        // return () => {
        //     cancel = true

        dispatch(movieList())
    }
        , [dispatch])
    return (
        <div className='home-screen'>
            <div className="filters">
                <button data-testid='In Theather' className='selected'>In Theather</button>
                <button data-testid='Horror'>Horror</button>
                <button data-testid='Comedy'>Comedy</button>
                <button data-testid='Drama'>Drama</button>
            </div>
            <div className="movie-list">

                {loading ? <h1>Loading...</h1> :
                    movies.map(movie => <MovieCard key={uuidv4()} title={movie.title} poster={movie.poster_path} overview={movie.overview} />)

                }
            </div>
        </div>
    )
}

export default HomeScreen
