const user = require('../api/user')
const auth = require('../api/auth')

module.exports = app => {
    app.route('/signup')
        .post(user.saveUser)

    app.post('/signin', auth.signin)

    app.route('/validateToken')
        .post(auth.validateToken)

    app.route('/users')
        .get(user.getUsers)
}