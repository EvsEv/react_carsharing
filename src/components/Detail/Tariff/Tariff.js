import React from "react";
import RadioButton from "../../Input/RadioButton";

export const Tariff = () => {
    return (
        <>
            <RadioButton
                name="tariff"
                value="byMinute"
                label="Поминутно, 7₽/мин"
            />
            <RadioButton
                name="tariff"
                value="byDay"
                label="На сутки, 1999 ₽/сутки"
            />
        </>
    );
};
