import React from "react";
import styles from "./footer.module.sass";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
            <a href="tel:+74952342244" className={styles.phone}>
                8 (495) 234-22-44
            </a>
        </footer>
    );
};
