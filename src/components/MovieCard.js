import React from 'react'

const MovieCard = ({ title, poster, overview }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className='movie-card'>
            <div className="image-container">
                <img src={imgUrl + poster} alt="" />
            </div>
            <h1 className='title'>{title}</h1>
            <p className='description'>{overview.substring(0, 100)}...</p>
        </div>
    )
}

export default MovieCard
