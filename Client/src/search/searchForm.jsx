import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

export default function SearchForm({getWeather}) {
    const [city, setCity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        getWeather(city);
    }

    return (
        <form onSubmit={handleSubmit}>
            <SearchInput text={city} onChangeQuery={setCity}/>
            <SearchButton>Поиск</SearchButton>
        </form>
        
    )
}