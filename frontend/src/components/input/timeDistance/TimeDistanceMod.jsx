import React, { Fragment, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'

import { InternalContainer, RepInput,  UpdateText, ExactContainer, } from '../inputComp'
import { SpoolInput, } from '..'
//import { InfoIcon, } from '../..'

import { extractTimeUnit, } from '../../../helpers'


export const TimeDistanceMod = props => {
    // .V.
    const { hoursMinutes, disUnitSelection, } = useContext(actionModalContext)
    // {F}
    const { setTimeOrDis, } = useContext(actionModalContext)
    // [A] {O}
    const { timeDistanceArray, } = useContext(actionModalContext)

    const handleDisInput = e => console.log(e.target.name, e.target.value)


    return ( 
        <Fragment> 
            {props.comp2 &&
                <InternalContainer>
                    <UpdateText style={{ flexBasis: '50%' }}>Distance</UpdateText>
                    <RepInput 
                        value={props.timeDisUnit.distance.split(' ')[0]}
                        onChange={(e) => setTimeOrDis(e.target.name, e.target.value)}
                        name={`${disUnitSelection}_${props.name}_D`}
                        type='number' 
                        style={{ flexBasis: '50%' }}  />
                </InternalContainer>
            }

            <InternalContainer>
                <ExactContainer>
                    <UpdateText style={{ flexBasis: '20%' }}>Hours</UpdateText>
                    <SpoolInput
                        actualValue={extractTimeUnit(timeDistanceArray[props.name].time, 'hrs')}
                        options={hoursMinutes.slice(0, 9)}
                        updateSelect={(e) => setTimeOrDis(e.target.name, e.target.value)}
                        name={`hrs_${props.name}_T`}
                        style={{ flexBasis: '30%' }}  />
                </ExactContainer>
                
                <ExactContainer>
                    <UpdateText style={{ flexBasis: '20%' }}>Minutes</UpdateText>
                    <SpoolInput
                        actualValue={extractTimeUnit(timeDistanceArray[props.name].time, 'min')}
                        options={hoursMinutes}
                        updateSelect={(e) => setTimeOrDis(e.target.name, e.target.value)}
                        name={`min_${props.name}_T`}
                        style={{ flexBasis: '30%' }} /> 
                </ExactContainer>

                <ExactContainer>
                    <UpdateText style={{ flexBasis: '20%' }}>Seconds</UpdateText>
                    <SpoolInput
                        actualValue={extractTimeUnit(timeDistanceArray[props.name].time, 'sec')}
                        options={hoursMinutes}
                        updateSelect={(e) => setTimeOrDis(e.target.name, e.target.value)}
                        name={`sec_${props.name}_T`}
                        style={{ flexBasis: '30%' }} /> 
                </ExactContainer>
            </InternalContainer>
        </Fragment>
    )
}
