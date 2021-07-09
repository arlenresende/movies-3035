import React from 'react';
import RMDBLogo  from '../../images/logo.jpg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import { Link } from 'react-router-dom'

import {Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.style'

// import { Container } from './styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to ="/" >
                <LogoImg src={RMDBLogo} alt='Descrição Logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='Descrição Logo' />
        </Content>
    </Wrapper>
)

export default Header;