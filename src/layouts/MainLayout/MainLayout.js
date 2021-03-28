import React, { useEffect, useState } from "react";
import { useLocation, Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Menu from "../../components/Menu";
import Slider from "../../components/Slider";

import parkingImage from "../../assets/images/slider/parking.jpg";
import insuranceImage from "../../assets/images/slider/insurance.jpg";
import fuelImage from "../../assets/images/slider/fuel.jpg";
import serviceImage from "../../assets/images/slider/service.jpg";

import styles from "./mainLayout.module.sass";
import MainPage from "../../pages/MainPage";
import OrderPage from "../../pages/OrderPage";

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
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const presingEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpenMenu(false);
            }
        };
        window.addEventListener("keydown", presingEscape);

        return () => {
            window.removeEventListener("keydown", presingEscape);
        };
    }, []);

    function toggleMenu() {
        setIsOpenMenu(!isOpenMenu);
    }

    const printAsideSlider = () => {
        if (location.pathname === "/") {
            return (
                <aside className={styles.slider}>
                    <Slider slides={slides} desktopOnly />
                </aside>
            );
        }
        return null;
    };

    return (
        <div className={styles.body}>
            <Sidebar toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
            <section className={styles.content}>
                <Header toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
                <Route exact path="/" render={() => <MainPage />} />
                <Route path="/order" render={() => <OrderPage />} />
                <Footer />
            </section>
            {printAsideSlider()}
            <Menu isOpen={isOpenMenu} toggle={toggleMenu} />
        </div>
    );
};
