const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: './config/config.env' });
require('./config/db');

const coffeeMachine = require('./routes/coffeeMachine');
const coffeePod = require('./routes/coffeePod');

app.use(express.json());

app.use('/api/coffee-machine', coffeeMachine);
app.use('/api/coffee-pod', coffeePod);

app.use('*', (req, res, next) => {
    return res.status(404).send({ message: 'Invalid route' });
});

app.listen(process.env.PORT, () => console.log('Server is running...'));
