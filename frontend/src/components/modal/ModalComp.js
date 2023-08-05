import styled from 'styled-components'


export const modalContent = {
    modalFrame: {
        height: '100vh',
        width: '80vw',
        top: '1rem',
        right: '0',
        bottom: '0',
        left: '0',
        marginRight: 'auto',
        marginLeft: 'auto',

        overflowY: 'hidden',
        background: '#0E1C2E', // theme primaryDark
    },
}

export const ModalTitle = styled.h3`
    display: inline;
    margin: .5rem 0 1rem 0;
    font-style: italic;
    color: ${props => props.theme.midLtGray};
`
export const ModalCloseButton = styled.div`
    display: inline;
    position: absolute;
    top: .5rem;
    right: 1.5rem;
`
export const FooterIcon = styled.i`
    font-size: 5rem;
    color: ${props => props.theme.unGray};

    &:hover {
        cursor: pointer;
    }
`

// export const ModalComp = styled(ReactModal)`
//     position: relative;
//     height: 110vh;
//     width: 87vw;
//     margin: 1rem auto 0 auto;

//     padding: 1rem 2rem;
//     background: ${props => props.theme.colorDark};

//     h3 {
//         text-align: center;
//         margin: .5rem 0 1rem 0;
//         color: ${props => props.theme.primaryGray}
//     }

//     @media (min-width: 768px) {
//         width: 90%;
//         margin: 0 auto;
//     }
//     @media (min-width: 1024px) {
//         width: 63%;
//         margin: 0 auto;
//     }
//     @media (min-width: 1600px) {
//         width: 40%;
//         margin: 0 auto;
//     }
// `