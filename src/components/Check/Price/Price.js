import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatePrice } from "../../../redux/actions/additionalParams";

import styles from "./price.module.sass";

export const Price = ({ isValidPrice, setIsValidPrice }) => {
    const stage = useSelector((state) => state.stage);
    const order = useSelector((state) => state.order);
    const { price, model } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        if (price && order) {
            if (order.model.priceMin < price && order.model.priceMax > price) {
                setIsValidPrice(false);
            } else {
                setIsValidPrice(true);
            }
        } else {
            setIsValidPrice(false);
        }
    }, [price, model]);

    useEffect(() => {
        dispatch(calculatePrice());
    }, [
        order.duration,
        order.tariff,
        order.isFullTank,
        order.isNeedChildChair,
        order.isRightWheel,
    ]);

    const priceValue = () => {
        if (stage.completedStage === 1 && !Object.keys(order.model).length) {
            return <span>Выберите модель</span>;
        }
        if ((stage.completedStage === 2 && !order.price) || !order.price) {
            console.log("test");
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
                {isValidPrice && (
                    <span className={styles.alert}>
                        Допустимый диапазон цены: {order.model.priceMin} -{" "}
                        {order.model.priceMax} ₽. Выберите другие
                        параметры/машину
                    </span>
                )}
            </div>
        );
    }
    return null;
};
