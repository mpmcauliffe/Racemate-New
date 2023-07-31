const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const getUserId             = require('../../helpers/getUserId')


const exerciseResolver = {
    async createExercise(args, { headers }) {
        //console.log(args.data)
        const userId = getUserId(headers.authorization)
        const { title, exerciseType, description, sets, notes, } = args.data
        
        const exercise = new Exercise({
            title,
            exerciseType,
            description,
            sets: [],
            owner: userId,
        })
        //console.log(exercise)

        let createdExercise
        try {
            const result = await exercise.save()
            const owner = await User.findById(userId)
            
            if (!owner) {
                throw new Error('User not found!')
            }
            
            owner.exercises.push(exercise)
            await owner.save()

            return exercise

        } catch(e) {
            console.log(e)
            throw e
        }
    },
    async editExercise(args, { headers }) {
        const userId = getUserId(headers.authorization)

        const { title, exerciseType, description, id } = args.data
        const updatedFields = { }

        if (title) updatedFields.title               = title
        if (exerciseType) updatedFields.exerciseType = exerciseType
        if (description) updatedFields.description   = description
        if (id) updatedFields.id                     = id

        try {
            let user = await User.findById(userId)

            if (!user) {
                return { message: 'User not found' }
            }

            exercise = await Exercise.findByIdAndUpdate(
                updatedFields.id,
                { $set: updatedFields },
                { new: true }
            )
            console.log(exercise)
            const { title, exerciseType, description, id } = exercise

            return {  title, exerciseType, description, id }

        } catch (e) {
            console.log(e)
        }
    },
    async deleteExercise(args, { headers }) {
        const deletedExercise = await Exercise.findByIdAndDelete(args.id)

        console.log(deletedExercise)

        const { title, exerciseType, description, id } = deletedExercise

        return { title, exerciseType, description, id }
    },
}


module.exports = exerciseResolver
