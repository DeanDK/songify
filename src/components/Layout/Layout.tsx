import React from "react";
import {useIsMobile} from "../../hooks";
import {DesktopLayout} from "../DesktopLayout/DesktopLayout.tsx";
import {MobileLayout} from "../MobileLayout/MobileLayout.tsx";

export const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
    const isMobile = useIsMobile();

    return isMobile ? (
        <MobileLayout>{children}</MobileLayout>
    ) : (
        <DesktopLayout>{children}</DesktopLayout>
    );
};
