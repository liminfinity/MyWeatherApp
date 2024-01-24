import WeatherCard from "./WeatherCard"
import styled from 'styled-components'

const StyledWeatherContainer = styled.ul`
    
`
export default function WeatherContainer({activeWeather}) {
    
    return (
        <StyledWeatherContainer>
            <WeatherCard key={activeWeather.id} weather={activeWeather}/>
        </StyledWeatherContainer>
    )
}