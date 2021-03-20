import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Slider } from "../../components/Slider/Slider";
import { MainPage } from "../../pages/MainPage/MainPage";

import parkingImage from "../../assets/images/slider/parking.jpg";
import insuranceImage from "../../assets/images/slider/insurance.jpg";
import fuelImage from "../../assets/images/slider/fuel.jpg";
import serviceImage from "../../assets/images/slider/service.jpg";

import styles from "./main-layout.module.sass";

export const MainLayout = () => {
    const slides = [
        {
            title: "Бесплатная парковка",
            description:
                "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
            image: parkingImage,
        },
        {
            title: "Страховка",
            description: "Полная страховка страховка автомобиля",
            image: insuranceImage,
        },
        {
            title: "Бензин",
            description: "Полный бак на любой заправке города за наш счёт",
            image: fuelImage,
        },
        {
            title: "Обслуживание",
            description: "Автомобиль проходит еженедельное ТО",
            image: serviceImage,
        },
    ];

    return (
        <div className={styles.body}>
            <Sidebar />
            <section className={styles.content}>
                <Header />
                <MainPage />
                <Footer />
            </section>
            <aside className={styles.slider}>
                <Slider slides={slides} />
            </aside>
        </div>
    );
};
