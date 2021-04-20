import React from "react";
import Submit from "../Button/Submit";

import styles from "./popup.module.sass";

export const Popup = ({ setpopupPost }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.wrapper}>
                <h2>Подтвердите заказ</h2>
                <div className={styles.buttons}>
                    <Submit text="Подтвердить" />
                    <Submit
                        text="Вернуться"
                        style="color-2"
                        action={setpopupPost}
                    />
                </div>
            </div>
        </div>
    );
};
