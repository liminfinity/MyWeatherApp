const express = require('express')
const axios = require('axios')
const fs = require('fs')
const { weatherAPIFormat } = require('../additional')
require('dotenv').config()
const weatherRouter = express.Router()
const apiWeatherKey = process.env.WEATHER_API_KEY
weatherRouter.route('/')
            .get(async (req, res) => {
                try {
                    let url;
                    if (req.query.city) {
                        url = `https://api.openweathermap.org/data/2.5/forecast?q=${req.query.city}&cnt=20&units=metric&lang=ru&appid=${apiWeatherKey}`
                    }
                    else if (req.query.lat && req.query.lon) {
                        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${req.query.lat}&lon=${req.query.lon}&cnt=20&units=metric&lang=ru&appid=${apiWeatherKey}`
                    }
                    else {
                        throw new Error()
                    }
                    const api_response = await axios(url);
                    const data = api_response.data;
                    const dataMyAPI = weatherAPIFormat(data);
                    res.status(200).json({data: dataMyAPI})
                    
                } catch(e) {
                    res.statusMessage = 'Enter an existing city'
                    res.status(404).json({message: "Введите название существующего города"})
                }
                
            })

module.exports = weatherRouter;