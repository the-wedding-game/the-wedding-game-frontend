import React from "react";
import BaseModal from "@/components/modals/BaseModal";
import { IconProgressCheck } from "@tabler/icons-react";

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
            buttonText={"OK :)"}
            headerIcon={<SuccessIcon />}
        />
    );
}

function SuccessIcon() {
    return (
        <div className={`flex p-2 bg-green-200 rounded-full`}>
            <IconProgressCheck color={"green"} opacity={0.8} />
        </div>
    );
}
