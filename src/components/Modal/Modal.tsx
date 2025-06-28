import React from "react";
import styles from "./modal.module.css";
import CloseIcon from "../../assets/close.svg?react";

type Props = {
    /** * Title of the Modal */
    title: string;
    /** * Flag to toggle between open and close state */
    visible: boolean;
    /** * Callback for closing the modal */
    onClose: () => void;
    /** * Content to be rendered inside the modal */
    children: React.ReactNode;
};

const Modal: React.FC<Props> = ({title, visible, onClose, children}) => {
    if (!visible) return null;

    return (
        <div className={styles.backdrop}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles["modal-header"]}>
                    <div className={styles.title}>{title}</div>
                    <CloseIcon className={styles.close} onClick={onClose} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
