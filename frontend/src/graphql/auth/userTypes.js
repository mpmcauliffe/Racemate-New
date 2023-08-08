import { gql, } from 'apollo-boost'

export const userTypes = gql`
    extend type Query {
        isUserLoggedIn: UserAuthStatus!
    }
    extend type Mutation {
        #login(data: SendUserInfo!): LoginPayload!
        logout(data: UserAuthStatus): UserAuthStatus! 
    }

    type UserAuthStatus {
        isLoggedIn: Boolean!
    }
    type SendUserInfo {
        email: String!
        password: String!
        name: String
    }
    # type LoginPayload {
    #     #token: String!
    # }
`
