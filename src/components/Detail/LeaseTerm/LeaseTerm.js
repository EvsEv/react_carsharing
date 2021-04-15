import React, { useState } from "react";
import DatetimeInput from "../../Input/DatetimeInput";

export const LeaseTerm = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();

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
