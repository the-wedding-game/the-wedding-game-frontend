import { Button, MantineColor, Modal } from "@mantine/core";
import React, { ReactNode } from "react";
import MediumText from "@/components/text/MediumText";
import LargeText from "@/components/text/LargeText";
import TinyText from "@/components/text/TinyText";

type Props = {
    title: string;
    message: string;
    opened: boolean;
    onClose: () => void;
    buttonText: string;
    headerIcon?: ReactNode;
    additionalDetails?: string;
    buttonColor?: MantineColor;
};

export default function BaseModal(props: Props) {
    const buttonColor = props.buttonColor || "blue";

    return (
        <Modal opened={props.opened} onClose={props.onClose} withCloseButton={false} centered={true} size={"auto"}>
            <div className={`flex flex-row items-start space-x-5`}>
                {props.headerIcon && <div>{props.headerIcon}</div>}

                <div className={`flex flex-col items-start space-y-5 w-full`}>
                    <div className={`flex flex-col items-start space-y-1`}>
                        <LargeText weight={500}>{props.title}</LargeText>
                        <MediumText weight={350}>{props.message}</MediumText>
                        {props.additionalDetails && (
                            <div className={`flex flex-col bg-gray-100 w-full p-2 rounded-sm`}>
                                <TinyText color={"red"} weight={600}>
                                    Debug Details
                                </TinyText>
                                <TinyText>{props.additionalDetails}</TinyText>
                            </div>
                        )}
                    </div>

                    <div className={`flex flex-col w-full items-end`}>
                        <Button variant={"outline"} color={buttonColor} onClick={props.onClose}>
                            {props.buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
