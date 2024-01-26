const {launch} = require('puppeteer');
const {translate} = require('@vitalets/google-translate-api')
require('dotenv').config()
const apiWeatherKey = process.env.WEATHER_API_KEY
module.exports.weatherAPIFormat = async function (data, cntObject) {
    const isRuLang = /[а-яё]/i;
    let city = data.city.name;
    if (!isRuLang.test(city)) {
        city = await translateAPI(city, 'eng', 'ru');
    }
    const weather_response = {
        id: data.city.id,
        city,
        weather: []
    }
    for (const weather_one of data.list) {
        const [date, time] = weather_one.dt_txt.split(' ');
        if (time != '15:00:00') continue;
        const currentDay = new Date();
        // currentDay.setDate(currentDay.getDate() + weather_response.length) - текущую дату увеличиваем на количество уже записанных дней в массив
        currentDay.setDate(currentDay.getDate() + weather_response.weather.length)
        // Берем среднее время дня первых трех полученных дней
        // date.split('-')[2]  (Пример: input - "2024-01-24"; output - 24)
        
        if (Number(date.split('-')[2]) === currentDay.getDate()) {
            weather_response.weather.push({
                id: weather_one.dt,
                temp: weather_one.main.temp,
                wind: weather_one.wind.speed,
                clouds: weather_one.clouds.all,
                description: weather_one.weather[0].description,
                weather_img_src: `https://openweathermap.org/img/wn/${weather_one.weather[0].icon}@2x.png`,
                date: currentDay.toLocaleDateString()
            })
        }
        if (weather_response.weather.length === +cntObject) break;
    }
    return weather_response;
}
async function getRandomCity() {
    const browser = await launch({
        headless: 'new'
    })
    const page = await browser.newPage();
    await page.goto('https://randstuff.ru/city/')
    const city = await page.evaluate(() => {
        return document.querySelector('#city > div.city-name').innerHTML;
    })
    await browser.close();
    return city;
}
module.exports.getCurrentWeatherURL = async (query_string) => {
    const url = new URL('https://api.openweathermap.org/data/2.5/forecast');
    const params = url.searchParams;
    const cnt = query_string.cnt ?? '3';
    if (cnt > 5) {
        return;
    }
    if (query_string.rand) {
        const city = await getRandomCity();
        params.append('q', city);
    }
    else if (query_string.city) {
        params.append('q', query_string.city);
    }
    else if (query_string.lat && query_string.lon) {
        params.append('lat', query_string.lat)
        params.append('lon', query_string.lon)
    }
    else {
        return;
    }
    params.append('units', 'metric');
    params.append('lang', 'ru');
    params.append('cnt', cnt * 7);
    params.append('appid', apiWeatherKey);
    return url;
}

async function translateAPI(text, from, to) {
    const {text: translatedText} = await translate(text, { from: from, to: to});
    return translatedText;
}