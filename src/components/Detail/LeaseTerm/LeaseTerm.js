import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectDateFrom,
    selectDateTo,
} from "../../../redux/actions/additionalParams";
import DatetimeInput from "../../Input/DatetimeInput";
import styles from "./leaseTerm.module.sass";

export const LeaseTerm = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        order.dateFrom && setDateFrom(order.dateFrom);
        order.dateTo && setDateTo(order.dateTo);
    }, []);

    useEffect(() => {
        dateFrom
            ? dispatch(selectDateFrom(dateFrom))
            : dispatch(selectDateFrom(""));
    }, [dateFrom]);

    useEffect(() => {
        dateTo ? dispatch(selectDateTo(dateTo)) : dispatch(selectDateTo(""));
    }, [dateTo]);

    return (
        <>
            <div className={styles.date}>
                <span className={styles.term}>С </span>
                <DatetimeInput
                    minDate={currentDate}
                    maxDate={dateTo}
                    setminDate={setCurrentDate}
                    date={dateFrom}
                    setDate={setDateFrom}
                />
            </div>
            <div className={styles.date}>
                <span className={styles.term}>По</span>
                <DatetimeInput
                    minDate={dateFrom || currentDate}
                    date={dateTo}
                    setDate={setDateTo}
                />
            </div>
        </>
    );
};
