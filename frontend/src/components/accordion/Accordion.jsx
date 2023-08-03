import React, { Fragment, useState, } from 'react'
import { AccordionFront, Arrow, } from './AccordionComp'
//import { Link as ScrollLink } from 'react-scroll'


export const Accordion = props => {
    const [showSegment, setShowSegment] = useState(false)

    const handleCheckboxChange = () => setShowSegment(!showSegment)

    
    return (
        <Fragment>
            <AccordionFront
                id={props.name} 
                internal={props.internal}>
                
                <h3>{props.name}</h3>
                <Arrow>                
                    <input 
                        type='checkbox'
                        name='sets'
                        onChange={handleCheckboxChange}  />
                    <span />     
                </Arrow>
                <div className={showSegment ? 'show' : 'hide'}>
                    {props.children}
                </div>
            </AccordionFront>
        </Fragment>
    )
}

/*
<ScrollLink
    to='navHeader' 
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500} >
 */
