import React from "react";

const TopBar = () => {

  return (
    <div>
      top bar
    </div>
  );
};
/*
const HeaderStyled = styled(props => <Layout.Header {...props} />)`
  height: 70px;
  box-shadow: 0 4px 7px -4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-bottom: 1px solid #009498;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9;
  .headerRight {
    display: flex;
    justify-content: flex-end;
    height: 69px;
    .notifications,
    .search {
      width: 70px;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        width: 20px;
        height: 20px;
        background-color: #3591fb;
        border-radius: 26px;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
        display: inline-block;
        line-height: 20px;
        margin-left: -15px;
        margin-top: -19px;
        position: relative;
        z-index: 99;
      }
      img {
        max-width: 25px;
      }
    }
    .search {
      border-right: none;
      i {
        color: rgba(100, 102, 120, 0.4);
        font-size: 25px;
      }
    }

    .ant-dropdown-link {
      padding: 2px 0 2px 50px;
      h6 {
        margin: 0;
        display: inline-block;
        font-size: 13px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;

        border-radius: 50px;
        span {
          color: #000000;
          float: left;
          margin-top: 8px;
        }
        b {
          color: #006d4f;
          text-transform: uppercase;
        }
        img {
          min-width: 45px;
          min-height: 45px;
          width: 45px;
          height: auto;
          border-radius: 50px;
          border: solid 2px #009498;
          margin: 0 15px 0 20px;
        }
      }
      i {
        color: #606060;
      }
    }
  }
`;
*/

export default TopBar
