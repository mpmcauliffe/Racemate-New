import React from 'react'
import { NavMenuKit, } from './NavMenuComp'
import { UserInfo } from '../../components'


export const NavMenu = () => {
    return (
        <NavMenuKit className='navigation'>
            <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />

            <label htmlFor='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>

            <div className='navigation__background'>&nbsp;</div>

            <nav className='navigation__nav'>
                {/****/}
                <UserInfo />
            </nav>
        </NavMenuKit>
    )
}
