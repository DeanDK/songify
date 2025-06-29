import React from "react";
import {Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.tsx";
import Songs from "./features/Songs/Songs.tsx";
import Playlist from "./features/Playlists/Playlist.tsx";
import Favorites from "./features/Favorites/Favorites.tsx";

export const RoutesEntry: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/songs" element={<Songs />} />
                <Route path="/playlists" element={<Playlist />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Layout>
    );
};
