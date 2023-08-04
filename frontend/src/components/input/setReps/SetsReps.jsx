import React, { useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetGauge } from './SetGauge'
import { RepInput, SetContainer, UpdateText, } from '../inputComp'
import { SpoolInput, } from '../'
import { OpSwitch, } from '../..'


export const SetReps = () => {
    // CONTEXT .V.
    const { numberOfSets, defaultWeightOpt, } = useContext(actionModalContext)

    // CONTEXT (F)
    const { updateSetCount, updateWeightSelection, changeToWeightless, 
        changeToWeightedArray, triggerReset } = useContext(actionModalContext)

    // CONTEXT {O}
    const { changeOptionBin, spoolInputArray, } = useContext(actionModalContext)
    
    useEffect(() => { return () => { triggerReset() }}, [])


    const handleToggleWeights = buttonName => {
        updateWeightSelection()

        if (buttonName === 'yes') {
            changeToWeightedArray()
        } else {
            changeToWeightless()
        }
    }


    return (
            <form>
                <SetContainer>
                    <UpdateText style={{ flexBasis: '50%' }}>How many sets?</UpdateText>
                    {window.innerWidth > 768 
                        ?   <RepInput 
                                value={numberOfSets}
                                onChange={updateSetCount}
                                type='number'
                                step='1' />
                        :   <SpoolInput
                                actualValue={numberOfSets}
                                options={spoolInputArray}
                                updateSelect={updateSetCount}
                                style={{ flexBasis: '50%' }}  />}
                </SetContainer>

                <SetContainer>
                    <UpdateText>Does this exercise require weights?</UpdateText>
                    <OpSwitch 
                        defaultOpt={defaultWeightOpt}
                        optButtons={changeOptionBin}
                        handleToggle={handleToggleWeights} />
                </SetContainer>

                <SetGauge />
            </form>
    )
}
