import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";
import Check from "../../components/Check";
import Detail from "../../components/Detail";
import Location from "../../components/Location";
import NewModel from "../../components/Model";
import OrderData from "../../components/OrderData";
import TabNavigation from "../../components/TabNavigation";

import styles from "./orderPage.module.sass";

export const OrderPage = () => {
    const stage = useSelector((state) => state.stage);
    function printStage() {
        switch (stage.stage) {
            case 1:
                return <Location />;
            case 2:
                return <NewModel />;
            case 3:
                return <Detail />;
            case 4:
                return <OrderData />;
            default:
                return;
        }
    }

    return (
        <main className={styles.main}>
            <TabNavigation />
            <Scrollbars className={styles.scroll}>
                <div className={styles.wrapper}>
                    <div className={styles.stage}>{printStage()}</div>
                    <Check />
                </div>
            </Scrollbars>
        </main>
    );
};
