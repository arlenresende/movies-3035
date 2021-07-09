import styled from 'styled-components';

export const Wrapper = styled.div``

export const Image = styled.div`

   img{
    width: 100%;
    max-width: 720px;
    transform: all 0.3s;
    object-fit:cover;
    border-radius:20px;
    animation: animateThumb 1s;

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
   }


`;