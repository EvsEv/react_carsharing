import React, { useEffect, useRef, useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import ReactMapGL, { FullscreenControl, Marker, Popup } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import { addCity, addPoint } from "../../redux/thunks/location";
import styles from "./map.module.sass";
import Preloader from "../Preloader";

export const Map = () => {
    const mapToken =
        "pk.eyJ1IjoiZXZzZXYiLCJhIjoiY2tucm81ZGExMHYzMjJxbno5eHoxeGljYSJ9.uZ8-ZK6lUrTsPgV2eKOlsw";

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        zoom: 10,
    });
    const [markers, setMarkers] = useState([]);
    const { cityId, pointId } = useSelector((state) => state.order);
    const { pointList, cityList } = useSelector((state) => state.location);
    const dispatch = useDispatch();

    useEffect(() => {
        const updatedPoint = pointList?.filter(
            (item) => item.cityId?.id === cityId?.id
        );
        setMarkers(updatedPoint);
    }, [pointList, cityId]);

    useEffect(() => {
        setViewport((prev) => ({
            ...prev,
            latitude: cityId?.latitude,
            longitude: cityId?.longitude,
            zoom: 10,
        }));
    }, [cityId]);

    useEffect(() => {
        pointId
            ? setViewport((prev) => ({
                  ...prev,
                  latitude: pointId?.coordinate[0],
                  longitude: pointId?.coordinate[1],
                  zoom: 15,
              }))
            : setViewport((prev) => ({
                  ...prev,
                  latitude: cityId?.latitude,
                  longitude: cityId?.longitude,
                  zoom: 10,
              }));
    }, [pointId]);

    const onMarkerClick = (event, item) => {
        event.preventDefault();
        const cityWithCoords = cityList.filter(
            (city) => city?.id === item.cityId?.id
        );
        dispatch(addPoint(item, cityWithCoords[0]));
    };

    const onPopupClose = () => {
        dispatch(addPoint(null));
        const cityWithCoords = cityList.filter(
            (city) => city?.id === pointId.cityId?.id
        );
        dispatch(addCity(cityWithCoords[0]));
    };

    useEffect(() => {
        const whenResize = () => {
            let wrapper = document.getElementById("wrapper");
            console.log(wrapper.offsetWidth);
            setViewport((prev) => ({
                ...prev,
                width: wrapper.offsetWidth,
                height: wrapper.offsetHeight,
            }));
        };
        window.addEventListener("resize", whenResize);

        return () => {
            window.removeEventListener("resize", whenResize);
        };
    }, []);

    return (
        <div className={styles.wrapper} id="wrapper">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={mapToken}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                onViewportChange={(viewport) =>
                    markers && setViewport(viewport)
                }
            >
                {markers?.map((item) => (
                    <Marker
                        key={item.id}
                        latitude={item.coordinate[0]}
                        longitude={item.coordinate[1]}
                    >
                        <button
                            className={styles.point}
                            onClick={(event) => onMarkerClick(event, item)}
                        ></button>
                    </Marker>
                ))}

                {pointId && (
                    <Popup
                        latitude={pointId.coordinate[0]}
                        longitude={pointId.coordinate[1]}
                        onClose={onPopupClose}
                        className={styles.popup}
                    >
                        <h4 className={styles.name}>{pointId.name}</h4>
                        <p className={styles.address}>{pointId.address}</p>
                        <p className={styles.city}>{pointId.cityId.name}</p>
                    </Popup>
                )}

                {!markers?.length && (
                    <div className={styles.block}>
                        {pointList?.find(
                            (point) => point.cityId.name === cityId?.name
                        ) ? (
                            <Preloader />
                        ) : (
                            cityId &&
                            pointList && (
                                <p className={styles.recomendation}>
                                    В настоящий момент в выбраном городе нет
                                    свободных машин
                                </p>
                            )
                        )}
                    </div>
                )}
                {!cityId && (
                    <div className={styles.block}>
                        <p className={styles.recomendation}>
                            Выберите город или пункт
                        </p>
                    </div>
                )}
                <FullscreenControl className={styles.fullscreen} />
            </ReactMapGL>
        </div>
    );
};
