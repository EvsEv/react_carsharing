import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../../redux/actions/additionalParams";

import styles from "./price.module.sass";

export const Price = () => {
    const stage = useSelector((state) => state.stage);
    const order = useSelector((state) => state.order);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPrice());
    }, [order.duration]);

    const priceValue = () => {
        if (stage.completedStage === 1 && !Object.keys(order.model).length) {
            return <span>Выберите модель</span>;
        }
        if (stage.completedStage === 2 && order.price === "") {
            return `от ${order.model.priceMin.toLocaleString("ru")} до 
        ${order.model.priceMax.toLocaleString("ru")} ₽`;
        }

        return `${order.price} ₽`;
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
