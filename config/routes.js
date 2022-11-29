const user = require('../api/user')
const auth = require('../api/auth')
const goal = require('../api/goal')

module.exports = app => {
    app.route('/signup')
        .post(user.saveUser)

    app.post('/signin', auth.signin)

    app.route('/validateToken')
        .post(auth.validateToken)

    app.route('/users')
        .get(user.getUsers)

    app.route('/goals')
        .post(goal.saveGoal)

    app.route('/goals/:id')
        .get(goal.getGoal)
}