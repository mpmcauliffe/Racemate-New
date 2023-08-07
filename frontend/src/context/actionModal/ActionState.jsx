import React, { useReducer, } from 'react'

import ActionModalContext from './actionModalContext'
import actionReducer from './actionReducer'
import timeReducer from './timeReducer'
import { defaultState } from './initialState'

import { useApolloClient, } from '@apollo/react-hooks'
import { GET_EXERCISES, GET_EDIT_ID,  GET_IS_SET_LOADED,
    GET_ACTIVE_SET, } from '../../graphql'

import { // ACTION STATE 
    _setNumberOfSets_,  _setWeightSelection_,  _setRange_, 
    _changeToWeightedArray_, _changeToWeightless_, _updateWeightInput_, 
    _optionUpdateRepsCount_, _optionWeightLocal_, _optionWeightGlobal_, 
    _updateDate_, _resetState_, 

    _enhanceState_,

    // TIME STATE
    _setDistanceTrigger_, _addTimeDisItem_, _setTimeOrDis_, _setDistanceTag_, 
    _removeTimeDisItem_, _splitLap_, } from './types'


const ActionModalState = props => {
    /**
     * USE QUERY to pull exercise rules
     * IF NOT rules use defaultState
     */
    const client                = useApolloClient()
    const { editExerciseId }    = client.readQuery({ query: GET_EDIT_ID })
    //const { isSetPreloaded }    = client.readQuery({ query: GET_IS_SET_LOADED }) 

    //const initialState = defaultState
    const [actionState, dispatch] = useReducer(actionReducer, defaultState)
    const [timeState, timeDispatch] = useReducer(timeReducer, defaultState)

        // ENHANCE DEFAULT STATE FROM SERVER
        const enhanceState = setInfo => {
            if (setInfo.usesDistance) {
                timeDispatch({ type: _enhanceState_, payload: setInfo })
            }
            console.log(setInfo)
            dispatch({ type: _enhanceState_, payload: setInfo })
            
            client.writeData({ data: { editExerciseId: '' } })
        }
    
        if (editExerciseId) {
            const allExercises = client.readQuery({ query: GET_EXERCISES })
            const currentExercise = allExercises.myExercises.filter(exercise => exercise.id === editExerciseId && exercise)
            
            if (currentExercise[0].sets.length > 0) {
                // console.log(currentExercise[0].sets[0])
                enhanceState(currentExercise[0].sets[0])
            }
        }

    // NUMBER OF SETS
    const updateSetCount = e => dispatch({ type: _setNumberOfSets_, payload: e.target.value }) 
    
    // CHOICE BETWEEN WEIGHTLESS AND WEIGHTED EXERCISE
    const updateWeightSelection = () => dispatch({ type: _setWeightSelection_, })
    // UPDATE ARRAY TO INCLUDE VALUES FOR WEIGHTED REPS ... 2D ARRAY
    const changeToWeightedArray = () => dispatch({ type: _changeToWeightedArray_ })
    // UPDATE ARRAY FOR WEIGHTLESS REPS ... 1D ARRAY
    const changeToWeightless = () => dispatch({ type: _changeToWeightless_ })

    // NUMBER OF REPS ... IN INDIVIDUAL SETS
    const updateRange = (name, newRepValue) => dispatch({ type: _setRange_, payload: { name, newRepValue } })
    // WEIGHT QUANTITY PER REP
    const updateWeightInput = (name, newWeightValue) => {
        // NAME FORMAT: weightInput_i-j
        const coordYX   = name.split('_')[1].split('-')
        const yCoord    = parseInt(coordYX[0])
        const xCoord    = parseInt(coordYX[1])

        dispatch({ type: _updateWeightInput_, payload: { xCoord, yCoord, newWeightValue } })
    }

    // OPTIONS TO UPDATE SETS AND REPS APPEAR WITHIN INDIVIDUAL SETS WHEN CHANGES ARE DETECTED
    const triggerOptionReps = startingLocation => dispatch({ type: _optionUpdateRepsCount_, payload: startingLocation })
    // UPDATE WEIGHT IN SINGLE SET
    const triggerWeightLocal = startingLocation => dispatch({ type: _optionWeightLocal_, payload: startingLocation })
    // UPDATE WEIGHT IN ALL SETS
    const triggerWeightGlobal = startingLocation => dispatch({ type: _optionWeightGlobal_, payload: startingLocation })
    
    // this is a failsafe for componentWillUnmount()
    // when the modal is closed this will reselt current state to default state
    // THIS IS IN PLACE UNTIL I FIND ANOTHER ALTERNATIVE TO THE PROBLEM
    const triggerReset = () => {
        dispatch({ type: _resetState_ })
        timeDispatch({ type: _resetState_ })
    }

    //** TIME STATE **//
    // UPDATE DATE
    const updateDate = newDate => timeDispatch({ type: _updateDate_, payload: newDate })

    const addTimeDisElement = () => timeDispatch({ type: _addTimeDisItem_ })
    const removeTimeDisElement = () => timeDispatch({ type: _removeTimeDisItem_ })

    const setTimeOrDis = (name, newValue) => timeDispatch({ type: _setTimeOrDis_, payload: { name, newValue } })

    const updateDistanceTrigger = () => timeDispatch({ type: _setDistanceTrigger_ })

    const setDisTag = distanceType => timeDispatch({ type: _setDistanceTag_, payload: distanceType })

    const splitLap = lapTime => timeDispatch({ type: _splitLap_, payload: lapTime })


    return (
        <ActionModalContext.Provider
            value={{ numberOfSets: actionState.numberOfSets,
                repValue: actionState.repValue,
                weightSelection: actionState.weightSelection,
                changeOptionBin: actionState.changeOptionBin,
                baseSets: actionState.baseSets,
                spoolInputArray: actionState.spoolInputArray,
                changeOptionReps: actionState.changeOptionReps,
                changeOptionWeight: actionState.changeOptionWeight,
                currentWeight: actionState.currentWeight,
                defaultWeightOpt: actionState.defaultWeightOpt,

                hoursMinutes: timeState.hoursMinutes,
                manualTime: timeState.manualTime,
                timeDistanceArray: timeState.timeDistanceArray,
                isDistanceExercise: timeState.isDistanceExercise,
                optBtnDistanceUnit: timeState.optBtnDistanceUnit,
                disUnitSelection: timeState.disUnitSelection,
                defaultDistanceOpt: timeState.defaultDistanceOpt,
                defaultDisUnitOpt: timeState.defaultDisUnitOpt,
                timeStrArr: timeState.timeStrArr,
                date: timeState.date,
                
    
                updateSetCount,
                updateWeightSelection,
                updateRange,
                changeToWeightless,
                changeToWeightedArray,
                updateWeightInput,
                triggerOptionReps,
                triggerWeightLocal,
                triggerWeightGlobal,
                triggerReset,

                updateDistanceTrigger,
                addTimeDisElement,
                removeTimeDisElement,
                setTimeOrDis,
                updateDate,
                setDisTag,
                splitLap,
                 }}
        >   {props.children}
        </ActionModalContext.Provider>
    )
}


export default ActionModalState
