import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { SignUp, Login } from "../../Auth/components";

export const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={SignUp} />
            <Redirect to="/auth/login" from="/auth" />
        </Switch>
    );
};