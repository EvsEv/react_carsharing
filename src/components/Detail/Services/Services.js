import React from "react";
import { useDispatch } from "react-redux";
import { setSerivces } from "../../../redux/actions/additionalParams";
import Checkbox from "../../Input/Checkbox";

export const Services = () => {
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(setSerivces(e.target.value));
    };
    return (
        <>
            <Checkbox
                name="services"
                value="fullFuel"
                label="Полный бак, 500р"
                onChange={onChange}
            />
            <Checkbox
                name="services"
                value="childChair"
                label="Детское кресло, 200р"
                onChange={onChange}
            />
            <Checkbox
                name="services"
                value="rightHand"
                label="Правый руль, 1600р"
                onChange={onChange}
            />
        </>
    );
};
