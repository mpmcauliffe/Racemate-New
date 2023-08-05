import React from 'react'
import { Header, NavContainer, NavRacemate } from './NavComp'
import { useQuery, } from '@apollo/react-hooks'
import { NavMenu } from './NavMenu'

import { IS_LOGGED_IN, } from '../../graphql'


export const Nav = () => {
    const { data } = useQuery(IS_LOGGED_IN)

    return (
        <NavContainer>
            <NavRacemate
                id='navHeader' 
                alt='RACEMATE!'
                src={require(`./RACEMATE_gray.svg`)} />
            {/**<Header id='navHeader'>RACEMATE</Header> */}
            
            {data.isLoggedIn && <NavMenu />}
        </NavContainer>
    )
}
