const Joi = require('joi');

const registry = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(15),
        lastName: Joi.string().min(2).max(15),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).max(15).required(),
        passwordConfirm: Joi.ref('password'),
    })
    return schema.validate(data)
}

const login = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().alphanum().min(6).max(15).required()
    })
    return schema.validate(data)
}

module.exports = {
    registry,
    login
}