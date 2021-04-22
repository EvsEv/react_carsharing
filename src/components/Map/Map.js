import React, { useEffect, useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import ReactMapGL, { Marker } from "react-map-gl";
import { useSelector } from "react-redux";
import styles from "./map.module.sass";

export const Map = () => {
    const mapToken =
        "pk.eyJ1IjoiZXZzZXYiLCJhIjoiY2tucm81ZGExMHYzMjJxbno5eHoxeGljYSJ9.uZ8-ZK6lUrTsPgV2eKOlsw";

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        zoom: 7,
    });
    const [markers, setMarkers] = useState([]);
    const { cityId } = useSelector((state) => state.order);
    const { pointList } = useSelector((state) => state.location);

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
        }));
    }, [cityId]);
    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={mapToken}
                style={{ position: "absolute", top: 0, left: 0 }}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                {markers?.map((item) => (
                    <Marker
                        key={item.id}
                        latitude={item.coordinate[0]}
                        longitude={item.coordinate[1]}
                    >
                        <button
                            style={{
                                width: "50px",
                                height: "50px",
                                background: "red",
                            }}
                        ></button>
                    </Marker>
                ))}
            </ReactMapGL>
            )
        </div>
    );
};
