import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";
import SwitchLang from "./SwitchLang";

import styles from "./menu.module.sass";

const links = [
    { name: "Парковка", href: "#" },
    { name: "Страховка", href: "#" },
    { name: "Бензин", href: "#" },
    { name: "Обслуживание", href: "#" },
];

export const Menu = ({ isOpen, toggle }) => {
    const classes = [styles.menu];
    if (isOpen) classes.push(styles.open);

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
            <SwitchLang menu={true} />
        </div>
    );
};
