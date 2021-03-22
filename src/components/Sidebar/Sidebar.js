import React, { useRef, useState } from "react";
import { Burger } from "../Burger/Burger";

import styles from "./sidebar.module.sass";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef();

    function toggleMenu() {
        setIsOpen(!isOpen);
        const menu = menuRef.current;

        menu.classList.toggle(styles.open);
    }

    return (
        <aside className={styles.sidebar}>
            <Burger toggle={toggleMenu} isOpen={isOpen} />
            <div ref={menuRef} className={styles.menu}>
                Testing
            </div>
        </aside>
    );
};
