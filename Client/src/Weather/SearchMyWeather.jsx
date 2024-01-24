import { StyledButton } from "../Styles/ButtonStyle"
import styled from 'styled-components'
const StyledSearchButton = styled(StyledButton)`
    border-radius: ${({theme}) => theme.border.radius};
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`
const StyledSearchWeather = styled.div`
    display: inline-flex;
`

export default function SearchMyWeather({children, getWeather}) {
    return (
        <StyledSearchWeather>
            <StyledSearchButton onClick={getWeather}>{children}</StyledSearchButton>
        </StyledSearchWeather>
    )
}