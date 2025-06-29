import React from "react";
import styles from "./MobileLayout.module.css";
import Footer from "../Footer/Footer.tsx";

export const MobileLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    </div>
);
