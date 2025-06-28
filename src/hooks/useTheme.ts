import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import type {ThemeContextValue} from "../types.ts";

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
