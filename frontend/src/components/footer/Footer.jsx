import React, { Fragment, useContext, } from 'react'
import ModalFormContext from '../../context/modalForm/modalFormContext'

import { Link as ScrollLink, animateScroll as scroll,  } from 'react-scroll'

import { FooterContainer, FooterIcon, } from './FooterComp'
import { BasicModal, } from '../../components'

import { useQuery, } from '@apollo/react-hooks'
import { GET_TOGGLE_STATUS } from '../../graphql'



export const Footer = () => {
    const { toggleEditOff, }         = useContext(ModalFormContext)
    const { data }                   = useQuery(GET_TOGGLE_STATUS)

    // console.log(document.documentElement.scollHeight)
    const basicClick = e => {
        e.preventDefault()
        toggleEditOff()
    }
    
    return (
        <Fragment>
            <FooterContainer>
                <ScrollLink
                    to='navHeader' 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500} >

                    <FooterIcon className='fas fa-chevron-up' />
                </ScrollLink>
                {data && <h3>{data.userSelection}</h3>}
                
                <BasicModal>
                    <FooterIcon 
                        className='fas fa-plus'
                        onClick={basicClick} />
                </BasicModal>
            </FooterContainer>
        </Fragment>
        
    )
}


/**
 * make multiple calls to an apollo hook
 * const { data: dataR, error: errorR, loading: landingR } = useQuery(GET_RESTAURANTS);
 * const { data, error, loading } = useQuery(GET_DAILY_MENU);
 */