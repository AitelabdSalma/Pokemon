import React from "react";
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
      </LogoStyled>
    </div>
  )
}

export const LogoStyled = styled.div`
  width: inherit;
  height: 59px;
  width: 100%;
  margin:  0 auto;
  padding: 5px;
  img {
    max-width: 100%;
    height: 50px;
  }
`;


export default TopBar
