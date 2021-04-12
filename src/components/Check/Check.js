import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NextStep from "../../components/Button/NextStep";

import styles from "./check.module.sass";
import Parameter from "./Parameter";
import Price from "./Price";
import { setDuration } from "../../redux/actions/additionalParams";

export const Check = () => {
    const location = useSelector((state) => state.location);
    const order = useSelector((state) => state.order);
    const [color, setColor] = useState();
    const [tariff, setTariff] = useState();
    const stage = useSelector((state) => state.stage);
    const completedStage = useRef(stage.completedStage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDuration());
    }, [order.dateTo, order.dateFrom]);

    useEffect(() => {
        completedStage.current = stage.completedStage;
    }, [stage.completedStage]);

    useEffect(() => {
        switch (order.color) {
            case "red":
                setColor("Красный");
                break;
            case "blue":
                setColor("Синий");
                break;
            case "yellow":
                setColor("Желтый");
                break;
            case "":
                setColor();
                break;
            case "Any":
                setColor("Любой");
            default:
                break;
        }
    }, [order.color]);

    useEffect(() => {
        if (order.tariff === "byDay") {
            setTariff("На сутки");
        } else if (order.tariff === "byMinute") {
            setTariff("Поминутно");
        }
    }, [order.tariff]);

    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <Parameter
                name="Пункт выдачи"
                valueOne={location.selectedCity}
                valueTwo={location.selectedPoint}
            />
            {(order.model || completedStage.current > 1) && (
                <Parameter name="Модель" valueOne={order.model.name || ""} />
            )}
            {(order.color || completedStage.current > 2) && (
                <Parameter name="Цвет" valueOne={order.color || ""} />
            )}
            {(order.isFullTank || completedStage.current > 2) && (
                <Parameter name="Полный бак" valueOne="Да" />
            )}
            {(order.isNeedChildChair || completedStage.current > 2) && (
                <Parameter name="Детское кресло" valueOne="Да" />
            )}
            {(order.isRightWheel || completedStage.current > 2) && (
                <Parameter name="Правый руль" valueOne="Да" />
            )}
            <Price />
            <NextStep />
        </div>
    );
};
