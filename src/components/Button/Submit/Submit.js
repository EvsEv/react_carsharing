import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../../redux/actions";

import styles from "../button.module.sass";

export const Submit = ({ disabled }) => {
    const dispatch = useDispatch();
    const location = useSelector((state) => state.location);

    function submit() {
        dispatch(addLocation(location.currentCity, location.choosingPoint));
    }
    return (
        <button
            className={[styles.default, styles.wide].join(" ")}
            disabled={disabled}
            onClick={submit}
        >
            Выбрать модель
        </button>
    );
};
