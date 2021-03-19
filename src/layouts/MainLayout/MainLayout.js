import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Slider } from "../../components/Slider/Slider";
import { MainPage } from "../../pages/MainPage/MainPage";

import styles from "./main-layout.module.sass";

export const MainLayout = () => {
    return (
        <div className={styles.body}>
            <Sidebar />
            <section className={styles.content}>
                <Header />
                <MainPage />
                <Footer />
            </section>
            <Slider />
        </div>
    );
};
