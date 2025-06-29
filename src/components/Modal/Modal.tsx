import React from "react";
import styles from "./modal.module.css";
import CloseIcon from "../../assets/close.svg?react";
import clsx from "clsx";

type Props = {
    title: string;
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    modelHeightClassName: string;
};

const Modal: React.FC<Props> = ({title, visible, onClose, children, modelHeightClassName}) => {
    if (!visible) return null;

    return (
        <div className={styles.backdrop}>
            <div
                className={clsx(styles.modal, modelHeightClassName)}
                onClick={(e) => e.stopPropagation()}
            >
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
