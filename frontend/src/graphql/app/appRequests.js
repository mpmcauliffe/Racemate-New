import { gql, } from 'apollo-boost'


export const GET_ALL_EXERCISES = gql`
    query {
        exercises {
            id
            title
            exerciseType
            description
            sets {
                date
                isWeighted
                usesDistance
                distanceUnit
                setUnit
                timeDisUnit
            }
            owner {
                _id
                name
            }
        }
    }
`

export const GET_EXERCISES = gql`
    query {
        myExercises {
            id
            title
            exerciseType
            description
            sets {
                date
                isWeighted
                usesDistance
                distanceUnit
                setUnit
                timeDisUnit
            }
            owner {
                _id
                name
            }	  	
        }
    }
`

export const UPDATE_CACHE_SET = gql`
    mutation updateSet($id: ID) {
        updateSet(id: $id) @client 
    }
`
//items(search: $search) { foo bar }
export const GET_SINGLE_EXERCISE = gql`
    query getSingleExercise($id: String, $typename: String) {
        myExercises(id: $id, typename: $typename) @client {
            id
        }
    }
    
`
export const GET_TOGGLE_STATUS = gql`
    query GetToggleStatus {
        userSelection @client
    }
`
export const GET_IS_SET_LOADED = gql`
    query getIsSetLoaded {
        isSetPreloaded @client
    }
`
export const GET_ACTIVE_SET = gql`
    query getActiveSet {
        activeSet @client
    }
`
export const GET_EDIT_STATUS = gql`
    query GetModalStatus {
        isModalEdit @client
    }
`
export const GET_EDIT_ID = gql`
    query GetModalStatus {
        editExerciseId @client
    }
`
export const ADD_EXERCISE = gql`
    mutation($title: String!, $exerciseType: String!, $description: String) {
        createExercise(
            data: {
                title: $title,
                exerciseType: $exerciseType,
                description: $description
            }
        ) {
            id
            title
            exerciseType
            description
            sets {
                date
                isWeighted
                usesDistance
                distanceUnit
                setUnit
                timeDisUnit
            }
            owner {
                _id
            }
        }
    }
`
export const EDIT_EXERCISE = gql`
    mutation($title: String, $exerciseType: String, $description: String, $id: String) {
        editExercise (
            data: {
                title: $title
                exerciseType: $exerciseType
                description: $description
                id: $id
            }
        ) {
            title
            exerciseType
            description
            id 
        }
    }
`
export const DELETE_EXERCISE = gql`
    mutation($id: ID!) {
        deleteExercise (id: $id) {
            id
        }
    }
`
export const SET_EXERCISE = gql`
    mutation($data: Exercise!) {
        setExercise(data: $Exercise) {
            Exercise @client
        } 
    } 
`

export const CREATE_SET = gql`
    mutation(
        $exerciseId: String, 
        $date: String, 
        $isWeighted: Boolean, 
        $usesDistance: Boolean, 
        $distanceUnit: String,
        $setUnit: String,
        $timeDisUnit: String
    ) {
        createSet(
            data: {
                exerciseId: $exerciseId,
                date: $date,
                isWeighted: $isWeighted,
                usesDistance: $usesDistance,
                distanceUnit: $distanceUnit,
                setUnit: $setUnit,
                timeDisUnit: $timeDisUnit
            }
        ) {
            date
            isWeighted
            usesDistance
            distanceUnit
            setUnit
            timeDisUnit
        }
    }
`


// const ITEM_DELETE = gql`
//   mutation ItemDelete($id: ID!) {
//     itemDelete(id: $id) {
//       id
//     }
//   }
// `

// export const SUBSCRIBE_TOGGLE_STATUS = gql`
//     subscription {
//         userSelection @client
//     }
// `

// export const IS_LOGGED_IN = gql`
//     query GetIsLoggedIn {
//         isLoggedIn @client
//         #userToken @client
//     }


