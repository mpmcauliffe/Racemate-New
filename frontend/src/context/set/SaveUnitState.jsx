import React, { useContext, } from 'react'
import SaveUnitContext from './saveUnitContext'

import ActionModalContext from '../actionModal/actionModalContext'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'
import { CREATE_SET, GET_EXERCISES, GET_SINGLE_EXERCISE, GET_EDIT_ID } from '../../graphql'


const SaveUnitState = props => {

    const { date, weightSelection, isDistanceExercise, 
        disUnitSelection, baseSets, timeDistanceArray,
        timeStrArr, numberOfSets } = useContext(ActionModalContext)

    const [createSet] = useMutation(CREATE_SET)

    
    const hardSave = async (exerciseId) => {
    
        const setUnit = numberOfSets === '0' 
            ? '' 
            : baseSets.join(':')
        const timeDisUnit = timeDistanceArray[0].time === timeStrArr.join(':') && timeDistanceArray[0].distance === ''
            ? ''
            : timeDistanceArray.map(item => Object.keys(item).map(key => [key, item[key]])).join(':')

        
        const res = await createSet({
            variables: {
                exerciseId, 
                date,
                setUnit, 
                timeDisUnit,
                isWeighted: weightSelection, 
                usesDistance: isDistanceExercise, 
                distanceUnit: disUnitSelection, 
            },
            update: async (cache, mutationResult) => {
                const newSet = mutationResult.data.createSet
                const allExercises = cache.readQuery({ query: GET_EXERCISES })

                const singleUpdate = allExercises.myExercises.map((exercise, i) => exerciseId === exercise.id 
                    ? { ...exercise, sets: [newSet, ...exercise.sets] } 
                    : exercise
                )

                // console.log(singleUpdate)
                cache.writeData({ data: { myExercises: [...singleUpdate], } })
            }
        })
    }

    return (
        <SaveUnitContext.Provider
            value={{
                hardSave,
                }}
        >   {props.children}
        </SaveUnitContext.Provider>
    )
}


export default SaveUnitState

// 7,625,597,484,987
// TRANSFORMING SET, REPS, WEIGHTS

// TRANSFORMING TIME / DISTANCE
// PREPARING baseSets FOR STORAGE
// given 2d or 1d array
// x = ["8", "8", "8", "8"] 
// y = [[1,2],[3,4],[5,6],[7,8]]

// join at (':')
// a = x.join(':')       >>     "8:8:8:8"
// b = y.join(':')       >>     "1,2:3,4:5,6:7,8"

// reconstitute with split at (':')
// c = a.split(':')      >>     ["8", "8", "8", "8"]
// d = b.split(':')      >>     ["1,2", "3,4", "5,6", "7,8"]

// FOR 2D
// f = d.map(item => [item])        >>         [[1,2],[3,4],[5,6],[7,8]]

// FOR 2D reconstitute again
// g = f.map(item => item[0].split(','))        >>      [[1,2],[3,4],[5,6],[7,8]]


// PREPARING timeDistanceArray FOR STORAGE 
// given array of objects
// x = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }] 

// create 2d array with
// y = x.map((item, i) => Object.keys(item).map(key => [key, item[key]]))
// RETURNS [["x", 1], ["y", 2] ...]

// join array by ':'
// z = y.join(':')
// RETURNS "x,1,y,2:x,3,y,4:x,5,y,6"    << TO GQL SERVER >>

// FOR CLIENT
// split string on ':'
// a = z.split(':')
// RETURNS ["x,1,y,2", "x,3,y,4", "x,5,y,6"]

// rebuild object literals
// b = a.map((unit, i) => ({ x: unit[2], y: unit[6] }))
// RETURNS [{x: "1", y: "2"}, {x: "3", y: "4"}, {x: "5", y: "6"}]    
