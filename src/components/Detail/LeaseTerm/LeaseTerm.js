import React, { useEffect, useRef, useState } from "react";

import styles from "./leaseTerm.module.sass";
import useCurrentDate from "../../../assets/hooks/useCurrentDate";
import { useDispatch, useSelector } from "react-redux";
import {
    setDateFrom,
    setDateTo,
} from "../../../redux/actions/additionalParams";

export const LeaseTerm = () => {
    const dispatch = useDispatch();
    const additionalParams = useSelector((state) => state.additionalParams);
    const [currentDate, setUpdateTime] = useCurrentDate();
    const from = useRef();
    const to = useRef();

    useEffect(() => {
        if (additionalParams.dateFrom) {
            from.current.value = additionalParams.dateFrom;
        }
        if (additionalParams.dateTo) {
            to.current.value = additionalParams.dateTo;
        }
    }, []);

    const classesMaskFrom = [styles.mask];
    const classesMaskTo = [styles.mask];

    if (additionalParams.dateFrom) {
        classesMaskFrom.push(styles.maskOff);
    }

    if (additionalParams.dateTo) {
        classesMaskTo.push(styles.maskOff);
    }

    const changeDate = (e) => {
        switch (e.target.id) {
            case "from":
                e.target.validity.valid
                    ? dispatch(setDateFrom(e.target.value))
                    : dispatch(setDateFrom(""));
                break;
            case "to":
                e.target.validity.valid
                    ? dispatch(setDateTo(e.target.value))
                    : dispatch(setDateTo(""));
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className={styles.date}>
                <span className={styles.text}>С</span>
                <div className={styles.dateField}>
                    <input
                        ref={from}
                        id="from"
                        type="datetime-local"
                        min={currentDate}
                        max={additionalParams.dateTo}
                        className={styles.dateInput}
                        onChange={changeDate}
                    />
                    <label className={classesMaskFrom.join(" ")} htmlFor="from">
                        Введите дату и время
                    </label>
                    <span
                        className={styles.reset}
                        onClick={() => {
                            from.current.value = "";
                            dispatch(setDateFrom(""));
                        }}
                    ></span>
                </div>
            </div>
            <div className={styles.date}>
                <span className={styles.text}>По</span>
                <div className={styles.dateField}>
                    <input
                        ref={to}
                        id="to"
                        type="datetime-local"
                        min={additionalParams.dateFrom || currentDate}
                        className={styles.dateInput}
                        onChange={changeDate}
                    />
                    <label className={classesMaskTo.join(" ")} htmlFor="to">
                        Введите дату и время
                    </label>
                    <span
                        className={styles.reset}
                        onClick={() => {
                            to.current.value = "";
                            dispatch(setDateTo(""));
                        }}
                    ></span>
                </div>
            </div>
        </>
    );
};
