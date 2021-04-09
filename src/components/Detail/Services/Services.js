import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSerivces } from "../../../redux/actions/additionalParams";
import Checkbox from "../../Input/Checkbox";

export const Services = () => {
    const additionalParams = useSelector((state) => state.additionalParams);
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
                checked={additionalParams.services.find(
                    (service) => service === "fullFuel"
                )}
            />
            <Checkbox
                name="services"
                value="childChair"
                label="Детское кресло, 200р"
                onChange={onChange}
                checked={additionalParams.services.find(
                    (service) => service === "childChair"
                )}
            />
            <Checkbox
                name="services"
                value="rightHand"
                label="Правый руль, 1600р"
                onChange={onChange}
                checked={additionalParams.services.find(
                    (service) => service === "rightHand"
                )}
            />
        </>
    );
};
