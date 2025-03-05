import React from "react";
import BaseModal from "@/components/modals/BaseModal";
import { IconExclamationCircleFilled } from "@tabler/icons-react";

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
            buttonColor={"red"}
            headerIcon={<ErrorIcon />}
        />
    );
}

function ErrorIcon() {
    return (
        <div className={`flex p-2 bg-red-200 rounded-full`}>
            <IconExclamationCircleFilled color={"red"} opacity={0.8} />
        </div>
    );
}
