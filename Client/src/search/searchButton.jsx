import styled from "styled-components"

const StyledSearchButton = styled.button`
    min-width: 26%;
    border-radius: 0 ${({theme}) => theme.border.radius} ${({theme}) => theme.border.radius} 0;
    border: none;
    transform: translate(-1px);
    padding: calc(${({theme}) => theme.index} * .4) calc(${({theme}) => theme.index});
    font-family: ${({theme}) => theme.text.fontFamily};
    color: #FFF;
    font-size: clamp(.8rem, ${({theme}) => theme.index}, 1.2rem);
    background: ${({theme}) => theme.button.background};
    transition: .5s;
    &:hover {
        background: ${({theme}) => theme.button.hover.background};
    }
    cursor: pointer;
`

export default function SearchButton({children}) {
    return (
        <StyledSearchButton type="submit">{children}</StyledSearchButton>
    )
}