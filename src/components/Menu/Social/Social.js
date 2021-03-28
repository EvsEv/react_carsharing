import React from "react";

import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/instagram.svg";

import styles from "./social.module.sass";

export const Social = () => {
    const socialNetworks = [
        { link: "https://telegram.org/", component: <Telegram /> },
        { link: "https://www.facebook.com/", component: <Facebook /> },
        { link: "https://www.instagram.com", component: <Instagram /> },
    ];

    return (
        <div className={styles.wrapper}>
            {socialNetworks.map((network) => (
                <a
                    key={network.link}
                    href={network.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    {network.component}
                </a>
            ))}
        </div>
    );
};
