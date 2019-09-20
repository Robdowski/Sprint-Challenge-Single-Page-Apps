import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
    display:flex;
    justify-content: space-around;
`

export default function Nav() {
    return (
        <NavBar>
            <Link exact to="/">Home</Link>
            <Link exact to="/characters">Characters</Link>
            <Link exact to="/">Episodes</Link>
            <Link exact to="/">Locations</Link>
        </NavBar>
    )
}
