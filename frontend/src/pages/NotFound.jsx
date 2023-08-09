import React from 'react'
import { Link, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import { PageContainer, } from './PageComp'
import { IS_LOGGED_IN } from '../graphql'


export const NotFound = () => {
    const { data } = useQuery(IS_LOGGED_IN)

    return (
        <PageContainer>
            <h2>NOT FOUND</h2>
            <p>The page you are looking for does not exist. . .</p>

            <br /><br /><br /><br />

            <Link to={data ? '/home' : '/'}>
                <p>Return home</p>
            </Link>
        </PageContainer>
    )
}
