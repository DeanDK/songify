import React from "react";
import styles from "./MobileLayout.module.css";

export const MobileLayout: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div className={styles.wrapper}>
        {/* optional: mobile nav */}
        <main className={styles.main}>{children}</main>
    </div>
);
