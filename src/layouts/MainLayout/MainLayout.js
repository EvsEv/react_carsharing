import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Slider } from "../../components/Slider/Slider";
import { MainPage } from "../../pages/MainPage/MainPage";

export const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <section>
                <Header />
                <MainPage />
                <Footer />
            </section>
            <Slider />
        </>
    );
};
