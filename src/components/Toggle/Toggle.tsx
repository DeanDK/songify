import React from "react";
import clsx from "clsx";
import styles from "./toggle.module.css";
import {useTheme} from "../../hooks";

export const Toggle: React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    const isDark = theme === "dark";

    return (
        <button onClick={toggleTheme} className={clsx(styles.toggle, {[styles.active]: isDark})}>
            <div className={styles.circle} />
        </button>
    );
};
