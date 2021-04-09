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

    const printAddParams = () => {
        if (completedStage.current > 1) {
            return (
                <>
                    <Parameter name="Цвет" valueOne={color} />
                    <Parameter name="Тариф" valueOne={tariff} />
                    <Parameter
                        name="Длительность аренды"
                        valueOne={order.duration}
                    />
                    {order.addServices &&
                        order.addServices.map((service) => {
                            switch (service) {
                                case "fullFuel":
                                    return (
                                        <Parameter
                                            name="Полный бак"
                                            valueOne="Да"
                                            key={service}
                                        />
                                    );
                                case "childChair":
                                    return (
                                        <Parameter
                                            name="Детское кресло"
                                            valueOne="Да"
                                            key={service}
                                        />
                                    );
                                case "rightHand":
                                    return (
                                        <Parameter
                                            name="Правый руль"
                                            valueOne="Да"
                                            key={service}
                                        />
                                    );
                                default:
                                    break;
                            }
                        })}
                </>
            );
        }
    };

    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <Parameter
                name="Пункт выдачи"
                valueOne={location.selectedCity}
                valueTwo={location.selectedPoint}
            />
            {completedStage.current > 0 && (
                <Parameter name="Модель" valueOne={order.model.name} />
            )}
            {printAddParams()}
            <Price />
            <NextStep />
        </div>
    );
};
