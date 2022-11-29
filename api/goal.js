const Goal = require('../models/goalsSchema')

const saveGoal = async (req, res) => {
    const goal = { ...req.body }

    Goal.create(goal)

    res.status(200).send(goal)
}

const getGoal = async (req, res) => {
    const currentGoal = await Goal.find({ email: req.params.id })
    res.status(200).send(currentGoal)
}

module.exports = { saveGoal, getGoal }