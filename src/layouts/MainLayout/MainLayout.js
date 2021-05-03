import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Menu from "../../components/Menu";
import Slider from "../../components/Slider";
import MainPage from "../../pages/MainPage";
import useMenu from "../../hooks/useMenu";

import parkingImage from "../../assets/images/slider/parking.jpg";
import insuranceImage from "../../assets/images/slider/insurance.jpg";
import fuelImage from "../../assets/images/slider/fuel.jpg";
import serviceImage from "../../assets/images/slider/service.jpg";

import styles from "./mainLayout.module.sass";
const slides = [
    {
        title: "Бесплатная парковка",
        description:
            "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        image: parkingImage,
        link: "#",
    },
    {
        title: "Страховка",
        description: "Полная страховка страховка автомобиля",
        image: insuranceImage,
        link: "#",
    },
    {
        title: "Бензин",
        description: "Полный бак на любой заправке города за наш счёт",
        image: fuelImage,
        link: "#",
    },
    {
        title: "Обслуживание",
        description: "Автомобиль проходит еженедельное ТО",
        image: serviceImage,
        link: "#",
    },
];

export const MainLayout = () => {
    const [isOpenMenu, toggleMenu] = useMenu();
    return (
        <div className={styles.body}>
            <Sidebar toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
            <section className={styles.content}>
                <Header toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
                <MainPage />
                <Footer />
            </section>
            <aside className={styles.slider}>
                <Slider slides={slides} desktopOnly />
            </aside>
            <Menu isOpen={isOpenMenu} toggle={toggleMenu} />
        </div>
    );
};
