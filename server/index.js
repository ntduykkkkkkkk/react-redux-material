require('./db');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

var app = express();
const port = process.env.PORT || 9001;
app.use(cors())
app.use(express.json())    
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes'));
app.listen(port, () => console.log(`Server started at port ${port}`))