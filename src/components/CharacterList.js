import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      setCharacters(res.data.results)
      console.log(res.data.results)
    })
    .catch(error => {
      console.log("The data was not returned!", error)
    })
  }, []);

  return (
    
    <section className="character-list">
      <Link exact to="/"><button>Home</button></Link>
      <SearchForm />
      {characters.map(item => 
        <CharacterCard key={item.id} name={item.name} species={item.species} origin={item.origin.name} status={item.status} />
      )}
    </section>
  );
}
