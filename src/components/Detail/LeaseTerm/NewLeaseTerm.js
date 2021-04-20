import React, { useState, useEffect } from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDateTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";

import styles from "./leaseTerm.module.sass";
import "../../../assets/styles/datetimePicker.sass";

export const NewLeaseTerm = () => {
    const [selectedDate, handleDateChange] = useState(null);

    const reset = () => {
        handleDateChange(null);
    };
    return (
        <div className={styles.test}>
            <MuiPickersUtilsProvider locale={ruLocale} utils={DateFnsUtils}>
                <KeyboardDateTimePicker
                    onChange={(e) => console.log(e)}
                    ampm={false}
                    value={selectedDate}
                    onChange={handleDateChange}
                    onError={console.log}
                    disablePast
                    clearable={true}
                    format="dd.MM.yyyy HH:mm"
                    strictCompareDates={true}
                    clearLabel="Сбросить"
                    cancelLabel="Отменить"
                    okLabel="Принять"
                    placeholder="Введите дату и время"
                />
            </MuiPickersUtilsProvider>
            <div
                onClick={reset}
                style={{ widh: "100px", height: "100px", background: "black" }}
            ></div>
        </div>
    );
};
