import React, { useState } from "react";
import DatePicker from "react-datepicker";
import InputMask from "react-input-mask";

import styles from "./datetimeInput.module.sass";
import "react-datepicker/dist/react-datepicker.css";

export const DatetimeInput = ({
    minDate,
    maxDate,
    setMinDate,
    date,
    setDate,
}) => {
    const [isIncorrect, setIsIncorrect] = useState(false);
    const classesForInput = [styles.input];
    const classesForAlert = [styles.alert];

    if (isIncorrect) {
        classesForInput.push(styles.incorrect);
        classesForAlert.push(styles.show);
    }

    const onChange = (selectedDate) => {
        if (selectedDate > minDate) {
            setMinDate && setMinDate(new Date());
            setDate(selectedDate);
            setIsIncorrect(false);
        } else {
            setMinDate && setMinDate(new Date());
            setIsIncorrect(true);
            setDate();
        }
    };

    return (
        <div className={styles.date}>
            <p className={classesForAlert.join(" ")}>
                Допустимые дата и время{" "}
                {minDate.getDate().toString().length === 1
                    ? `0${minDate.getDate()}`
                    : minDate.getDate()}
                .
                {(minDate.getMonth() + 1).toString().length === 1
                    ? `0${minDate.getMonth() + 1}`
                    : minDate.getMonth() + 1}
                .{minDate.getFullYear()}{" "}
                {minDate.getHours().toString().length === 1
                    ? `0${minDate.getHours()}`
                    : minDate.getHours()}
                :
                {minDate.getMinutes().toString().length === 1
                    ? `0${minDate.getMinutes()}`
                    : minDate.getMinutes()}
            </p>
            <DatePicker
                selected={date}
                onChange={onChange}
                timeIntervals={10}
                showTimeSelect
                dateFormat="dd.MM.yyyy HH:mm"
                showDisabledMonthNavigation
                timeFormat="HH:mm"
                maxDate={maxDate || new Date(2022, 0, 1, 1)}
                isClearable
                placeholderText="Введите дату и время"
                customInput={<InputMask mask="99.99.9999 99:99" maskChar="_" />}
                className={classesForInput.join(" ")}
            />
        </div>
    );
};
