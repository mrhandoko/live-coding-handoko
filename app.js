var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Culinary')
mongoose.Promise = global.Promise

var index = require('./routes/index')
var restaurants = require('./routes/restaurant')
var foods = require('./routes/food')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)
app.use('/restaurant', restaurants)
app.use('/food', foods)

module.exports = app
