import React from 'react'

import { Image, Wrapper } from './Actor.styles'

const Actor = ({imageUrl,name, character}) => (
   <div>
    <Wrapper>
			<Image>
				<img src={imageUrl} alt='Nome da Imagem' />
				<h3>{name}</h3>
				<p>{character}</p>
			</Image>
    </Wrapper>
   </div>
);

export default Actor ;