import React, {createContext, useEffect, useState} from "react";
import type {ThemeContextValue} from "../../types.ts";

type Theme = "light" | "dark";

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
    /** * Components to be rendered inside the context */
    children: React.ReactNode;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const getSystemTheme = (): Theme => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        return stored ?? getSystemTheme();
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((previous) => (previous === "light" ? "dark" : "light"));

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};
