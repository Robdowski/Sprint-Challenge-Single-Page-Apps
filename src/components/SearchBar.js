import React, { useState } from 'react'

export default function SearchBar(props) {
    console.log(props)
   const [search, setSearch] = useState("")
   const [results, setResults] = useState([])
   const handleChanges = event => {
       event.preventDefault();
       setSearch(event.target.value)
       setResults([...results, ])
   } 
    return (
        <div>
            
        </div>
    )
}
