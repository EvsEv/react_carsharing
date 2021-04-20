import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDuration } from "../../redux/functions/detail";
import NextStep from "../Button/NextStep";

import styles from "./check.module.sass";
import Parameter from "./Parameter";
import Price from "./Price";

export const NewCheck = () => {
    const {
        cityId,
        pointId,
        carId,
        color,
        fullDay,
        fullHour,
        duration,
        dateTo,
        dateFrom,
        tariff,
        isNeedChildChair,
        isRightWheel,
        isFullTank,
    } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addDuration());
    }, [dateTo, dateFrom]);
    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <div>
                <Parameter
                    name="Пункт выдачи"
                    valueOne={cityId?.name}
                    valueTwo={pointId?.address}
                />
                {carId && <Parameter name="Модель" valueOne={carId?.name} />}
                {color && <Parameter name="Цвет" valueOne={color} />}
                {duration && (
                    <Parameter
                        name="Длительность аренды"
                        valueOne={`${fullDay}д${fullHour}ч`}
                    />
                )}
                {tariff && (
                    <Parameter
                        name="Тарифф"
                        valueOne={tariff.rateTypeId.name}
                    />
                )}
                {isFullTank && <Parameter name="Полный бак" valueOne="Да" />}
                {isNeedChildChair && (
                    <Parameter name="Детское кресло" valueOne="Да" />
                )}
                {isRightWheel && (
                    <Parameter name="Тип машины" valueOne="Правый руль" />
                )}
            </div>
            {carId && <Price />}
            <NextStep />
        </div>
    );
};
