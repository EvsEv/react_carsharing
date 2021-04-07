import { useEffect, useState } from "react";

const isTwo = (value) => (value.toString().length === 2 ? value : `0${value}`);

export default function useCurrentDate() {
    const [date, setDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState();
    const [updateTime, setUpdateTime] = useState(60000);

    const changeCurrentDate = () => {
        setCurrentDate(
            `${date.getFullYear()}-${isTwo(date.getMonth() + 1)}-${isTwo(
                date.getDate()
            )}T${isTwo(date.getHours())}:${isTwo(date.getMinutes())}`
        );
    };

    useEffect(() => {
        const intervalUpade = setInterval(() => {
            setDate(new Date());
        }, updateTime);
        return () => {
            window.clearInterval(intervalUpade);
        };
    }, []);

    useEffect(() => {
        changeCurrentDate();
    }, [date]);

    return [currentDate, setUpdateTime];
}
