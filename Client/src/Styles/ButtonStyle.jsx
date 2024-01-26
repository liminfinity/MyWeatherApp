import styled from 'styled-components'

export const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    padding: calc(${({theme}) => theme.index} * .4) calc(${({theme}) => theme.index});
    font-family: ${({theme}) => theme.text.fontFamily};
    color: #FFF;
    font-size: clamp(.8rem, ${({theme}) => theme.index}, 1.2rem);
    background: ${({theme}) => theme.button.background};
    transition: .5s;
    &:hover {
        background: ${({theme}) => theme.button.hover.background};
    }
    &:active {
        transform: translateY(3px);
    }
    &:disabled {
        cursor: not-allowed;
        background: #646b88;
    }
    
` 