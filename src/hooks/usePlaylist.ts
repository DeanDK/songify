import {useState, useEffect} from "react";
import type {Playlist} from "../utils/playlists.ts";
import type {Song} from "../types.ts";

const LOCAL_STORAGE_KEY = "playlists";

export const usePlaylists = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(playlists));
    }, [playlists]);

    const addPlaylist = (newPlaylist: Playlist) => {
        setPlaylists((previous) => [newPlaylist, ...previous]);
    };

    const updatePlaylist = (id: string, updated: Partial<Playlist>) => {
        setPlaylists((previous) =>
            previous.map((prev) => (prev.id === id ? {...prev, ...updated} : prev))
        );
    };

    const removePlaylist = (id: string) => {
        setPlaylists((previous) => previous.filter((prev) => prev.id !== id));
    };

    const addSongToPlaylist = (playlistId: string, song: Song) => {
        setPlaylists((previous) =>
            previous.map((playlist) => {
                if (playlist.id === playlistId) {
                    const songExists = playlist.songs.some((s) => s.id === song.id);

                    console.log(songExists);

                    if (!songExists) {
                        return {
                            ...playlist,
                            songs: [...playlist.songs, song]
                        };
                    }
                }
                return playlist;
            })
        );
    };

    return {
        playlists,
        addPlaylist,
        updatePlaylist,
        removePlaylist,
        addSongToPlaylist
    };
};
