import React from "react";
import styles from "./header.module.css";
import {SearchBar} from "../SearchBar/SearchBar.tsx";
import {Toggle} from "../Toggle/Toggle.tsx";
import {useLocation} from "react-router-dom";

type Props = {
    children?: React.ReactNode;
    title: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Header: React.FC<Props> = ({children, title, onChange}) => {
    const location = useLocation();
    const isSongsPage = location.pathname === "/songs";

    return (
        <>
            <div className={styles.header}>
                <SearchBar onChange={onChange} />
                {isSongsPage && <Toggle />}
            </div>
            <div className={styles.title}>{title}</div>
            {children}
        </>
    );
};
