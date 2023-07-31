const { buildSchema }       = require('graphql')
const requireGraphQLFile    = require('require-graphql-file')
const typeDefs              = requireGraphQLFile('./schema.graphql')


module.exports = buildSchema(typeDefs)
