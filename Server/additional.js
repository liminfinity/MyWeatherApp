module.exports.weatherAPIFormat = function (data) {
    const weather_response = {
        id: data.city.id,
        city: data.city.name,
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
        if (weather_response.weather.length === 3) break;
    }
    return weather_response;
}