import React, { useState, useEffect, } from 'react'
import PropTypes from 'prop-types'
import { ButtonSet, } from './OpSwitchComp'


export const OpSwitch = ({ optButtons, setting, handleToggle, defaultOpt, }) => {

    const [buttonState, setButtonState]     = useState([ ])
    const [buttonSize, setButtonSize]       = useState(0)

    useEffect(() => {

        setButtonState(optButtons.map((opt, index) => {
            return {
                name: opt,
                active: index === defaultOpt ? true : false,
            }
        }))

        setButtonSize(100 / optButtons.length)

    // eslint-disable-next-line
    }, [defaultOpt])

    const handleClick = e => {
        e.preventDefault()

        //console.log(e.target.name)
        handleToggle(e.target.name)
        setButtonState(buttonState.map(button => {
            return {
                ...button,
                active: button.name === e.target.name ? true : false,
            }
        }))
    }


    return (
        <div style={{ display: 'flex', width: '100%', }}>
            {buttonState.map(button => (
                    <ButtonSet
                        key={button.name} 
                        name={button.name}
                        active={button.active}
                        onClick={handleClick}
                        size={buttonSize}

                    >   {button.name}
                    </ButtonSet>
            ))}
        </div>
    )
}

OpSwitch.propTypes = {
    optButtons: PropTypes.array, 
    setting: PropTypes.bool,
    defaultOpt: PropTypes.number,
    handleToggle: PropTypes.func,
}

OpSwitch.defaultProps = {
    optButtons: ['Option One', 'Option Two'],
    setting: true,
    defaultOpt: 0,
}
