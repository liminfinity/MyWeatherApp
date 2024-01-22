import styled from 'styled-components'

const StyledErrorMessage = styled.div`
    padding: calc(${({theme}) => theme.index}) calc(${({theme}) => theme.index});
    border-radius: ${({theme}) => theme.border.radius};

    font-size: clamp(.8rem, ${({theme}) => theme.index}, 1.2rem);
    color: #FFF;

    background: #ff0000a4;
    
`

export default function ErrorMessage({children}) {
    return (
        <StyledErrorMessage>{children}</StyledErrorMessage>
    )
}