
import React, { Fragment, useEffect, useContext,  } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { SetContainer, InternalContainer, RepInput,  UpdateText, OptionText, } from '../inputComp'
import { SpoolInput, } from '../'
import { Accordion, } from '../..'


export const SetGauge = () => {
    // CONTEXT .V.
    const { numberOfSets, weightSelection, currentWeight, } = useContext(actionModalContext)
    
    // CONTEXT (F)
    const { updateRange, changeToWeightless, updateWeightInput, 
        triggerOptionReps, triggerWeightLocal, triggerWeightGlobal, } = useContext(actionModalContext)

    // CONTEXT [A] {O}
    const { baseSets, spoolInputArray, changeOptionReps, 
        changeOptionWeight, } = useContext(actionModalContext)

    useEffect(() => { changeToWeightless() }, [])

    // console.log(changeOptionReps)
    // updates local rep value
    const handleRangeChange = e => updateRange(e.target.name, e.target.value)
    // updates single weight input
    const updateRep = e => updateWeightInput(e.target.name, e.target.value)
    // updates upcoming reps globally
    const handleOptionRepsClick = e => triggerOptionReps(e.target.getAttribute('name'))
    // updates upcoming weight values locally
    const handleOptLocalClick = e => triggerWeightLocal(e.target.getAttribute('name'))
    // updates upcoming weight values globally
    const handleOptGlobalClick = e => triggerWeightGlobal(e.target.getAttribute('name'))

    console.log(changeOptionReps)
    console.log(changeOptionWeight)

    return (
        <Fragment>
            {numberOfSets && baseSets.map((set, i) => (
                <Accordion 
                    key={i} /* NOT RECOMMENDED KEY - uuid.v4() leads to unpredictable behavior */
                    name={`Set ${i+1}`} 
                    internal>

                    <SetContainer short>
                        <InternalContainer>
                            <UpdateText style={{ marginLeft: '0', flexBasis: '50%' }}>Number of reps</UpdateText>
                            {window.innerWidth > 768 
                                ?   <RepInput 
                                        value={Array.isArray(set) ? set.length : baseSets[i]}
                                        onChange={handleRangeChange}
                                        name={i}
                                        type='number' 
                                        counter
                                        style={{ flexBasis: '50%' }}  />
                                :   <SpoolInput
                                        actualValue={Array.isArray(set) ? set.length : baseSets[i]}
                                        options={spoolInputArray}
                                        updateSelect={handleRangeChange}
                                        name={i.toString()}
                                        counter
                                        style={{ flexBasis: '50%' }}  />
                            }
                            {changeOptionReps[i] &&
                                <OptionText
                                    name={i}
                                    onClick={handleOptionRepsClick}
                                >   Change upcoming sets to {Array.isArray(set) ? set.length : baseSets[i]} reps?
                                </OptionText>  
                            }
                        </InternalContainer>

                        {/***<SpoolInput
                                actualValue={numberOfSets}
                                options={spoolInputArray}
                                updateSelect={updateSetCount}
                                style={{ flexBasis: '50%' }}  /> ***/}
                        {weightSelection &&  <UpdateText 
                                    style={{ flexBasis: '100%', textAlign: 'center' }}>
                                        Weight quantity per rep
                                    </UpdateText> 
                        }
                        {weightSelection && Array.isArray(baseSets[i])
                            ?   (
                                    baseSets[i].map((rep, j) => (  
                                        <RepInput 
                                            key={`${i}-${j}`} 
                                            value={baseSets[i][j]}
                                            onChange={updateRep}
                                            name={`weightInput_${i}-${j}`}
                                            type='number'
                                            step='1' />
                                    ))
                            ) : (null)}
                            
                        {changeOptionWeight[i] &&
                            <InternalContainer style={{ flexDirection: 'column', margin: '1rem auto 2rem auto' }}>
                                <br /><br /><br />
                                <OptionText
                                    weights
                                    name={i}
                                    onClick={handleOptLocalClick}
                                    style={{ marginBottom: '1.3rem', }}
                                >   Tap to change upcoming reps in THIS set to {currentWeight}?
                                </OptionText>
                                <br /><br />
                                <OptionText 
                                    weights
                                    name={i}
                                    onClick={handleOptGlobalClick} 
                                >   Tap to change upcoming reps in ALL sets to {currentWeight}?
                                </OptionText>
                            </InternalContainer>                        
                        }
                    </SetContainer>
                </Accordion>
            ))}
        </Fragment>
    )
}
//`${key}_${i}-${j}`      >> KEY
//`weightInput_${i}-${j}` >> NAME
