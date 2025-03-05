"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import ErrorModal from "@/components/modals/ErrorModal";
import SuccessModal from "@/components/modals/SuccessModal";

type ModalType = "success" | "error" | "info" | "warning";

type ModalContextType = {
    openModal: (title: string, message: string, modalType: ModalType, onCloseAction?: () => void) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalContent, setModalContent] = useState<{ title: string; message: string } | null>(null);
    const [modalType, setModalType] = useState<ModalType>("info");
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const [onCloseAction, setOnCloseAction] = useState<() => () => void>(() => () => {});

    const openModal = (title: string, message: string, type: ModalType, closeAction?: () => void) => {
        setModalContent({ title, message });
        setModalType(type);

        if (closeAction) {
            setOnCloseAction(() => closeAction);
        }

        setModalOpened(true);
    };

    const closeModal = () => {
        setModalOpened(false);
        setModalContent(null);
        setModalType("info");

        onCloseAction();
        setOnCloseAction(() => () => {});
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            {modalContent && modalType === "error" && (
                <ErrorModal
                    title={modalContent.title}
                    message={modalContent.message}
                    opened={modalOpened}
                    onClose={closeModal}
                />
            )}

            {modalContent && modalType === "success" && (
                <SuccessModal
                    title={modalContent.title}
                    message={modalContent.message}
                    opened={modalOpened}
                    onClose={closeModal}
                />
            )}
        </ModalContext.Provider>
    );
};
