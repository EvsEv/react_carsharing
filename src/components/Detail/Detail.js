import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../redux/thunks/detail";

import Color from "./Color";

import styles from "./detail.module.sass";
import LeaseTerm from "./LeaseTerm";
import Services from "./Services";
import Tariff from "./Tariff";

export const Detail = () => {
    const {
        tariff,
        duration,
        isNeedChildChair,
        isFullTank,
        isRightWheel,
    } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPrice());
    }, [tariff, duration, isNeedChildChair, isFullTank, isRightWheel]);

    return (
        <form>
            <div className={styles.param}>
                <h3 className={styles.title}>Цвет</h3>
                <div className={styles.wrapper}>
                    <Color />
                </div>
            </div>
            <div className={[styles.param, styles.date].join(" ")}>
                <h3 className={styles.title}>Дата аренды</h3>
                <div className={styles.wrapper}>
                    <LeaseTerm />
                </div>
            </div>
            <div className={styles.param}>
                <h3 className={styles.title}>Тариф</h3>
                <div className={[styles.wrapper, styles.block].join(" ")}>
                    <Tariff />
                </div>
            </div>
            <div className={styles.param}>
                <h3 className={styles.title}>Доп. услуги</h3>
                <div className={[styles.wrapper, styles.block].join(" ")}>
                    <Services />
                </div>
            </div>
        </form>
    );
};
