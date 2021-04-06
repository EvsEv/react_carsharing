import React from "react";
import { useSelector } from "react-redux";

import styles from "./price.module.sass";

export const Price = () => {
    const stage = useSelector((state) => state.stage);
    const order = useSelector((state) => state.order);

    const priceValue = () => {
        console.log(order.model);
        if (stage.completedStage === 1 && !Object.keys(order.model).length) {
            return <span>Выберите модель</span>;
        }

        return `от ${order.model.priceMin.toLocaleString("ru")} до 
        ${order.model.priceMax.toLocaleString("ru")} ₽`;
    };

    if (stage.completedStage > 0) {
        return (
            <div className={styles.price}>
                <p className={styles.title}>Цена:</p>
                <p className={styles.value}>{priceValue()}</p>
            </div>
        );
    }
    return null;
};
