import React from "react";
import Button from "../../components/Button/Button";

import styles from "./main-page.module.sass";

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Каршеринг <span>Need for drive</span>
            </h1>
            <h2 className={styles.description}>
                Поминутная аренда авто твоего города
            </h2>
            <Button text="Забронировать" link="/order" />
        </main>
    );
};
