"use client";

import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";
import ErrorModal from "@/components/modals/ErrorModal";
import SuccessModal from "@/components/modals/SuccessModal";

type ModalType = "success" | "error" | "info" | "warning";

export type OpenModalParams = {
    title: string;
    message: string;
    type: ModalType;
    closeAction?: () => void;
    additionalDetails?: string;
};

type ModalContextType = {
    openModal: (params: OpenModalParams) => void;
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

export const ModalProvider = ({ children }: { readonly children: ReactNode }) => {
    const [modalContent, setModalContent] = useState<{ title: string; message: string } | null>(null);
    const [modalType, setModalType] = useState<ModalType>("info");
    const [onCloseAction, setOnCloseAction] = useState<() => () => void>(() => () => {});
    const [additionalDetails, setAdditionalDetails] = useState<string | undefined>(undefined);

    const openModal = (params: OpenModalParams) => {
        setModalContent({ title: params.title, message: params.message });
        setModalType(params.type);

        if (params.closeAction) {
            setOnCloseAction(() => params.closeAction!);
        }

        if (params.additionalDetails) {
            setAdditionalDetails(params.additionalDetails);
        }
    };

    const closeModal = () => {
        setModalContent(null);
        setModalType("info");

        onCloseAction();
        setOnCloseAction(() => () => {});
        setAdditionalDetails(undefined);
    };

    const openModalCallback = useCallback(openModal, []);
    const closeModalCallback = useCallback(closeModal, [onCloseAction]);

    return (
        <ModalContext.Provider value={{ openModal: openModalCallback, closeModal: closeModalCallback }}>
            {children}

            <ErrorModal
                title={modalContent?.title || "Error"}
                message={modalContent?.message || "An unknown error occurred"}
                opened={modalType === "error"}
                onClose={closeModal}
                additionalDetails={additionalDetails}
            />

            <SuccessModal
                title={modalContent?.title || "Success"}
                message={modalContent?.message || "Task has been completed successfully"}
                opened={modalType === "success"}
                onClose={closeModal}
            />
        </ModalContext.Provider>
    );
};
