import{ createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth:1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --purple : #751487;
        --green: green;
        --red: red;
    }

    *{
        box-sizing: border-box;
        font-family: 'Roboto',sans-serif;
        text-decoration: none;
    }
    body{
        margin: 0;
        padding: 0;
        h1{
            font-size:2rem;
            font-weight:600;
            color: var(--white);
        }
        h3{
            font-size:1.1rem;
            font-weight:600;

        }
        p{
            font-size:1rem;
            color: var(--white);
        }

    }
    

`;


