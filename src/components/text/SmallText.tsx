import { MantineColor, Skeleton, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    weight?: number;
    color?: MantineColor;
};

export default function SmallText(props: Props) {
    const weight = props.weight || 400;
    const color = props.color || "dimmed";

    return (
        <Text size="sm" c={color} fw={weight}>
            {props.children}
        </Text>
    );
}

export function SmallTextSkeleton(props: { w: string }) {
    return <Skeleton radius={"xl"} w={props.w} h={10} mb={5} />;
}
