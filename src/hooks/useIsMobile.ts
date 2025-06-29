import {useEffect, useState} from "react";

const MOBILE_RESOLUTION = 768;

export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= MOBILE_RESOLUTION);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= MOBILE_RESOLUTION);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};
