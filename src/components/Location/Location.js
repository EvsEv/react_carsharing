import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./location.module.sass";

import mapImage from "../../assets/images/mapImage.jpg";
import { setSelectedCity, setSelectedPoint } from "../../redux/actions";

export const Location = () => {
    const location = useSelector((state) => state.location);
    const dispatch = useDispatch();

    const inputCity = useRef();
    const inputPoint = useRef();

    return (
        <div>
            <form className={styles.inputData}>
                <div className={styles.select}>
                    <input
                        id="currentCity"
                        type="text"
                        placeholder="Выберите город"
                        ref={inputCity}
                        defaultValue={location.geolocation}
                        onChange={(e) =>
                            dispatch(setSelectedCity(e.target.value))
                        }
                    />
                    <label htmlFor="currentCity">Город </label>
                    <span
                        className={styles.close}
                        onClick={() => {
                            dispatch(setSelectedCity(""));
                            inputCity.current.value = "";
                        }}
                    ></span>
                </div>
                <div className={styles.select}>
                    <input
                        id="pickUpPoint"
                        type="text"
                        placeholder="Начните вводить пункт"
                        ref={inputPoint}
                        value={location.selectedPoint}
                        onChange={(e) =>
                            dispatch(setSelectedPoint(e.target.value))
                        }
                    />
                    <label htmlFor="pickUpPoint">Пункт выдачи </label>
                    <span
                        className={styles.close}
                        onClick={() => dispatch(setSelectedPoint(""))}
                    ></span>
                </div>
            </form>
            <section className={styles.onMap}>
                <h3 className={styles.title}>Выбрать на карте</h3>
                <div className={styles.map}>
                    <img src={mapImage} />
                </div>
            </section>
        </div>
    );
};
