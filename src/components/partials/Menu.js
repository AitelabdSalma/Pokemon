import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

import { images } from "./_resources";

export default ({ collapsed, handleCloseMenu }) => {
  const { SubMenu, Item } = Menu;
  const [authority, setAuthority] = useState(null);
  useEffect(() => {
    localStorage.getItem("authority")
      ? setAuthority(JSON.parse(localStorage.getItem("authority")))
      : setAuthority(null);
  }, []);

  const menuCreate =
    authority && authority.find(item => item.authority === "CreatTiers")
      ? {
          name: "Nouveau Tiers",
          icon: images.iconNewPM,
          path: "/new/tiers"
        }
      : null;

  const menuSearch =
    authority && authority.find(item => item.authority === "RechTiers")
      ? {
          name: "Reherche Tiers/Prospect",
          icon: images.iconSearchTiers,
          path: "/tiers/search"
        }
      : null;

  const menuConformite =
    authority &&
    authority.find(
      item =>
        item.authority === "RetourCriblage" ||
        item.authority === "RejetCriblage"
    )
      ? {
          name: "Contrôle Conformité",
          icon: images.iconControl,
          path: "/tiers/controleConformite"
        }
      : null;

  const menuItems = [
    {
      name: "Dashboard",
      icon: images.iconDashboard,
      path: "/dashboard/actions"
    },
    {
      name: "Gestion Clientèle",
      icon: images.iconGestionClientele,
      path: "/",
      subMenu: [menuCreate, menuSearch]
    },
    {
      name: "Todo List",
      icon: images.iconTodoList,
      path: "/dashboard/actions"
    },
    {
      name: "Contrôle tiers / Contrôle compte",
      icon: images.iconControl,
      path: "/"
    },
    menuConformite,
    { name: "Aide", icon: images.iconHelp, path: "/" }
  ];

  return (
    <MenuCSS
      mode="inline"
      inlineCollapsed={collapsed}
      style={{ border: "none" }}
      inlineIndent={10}
    >
      {menuItems.map((item, index) => {
        if (item) {
          if (item.subMenu) {
            return (
              <SubMenu
                key="sub1"
                title={
                  <>
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
                  </>
                }
              >
                {item.subMenu &&
                  item.subMenu.map((subItem, index) => {
                    if (subItem) {
                      return (
                        <Item
                          key={`submenu${index}`}
                          style={{ paddingLeft: 30 }}
                        >
                          <NavLink
                            to={subItem.path}
                            onClick={() => handleCloseMenu()}
                          >
                            <img src={subItem.icon} alt={subItem.name} />
                            <span>{subItem.name}</span>
                          </NavLink>
                        </Item>
                      );
                    } else {
                      return <></>;
                    }
                  })}
              </SubMenu>
            );
          } else {
            return (
              <Item key={index} style={{ paddingRight: 0 }}>
                <NavLink to={item.path}>
                  <img src={item.icon} alt={item.name} />
                  <span>{item.name}</span>
                </NavLink>
              </Item>
            );
          }
        } else {
          return <></>;
        }
      })}
    </MenuCSS>
  );
};
const MenuCSS = styled(props => <Menu {...props} />)`
  position: relative;
  li {
    margin: 0 !important;
    border-bottom: 1px solid #f3f3f3;

    ul {
      li {
        padding-left: 30px !important;
        background: #f0f4f7;
        border-bottom: solid 1px #ececec;
        .ant-menu-submenu-title {
          padding: 0 !important;
        }
        ul {
          position: absolute;
          top: 0;
          bottom: 0;
          min-height: calc(100vh - 70px);
          left: 100%;
          background: #f0f4f7 !important;
          z-index: 9;
          padding: 80px 23px 20px 18px !important;
          li {
            border-bottom: none;
            padding-left: 20px !important;
            height: 50px !important;
            line-height: 50px !important;
            border-bottom-right-radius: 13px;
            border-top-right-radius: 13px;
            &:first-child {
              margin-bottom: 10px !important;
            }
            &.ant-menu-item-selected {
              background-color: #00979a !important;
              span {
                color: #fff;
              }
            }
            img {
              margin-left: -15px;
            }
          }
        }
      }
    }
  }
  img {
    max-width: 25px;
    margin-right: 10px;
  }
  span {
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.5;
    letter-spacing: normal;
    color: #000000;
  }
  &.ant-menu-inline-collapsed {
    span {
      display: inline-block;
      max-width: 0;
      opacity: 0;
    }
    li {
      padding: 0 25px !important;
      &.ant-menu-item-selected {
        border-right: 3px solid #00979a;
      }
      &.ant-menu-submenu {
        > .ant-menu-submenu-title {
          padding: 0 !important;
        }
      }
    }
  }
`;
