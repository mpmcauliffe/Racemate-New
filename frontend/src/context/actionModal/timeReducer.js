import { buildTimeString, reconstituteObj } from '../../helpers'

import {  _updateDate_, _setDistanceTrigger_, _addTimeDisItem_,
    _setTimeOrDis_, _setDistanceTag_, _removeTimeDisItem_,
    _splitLap_, _enhanceState_, _resetState_, } from './types'

export default (state, action) => {
    let unit
    let unitDistance
    let location
    let updatedValue
    let dim
    let name

    switch(action.type) {
        case _setTimeOrDis_:
            [unit, location, dim] = action.payload.name.split('_')
            updatedValue = action.payload.newValue

            return { //buildTimeString = (timeValue, mod, timeArr)
                ...state,
                timeDistanceArray: [
                    ...state.timeDistanceArray.map((obj, i) => parseInt(location) === i 
                        ? dim === 'T' 
                            ? { ...obj, time: buildTimeString(updatedValue, unit, obj.time) } 
                            : { ...obj, distance: `${updatedValue} ${unit}` }
                        : obj
                )],
            }

        case _splitLap_: 
            location = state.timeDistanceArray.length - 1

            return {
                ...state,
                timeDistanceArray: [
                    ...state.timeDistanceArray.map((obj, i) => location === i
                        ? { ...obj, time: action.payload }
                        : obj
                    )
                ]
            }

        case _addTimeDisItem_:
            return {
                ...state,
                timeDistanceArray: [
                    ...state.timeDistanceArray, 
                    ...Array(1).fill({ 
                        time: state.timeStrArr.join(':'), 
                        distance: '', 
                    })
                ]
            }

        case _removeTimeDisItem_:
            return {
                ...state,
                timeDistanceArray: state.timeDistanceArray.length > 1
                    ? [...state.timeDistanceArray.slice(0, state.timeDistanceArray.length - 1)]
                    : state.timeDistanceArray
            }

        case  _setDistanceTrigger_:
            return {
                ...state,
                isDistanceExercise: !state.isDistanceExercise
            }

        case _setDistanceTag_: 
            return {
                ...state,
                disUnitSelection: action.payload
            }

        case _updateDate_:
            return {
                ...state,
                date: action.payload,
            }

        case _enhanceState_: 
            const { distanceUnit, usesDistance, timeDisUnit } = action.payload
            console.log(distanceUnit)
            console.log(state.optBtnDistanceUnit)
            return {
                ...state,
                distanceUnit,
                usesDistance,
                timeDistanceArray: reconstituteObj(timeDisUnit),
                defaultDistanceOpt: usesDistance ? 1 : 0,
                defaultDisUnitOpt: state.optBtnDistanceUnit.indexOf(distanceUnit),
                isDistanceExercise: usesDistance,
            }    

        case _resetState_:
            return {
                timeDistanceArray: [ ],
                isDistanceExercise: false,
                defaultDistanceOpt: 0,
                disUnitSelection: 'miles',
                defaultDisUnitOpt: 0,
                timeStrArr: ['00','00','00','00'],
                hoursMinutes: [...Array(60)].map((_, i) => i < 1 ? '' : i < 10 ? '0' + i : i),
            }


        default:
            return state
    }
}