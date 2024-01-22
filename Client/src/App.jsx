import { StrictMode, useState } from "react"
import axios from 'axios'
import SearchForm from "./search/SearchForm"
import WeatherCard from "./WeatherCard"
import ErrorMessage from "./ErrorMessage"
import ControlMessage from "./ControlMessage"
export default function WeatherApp() {
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState(null)
    async function getWeather(city) {
        try {
            const string_query = new URLSearchParams({city})
            const response = await axios(`http://localhost:5000/weather?${string_query}`)
            setWeather(response.data.data)
            setError(null)
        } catch(e) {
            setError({message: "Введите название города"})
            setTimeout(() => {
                setError(null)
            }, 2000)
        }
    }
    return (
        <StrictMode>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            <SearchForm getWeather={getWeather}/>
            <section>
                {weather && <WeatherCard weather={weather}/>}
                {!weather && <ControlMessage>Введите название города</ControlMessage>}
            </section>
            
        </StrictMode>
        
    )
}