import React from 'react'
import ModalFormContext from './modalFormContext'

import { useApolloClient, useMutation, } from '@apollo/react-hooks'
import { ADD_EXERCISE, GET_EXERCISES, EDIT_EXERCISE, 
    DELETE_EXERCISE, } from '../../graphql'


const ModalFormState = props => {
    const [addExercise]                 = useMutation(ADD_EXERCISE) 
    const [reviseExercise]              = useMutation(EDIT_EXERCISE) 
    const [removeExercise]              = useMutation(DELETE_EXERCISE) 
    const client                        = useApolloClient()

    client.writeData({ data: { isModalEdit: false } })
    client.writeData({ data: { editExerciseId: '' } })


    const submitExercise = async (formData) => {
        try {
            const res = await addExercise({
                variables: {
                    title: formData.title,
                    exerciseType: formData.exerciseType,
                    description: formData.description,
                },
                update: async (cache, mutationResult) => {
                    const update = mutationResult.data.createExercise
                    console.log(update)
                    const exercises = await cache.readQuery({ query: GET_EXERCISES })

                    const newExercise = {
                        ...update,
                        __typename: 'Exercise'
                    }
                    client.writeData({ data: { myExercises: [...exercises.myExercises, ...[newExercise]], } })
                }
            })
            // e = [...z, ...[c]] | where z is an array & c is not an array
            return res

        } catch (e) {
            console.log(e)
            return null
        }
    }

    const editExercise = async (formData) => {

        try {
            const res = await reviseExercise({
                variables: {
                    title: formData.title,
                    exerciseType: formData.exerciseType,
                    description: formData.description,
                    id: formData.id
                },
                //update: async (cache, mutationResult) => { }
            })

            return res
            
        } catch (e) {
            console.log(e)
            return null
        }
    }

    const deleteExercise = async (id) => {
        try {
            const res = await removeExercise({
                variables: {
                    id
                },
                update: async (cache, mutationResult) => {
                    const update = mutationResult.data.deleteExercise
                    const exercises = await cache.readQuery({ query: GET_EXERCISES })
                    const allExercises = exercises.myExercises.filter(exercise => exercise.id !== update.id) 
                    
                    client.writeData({ data: { myExercises: allExercises, } })
                }
            })
            
            return res

        } catch (e) {
            console.log(e)
            return null
        }
    }

    const toggleEditOn = () =>  client.writeData({ data: { isModalEdit: true } })    
    const toggleEditOff = () =>  client.writeData({ data: { isModalEdit: false } })    

    const setEditExerciseId = id => client.writeData({ data: { editExerciseId: id } })
    const clearEditExerciseId = () => client.writeData({ data: { editExerciseId: '' } })


    return (
        <ModalFormContext.Provider
            value={{ submitExercise, 
                editExercise,
                deleteExercise,
                toggleEditOn,
                toggleEditOff,
                setEditExerciseId,
                clearEditExerciseId, }}

        >   {props.children}
        </ModalFormContext.Provider>
    )
}


export default ModalFormState
