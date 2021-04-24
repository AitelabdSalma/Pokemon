import React from "react";
import { Layout, BackTop } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

import SideBar from "../components/partials/SideBar";
import TopBar from "../components/partials/TopBar";

const ApplicationContainer = props => {
  const { children } = props;
  const { Footer, Content } = Layout;


  return (
    <Layout style={{ flexDirection: "row", minHeight: "100vh" }}>
      <SideBar />
      <Layout>
        <TopBar />
        <Content>
          <BackTop />
          <LayoutContent>{children}</LayoutContent>
        </Content>

        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "transparent"
          }}
        >
          &copy;  Pokemon 0.0.0
        </Footer>
      </Layout>
    </Layout>
  );
};

ApplicationContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const LayoutContent = styled.div`
  padding: 24px;
  max-width: 1100px;
  margin: 70px auto 0;
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #00979a;
    margin-bottom: 20px;
  }
  @media (max-width: 1600px) {
    margin: 70px 0 0 280px;
  }
`;

export default ApplicationContainer
