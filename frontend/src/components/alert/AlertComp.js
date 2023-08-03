import styled from 'styled-components'

// ${props => (props.active ? props.theme.colorPrimary : props.theme.unGray)};
export const AlertBox = styled.div`
    height: 2.7rem;
    width: 90%;
    margin: 2rem auto 0 auto;
    border-radius: .5rem;
    background: ${props => (props.type === 'warning' 
        ? props.theme.colorWarningLight 
        : props.theme.colorSuccessLight
    )};
    visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
    /* border: .3rem solid ${props => props.theme.colorWarning}; */

    @media (max-width: 641px) {
        height: 6rem;
    }

    @media (min-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }
    @media (min-width: 1024px) {
        width: 50%;
        margin: 0 auto;
    }
    @media (min-width: 1600px) {
        width: 33%;
        margin: 0 auto;
    }
`

export const AlertText = styled.p`
    text-align: center;
    color: ${props => (props.type === 'warning' 
        ? props.theme.colorWarning 
        : props.theme.colorSuccess
    )};
`
