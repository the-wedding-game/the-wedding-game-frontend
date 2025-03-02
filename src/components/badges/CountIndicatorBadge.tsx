import { Badge, MantineColor, Skeleton } from "@mantine/core";
import React from "react";

type Props = {
    count: number;
    color: MantineColor;
};
export default function CountIndicatorBadge(props: Props) {
    return (
        <Badge color={props.color} radius="xl" {...dimensions}>
            {props.count}
        </Badge>
    );
}

export function CountIndicatorBadgeSkeleton() {
    return <Skeleton radius={"xl"} {...dimensions} />;
}

const dimensions = {
    w: 40,
    h: 20,
};
