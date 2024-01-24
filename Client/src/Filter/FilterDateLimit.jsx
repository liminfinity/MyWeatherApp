import styled from 'styled-components'

const StyledFilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: clamp(.8rem, ${({theme}) => theme.index}, 1.2rem);
    text-align: center;

`
const StyledFilterInput = styled.input`
    cursor: pointer;
`
export default function FilterDateLimit(prop) {
    return (
        <li>
            <StyledFilterLabel>
                <span>Количество дней: {prop.value}</span>
                <StyledFilterInput type="range" {...prop}/>
            </StyledFilterLabel>
        </li>
    )
}