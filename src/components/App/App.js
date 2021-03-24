import React from "react";
import { HashRouter } from "react-router-dom";
import { MainLayout } from "../../layouts/MainLayout/MainLayout";

export const App = () => {
    return (
        <HashRouter basename="/">
            <MainLayout />
        </HashRouter>
    );
};
