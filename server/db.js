const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/happy', { useNewUrlParser: true, useUnifiedTopology: true}, 
    err => {
        if (!err) {
            console.log('Succeed to connect DB')
        }else {
            console.log('Error while connecting to DB:' + JSON.stringify(err, undefined, 2))
        }
})