import { Skeleton, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
    readonly weight?: number;
};

export default function MediumText(props: Props) {
    const fw = props.weight ? props.weight : 400;

    return (
        <Text fw={fw} lineClamp={3}>
            {props.children}
        </Text>
    );
}

export function MediumTextSkeleton(props: { readonly w: string }) {
    return <Skeleton radius={"xl"} w={props.w} height={20} mb={10} />;
}
