import React, { useState, useEffect } from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";

import styles from "./leaseTerm.module.sass";
import "../../../styles/datetimePicker.sass";
import { useDispatch, useSelector } from "react-redux";
import { addDateFrom, addDateTo } from "../../../redux/thunks/detail";

export const LeaseTerm = () => {
    const [dateNow, setDateNow] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date(2021, 11, 4, 0, 0));
    const [dateFromValue, setDateFromValue] = useState(null);
    const [dateToValue, setDateToValue] = useState(null);
    const { dateFrom, dateTo } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        setDateFromValue(dateFrom);
        setDateToValue(dateTo);
    }, []);

    const resetDateTo = () => {
        setDateToValue(null);
        dispatch(addDateTo(null));
    };

    const resetDateFrom = () => {
        setDateFromValue(null);
        dispatch(addDateFrom(null));
    };

    const onChangeDateFrom = (event) => {
        setDateFromValue(event);
        if (
            (!dateTo && event > dateNow && event < maxDate) ||
            (event > dateNow && event < dateTo)
        ) {
            dispatch(addDateFrom(event));
        } else {
            dispatch(addDateFrom(null));
        }
    };

    const onChangeDateTo = (event) => {
        setDateToValue(event);
        if (event > dateFrom && event < maxDate && event > dateNow) {
            if (dateFromValue) {
                dispatch(addDateFrom(dateFromValue));
            }
            dispatch(addDateTo(event));
        } else {
            dispatch(addDateTo(null));
        }
    };
    return (
        <>
            <div className={styles.datetime}>
                <p className={styles.text}>С</p>
                <div className={styles.wrapper}>
                    <MuiPickersUtilsProvider
                        locale={ruLocale}
                        utils={DateFnsUtils}
                    >
                        <KeyboardDateTimePicker
                            ampm={false}
                            value={dateFromValue}
                            onChange={onChangeDateFrom}
                            minDate={dateNow}
                            clearable={true}
                            format="dd.MM.yyyy HH:mm"
                            strictCompareDates={true}
                            maxDate={dateTo || maxDate}
                            clearLabel="Сбросить"
                            cancelLabel="Отменить"
                            okLabel="Принять"
                            placeholder="Введите дату и время"
                            invalidDateMessage={
                                dateFromValue && "Неверный формат даты"
                            }
                            minDateMessage="Не раньше текущего времени"
                            maxDateMessage={
                                dateTo
                                    ? "Не позднее выбранной даты"
                                    : "Не позднее 04.12.2021"
                            }
                            showTodayButton={true}
                            todayLabel="Сейчас"
                        />
                    </MuiPickersUtilsProvider>
                    {dateFromValue && (
                        <div
                            onClick={resetDateFrom}
                            className={styles.reset}
                        ></div>
                    )}
                </div>
            </div>
            <div className={styles.datetime}>
                <p className={styles.text}>По</p>
                <div className={styles.wrapper}>
                    <MuiPickersUtilsProvider
                        locale={ruLocale}
                        utils={DateFnsUtils}
                    >
                        <KeyboardDateTimePicker
                            ampm={false}
                            value={dateToValue}
                            onChange={onChangeDateTo}
                            minDate={dateFrom || dateNow}
                            clearable={true}
                            format="dd.MM.yyyy HH:mm"
                            strictCompareDates={true}
                            maxDate={maxDate}
                            clearLabel="Сбросить"
                            cancelLabel="Отменить"
                            okLabel="Принять"
                            placeholder="Введите дату и время"
                            invalidDateMessage={false}
                            minDateMessage="Минимальное значение: начало аренды"
                            maxDateMessage="Не позднее 04.12.2021"
                        />
                    </MuiPickersUtilsProvider>
                    {dateToValue && (
                        <div
                            onClick={resetDateTo}
                            className={styles.reset}
                        ></div>
                    )}
                </div>
            </div>
        </>
    );
};
