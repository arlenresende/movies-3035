import React from 'react'
import { useParams} from 'react-router-dom'

// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config'

// Hook

import { useMovieFetch } from '../hooks/useMovieFetch'


// Components

import Grid from '../components/Grid/index'
import Spinner from '../components/Spinner/index'
import BreadCrumb from '../components/BreadCrumb/index'
import MovieInfo from '../components/MovieInfo/index'
import Actor from '../components/Actor/index'

// Image

import NoImage from '../images/no_image.jpg';


const Movie = () => {

    const { movieId } = useParams();

    const {state : movie, loading, error} = useMovieFetch(movieId);

    if(loading) return <Spinner />
    if(error) return <div>Algo errado</div>


    return (
        <div>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <Grid header='Atores'>
                {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl = {
                            actor.profile_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
                            : NoImage
                        }
                    />
                ))}
            </Grid>
        </div>
    )
}

export default Movie;