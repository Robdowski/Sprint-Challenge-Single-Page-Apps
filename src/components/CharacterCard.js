import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 45%;
  height: 400px;
  background-color: #101357;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fbaf08;
  margin: 1%;

  h2{
    color: #d9d9d9;
    font-size: 1.8rem;
  }
  p{
    color: #d9d9d9;
    font-size: 1.2rem;
  }
`

export default function CharacterCard(props) {
  return (
    <Card id={props.id}>
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Origin: {props.origin}</p>
      <p>Status: {props.status}</p>
    </Card>
  );
}
