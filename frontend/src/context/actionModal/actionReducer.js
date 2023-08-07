import Moment from 'moment'  

import { reconstitute } from '../../helpers'

import { _setNumberOfSets_, _setWeightSelection_,
    _setRange_, _changeToWeightedArray_, _changeToWeightless_, 
    _updateWeightInput_, _optionUpdateRepsCount_,
    _optionWeightLocal_, _optionWeightGlobal_, _resetState_,
    _updateDate_, _enhanceState_, } from './types'


export default (state, action) => {
    switch (action.type) {
        case _setNumberOfSets_:
            return { //[...a, ...[...Array(2)].map(emptySet => { return [...Array(2).fill(8)] })]
                ...state,
                numberOfSets: action.payload,
                changeOptionReps: [...Array(parseInt(action.payload))].map(() => false),
                changeOptionWeight: [...Array(parseInt(action.payload))].map(() => false),
                baseSets: state.weightSelection 
                    ?   (
                            state.baseSets.length > action.payload 
                                ? state.baseSets.slice(0, action.payload)
                                : [
                                    ...state.baseSets, 
                                    ...[...Array(action.payload - state.baseSets.length)]
                                            .map(set => { return [...Array(parseInt(state.repValue)).fill(state.currentWeight)] })
                                ]
                    ) : (
                            state.baseSets.length > action.payload
                                ? state.baseSets.slice(0, action.payload)
                                : [
                                    ...state.baseSets, 
                                    ...Array(action.payload - state.baseSets.length).fill(state.repValue)
                                ]
                        )
            }

        case _setWeightSelection_: 
            return {
                ...state,
                weightSelection: !state.weightSelection,
            }
        
        case _setRange_: 
            const { name, newRepValue } = action.payload

            return {
                ...state,
                repValue: newRepValue,

                changeOptionReps: state.changeOptionReps.map((item, i) => parseInt(name) === i ? true : item),

                baseSets: state.weightSelection
                    ?   (
                            newRepValue > state.baseSets[name].length
                                ? state.baseSets
                                    .map((set, i) => parseInt(name) === i 
                                        ?   [...state.baseSets[parseInt(name)], 
                                                ...Array(parseInt(newRepValue) 
                                                    - state.baseSets[parseInt(name)].length)
                                                .fill(state.currentWeight)] 
                                        :   set
                                    )                       
                                : state.baseSets
                                    .map((set, i) => parseInt(name) === i 
                                        ?   set.slice(0, newRepValue) 
                                        :   set
                                    )                                
                        )  
                    : state.baseSets.map((rep, i) => parseInt(name) === i ? newRepValue : rep)                                                  
            }

        case _updateWeightInput_:
            const { xCoord, yCoord, newWeightValue } = action.payload

            return {
                ...state,
                currentWeight: newWeightValue,

                changeOptionWeight: state.changeOptionWeight.map((item, i) => yCoord === i ? true : item),
                    
                baseSets: [
                    ...state.baseSets.map((set, i) => yCoord === i 
                        ? set.map((rep, j) => xCoord === j ? rep = newWeightValue : rep)
                        : set
                    )
                ]
            }

        case _changeToWeightedArray_:
            return {
                ...state,
                changeOptionReps: [...Array(parseInt(state.numberOfSets))].map(() => false),
                baseSets: [...Array(parseInt(state.numberOfSets))]
                            .map(set => { return [...Array(parseInt(state.repValue)).fill(state.currentWeight)] })
            }
        
        // RUNS ON INITIAL RENDER
        case _changeToWeightless_:
            return {
                ...state,
                changeOptionReps: [...Array(parseInt(state.numberOfSets))].map(() => false),
                changeOptionWeight: [...Array(parseInt(state.numberOfSets))].map(() => false),
                baseSets: [...Array(parseInt(state.numberOfSets)).fill(state.repValue)],    
            }

        case _optionUpdateRepsCount_:
            const location = parseInt(action.payload)

            return {
                ...state,

                changeOptionReps: [...Array(parseInt(state.numberOfSets))].map(() => false),

                baseSets: state.weightSelection
                    ?   (
                            location + 1 === state.baseSets.length 
                                ?   state.baseSets
                                :   state.baseSets[location + 1].length < state.baseSets[location].length 
                                    ?   state.baseSets.map((set, i) => location < i
                                            ?   [...state.baseSets[location], 
                                                    ...Array(parseInt(state.repValue) 
                                                    - state.baseSets[location].length)
                                                .fill(state.currentWeight)]
                                            :   set
                                        )
                                    :   state.baseSets.map((set, i) => location < i
                                            ?   set.slice(0, parseInt(state.repValue))
                                            :   set
                                    )
                        )  
                    : state.baseSets.map((rep, i) => location < i ? state.repValue : rep) 
            }

        case _optionWeightLocal_:
            const setLocation = parseInt(action.payload) 
            const exactLocation = state.baseSets[setLocation].lastIndexOf(state.currentWeight)

            return {
                ...state, 
                changeOptionWeight: [...Array(parseInt(state.numberOfSets))].map(() => false),

                baseSets: [
                    ...state.baseSets.map((set, i) => setLocation === i
                        ?   set.map((rep, j) => exactLocation < j 
                                ?   state.currentWeight
                                :   rep
                            )
                        : set
                    )
                ]
            }

        case _optionWeightGlobal_:
            const globalSetLocation = parseInt(action.payload) 
            const rowLocation = state.baseSets[globalSetLocation].lastIndexOf(state.currentWeight)

            return {
                ...state,
                changeOptionWeight: [...Array(parseInt(state.numberOfSets))].map(() => false),

                baseSets: [
                    ...state.baseSets.map((set, i) => globalSetLocation <= i
                        ?   globalSetLocation === i
                                ?   set.map((rep, j) => rowLocation < j 
                                        ?   state.currentWeight
                                        :   rep
                                    )
                                :   set.map((rep, j) => state.currentWeight)
                        :   set //.map((rep, j) => state.currentWeight)
                    )
                ]
            }

        case _enhanceState_:
            
            const { setUnit, isWeighted } = action.payload
            console.log(action.payload)
            console.log(state.numberOfSets)
            return {
                ...state,
                weightSelection: isWeighted,
                changeOptionReps: [...Array(parseInt((setUnit.match(/:/g) || []).length)+1)].map(() => false),
                changeOptionWeight: [...Array(parseInt((setUnit.match(/:/g) || []).length)+1)].map(() => false),
                numberOfSets: setUnit.length < 1 ? '0' : setUnit.split(':').length,
                baseSets: reconstitute(setUnit),
                defaultWeightOpt: isWeighted ? 1 : 0,
            }
            
        case _resetState_:
            return {
                numberOfSets: '0',
                spoolInputArray: [...Array(51)].map((_, i) => i),
                repValue: '8',
                weightSelection: false,
                changeOptionBin: ['no', 'yes'],
                currentWeight: '10',
                weightSteps: '.5',
                changeOptionReps: [ ],
                changeOptionWeight: [ ],
                baseSets: [ ],

                date: Moment().format('YYYY-MM-D'),
            }


        default:
            return state
    }
}
