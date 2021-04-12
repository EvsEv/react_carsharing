import React from "react";
import useMenu from "../../assets/hooks/useMenu";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Sidebar from "../../components/Sidebar";
import OrderPage from "../../pages/OrderPage";

import styles from "./orderLayout.module.sass";

export const OrderLayout = () => {
    const [isOpenMenu, toggleMenu] = useMenu();

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
                <OrderPage />
            </section>
            <Menu isOpen={isOpenMenu} toggle={toggleMenu} />
        </div>
    );
};
