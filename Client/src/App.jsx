import { StrictMode, useState } from "react"
import axios from 'axios'
import SearchForm from "./search/SearchForm"
import WeatherCard from "./WeatherCard"
import ErrorMessage from "./ErrorMessage"
import ControlMessage from "./ControlMessage"
import styled, {createGlobalStyle, ThemeProvider, keyframes, css} from "styled-components"
import "./fonts.css"

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    body {
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
        background-color: #74EBD5;
        background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
        color: ${({theme}) => theme.text.color}
    }
    #root {
        display: flex;
        flex-direction: column;
        gap: calc(${({theme}) => theme.index} * 2);
        padding: calc(${({theme}) => theme.index} * 2);
    }
`

const theme = {
    index: `calc(1vh + 1vw)`,
    text: {
        fontFamily: `'Poppins', sans-serif`,
        color: '#454343'
    },
    border: {
        radius: '12px'
    },
    button: {
        background: '#92A0DD',
        hover: {
            background: '#8594d8',
        }
    }
}
const StyledWeatherCardContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`

const errorOpen = keyframes`
    0% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
    50% {
        transform: translate(-50%, 0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
`
const StyledError = styled.section`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
    min-width: calc(${({theme}) => theme.index} * 15);
    text-align: center;
    ${(props) => props.animation && css`
        animation: ${errorOpen} 2s forwards;
    `}
`
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
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <StrictMode>
                    {error && (
                        <StyledError animation>
                            <ErrorMessage>{error.message}</ErrorMessage>
                        </StyledError>
                    )}
                    <StyledFooter>
                        <SearchForm getWeather={getWeather}/>
                    </StyledFooter>
                    <StyledWeatherCardContainer>
                        {weather && <WeatherCard weather={weather}/>}
                        {!weather && <ControlMessage>Введите название города</ControlMessage>}
                    </StyledWeatherCardContainer>
                </StrictMode>
            </ThemeProvider>
        </>
    )
}