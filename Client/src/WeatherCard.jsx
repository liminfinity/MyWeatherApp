export default function WeatherCard({weather}) {
    return (
        <div>
            <h2>{weather.city}</h2>
            <img src={weather.weather_img_src}/>
            <ul>
                <li>
                    <span>Описание: </span>
                    <span>{weather.description}</span>
                </li>
                <li>
                    <span>Температура: </span>
                    <span>{weather.temp.toFixed(1) + ' ℃'}</span>
                </li>
                <li>
                    <span>Скорость ветра: </span>
                    <span>{weather.wind.toFixed(1) + ' метр/cек'}</span>
                </li>
                <li>
                    <span>Облачность: </span>
                    <span>{weather.clouds + ' %'}</span>
                </li>
            </ul>
        </div>
    )
}