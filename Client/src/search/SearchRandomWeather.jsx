import { useContext } from "react"
import { StyledButton } from "../Styles/ButtonStyle"
import styled from 'styled-components'
import { ErrorContext } from "../Context/ErrorContext"

const StyledSearchButton = styled(StyledButton)`
    border-radius: ${({theme}) => theme.border.radius};
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    &:active {
        box-shadow: 0 6px 32px 0 rgba(0, 0, 0, 0.37);
    }
`
const StyledSearchWeather = styled.div`
    display: inline-flex;
`

export default function SearchRandomWeather({children, getWeather}) {
    const error = useContext(ErrorContext)
    return (
        <StyledSearchWeather>
            <StyledSearchButton onClick={getWeather} disabled={Boolean(error)}>{children}</StyledSearchButton>
        </StyledSearchWeather>
    )
}