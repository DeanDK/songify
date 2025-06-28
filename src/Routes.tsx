import {Routes, Route} from "react-router-dom";
import React from "react";
import Songs from "./features/Songs/Songs.tsx";
import {Layout} from "./components/Layout/Layout.tsx";
import Playlist from "./features/Playlists/Playlist.tsx";

export const RoutesEntry: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/songs" element={<Songs />} />
                <Route path="/playlists" element={<Playlist />} />
                <Route path="/favorites" element={<div>Favorites</div>} />
            </Routes>
        </Layout>
    );
};
