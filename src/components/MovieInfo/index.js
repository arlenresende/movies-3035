import React from 'react'

import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config'

import Thumb from '../Thumb';

import {Wrapper, Content,Text} from './MovieInfo.styles'


// Image
import NoImage from '../../images/no_image.jpg';

const MovieInfo = ({movie}) => {
    return(
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                image={
                    movie.poster_path 
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage

                } 
                clickable={false}
                alt='Imagem'
                />

                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Enredo</h3>
                    <p>{movie.overview}</p>

                    <div className="rating">
                        <div>
                            <h3>Avaliação</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                        <h3>Diretor{movie.directors.lenth > 1 ? 'es' : ''}</h3>
                        {
                            movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                            ))
                        }
                        </div>
                        
                    </div>
                  
                  
                </Text>
               

            </Content>
           
        </Wrapper>
    )
}

export default MovieInfo  ;