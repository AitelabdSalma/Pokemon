import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const AppRoute = ({
  isAuth,
  component: Component,
  layout: Layout,
  exact,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      exact={exact}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired
};


export default AppRoute
