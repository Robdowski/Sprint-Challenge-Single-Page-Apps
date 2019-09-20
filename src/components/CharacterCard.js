import React from "react";


export default function CharacterCard(props) {
  return (
    <div key={props.key}>
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Origin: {props.origin}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}
