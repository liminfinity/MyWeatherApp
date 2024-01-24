import styled from "styled-components"
import { useContext } from "react"
import { ErrorContext } from "../Context/ErrorContext"
import { StyledButton } from "../Styles/ButtonStyle"
const StyledSearchButton = styled(StyledButton)`
    min-width: 26%;
    border-radius: 0 ${({theme}) => theme.border.radius} ${({theme}) => theme.border.radius} 0;
    transform: translate(-1px);
    
`

export default function SearchButton({children}) {
    const error = useContext(ErrorContext);
    return (
        <StyledSearchButton type="submit" disabled={Boolean(error)}>{children}</StyledSearchButton>
    )
}