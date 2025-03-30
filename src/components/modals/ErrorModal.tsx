import React from "react";
import BaseModal from "@/components/modals/BaseModal";
import ErrorIcon from "@/components/icons/ErrorIcon";

type Props = {
    title: string;
    message: string;
    opened: boolean;
    onClose: () => void;
    additionalDetails?: string;
};

export default function ErrorModal(props: Props) {
    return (
        <BaseModal
            title={props.title}
            message={props.message}
            opened={props.opened}
            onClose={props.onClose}
            buttonText={"Ok :("}
            buttonColor={"red"}
            headerIcon={<ErrorIcon />}
            additionalDetails={props.additionalDetails}
        />
    );
}
