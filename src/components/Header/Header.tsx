import React from "react";
import styles from "./header.module.css";
import {SearchBar} from "../SearchBar/SearchBar.tsx";
import {Toggle} from "../Toggle/Toggle.tsx";

type Props = {
    children?: React.ReactNode;
    title: string;
};

export const Header: React.FC<Props> = ({children, title}) => {
    return (
        <>
            <div className={styles.header}>
                <SearchBar />
                <Toggle />
            </div>
            <div className={styles["title"]}>{title}</div>
            {children}
        </>
    );
};
