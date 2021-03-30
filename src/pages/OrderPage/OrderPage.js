import React from "react";
import { useSelector } from "react-redux";
import Check from "../../components/Check";
import Location from "../../components/Location";

import styles from "./orderPage.module.sass";

export const OrderPage = () => {
    const location = useSelector((state) => state.location);
    const order = useSelector((state) => state.order);

    const renderingStage = () => {
        switch (order.stage) {
            case 1:
                return <Location />;
                break;
            case 2:
                return <div>TEST</div>;
            default:
                break;
        }
    };

    return (
        <main className={styles.main}>
            <ul className={styles.breadcrumbs}>
                <li className={styles.breadcrumbs__item}>
                    <button className={styles.breadcrumbs__button}>
                        Местоположение
                    </button>
                </li>
                <li className={styles.breadcrumbs__item}>
                    <button
                        className={styles.breadcrumbs__button}
                        disabled={order.stage < 2}
                    >
                        Модель
                    </button>
                </li>
                <li className={styles.breadcrumbs__item}>
                    <button
                        className={styles.breadcrumbs__button}
                        disabled={order.stage < 3}
                    >
                        Дополнительно
                    </button>
                </li>
                <li className={styles.breadcrumbs__item}>
                    <button
                        className={styles.breadcrumbs__button}
                        disabled={order.stage < 4}
                    >
                        Итого
                    </button>
                </li>
            </ul>
            <div className={styles.wrapper}>
                <div className={styles.stage}>{renderingStage()}</div>
                <Check location={location} />
            </div>
        </main>
    );
};
