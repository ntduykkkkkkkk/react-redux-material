const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');
const validator = require('./validator');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const create = async (req, res) => {
    try {
        const { error } = validator.registry(req.body)
        const isExisting = await User.findOne({ email: req.body.email })
        if (error) {
            return res.send({"error": error.details[0].message})
        }
        if (isExisting) {
            return res.status(401).send("Email already exists")
        }
        const salt = await bcrypt.genSalt(10)
        const passwordHashed = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: passwordHashed,
            confirmPassword: passwordHashed,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        })
        const result = await newUser.save();
        return res.status(200).json({
            ...result._doc
        })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const get = async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send({error: 'Not found'})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send({error: 'Not found'})
        }
        user.delete()
        return res.status(200).send({message: 'User has been deleted'})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).send({error: 'Not found'})
        }
        const newUser = await User.findByIdAndUpdate(user._id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            confirmPassword: req.body.password,
            updatedAt: new Date().toISOString()
        }, {new: true})
        return res.status(200).send(newUser)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { error } = validator.login(req.body)
        if (error) {
            return res.send({"error": error.details[0].message})
        }
        const isUserExist = await User.findOne({ email: req.body.email })
        if (!isUserExist) {
            return res.status(404).send({error: 'Invalid account'})
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, isUserExist.password)
        if (!isPasswordCorrect) {
            return res.status(404).send({error: 'Invalid account'})
        }
        const token = jwt.sign({ _id: isUserExist._id, email: isUserExist.email}, process.env.SECRET_KET, {expiresIn: '1h'})
        return res.header('Bearer', token).send({
            ...isUserExist._doc,
            token
        })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    deleteOne,
    getOne,
    get,
    create,
    update,
    login
}