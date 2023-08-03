import React, { useContext, } from 'react'
// import PropTypes from 'prop-types'
import AlertContext from '../../context/alert/alertContext'
import { AlertBox, AlertText } from './AlertComp'


export const Alert = (/*{ text, color }*/) => {
    const alertContext = useContext(AlertContext)


    return (
        <AlertBox 
            id='alert'
            type={alertContext.alerts.type}
            isVisible={alertContext.alerts.isVisible} >

            <AlertText 
                type={alertContext.alerts.type} >
                
            {alertContext.alerts.msg}</AlertText>
        </AlertBox>
    )
}
