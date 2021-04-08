import React from "react";
import TabItem from "./TabItem";

import styles from "./tabNavigation.module.sass";

export const TabNavigation = () => {
    return (
        <ul className={styles.tabs}>
            <div className={styles.container}>
                <TabItem value="Местоположение" tab={1} />
                <TabItem value="Модель" tab={2} />
                <TabItem value="Дополнительно" tab={3} />
                <TabItem value="Итого" tab={4} />
            </div>
        </ul>
    );
};
