const orionDI = require('orion-dependency-injection');

module.exports = (app) => {
    const controller = orionDI.getDependency('userController');
    app.get('/users', controller.getUsers.bind(controller))
}
