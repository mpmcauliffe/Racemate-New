const User                  = require('../../models/User')
const Exercise              = require('../../models/Exercise')
const SetSchema             = require('../../models/SetSchema')                   
const getUserId             = require('../../helpers/getUserId')


const setResolver = {
    async createSet(args, { headers }) {
        //console.log(args.data)
        const userId = getUserId(headers.authorization)
        const { exerciseId, date, isWeighted, usesDistance, distanceUnit, setUnit, timeDisUnit } = args.data

        let exercise = await Exercise.findById({ _id: exerciseId, })
        if (!exercise || exercise.owner.toString() !== userId) {
            throw new Error('Sets cannot be added to exercise!')
        }

        const set = {
            date,
            isWeighted,
            usesDistance,
            distanceUnit,
            setUnit,
            timeDisUnit,
        }
        let { sets } = exercise
        sets.unshift(set)
        //console.log(exercise)

        exercise = await Exercise.findByIdAndUpdate(
            exerciseId,
            { $set: { sets } },
            { new: true }
        )

        return set
    },
}


module.exports = setResolver
