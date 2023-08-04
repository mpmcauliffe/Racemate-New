import styled from 'styled-components'


export const SWtext = styled.h6`
    flex-basis: 100%;
    margin: 2rem auto 4rem auto;
    font-size: ${props => props.small ? '5rem' : '6rem'};
    font-weight: 400;
    text-align: center;
    font-stretch: condensed;
    color: ${props => props.theme.secondaryLight};

    @media(max-width: 420px) {
        font-size: ${props => props.small ? '3.5rem' : '4.5rem'};
    }
`
export const BtnRound = styled.button`
    height: 7rem;
    width: 7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border: .07rem solid ${props => props.theme.primaryGray};
    border-radius: 50%;
    background: transparent;

    &:focus { border-color: ${props => props.theme.primaryGray} }
`
export const LapContainer = styled.div`
    height: 5rem;
`
export const LapText = styled.p`
    font-size: 3rem;
    text-align: center;
    &&& { color: ${props => props.theme.secondaryDark}; }
`
