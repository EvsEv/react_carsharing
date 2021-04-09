import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice, setTariff } from "../../../redux/actions/additionalParams";
import RadioButton from "../../Input/RadioButton";

export const Tariff = () => {
    const additionalParams = useSelector((state) => state.additionalParams);
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(setTariff(e.target.value));
        dispatch(setPrice());
    };
    return (
        <>
            <RadioButton
                name="tariff"
                value="byMinute"
                label="Поминутно, 7₽/мин"
                onChange={onChange}
                checked={additionalParams.tariff === "byMinute"}
            />
            <RadioButton
                name="tariff"
                value="byDay"
                label="На сутки, 1999 ₽/сутки"
                onChange={onChange}
                checked={additionalParams.tariff === "byDay"}
            />
        </>
    );
};
