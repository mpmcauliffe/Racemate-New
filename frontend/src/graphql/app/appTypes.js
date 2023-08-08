import { gql } from 'apollo-boost'


export const appTypes = gql`
    type Query {
        getSingleExercise(id: String!): Exercise
    }
    type Exercise {
        id: String!
        title: String!
        exerciseType: String!
        description: String
    }
`
// extend type Query {
//         isUserLoggedIn: UserAuthStatus!
//     }
//     extend type Mutation {
//         #login(data: SendUserInfo!): LoginPayload!
//         logout(data: UserAuthStatus): UserAuthStatus! 
//     }

//     type UserAuthStatus {
//         isLoggedIn: Boolean!
