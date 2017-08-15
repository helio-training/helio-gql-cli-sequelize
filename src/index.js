import express from 'express'
import bodyParser from 'body-parser'

import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import db from './db'
import schemaDef from './schema.graphqls'

const app = express()
const schema = makeExecutableSchema({
  typeDefs: [schemaDef]
})

app.use('/graphql', bodyParser.json(), graphqlExpress((req) => ({
  schema,
  context: { someFutureAuth: 'someFutureToken' }
})))
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

db
  .authenticate()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server running on port 3000`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
