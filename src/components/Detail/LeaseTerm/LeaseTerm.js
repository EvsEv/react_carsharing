import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectDateFrom,
    selectDateTo,
} from "../../../redux/actions/additionalParams";
import DatetimeInput from "../../Input/DatetimeInput";

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
        console.log(Math.floor(new Date(dateTo - dateFrom).getDate()));
    }, [dateTo]);

    return (
        <>
            <DatetimeInput
                minDate={currentDate}
                maxDate={dateTo}
                setminDate={setCurrentDate}
                date={dateFrom}
                setDate={setDateFrom}
            />
            <DatetimeInput
                minDate={dateFrom || currentDate}
                date={dateTo}
                setDate={setDateTo}
            />
        </>
    );
};
