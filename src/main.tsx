import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./styles/globals.css";
import {ThemeProvider} from "./components/context/ThemeContext.tsx";
import Container from "./components/Container/Container.tsx";
import {RoutesEntry} from "./Routes.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Container>
                    <RoutesEntry />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
