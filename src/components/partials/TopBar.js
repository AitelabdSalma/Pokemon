import React from "react";
import { Header } from "antd/lib/layout/layout";

import "./TopBar.css"

const TopBar = () => {

  return (
    <Header>
      <div class="header">
        <a href="#default" class="logo">gg</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </Header>
  )
}


export default TopBar
