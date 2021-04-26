import React from "react";
import { Link } from "react-router-dom";
import { images } from "./_resources";
import "./TopBar.css"
import styled from "styled-components";

const TopBar = () => {

  return (
    <div class="header">
      <LogoStyled>
        <a href="/" class="logo">
          <img src={images.iconMenu} alt="" />
        </a>
        <div class="header-right">
          <Link to="/">Home</Link>
        </div>
      </LogoStyled>


    </div>
  )
}

export const LogoStyled = styled.div`
  width: inherit;
  height: 59px;
  width: 100%;
  margin: auto;
  padding: 5px;
  img {
    max-width: 100%;
    height: 50px;
  }
`;


export default TopBar
