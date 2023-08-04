import styled from 'styled-components'


export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    margin-bottom: 10rem;
    overflow-x: hidden;

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
export const AuthContainer = styled.div`
    width: 80%;
    margin: 0 auto 10rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    
    overflow-x: hidden;

    input {
        width: 97%;
        margin: 0 0 4rem 0;
    }
    label {
        align-self: flex-start;
        margin-left: .6%;
    }

    @media (min-width: 768px) {
        width: 80%;
    }
    @media (min-width: 1024px) {
        width: 50%;
    }
    @media (min-width: 1600px) {
        width: 33%;
    }
`

export const SubmitButton = styled.button`
    margin-top: 5rem;
    background: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.lightGray};
    transition: 500ms;

    &:hover {
        background: ${props => props.theme.colorDark};
        color: ${props => props.theme.colorWhite};
    }
    &:focus {
        border: .3rem solid ${props => props.theme.colorSuccess}
    }
`

export const SwitchLink = styled.span`
    color: #4B7DBA;

    &:hover {
        cursor: pointer;
    }
`

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    position: absolute;
    top: 10%;
    height: 80vh;
    width: 90%;
    z-index: 2500;
    margin: 0 auto;

    padding: 2rem;

    /* border: 1rem solid white; */
`

export const InfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin: 0 auto;

    @media (min-width: 640px) {
        width: 80%;
    }
    @media (min-width: 769px) {
        width: 75%;
    }
    @media (min-width: 1025px) {
        width: 40%;
        margin: 0 auto;
    }
    @media (min-width: 1601px) {
        width: 45%;
    }
`
export const InfoText = styled.h3`
    font-size: 1.9rem;
    color: ${props => props.theme.colorPrimary};
`
export const InfoIcon = styled.i`
    font-size: 3rem;
    color: ${props => props.modal ? props.theme.midLtGray : props.theme.colorPrimary};
    /* color: #f73859; */
    cursor: pointer;
`

export const InfoButton = styled.button`
    display: inline-block;
    min-height: 5rem;
    width: ${props => props.wide ? '70%' : '11rem'};
    margin: 1.5rem 0;
    
    padding: 1rem 2rem;

    text-align: center;
    font-family: "proxima-nova-condensed";
    font-size: 1.9rem;

    color: ${props => props.theme.colorPrimary};
    /* background: linear-gradient(to bottom, #efefef 4%,#efefef 4%,#d7d7d7 23%,#efefef 53%,#d7d7d7 83%,#8f8f8f 100%); */
    background: radial-gradient(circle, rgba(239,239,239,1) 35%, rgba(214,213,213,1) 79%, rgba(187,187,187,1) 100%);
    border-top: .1rem solid #fbfbfb;
    border-bottom: .1rem solid #787878;
    border-radius: .5rem;
    cursor: pointer;
    transition: all 2s;

    &:hover { background: radial-gradient(circle, rgba(239,239,239,1) 47%, rgba(214,213,213,1) 79%, rgba(187,187,187,1) 100%); }
`
export const UserLabel = styled.label`
    /* color: ${props => props.theme.midLtGray}; */
    color: ${props => props.theme.colorPrimary};
    font-weight: 500;
`


// colorPrimary: '#1c395c',
//     highlight: '#4B7DBA',
//     colorDark: '#0E1C2E'
