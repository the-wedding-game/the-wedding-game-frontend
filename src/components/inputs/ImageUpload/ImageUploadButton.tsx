import { Button, Skeleton } from "@mantine/core";
import React from "react";

type Props = {
    onClick: () => void;
};

export default function ImageUploadButton(props: Props) {
    return (
        <Button type="button" variant="light" size="sm" onClick={props.onClick} {...dimensions}>
            Upload
        </Button>
    );
}

export function ImageUploadButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 140,
    h: 40,
};
