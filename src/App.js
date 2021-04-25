import React from "react";
import { Switch, Redirect } from "react-router-dom";

import ApplicationContainer from "./layouts/ApplicationContainer";
import AppRoute from "./utils/routes";
import Page404 from "./components/partials/page404";

import ViewPokemon from "./containers/viewPokemon/viewPokemon";
import TypePokemone from "./containers/type/type";
import Home from "./containers/home/home";


const App = () => {
  return (
    <Switch>
      <AppRoute
        path="/"
        layout={ApplicationContainer}
        component={Home}
      />
      <AppRoute
        exact
        path="/viewPokemon/id"
        layout={ApplicationContainer}
        component={ViewPokemon}
      />
      <AppRoute
        exact
        path="/type/:id"
        layout={ApplicationContainer}
        component={TypePokemone}
      />
      <Redirect to="/" />
      <AppRoute path="**" layout={ApplicationContainer} component={Page404} />
    </Switch>
  );
};

export default App;
