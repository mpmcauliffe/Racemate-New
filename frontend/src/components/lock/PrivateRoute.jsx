import React from 'react'
import { Route, Redirect, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import { IS_LOGGED_IN } from '../../graphql'


export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { loading, data } = useQuery(IS_LOGGED_IN)


    return (
        <Route 
            { ...rest } 
            render={props => !data.isLoggedIn && !loading
                ?   (
                        <Redirect to='/' />
                ) : (
                        <Component { ...props } />
                )
        } />
    )
}
