import React, { useState, useEffect } from 'react'
import CharacterCard from "./CharacterCard"
import styled from "styled-components"

const SearchCard = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        width: 85%;
        margin: 1vh auto;
    }
`

export default function SearchBar(props) {
    console.log(props.characters)
   const [search, setSearch] = useState("")
   const [searchResults, setSearchResults] = useState([...props.characters])
   useEffect(() => {
   const results = props.characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
   setSearchResults(results)
   },[search])
   const handleChanges = event => {
       event.preventDefault()
       setSearch(event.target.value)
       console.log(searchResults)
   }
   const handleLoad = event => {
       setSearchResults([...props.characters])
       setSearch("")
   } 

    return (
        <SearchCard onLoad={handleLoad}>
            <input type="text" name="search" value={search} onChange={handleChanges}></input>
             <h1>Results</h1>
             <div>
                {searchResults.map(item =>
                <CharacterCard key={item.id} image={item.image} name={item.name} species={item.species} origin={item.origin.name} status={item.status}/>
                )}</div>
        </SearchCard>
    )
}
