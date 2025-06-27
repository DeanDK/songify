import {Routes, Route} from "react-router-dom";
import React from "react";
import Songs from "./features/Songs/Songs.tsx";
import {Layout} from "./components/Layout/Layout.tsx";

export const RoutesEntry: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/songs" element={<Songs />} />
                <Route path="/playlists" element={<div>Playlists</div>} />
                <Route path="/favorites" element={<div>Favorites</div>} />
            </Routes>
        </Layout>
    );
};
