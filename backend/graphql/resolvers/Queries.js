const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const Workout               = require('../../models/Workout')
const getUserId             = require('../../helpers/getUserId')
const transformUser         = require('./utils/userTransform')
const transformItem         = require('./utils/itemTransform')


const Query = {
    users: async () => {
        try {
            users = await User.find()

            return users.map(user => transformUser(user))

        } catch(e) {
            console.log(e)
            throw e
        }
    },
    me: async (args, { headers }) => {
        try {
            const userId = getUserId(headers.authorization)

            const user = await User.findById({ _id: userId })
            return transformUser(user)

        } catch(e) {
            console.log(e)
            throw e
        }
    },
    exercises: async () => {
        try {
            exercises = await Exercise.find()
            
            return exercises.map(exercise => transformItem(exercise))
            
        } catch(e) {
            console.log(e)
            throw e
        }
    },
    myExercises: async (args, { headers }) => {
        try {
            const userId = getUserId(headers.authorization)
            
            const exercises = await Exercise.find({ owner: userId })

            return exercises.map(exercise => transformItem(exercise))

        } catch(e) {
            console.log(e)
            throw e
        }
    },
    sets: async (args, { headers }) => {
        const userId = getUserId(headers.authorization)
    },
    workouts: async () => {
        try {
            workouts = await Workout.find()
            
            return workouts.map(workout => transformItem(workout))
        } catch(e) {
            console.log(e)
            throw e
        }
    },
}


module.exports = Query
