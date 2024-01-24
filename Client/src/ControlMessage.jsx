import styled from "styled-components"

const StyledControlMessage = styled.h2`
    min-width: calc(${({theme}) => theme.index} * 23);
    text-align: center;
`

export default function ControlMessage({children}) {
    return (
        <StyledControlMessage>{children}</StyledControlMessage>
    )
}