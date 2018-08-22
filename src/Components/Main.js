import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PlanEntry from "./PlanEntry.js";
import Employment from "./Employment.js";
import MonthlyIncome from "./MonthlyIncome.js";
import Address from "./Address.js";
import Nav from "./Nav.js";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={PlanEntry} />
          <Route exact path="/employment" component={Employment} />
          <Route exact path="/monthlyincome" component={MonthlyIncome} />
          <Route exact path="/address" component={Address} />
        </Switch>
      </div>
    );
  }
}

export default Main;
