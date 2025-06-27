import React from "react";
import styles from "./DesktopLayout.module.css";
import {Sidebar} from "../Sidebar/Sidebar.tsx";

type Props = {
    /** * Content to be rendered inside the layout */
    children: React.ReactNode;
};

export const DesktopLayout: React.FC<Props> = ({children}) => (
    <div className={styles.container}>
        <Sidebar />
        <main className={styles.main}>{children}</main>
    </div>
);
