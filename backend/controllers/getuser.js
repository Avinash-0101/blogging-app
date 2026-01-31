const userSchema = require('../model/user.model')
const getUser = async (req, res) => {
    try {
        const users = await userSchema.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { getUser }