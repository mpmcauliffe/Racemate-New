import styled from 'styled-components'


export const NavContainer = styled.div`
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colorPrimary};

    @media (min-width: 769px) {
        height: 10rem;
        width: 80%;
        margin: 0 auto;
    }
    @media (min-width: 1025px) {
        width: 50%;
        margin: 0 auto;
    }
    @media (min-width: 1601px) {
        width: 40%;
        margin: 0 auto;
    }
`
export const NavRacemate = styled.img`
    width: 50vw;
    align-self: flex-start;
    margin: .7rem 0 0 .5rem;

    @media (min-width: 481px) { 
        width: 43vw; 
        margin-top: 0; 
    }
    @media (min-width: 641px) { width: 36vw; }
    @media (min-width: 481px) { width: 27rem; }
`
export const Header = styled.h1`
    margin-top: 1rem;
    padding: 0 1rem;
    /* color: ${props => props.theme.colorlight}; */
    color: ${props => props.theme.midLtGray};

    @media (min-width: 769px) {
        margin-top: 1rem;
        /* margin-left: 25%; */
        padding: 0;
    }
`

export const NavLink = styled.h4`
    color: ${props => props.theme.highlight};
`
export const BackBar = styled.div`
    position: absolute;
    z-index: -5;
    width: 100%;

`
