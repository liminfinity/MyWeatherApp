export default function SearchInput({text, onChangeQuery}) {
    return (
        <input type="text" value={text} onChange={(e) => onChangeQuery(e.target.value)}/>
    )
}