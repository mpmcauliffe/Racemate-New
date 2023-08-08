import { useApolloClient, useQuery } from '@apollo/react-hooks'
import { GET_EXERCISES, } from './appRequests'


export const resolvers = {
    Mutation: {
        setExercise: (_, args, { cache, }) => {
            console.log(args)
            const myExercises = cache.readFragment({ myExercises })
            //console.log(myExercises)
        },
        updateSet: (_, args, { cache, }) => {
            const allExercises = cache.readQuery({ query: GET_EXERCISES })

            const currentExercise = allExercises.myExercises.filter(exercise => exercise.id === args.id && exercise)
            
            if (currentExercise[0].sets.length > 0) {
                cache.writeData({ data: { activeSet: currentExercise[0].sets[0] }})
                cache.writeData({ data: { isSetPreloaded: true }})
            }
        },
    }
}
// const resolvers = {
//     Query: {
//       appBarColorSetting: () => userSettings.appBarColorSetting
//     },
//     Mutation: {
//       updateAppBarColorSetting: (_, { setting }) => {
//         userSettings.appBarColorSetting.setting = setting;
//         return userSettings.appBarColorSetting;
//       }
//     }
//   }

