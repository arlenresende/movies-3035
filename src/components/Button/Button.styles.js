import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    background: var(--purple);
    width: 25%;
    min-width: 200px;
    height:60px;
    border-radius:60px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transform: all 0.3s;
    outline: none;
    cursor: pointer;
    align-items:center;
    justify-content:center;

    :hover{
        opacity: 0.8
    }


`;


