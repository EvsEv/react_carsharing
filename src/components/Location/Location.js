import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addCity,
    addPoint,
    getCityList,
    getPointList,
} from "../../redux/thunks/location";
import { Search } from "../Input/Search/Search";

import styles from "./location.module.sass";
import Map from "../Map";

export const Location = () => {
    const { cityList, pointList } = useSelector((state) => state.location);
    const { cityId, pointId } = useSelector((state) => state.order);
    const [pointListToSearch, setPointListToSearch] = useState([]);
    const [cityListToSearch, setCityListToSearch] = useState([]);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getCityList());
    }, []);

    useEffect(() => {
        dispatch(getPointList());
    }, [cityList]);

    useEffect(() => {
        setCityListToSearch(cityList);
    }, [pointList, cityList]);

    const onSelectCity = (city) => {
        dispatch(addCity(city));
    };

    const onSelectPoint = (point) => {
        const cityOfPoint = cityList.filter(
            (city) => city?.id === point?.cityId?.id
        );
        dispatch(addPoint(point, cityOfPoint[0]));
    };

    useEffect(() => {
        const newPointList = cityId
            ? pointList?.filter((item) => {
                  if (item.cityId && cityId) {
                      return item.cityId.id === cityId.id;
                  }
              })
            : pointList;
        cityId &&
            pointList?.filter((item) => {
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
                <div className={[styles.map, "mapboxgl-map"].join(" ")}>
                    <Map points={pointListToSearch} cities={cityListToSearch} />
                </div>
            </section>
        </>
    );
};
