import { Button } from "@mantine/core";
import React from "react";

type Props = {
    readonly removeImage: () => void;
};

export default function ImageRemoveButton(props: Props) {
    return (
        <Button type="button" variant="light" size="xs" onClick={props.removeImage}>
            Remove
        </Button>
    );
}
