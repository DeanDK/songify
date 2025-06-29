import React, {useState} from "react";
import {Header} from "../../components/Header/Header.tsx";
import PlaylistRow from "../../components/PlaylistRow/PlaylistRow.tsx";
import AddIcon from "../../assets/Add.svg?react";
import {playlists} from "../../utils/playlists.ts";
import styles from "./favorites.module.css";
import {useIsMobile} from "../../hooks";

const Favorites: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const isMobile = useIsMobile();

    const favoriteSongs = playlists
        .flatMap((playlist) => playlist.songs)
        .filter((song) => song.favourite);

    const filteredFavorites = favoriteSongs.filter(
        (song) =>
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Header title="Favorites" onChange={(e) => setSearchQuery(e.target.value)} />
            <div className={styles.wrapper}>
                {filteredFavorites.map((song) => (
                    <PlaylistRow
                        key={song.id}
                        artist={song.artist}
                        title={song.title}
                        duration={song.duration}
                        actions={[<AddIcon className={styles.icon} />]}
                        widthClassName={isMobile ? styles["width-170"] : styles["width-665"]}
                    />
                ))}
            </div>
        </>
    );
};

export default Favorites;
