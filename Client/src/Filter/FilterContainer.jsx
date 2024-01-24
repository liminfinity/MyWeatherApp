import FilterDateLimit from "./FilterDateLimit";
import styled from 'styled-components'

const StyledFilterNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(${({theme}) => theme.index} / 2);
    background: ${({theme}) => theme.filter.background};
    min-width: calc(${({theme}) => theme.index} * 11);
    font-size: clamp(1rem, ${({theme}) => theme.index}, 1.2rem);
    border-radius: 20px;
    padding: calc(${({theme}) => theme.index} * 1.3) calc(${({theme}) => theme.index} / 1.3);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    float: right;
`
const StyledFilterContainer = styled.nav`
    list-style: none;
`
const StyledFilterTitle = styled.h3`
    color: #FFF;
    font-weight: normal;
`

export default function FilterContainer({dateLimit, setDateLimit}) {
    
    function handleChangeDateLimit(e) {
        setDateLimit(e.target.value)
    }
    return (
        <StyledFilterNav>
            <StyledFilterTitle>Фильтры</StyledFilterTitle>
            <StyledFilterContainer>
                <FilterDateLimit min={1} max={5} onChange={handleChangeDateLimit} value={dateLimit}></FilterDateLimit>
            </StyledFilterContainer>
        </StyledFilterNav>
    )
}