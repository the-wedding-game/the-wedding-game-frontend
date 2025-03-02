import { Skeleton, Text } from "@mantine/core";
import React from "react";

type Props = {
    label: string;
};

export default function ImageUploadLabel(props: Props) {
    return (
        <div className={`flex flex-row space-x-1`}>
            <Text size="sm" fw={500} className={`text-gray-700  font-bold`}>
                {props.label}
            </Text>
            <Text size="sm" fw={500} c={`red`}>
                *
            </Text>
        </div>
    );
}

export function ImageUploadLabelSkeleton() {
    return <Skeleton radius={"xl"} w={100} h={15} />;
}
