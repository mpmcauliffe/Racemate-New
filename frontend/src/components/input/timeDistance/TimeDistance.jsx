import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'

import { TimeDistanceMod } from './TimeDistanceMod'
import { SetContainer, InternalContainer,
    UpdateText, } from '../inputComp'
import { OpSwitch, InfoIcon, } from '../..'


export const TimeDistance = () => {
    const { changeOptionBin, isDistanceExercise,
        optBtnDistanceUnit, defaultDistanceOpt,
        defaultDisUnitOpt, } = useContext(actionModalContext)

    const { updateDistanceTrigger, addTimeDisElement, 
        setDisTag, removeTimeDisElement, triggerReset, } = useContext(actionModalContext)

    const { timeDistanceArray, } = useContext(actionModalContext)

    useEffect(() => { addTimeDisElement() }, [])

    // console.log(timeDistanceArray)
    const handleToggleDisTag = buttonName => setDisTag(buttonName)

    // console.log(defaultDistanceOpt, defaultDisUnitOpt)

    return (
        <form>
            <SetContainer>
                {timeDistanceArray.length > 0 &&
                    <TimeDistanceMod
                        name='0'
                        comp2={false}  />
                }
            </SetContainer>         
            
            <SetContainer>
                <UpdateText>Do you want to input distance?</UpdateText>
                <OpSwitch 
                    defaultOpt={defaultDistanceOpt}
                    optButtons={changeOptionBin}
                    handleToggle={updateDistanceTrigger} />
            </SetContainer>

                {isDistanceExercise &&
                    <SetContainer style={{ justifyContent: 'space-between' }}>
                        <InternalContainer style={{ flexDirection: 'column' }}>
                            <UpdateText>Select a distance unit</UpdateText>
                            <OpSwitch 
                                defaultOpt={defaultDisUnitOpt}
                                optButtons={optBtnDistanceUnit}
                                handleToggle={handleToggleDisTag} />
                        </InternalContainer>
                        {timeDistanceArray.length > 0 &&
                            timeDistanceArray.map((timeDisUnit, i) => (
                                <TimeDistanceMod
                                    key={i}
                                    timeDisUnit={timeDisUnit}
                                    name={i}
                                    comp2={true}  />
                            ))                        
                        }
                        <InfoIcon
                            onClick={removeTimeDisElement} 
                            className='fas fa-times' 
                            style={{ marginLeft: '5%', fontSize: '5rem' }} />
                        <InfoIcon 
                            onClick={addTimeDisElement}
                            className='fas fa-plus' 
                            style={{ marginRight: '5%', fontSize: '5rem' }} />
                    </SetContainer>
                }
        </form>
    )
}


/**
 * <InternalContainer>
                            <UpdateText style={{ flexBasis: '20%' }}>Hours</UpdateText>
                            <SpoolInput
                                actualValue={extractTimeUnit(timeDistanceArray[0].time, 'hrs')}
                                options={hoursMinutes.slice(0, 9)}
                                updateSelect={(e) => setTimeOrDis(e.target.name, e.target.value)}
                                name='hrs_0_T'
                                style={{ flexBasis: '30%' }}  />
                            

                            <UpdateText style={{ flexBasis: '20%' }}>Minutes</UpdateText>
                            <SpoolInput
                                actualValue={extractTimeUnit(timeDistanceArray[0].time, 'min')}
                                options={hoursMinutes}
                                updateSelect={(e) => setTimeOrDis(e.target.name, e.target.value)}
                                name='min_0_T'
                                style={{ flexBasis: '30%' }} /> 
                        </InternalContainer>    

                        <InternalContainer>
                            <UpdateText style={{ flexBasis: '50%' }}>Distance</UpdateText>
                            <RepInput 
                                value={'0'}
                                //onChange={handleRangeChange}
                                //name={i}
                                type='number' 
                                style={{ flexBasis: '50%' }}  />
                        </InternalContainer>
 */