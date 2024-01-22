import styled from "styled-components"

const StyledSearchInput = styled.input`
    min-width: 75%;
    padding: calc(${({theme}) => theme.index} * .5) calc(${({theme}) => theme.index} * .5);
    border: none;
    border-radius: ${({theme}) => theme.border.radius} 0 0 ${({theme}) => theme.border.radius};
    font-family: ${({theme}) => theme.text.fontFamily};
    color: ${({theme}) => theme.text.color};
    font-size: clamp(.8rem, ${({theme}) => theme.index}, 1.2rem);
    outline: none;
`
export default function SearchInput({text, onChangeQuery}) {
    return (
        <StyledSearchInput type="text" value={text} onChange={(e) => onChangeQuery(e.target.value)}/>
    )
}