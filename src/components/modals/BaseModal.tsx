import { Button, Modal, Text, Title } from "@mantine/core";
import React from "react";

type Props = {
    title: string;
    message: string;
    opened: boolean;
    onClose: () => void;
    buttonText: string;
};

export default function BaseModal(props: Props) {
    return (
        <Modal
            opened={props.opened}
            onClose={props.onClose}
            withCloseButton={false}
            transitionProps={{ transition: "fade", duration: 600, timingFunction: "linear" }}
            centered={true}
        >
            <div className={`flex flex-col space-y-5 items-start`}>
                <div className={`flex flex-col space-y-2 items-start`}>
                    <Title order={3}>{props.title}</Title>
                    <Text>{props.message}</Text>
                </div>

                <Button onClick={props.onClose} className={`w-1`}>
                    {props.buttonText}
                </Button>
            </div>
        </Modal>
    );
}
