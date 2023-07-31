const getUserId             = require('../../../helpers/getUserId')
const User                  = require('../../../models/User')
const Exercise              = require('../../../models/Exercise')


/* THIS UTILITY IS USED IN EXERCISE QUERY */

// const transformExercise = async item => {
    
//     const ownerInfo = await User.findById({ _id: exercise.owner })

//     return {
//         ...exercise._doc,
//         id: exercise._doc._id.toString(),
//         owner: {
//             _id: ownerInfo._id,
//             name: ownerInfo.name,
//         }, 
//     }
// }
const transformItem = async item => {
    
    const ownerInfo = await User.findById({ _id: item.owner })

    if (item.exercises) {
        const exercises = item.exercises.map(exercise => {
            return Exercise.findById({ _id: exercise.id })
        })

        console.log('object')
        item = {
            ...item,
            exercises,
        }
        console.log(item._doc)
    }

    return {
        ...item._doc,
        id: item._doc._id.toString(),
        owner: {
            _id: ownerInfo._id,
            name: ownerInfo.name,
        }, 
    }
}


module.exports = transformItem
