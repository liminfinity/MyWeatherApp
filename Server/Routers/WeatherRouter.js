const express = require('express')
const axios = require('axios')
const { weatherAPIFormat, getCurrentWeatherURL } = require('../additional')
const weatherRouter = express.Router()

weatherRouter.route('/')
            .get(async (req, res) => {
                try {
                    const url = await getCurrentWeatherURL(req.query);
                    if (!url.searchParams.size) {
                        throw new Error()
                    }
                    let api_response;
                    if (req.query.rand) {
                        api_response = await getRandomWeatherData(req.query, url);
                    } else {
                        api_response = await axios(url.toString());
                    }
                    const data = api_response.data;
                    const dataMyAPI = await weatherAPIFormat(data, url.searchParams.get('cnt'));
                    res.status(200).json({data: dataMyAPI})
                } catch(e) {
                    res.statusMessage = 'Enter an existing city'
                    res.status(404).json({message: "Введите название существующего города"})
                }
                
            })

async function getRandomWeatherData(query, init_url) {
    try {
        const url = init_url ?? await getCurrentWeatherURL(query);
        const api_response = await axios(url.toString());
        if (api_response.data.cod === '200') {
            return api_response
        }
    } catch (e) {
        return await getRandomWeatherData(query);
    }
}
module.exports = weatherRouter;

