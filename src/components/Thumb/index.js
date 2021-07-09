import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Info, Card } from './Thumb.styles'

const Thumb = ({image, title, date, note,  movieId, clickable}) => (
   <div>
       {    clickable ? (
           <Card>
                <Link to={`/${movieId}`}>
                  
                    <Image src={image} alt="Nome da imagem" />
                    
                    <h2 className="title">{title}</h2>
                </Link>
                <Info>
                    <p><strong>Data: </strong>{date}</p>
                  
                    <div className="notes">
                        <strong> nota: </strong> {
                            note > 6 ? <p className="good">{note}</p>
                            :
                            <p className="bad">{note}</p>

                        }
                    </div>
                    
                </Info>
            </Card> 
       ) : (
        <img src={image} alt='Nome da Imagem' />

   
       )}
     
      
     
   </div>
);

export default Thumb ;