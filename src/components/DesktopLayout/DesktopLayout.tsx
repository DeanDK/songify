import React from "react";
import styles from "./DesktopLayout.module.css";
import {Sidebar} from "../Sidebar/Sidebar.tsx";

type Props = {
    children: React.ReactNode;
};

export const DesktopLayout: React.FC<Props> = ({children}) => (
    <div className={styles.container}>
        <Sidebar />
        <main className={styles.main}>{children}</main>
    </div>
);
