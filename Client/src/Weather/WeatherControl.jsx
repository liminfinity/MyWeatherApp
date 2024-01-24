import { useEffect, useState } from "react"
import CarouselNavigation from "../CarouselNavigation"
import WeatherContainer from "./WeatherContainer"
import styled from 'styled-components'

const StyledWeatherControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(${({theme}) => theme.index} * 2);
    justify-content: center;
    align-items: center;

    min-width: calc(${({theme}) => theme.index} * 23);

`

export default function WeatherControl({weather_data}) {
    const weatherArray = weather_data.weather;
    const [activeWeatherIndex, setActiveWeatherIndex] = useState(0);
    if (weatherArray.length < activeWeatherIndex) {
        setActiveWeatherIndex(0)
    }
    const activeWeather = weatherArray[activeWeatherIndex];
    function handlePrev(e) {
        if (activeWeatherIndex === 0) {
            setActiveWeatherIndex(weatherArray.length - 1)
        }
        else {
            setActiveWeatherIndex(activeWeatherIndex - 1)
        }
        
    }
    function handleNext(e) {
        if (activeWeatherIndex === weatherArray.length - 1) {
            setActiveWeatherIndex(0)
        }
        else {
            setActiveWeatherIndex(activeWeatherIndex + 1)
        }
    }
    return (
        <StyledWeatherControl>
            <h2>{weather_data.city}</h2>
            <WeatherContainer activeWeather={activeWeather}></WeatherContainer>
            {weatherArray.length > 1 && <CarouselNavigation onPrev={handlePrev} onNext={handleNext}/>}
        </StyledWeatherControl>
    )
}