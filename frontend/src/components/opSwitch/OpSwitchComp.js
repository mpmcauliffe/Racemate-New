import styled from 'styled-components'


export const ButtonSet = styled.button`
    font-style:normal;
    font-weight: 500;
    font-size: ${props => props.theme.inter};
    max-height: 3rem;
    /* max-width: 10rem; */
    /* max-width: ${props => `${props.buttonSize}vw`}; */
    /* margin-bottom: 5rem; */
    float: right;
    color: ${props => props.theme.colorPrimary};
    background: ${props => (props.active ? props.theme.highlight : props.theme.midLtGray)};
    transition: 500ms;

    &:focus {
        outline: none;
        /* font-weight: 600; */
        border: .1rem solid ${props => props.theme.midLtGray}
    }

    /* Media queries are experimental for this component */
    @media (max-width: 640px) {
        /* display: ${props => (props.fluid ? 'flex' : 'block')}; */
        /* width: 33.333vw; */
    }
    @media (min-width: 641px) {
        /* max-width: 20vw; */
    }
`
