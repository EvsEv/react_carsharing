import React from "react";
import { HashRouter, Route } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import OrderLayout from "../../layouts/OrderLayout";

export const App = () => {
    return (
        <HashRouter basename="/">
            <Route exact path="/" render={() => <MainLayout />} />
            <Route path="/order" exact render={() => <OrderLayout />} />
            <Route path="/order/:id" render={() => <OrderLayout />} />
        </HashRouter>
    );
};
