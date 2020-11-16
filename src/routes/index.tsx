import React from "react";
import { Route, Switch } from "react-router-dom";

import Activity from "../pages/Activity/activity";
import Dashboard from '../pages/Dashboard/dashboard'
import Cycles from '../pages/Cycle/cycle'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Activity} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/cycles/:activityId+" component={Cycles} />
  </Switch>
);

export default Routes;
