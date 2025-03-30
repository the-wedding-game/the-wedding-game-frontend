import { Skeleton, Title } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export default function HeadingText(props: Props) {
    return (
        <Title order={1} className={`text-gray-700`}>
            {props.children}
        </Title>
    );
}

export function HeadingTextSkeleton(props: { readonly w: string }) {
    return <Skeleton radius={"xl"} w={props.w} height={40} />;
}
