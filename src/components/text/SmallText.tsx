import { Skeleton, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function SmallText(props: Props) {
    return (
        <Text size="sm" c="dimmed">
            {props.children}
        </Text>
    );
}

export function SmallTextSkeleton(props: { w: string }) {
    return <Skeleton radius={"xl"} w={props.w} h={10} mb={5} />;
}
