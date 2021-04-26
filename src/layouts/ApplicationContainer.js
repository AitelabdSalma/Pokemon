import React from "react";
import { Layout, BackTop } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

import TopBar from "../components/partials/TopBar";
import Footer from "../components/partials/Footer";

import './ApplicationContainer.css';

const ApplicationContainer = props => {
  const { children } = props;
  const { Content } = Layout;


  return (
    <Layout style={{ flexDirection: "row", minHeight: "100vh" }}>
      <Layout>
        <TopBar />
        <Content>
          <BackTop />
          <LayoutContent>{children}</LayoutContent>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

ApplicationContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const LayoutContent = styled.div`
  padding: 24px;
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #00979a;
    margin-bottom: 20px;
  }
`;

export default ApplicationContainer
