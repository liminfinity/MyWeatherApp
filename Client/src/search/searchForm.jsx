import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import styled from "styled-components"

const StyledSearchForm = styled.form`
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    border-radius: ${({theme}) => theme.border.radius};
    display: flex;
    justify-content: center;
    min-width: calc(${({theme}) => theme.index} * 25);
    transition: .5s;
    @media (max-width: 625px) {
        min-width: calc(${({theme}) => theme.index} * 28);
    }
`

export default function SearchForm({getWeather}) {
    const [city, setCity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        getWeather(city);
    }

    return (
        <StyledSearchForm onSubmit={handleSubmit}>
            <SearchInput text={city} onChangeQuery={setCity}/>
            <SearchButton>Поиск</SearchButton>
        </StyledSearchForm>
        
    )
}