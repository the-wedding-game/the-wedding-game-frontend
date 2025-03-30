import { MantineColor, Skeleton, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
    readonly weight?: number;
    readonly color?: MantineColor;
};

export default function SmallText(props: Props) {
    const weight = props.weight ?? 400;
    const color = props.color ?? "dimmed";

    return (
        <Text size="sm" c={color} fw={weight}>
            {props.children}
        </Text>
    );
}

export function SmallTextSkeleton(props: { readonly w: string }) {
    return <Skeleton radius={"xl"} w={props.w} h={10} mb={5} />;
}
