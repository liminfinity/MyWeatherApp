import styled, {css} from 'styled-components'

const StyledWeatherCard = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-areas: 'name name'
                          'image info';
    gap: calc(${({theme}) => theme.index} / 2) calc(${({theme}) => theme.index} * 2);
    font-family: ${({theme}) => theme.text.fontFamily};
    color: ${({theme}) => theme.text.color};
    font-size: clamp(1rem, ${({theme}) => theme.index}, 1.2rem);
    border-radius: 20px;
    padding: calc(${({theme}) => theme.index} * 1.3) calc(${({theme}) => theme.index} / 1.3);
    min-width: calc(${({theme}) => theme.index} * 23);
    transition: .5s;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 625px) {
        min-width: calc(${({theme}) => theme.index} * 26);
    }
    ${props => props.glass && css`
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        
    `}
`

const StyledTitle = styled.h2`
    grid-area: name;
    text-indent: 40px;
`
const StyledImg = styled.img`
    grid-area: image;
`
const StyledInfo = styled.ul`
    grid-area: info;
    list-style: none;
`

export default function WeatherCard({weather}) {
    return (
        <StyledWeatherCard glass>
            <StyledTitle>{weather.city}</StyledTitle>
            <StyledImg src={weather.weather_img_src}/>
            <StyledInfo>
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
            </StyledInfo>
        </StyledWeatherCard>
    )
}