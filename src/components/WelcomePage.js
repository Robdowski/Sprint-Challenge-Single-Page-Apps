import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = styled.header`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    margin:0 auto;
  }
`
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
    </section>
  );
}
