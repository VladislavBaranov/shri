const express = require('express');
const router = express.Router();
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

router.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

module.exports = router;
