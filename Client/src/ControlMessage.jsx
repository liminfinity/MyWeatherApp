import styled from "styled-components"

const StyledControlMessage = styled.h2`
    
`

export default function ControlMessage({children}) {
    return (
        <StyledControlMessage>{children}</StyledControlMessage>
    )
}