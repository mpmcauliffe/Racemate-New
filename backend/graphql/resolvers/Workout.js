const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const Workout               = require('../../models/Workout')
const getUserId             = require('../../helpers/getUserId')


const workoutResolver = {
    async createWorkout(args, { headers }) {
        const data = args.data
        const userId = getUserId(headers.authorization)
        const exercises = data.exercises.split(' ')

        console.log(exercises)

        const workout = new Workout({
            title: data.title,
            exercises,
            owner: userId,
        })

        try {
            const result = await workout.save()

            return workout

        } catch(e) {
            console.log(e)
            throw e
        }
    },

}


module.exports = workoutResolver
