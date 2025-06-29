import React, {useState} from "react";
import {Header} from "../../components/Header/Header.tsx";
import {PlaylistActionButton} from "../../components/PlaylistActionButton/PlaylistActionButton.tsx";
import {playlists} from "../../utils/playlists.ts";
import {ExpandablePlaylist} from "../../components/ExpendablePlaylist/ExpendablePlaylist.tsx";
import styles from "./playlist.module.css";
import {useIsMobile} from "../../hooks";

const Playlists: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const isMobile = useIsMobile();

    const filteredPlaylists = playlists.filter((playlist) =>
        playlist.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Header title="My Playlist" onChange={(e) => setSearchQuery(e.target.value)}>
                <div>
                    <PlaylistActionButton
                        title={isMobile ? "New playlist" : "Create new playlist"}
                        marginTop="35px"
                    />
                    <div className={styles["wrapper"]}>
                        {filteredPlaylists.map((playlist) => (
                            <ExpandablePlaylist
                                key={playlist.id}
                                title={playlist.title}
                                songs={playlist.songs}
                                playlistWidthClassName={
                                    isMobile ? styles["width-210"] : styles["width-669"]
                                }
                                widthClassName={styles["width-665"]}
                            />
                        ))}
                    </div>
                </div>
            </Header>
        </>
    );
};

export default Playlists;
