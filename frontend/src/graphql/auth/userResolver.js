import { InMemoryCache } from 'apollo-cache-inmemory'
import { gql, } from 'apollo-boost'


const cache = new InMemoryCache()

export const userResolver = {
    Query: {
        isUserLoggedIn: () 
    }
}
