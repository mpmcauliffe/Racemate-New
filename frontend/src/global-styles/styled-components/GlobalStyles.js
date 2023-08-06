import { createGlobalStyle, } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
    }
    button:disabled {
        cursor: default;
    }

    h1 {
        font-family: "proxima-nova-condensed";
        font-size: ${props => props.theme.xL};
        font-weight: 700;
    }
    h2 {
        font-family:"proxima-nova";
        font-size: ${props => props.theme.large};
        font-weight: 400;
    }
    h3, label, input {
        font-family: "proxima-nova-condensed";
        font-size: 2.7rem;
        font-weight: 400;
    }
    
    p {
        font-family:"meno-display";
        font-size: 1.9rem;
        font-weight: 300;
        line-height: 150%;
    }
    
    input {
        height: 3.5rem;
        width: 80%;
        border-radius: .5rem;
        border: 1px solid ${props => props.theme.midGrayWarm};
        font-weight: 300;
    }
    input:active {
        border: 1px solid ${props => props.theme.secondaryDark};
    }
`


export { GlobalStyle }
