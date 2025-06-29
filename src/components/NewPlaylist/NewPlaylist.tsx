import React, {useState} from "react";
import styles from "./newPlaylist.module.css";

type Props = {
    onCreate: (title: string) => void;
};

const NewPlaylist: React.FC<Props> = ({onCreate}) => {
    const [title, setTitle] = useState("");

    const handleCreate = () => {
        if (title.trim()) {
            onCreate(title.trim());
            setTitle("");
        }
    };

    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                className={styles.input}
                placeholder="Playlist Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className={styles.button} onClick={handleCreate}>
                New playlist
            </button>
        </div>
    );
};

export default NewPlaylist;
