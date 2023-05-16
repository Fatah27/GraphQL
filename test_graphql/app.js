const express = require('express');
const expressGraphQl = require('express-graphql').graphqlHTTP;
const port = 1000;
const app = express();
const schema = require('./schema/schema');

app.use('/graphql', expressGraphQl({
    schema,
    graphiql:true
}))

app.listen(port, () => {
    console.log('listening to port ${port}')
})