import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components"
 
const CardContainer = styled.div`
  width:100%;
  margin: 0 auto;
  padding: 0;
`

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(error => {
      console.log("The data was not returned!", error)
    })
  }, []);

  return (
    
    <section className="character-list">
    <CardContainer>
      <SearchBar  characters={characters} />
    </CardContainer>
    </section>
  );
}
