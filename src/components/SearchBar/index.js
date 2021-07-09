import React, {useState, useEffect, useRef } from 'react'

import searchIcon from '../../images/search-icon.svg'

import {Wrapper, Content} from './SearchBar.style'

const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState('');

    const initial = useRef(true);

    useEffect (() => {

        if (initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        },500)
        return () => clearTimeout(timer);

    },[setSearchTerm,state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='Search' />
                <input
                    type="text"
                    placeholder="Pesquisar Filme"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar ;