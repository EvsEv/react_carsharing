import React from "react";
import Burger from "../Menu/Burger";
import SwitchLang from "../Menu/SwitchLang";

import styles from "./sidebar.module.sass";

export const Sidebar = ({ isOpenMenu, toggleMenu }) => {
    return (
        <aside className={styles.sidebar}>
            <Burger toggle={toggleMenu} isOpenMenu={isOpenMenu} />
            <SwitchLang sidebar={true} />
        </aside>
    );
};
