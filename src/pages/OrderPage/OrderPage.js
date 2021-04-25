import React, { useEffect, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../components/Check";
import Detail from "../../components/Detail";
import Location from "../../components/Location";
import NewModel from "../../components/Model";
import OrderData from "../../components/OrderData";
import TabNavigation from "../../components/TabNavigation";
import { clearOrder } from "../../redux/functions/order";
import { changeStage } from "../../redux/functions/stage";

import styles from "./orderPage.module.sass";

export const OrderPage = ({ isWatchOrder }) => {
    const [showData, setShowData] = useState(false);
    const { stage } = useSelector((state) => state.stage);
    const [popupPost, setpopupPost] = useState(false);
    const scrollWrapper = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearOrder());
    }, []);

    useEffect(() => {
        if (isWatchOrder) {
            dispatch(changeStage(4));
        }
    }, [isWatchOrder]);

    function printStage() {
        switch (stage) {
            case 1:
                return <Location />;
            case 2:
                return <NewModel />;
            case 3:
                return <Detail />;
            case 4:
                return (
                    <OrderData
                        popupPost={popupPost}
                        setpopupPost={setpopupPost}
                        isWatchOrder={isWatchOrder}
                    />
                );
            default:
                return;
        }
    }

    const classesWrapper = [styles.wrapper];

    if (showData) {
        classesWrapper.push(styles.hidden);
    }
    const toggleData = () => {
        setShowData(!showData);
        // scrollWrapper.current.scrollTop(0);
    };
    return (
        <main className={styles.main}>
            <TabNavigation isWatchOrder={isWatchOrder} />
            <Scrollbars className={styles.scroll} ref={scrollWrapper}>
                <div className={classesWrapper.join(" ")}>
                    <div className={styles.stage}>{printStage()}</div>
                    <Check
                        showData={showData}
                        setShowData={setShowData}
                        scrollWrapper={scrollWrapper}
                        setpopupPost={setpopupPost}
                        isWatchOrder={isWatchOrder}
                    />
                </div>
            </Scrollbars>
            {stage < 4 && (
                <div className={styles.toggleCheck} onClick={toggleData}>
                    Детали заказа
                </div>
            )}
        </main>
    );
};
