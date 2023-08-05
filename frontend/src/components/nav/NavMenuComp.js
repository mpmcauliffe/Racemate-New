import styled from 'styled-components'


export const NavMenuKit = styled.div`
    /* border: .1rem solid blue; */
    .navigation__checkbox {
        display: none;
    }
    .navigation__button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 3000;
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        background-color: ${props => props.theme.midLtGray};
        text-align: center;
        /* box-shadow: 0 1rem 3rem rgba(${props => props.theme.colorPrimary}, .1); */
        cursor: pointer;
    }
    .navigation__background {
        position: absolute;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        z-index: 2000;
        top: 3rem;
        right: 3rem;
        /* background-image: radial-gradient(
            ${props => props.theme.primaryGray}, 
            ${props => props.theme.colorDark}
        ); */
        background: ${props => props.theme.primaryGray};
        transition: transform .8s cubic-bezier(.86, 0, .07, 1); /* https://cubic-bezier.com */

        @media (min-width: 769px) { right: 11.5%; }
        @media (min-width: 1025px) { right: 26.5%; }
        @media (min-width: 1601px) { right: 31%; }
    }

    .navigation__nav {
        position: absolute;
        height: 100vh;
        /* position: fixed; */
        top: 0;
        /* left: 0; */
        left: -100%;
        z-index: 2500;
        transition: all .8s;

        /* not toggled */
        opacity: 0;
        width: 0;

        /* cool overlap effect */
        /* background-color: orangered; */
    }


    .navigation__checkbox:checked ~ .navigation__background {
        position: fixed;
        transform: scale(150);
    }
    .navigation__checkbox:checked ~ .navigation__nav {
        opacity: 1;
        left: 0;
        width: 100%;
    }


    .navigation__icon {
        position: relative;
        margin-top: 2.5rem;
    }
    .navigation__icon, .navigation__icon::before, .navigation__icon::after {
        display: inline-block;
        width: 3rem;
        height: 0.2rem;
        background-color: ${props => props.theme.colorPrimary};
    }
    .navigation__icon::before, .navigation__icon::after {
        content: "";
        position: absolute;
        left: 0;
        transition: 0.2s;
    }
    .navigation__icon::before { top: -0.8rem; }
    .navigation__icon::after { top: 0.8rem; }
    .navigation__button:hover .navigation__icon::before { top: -1rem; }
    .navigation__button:hover .navigation__icon::after { top: 1rem; }
    .navigation__checkbox:checked + .navigation__button .navigation__icon { background-color: transparent; }
    .navigation__checkbox:checked + .navigation__button .navigation__icon::before {
        top: 0;
        transform: rotate(135deg);
    }
    .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
        top: 0;
        transform: rotate(-135deg);
    }


    @media (min-width: 769px) {
        .navigation__button,
        .navigation__nav { right: 11%; }
    }
    @media (min-width: 1025px) {
        .navigation__button,
        .navigation__nav { right: 26%; }
    }
    @media (min-width: 1601px) {
        .navigation__button,
        .navigation__nav { right: 31%; }
    }
`
