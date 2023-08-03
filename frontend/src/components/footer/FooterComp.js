import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: fixed; 
    display: flex;

    bottom: 0; 
    z-index: 1000;
    height: 7rem; 
    width: 90%; 
    left: 50%;
    transform: translate(-50%, 0);

    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem; 

    background: ${props => props.theme.midLtGray};
    /* opacity: .9; */
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    /* border: .1rem solid green; */

    h3 {
        color: ${props => props.theme.colorPrimary};
    }
    
    @media (min-width: 769px) {
        width: 80%;
        /* margin: 0 auto; */
    }
    @media (min-width: 1025px) {
        width: 50%;
        /* margin: 0 auto; */
    }
    @media (min-width: 1601px) {
        width: 40%;
        /* margin: 0 auto; */
    }
`

export const FooterIcon = styled.i`
    font-size: 5rem;
    color: ${props => props.theme.highlight};

    &:hover {
        cursor: pointer;
    }
`
