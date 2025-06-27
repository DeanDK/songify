import React from "react";
import styles from "./container.module.css";

type Props = {
    /** * Content to be rendered inside the layout */
    children: React.ReactNode;
};

const Container: React.FC<Props> = ({children}) => {
    return <div className={styles["container"]}>{children}</div>;
};

export default Container;
