import styled from 'styled-components';

export const Card = styled.div`
 .title{
    
     color: var(--medGrey);
 }
`;

export const Image = styled.img`
  
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
   

`;

export const Info = styled.div`
   
  p{
      color: var(--medGrey);
  }
  .good{
      background: var(--green);
      color: var(--white);
      padding: 0.3rem;
  }
  .bad{
      background: var(--red);
      color: var(--white);
      padding: 0.3rem;
  }
  .notes{
      display: flex;
      align-items: center;
      strong{
          margin-right: 0.5rem;
      }
  }
   

`;
