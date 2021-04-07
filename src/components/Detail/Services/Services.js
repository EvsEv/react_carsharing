import React from "react";
import Checkbox from "../../Input/Checkbox";

export const Services = () => {
    return (
        <>
            <Checkbox
                name="services"
                value="fullFuel"
                label="Полный бак, 500р"
            />
            <Checkbox
                name="services"
                value="childChair"
                label="Детское кресло, 200р"
            />
            <Checkbox
                name="services"
                value="rightHand"
                label="Правый руль, 1600р"
            />
        </>
    );
};
