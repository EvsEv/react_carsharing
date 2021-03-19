import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "../../routes";

export const App = () => {
    return (
        <HashRouter basename="/">
            <Switch>
                {routes.map((page) => (
                    <Route
                        key={page.path}
                        exact
                        path={page.path}
                        render={() => page.component}
                    />
                ))}
            </Switch>
        </HashRouter>
    );
};
