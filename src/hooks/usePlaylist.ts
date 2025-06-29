import {useState, useEffect} from "react";
import {type Playlist, playlists as initialPlaylists} from "../utils/playlists.ts";
import type {Song} from "../types.ts";

const LOCAL_STORAGE_KEY = "playlists";

export const usePlaylists = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        const parsed = stored ? JSON.parse(stored) : null;
        return parsed && parsed.length > 0 ? parsed : initialPlaylists;
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

    const removeSongFromPlaylist = (playlistId: string, songId: string) => {
        setPlaylists((prev) =>
            prev.map((playlist) => {
                if (playlist.id === playlistId) {
                    const newSongs = playlist.songs.filter((s) => s.id !== songId);
                    return {...playlist, songs: newSongs};
                }
                return playlist;
            })
        );
    };

    const addSongToPlaylist = (playlistId: string, song: Song) => {
        setPlaylists((previous) =>
            previous.map((playlist) => {
                if (playlist.id === playlistId) {
                    const songExists = playlist.songs.some((s) => s.id === song.id);
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

    const toggleFavorite = (songId: string) => {
        setPlaylists((previous) =>
            previous.map((playlist) => ({
                ...playlist,
                songs: playlist.songs.map((song) =>
                    song.id === songId ? {...song, favourite: !song.favourite} : song
                )
            }))
        );
    };

    const favoriteSongs: Song[] = playlists.flatMap((playlist) =>
        playlist.songs.filter((song) => song.favourite)
    );

    return {
        playlists,
        addPlaylist,
        updatePlaylist,
        removePlaylist,
        addSongToPlaylist,
        toggleFavorite,
        favoriteSongs,
        removeSongFromPlaylist
    };
};
