import React from "react";
import BaseModal from "@/components/modals/BaseModal";

type Props = {
    title: string;
    message: string;
    opened: boolean;
    onClose: () => void;
};

export default function ErrorModal(props: Props) {
    return (
        <BaseModal
            title={props.title}
            message={props.message}
            opened={props.opened}
            onClose={props.onClose}
            buttonText={"Ok :("}
        />
    );
}
