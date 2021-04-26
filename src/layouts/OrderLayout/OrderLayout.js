import React, { useState } from "react";
import { useParams } from "react-router";
import useMenu from "../../hooks/useMenu";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Popup from "../../components/Popup";
import Sidebar from "../../components/Sidebar";
import OrderPage from "../../pages/OrderPage";

import styles from "./orderLayout.module.sass";

export const OrderLayout = () => {
    const [isOpenMenu, toggleMenu] = useMenu();
    const { id } = useParams();
    console.log(id);

    return (
        <div className={styles.body}>
            <Sidebar toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />
            <section className={styles.content}>
                <div className={styles.container}>
                    <Header
                        toggleMenu={toggleMenu}
                        isOpenMenu={isOpenMenu}
                        order={true}
                    />
                </div>
                <OrderPage isWatchOrder={id} />
            </section>

            <Menu isOpen={isOpenMenu} toggle={toggleMenu} />
        </div>
    );
};
