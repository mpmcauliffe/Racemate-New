const getUserId             = require('../../../helpers/getUserId')
const User                  = require('../../../models/User')
const Exercise              = require('../../../models/Exercise')


/* THIS UTILITY IS USED IN USER QUERY */

const transformUser = async user => {
    const userExercises = await Exercise.find({ owner: user._id })

    return {
        ...user._doc,
        _id: user._doc._id.toString(),
        password: null,
        exercises: userExercises,
    }
}


module.exports = transformUser
