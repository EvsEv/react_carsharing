import React from "react";

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
            {/* Временная кнопка, потом будет сделана в ui-kit */}
            <button>Забронировать</button>
        </main>
    );
};
