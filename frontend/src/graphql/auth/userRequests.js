import { gql, } from 'apollo-boost'


export const REGISTER_USER = gql`
    mutation($name: String!, $email: String!, $password: String!) {
        createUser (
            data: {
                name: $name
                email: $email
                password: $password
            }
        ) {
            token
            error
        }
    }
`

export const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        login (
            data: {
                email: $email,
                password: $password
            }
        ) {
            token
            error
        }
    }
`
export const UPDATE_USER = gql`
    mutation($name: String, $email: String) {
        updateUser (
            data: {
                name: $name,
                email: $email
            }
        ) {
            user {
                name
                email
            }
            message
        }
    }
`
export const UPDATE_USER_PASSWORD = gql`
    mutation($currentPassword: String!, $newPassword: String!) {
        updateUserPassword (
            data: {
                currentPassword: $currentPassword,
                newPassword: $newPassword
            }
        ) {
            message
        }
    }
`
export const IS_LOGGED_IN = gql`
    query GetIsLoggedIn {
        isLoggedIn @client
        #userToken @client
    }
`

export const GET_USER_INFO = gql`
    query {
        me {
            #_id
            name
            email
            # exercises {
            #     id
            #     title
            #     exerciseType
            # }
        }
    }
`

// export const IS_LOGGED_IN = gql`
//     query isUserLoggedIn {
//         UserAuthStatus {
//             userToken @client
//             isLoggedIn @client
//         }
//     }
// ` 

// const { todo } = client.readQuery({
//     query: gql`
//       query ReadTodo {
//         todo(id: 5) {
//           id
//           text
//           completed
//         }
//       }
//     `,
//   });
