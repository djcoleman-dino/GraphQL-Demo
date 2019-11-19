const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors')
const mongoose = require('mongoose');

const server = express();
const uri = ('mongodb+srv://billy-test:M%21ss1on6@cluster0-wemo3.mongodb.net/test?retryWrites=true&w=majority')

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to the db');
});

// cors
server.use(cors())

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

server.listen(4000, () => {
    console.log('listening for requests on port 4000');
});
