import styled from 'styled-components'


export const BannerContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;

    height: 100vh;
    width: 100%;

    background: ${props => props.theme.lightGray};
    opacity: .9;
`

export const Banner = styled.div`
    position: fixed;    
    top: 30vh;
    left: 0;
    z-index: 11000;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 33vh;
    width: 100vw;

    /* padding: .3rem; */
    background: ${props => props.theme.colorDark};

    h5 {
        text-align: center;
        color: ${props => props.theme.lightGray};
    }

    @media (min-width: 640px) {
        height: 25vh;
        h5 {
            font-size: 2.4rem;
        }
    }
    @media (min-width: 769px) {
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
export const BannerButton = styled.button`
    display: inline;
    width: 45%;
    padding: .7rem;
    float: ${props => props.warning ? 'right' : ''};
    color: ${props => props.warning ? props.theme.colorWarning : props.theme.colorSuccess};
    
    font-size: 2rem;
    background: transparent;
    border: .3rem solid ${props => props.warning ? props.theme.colorWarning : props.theme.colorSuccess};
    border-radius: .3rem;

    @media (min-width: 480px) {
        font-size: 2.4rem;
        width: 37%;
    }
`