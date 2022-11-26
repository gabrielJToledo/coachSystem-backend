const bcrypt = require('bcrypt-nodejs')
const Users = require('../models/userSchema')

const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

const saveUser = async (req, res) => {

    const user = { ...req.body }

    try {
        if (user.password != user.confirmPassword) {
            return console.log('Confirmação de senha inválida!')
        }
    } catch (error) {
        return console.log(error)
    }

    delete user.confirmPassword
    user.password = encryptPassword(user.password)

    console.log(user)

    Users.create(user)

    res.status(200).send(user)
}

const getUsers = async (req, res) => {
    const users = await Users.find()
    res.status(200).send(users)
}

module.exports = { saveUser, getUsers }
