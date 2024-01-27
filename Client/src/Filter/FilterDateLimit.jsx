import styled from 'styled-components'

const StyledFilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: calc(${({theme}) => theme.index} / 4);
    font-size: clamp(.8rem, ${({theme}) => theme.index}, 1.2rem);
    text-align: center;

`
const StyledFilterInput = styled.input`
    cursor: pointer;
    appearance: none;
    background: ${({theme}) => theme.range.track};
    border-radius: ${({theme}) => theme.border.radius};
    &::-webkit-slider-thumb {
        appearance: none;
        width: 15px;
        aspect-ratio: 1 / 1;
        background: ${({theme}) => theme.range.thumb};
        border-radius: ${({theme}) => theme.border.radius};
        transition: .5s;
        &:hover {
            background: ${({theme}) => theme.range.thumb_hover};
        }
    }
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