import React from "react";
import { Link } from "react-router-dom";
import { Social } from "../Social/Social";

import styles from "./menu.module.sass";

export const Menu = ({ isOpen, toggle }) => {
    const classes = [styles.menu];
    if (isOpen) classes.push(styles.open);

    const links = [
        { name: "Парковка", href: "/parking" },
        { name: "Страховка", href: "/insurance" },
        { name: "Бензин", href: "/fuel" },
        { name: "Обслуживание", href: "/service" },
    ];
    return (
        <div className={classes.join(" ")}>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    {links.map((link) => (
                        <li
                            className={styles.item}
                            key={link.name}
                            onClick={toggle}
                        >
                            <Link to={link.href} className={styles.link}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Social />
        </div>
    );
};
