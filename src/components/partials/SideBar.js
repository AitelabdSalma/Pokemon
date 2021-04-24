import React from "react";
import styled from "styled-components"

const SideBar = () => {
  return (
    <SideBarStyle >
      hii
    </SideBarStyle>
  );
};



const SideBarStyle = styled.div`
  box-shadow: 4px 0 7px -4px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  background: #fff;
  width: 255px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  &.collapsed {
    width: 80px;
    .topHeader {
      padding: 0;
      .menu {
        position: absolute;
        right: -50px;
        top: calc(50% - 10px);
      }
    }
  }
  .topHeader {
    text-align: center;
    height: 70px;
    border-bottom: solid 1px #f3f3f3;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 19px;
    position: relative;
    .menu {
      float: left;
      width: 24px;
      img {
        max-width: 24px;
      }
    }
  }
`;




export default SideBar
