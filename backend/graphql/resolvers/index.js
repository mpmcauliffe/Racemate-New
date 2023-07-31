const queries       = require('./Queries')
const users         = require('./Users')
const exercises     = require('./Exercises')
const sets          = require('./Set')
const workouts      = require('./Workout')


const rootResolver = {
    ...queries,
    ...users,
    ...exercises,
    ...sets,
    ...workouts,
}


module.exports = rootResolver
