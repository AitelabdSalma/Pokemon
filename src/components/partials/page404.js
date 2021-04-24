import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Layout } from "antd";

import Icon from '@ant-design/icons';

const { Content } = Layout;

class Page404 extends React.Component {
  constructor() {
    super();
    this.state = {
      GoBack: false
    };
  }

  setGoBack = () => {
    this.setState({
      GoBack: true
    });
  };

  renderGoBack = () => {
    if (this.state.GoBack) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <Content>
        <div style={{ textAlign: "center", margin: 200 }}>
          <h3>Oops!</h3>
          <h1>Cette Page N'existe pas</h1>
          {this.renderGoBack()}
          <Button
            onClick={this.setGoBack}
            type="primary"
            style={{ float: "center", marging: "10px" }}
          >
            <Icon type="home" />
            Retourner à la page d'accueil
          </Button>
        </div>
      </Content>
    );
  }
}

export default Page404;
