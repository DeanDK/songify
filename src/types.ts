type Theme = "light" | "dark";

export type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
};

export type Song = {
    id: string;
    title: string;
    artist: string;
    duration: string;
};
