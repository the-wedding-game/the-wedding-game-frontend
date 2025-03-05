import { MantineColor, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    weight?: number;
    color?: MantineColor;
};

export default function TinyText(props: Props) {
    const weight = props.weight || 400;
    const color = props.color || "dimmed";

    return (
        <Text size="xs" c={color} fw={weight}>
            {props.children}
        </Text>
    );
}
