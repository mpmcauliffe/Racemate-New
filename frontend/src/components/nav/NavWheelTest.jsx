import React from 'react'
import { useHistory, } from 'react-router-dom' 
import { useApolloClient, useQuery, } from '@apollo/react-hooks'
import { NavLink } from './NavComp'
import { IS_LOGGED_IN, } from '../../graphql'

import './navWheel.css'


export const NavWheelTest = () => {
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
        <div className='navigation'>
            <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />

            <label htmlFor='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>

            <div className='navigation__background'>&nbsp;</div>

            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Add Exercise</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Create Workout</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Generate Routine</NavLink>
                    </li>

                    <br /><br /><br /><br />
                    <br /><br /><br /><br />

                    <li className='navigation__item'>
                        <NavLink className='navigation__link'>Profile</NavLink>
                    </li>
                    <li className='navigation__item'>
                        <NavLink
                            onClick={onLogoutClick} 
                            className='navigation__link'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
