import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addCity,
    addPoint,
    getCityList,
    getPointList,
} from "../../redux/functions/location";
import { Search } from "../Input/Search/Search";

import styles from "./location.module.sass";

import mapImage from "../../assets/images/mapImage.jpg";

export const Location = () => {
    const { cityList, pointList } = useSelector((state) => state.location);
    const { cityId, pointId } = useSelector((state) => state.order);
    const [pointListToSearch, setPointListToSearch] = useState([]);
    const [cityListToSearch, setCityListToSearch] = useState([]);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getCityList());
        dispatch(getPointList());
    }, []);

    useEffect(() => {
        const newCityList =
            cityList &&
            pointList &&
            cityList.filter((city) =>
                pointList.find((point) => point?.cityId?.id === city.id)
            );
        setCityListToSearch(newCityList);
    }, [pointList, cityList]);

    const onSelectCity = (city) => {
        dispatch(addCity(city));
    };

    const onSelectPoint = (point) => {
        dispatch(addPoint(point));
    };

    useEffect(() => {
        const newPointList = cityId
            ? pointList.filter((item) => {
                  if (item.cityId && cityId) {
                      return item.cityId.id === cityId.id;
                  }
              })
            : pointList;
        cityId &&
            pointList.filter((item) => {
                if (item.cityId && cityId) {
                    return item.cityId.id === cityId.id;
                }
            });
        setPointListToSearch(newPointList);
    }, [cityId, pointList]);

    return (
        <>
            <form>
                <Search
                    variants={cityListToSearch}
                    placeholder="Начните вводить город"
                    onSelect={onSelectCity}
                    label="Город"
                    valueFromStore={cityId ? cityId.name : ""}
                />
                <Search
                    variants={pointListToSearch}
                    placeholder="Начните вводить пункт"
                    label="Пункт выдачи"
                    onSelect={onSelectPoint}
                    valueFromStore={pointId ? pointId.address : ""}
                    isPointSearch={true}
                />
            </form>
            <section className={styles.onMap}>
                <h3 className={styles.title}>Выбрать на карте</h3>
                <div className={styles.map}>
                    <img src={mapImage} />
                </div>
            </section>
        </>
    );
};
