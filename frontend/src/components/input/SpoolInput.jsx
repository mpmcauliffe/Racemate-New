import React from 'react'
import PropTypes from 'prop-types'
import { Spool, } from './inputComp'


/** THIS IS HACKY BUT I NEEDED A SOLUTION FOR NUMERIC INPUTS ON A MOBILE DEVICE */
export const SpoolInput = ({ options, name, actualValue, updateSelect, }) => {
    //console.log(options, name, actualValue, updateSelect,)

    return (
        <Spool
            value={actualValue} 
            onChange={updateSelect}
            name={name} >
            {options.map(inputItem => (
                <option 
                    key={inputItem}
                    value={inputItem}
                >   {inputItem}
                </option>
            ))}
        </Spool>
    )
}

SpoolInput.propTypes = {
    options: PropTypes.array, 
    name: PropTypes.string,
}

SpoolInput.defaultProps = {
    options: ['Option One', 'Option Two'],
    name: 'spoolinput',
}
