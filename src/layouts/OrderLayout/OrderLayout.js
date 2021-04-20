import React, { useState } from "react";
import useMenu from "../../assets/hooks/useMenu";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Popup from "../../components/Popup";
import Sidebar from "../../components/Sidebar";
import OrderPage from "../../pages/OrderPage";

import styles from "./orderLayout.module.sass";

export const OrderLayout = () => {
    const [isOpenMenu, toggleMenu] = useMenu();
    const [popupPost, setpopupPost] = useState(false);

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
                <OrderPage setpopupPost={setpopupPost} />
            </section>
            {popupPost && <Popup setpopupPost={setpopupPost} />}
            <Menu isOpen={isOpenMenu} toggle={toggleMenu} />
        </div>
    );
};
