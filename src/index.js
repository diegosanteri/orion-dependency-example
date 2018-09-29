const express = require('express');
const orionDI = require('orion-dependency-injection');
const routes = require('./routes');

const app = express();

app.use(orionDI.init('/src/bootstrap/dependencies.json', {routes}));
app.listen(3000, ()=> console.log('Running on port 3000'));