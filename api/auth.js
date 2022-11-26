const authSecret = process.env.AUTH_SECRET
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const User = require('../models/userSchema')

const signin = async (req, res) => {

    const currentUser = await User.find({ email: req.body.email })

    if (!currentUser[0]) return res.status(400).send('Usuário não encontrado!')

    const passwordIsMatch = bcrypt.compareSync(req.body.password, currentUser[0].password)

    if (!passwordIsMatch) {
        return res.status(401).send('E-mail / Senha inválidos!')
    }

    const dateNow = Math.floor(Date.now() / 1000)

    const payload = {
        id: currentUser[0].id,
        name: currentUser[0].name,
        email: currentUser[0].email,
        admin: currentUser[0].admin,
        iat: dateNow,
        exp: dateNow + (60 * 60 * 24 * 5)
    }

    return res.json({
        ...payload,
        token: jwt.encode(payload, authSecret),
    })
}

const validateToken = async (req, res) => {
    const userData = req.body || null

    try {
        if (userData) {
            const token = jwt.decode(userData.token, authSecret)

            if (new Date(token.exp * 1000) > new Date()) {
                return res.send(true)
            }
        }
    } catch (error) {
        return console.log('Token expirado')
    }

    res.send(false)
}

module.exports = { signin, validateToken }