import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NextStep from "../../components/Button/NextStep";

import styles from "./check.module.sass";
import Parameter from "./Parameter";
import Price from "./Price";
import {
    isValidPriceNumber,
    setDuration,
} from "../../redux/actions/additionalParams";

export const Check = () => {
    const [isValidPrice, setIsValidPrice] = useState(false);
    const location = useSelector((state) => state.location);
    const order = useSelector((state) => state.order);
    const { dateTo, dateFrom } = useSelector((state) => state.order);
    const stage = useSelector((state) => state.stage);
    const completedStage = useRef(stage.completedStage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isValidPriceNumber(isValidPrice));
    }, [isValidPrice]);

    useEffect(() => {
        dispatch(setDuration());
    }, [dateTo, dateFrom]);

    useEffect(() => {
        completedStage.current = stage.completedStage;
    }, [stage.completedStage]);
    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <Parameter
                name="Пункт выдачи"
                valueOne={location.selectedCity}
                valueTwo={location.selectedPoint}
            />
            {(order.model || stage.stage === 2) && (
                <Parameter name="Модель" valueOne={order.model.name || ""} />
            )}
            {(order.color || stage.stage === 3) && (
                <Parameter name="Цвет" valueOne={order.color || ""} />
            )}
            {(order.duration || stage.stage === 3) && (
                <Parameter name="Срок аренды" valueOne={order.duration || ""} />
            )}
            {(order.tariff || stage.stage === 3) && (
                <Parameter name="Срок аренды" valueOne={order.tariff || ""} />
            )}
            {order.isFullTank && <Parameter name="Полный бак" valueOne="Да" />}
            {order.isNeedChildChair && (
                <Parameter name="Детское кресло" valueOne="Да" />
            )}
            {order.isRightWheel && (
                <Parameter name="Правый руль" valueOne="Да" />
            )}
            <Price
                isValidPrice={isValidPrice}
                setIsValidPrice={setIsValidPrice}
            />
            <NextStep isValidPrice={isValidPrice} />
        </div>
    );
};
