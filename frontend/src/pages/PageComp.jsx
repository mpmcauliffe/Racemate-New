import styled from 'styled-components'


export const PageContainer = styled.div`
    /* display: inline-block; */
    minWidth: 70vw;
    margin: 0 auto;
    padding: 3rem;

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

export const WidePageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    /* border: 1px solid red;*/
    /* height: 150vh;  */

    /* @media (min-width: 640px) {
        width: 99vw;
    } */
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
