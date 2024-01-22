const express = require('express')
const axios = require('axios')
const weatherRouter = express.Router()
require('dotenv').config()
const apiWeatherKey = process.env.WEATHER_API_KEY
weatherRouter.route('/')
            .get(async (req, res) => {
                try {
                    if (req.query.city) {
                        const api_response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&lang=ru&appid=${apiWeatherKey}`)
                        const data = api_response.data;
                        const weather_response = {
                            temp: data.main.temp,
                            wind: data.wind.speed,
                            clouds: data.clouds.all,
                            description: data.weather[0].description,
                            weather_img_src: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                            city: data.name

                        }
                        res.status(200).json({data: weather_response})
                    }
                    else {
                        throw new Error()
                    }
                    
                } catch(e) {
                    res.statusMessage = 'Enter an existing city'
                    res.status(404).json({message: "Введите название существующего города"})
                }
                
            })

module.exports = weatherRouter;