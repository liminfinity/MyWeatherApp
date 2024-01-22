const express = require('express')
const weatherRouter = require('./WeatherRouter')

const mainRouter = express.Router()

mainRouter.use('/weather', weatherRouter)

module.exports = mainRouter;