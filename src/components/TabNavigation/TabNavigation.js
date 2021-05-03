import React from "react";
import TabItem from "./TabItem";

import styles from "./tabNavigation.module.sass";
import stylesForTab from "./TabItem/tabItem.module.sass";

export const TabNavigation = ({ isWatchOrder }) => {
    if (isWatchOrder) {
        return (
            <div className={styles.tabs}>
                <div className={styles.container}>
                    <div className={stylesForTab.item}>
                        <p className={stylesForTab.button}>
                            Заказ номер RUS{isWatchOrder}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
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
