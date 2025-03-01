import { Badge, MantineColor } from "@mantine/core";
import React from "react";

type Props = {
    count: number;
    color: MantineColor;
};
export default function CountIndicatorBadge(props: Props) {
    return (
        <Badge color={props.color} radius="xl">
            {props.count}
        </Badge>
    );
}
