import React from 'react'
import { useHistory, } from 'react-router-dom' 
import { useApolloClient, useQuery, } from '@apollo/react-hooks'

import styled from 'styled-components'
import { InfoButton, } from '../FormComp'

import { IS_LOGGED_IN, } from '../../../graphql'


const InfoBtnComp = styled(InfoButton)`
    @media (min-width: 769px) { margin-left: 11.5%; }
    @media (min-width: 1025px) { margin-left: 40.5%; }
    @media (min-width: 1601px) { margin-left: 50%; }
`

export const LogoutButton = () => {
    const client                  = useApolloClient()
    const { data }                = useQuery(IS_LOGGED_IN)
    let history                   = useHistory()

    const onLogoutClick = () => {
        if (data) {
            window.scrollTo(0,0)
            
            localStorage.clear() 
            client.cache.reset()
            client.writeData({ data: { isLoggedIn: false, }})

            history.push('/')
        }
    }


    return (
        <InfoBtnComp onClick={onLogoutClick}>
            Logout
        </InfoBtnComp>
    )
}
