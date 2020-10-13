const mongoose = require('mongoose');

const User = mongoose.model('User', {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: {type: String, required: true},
    createdAt: { type: Date},
    updatedAt: {type: Date}
})

module.exports = { User }