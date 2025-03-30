import { Skeleton, Title } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    readonly children: ReactNode;
};

export default function TitleText(props: Props) {
    return (
        <Title order={2} className={`text-gray-700`} {...dimensions}>
            {props.children}
        </Title>
    );
}

export function TitleTextSkeleton(props: { readonly w: string }) {
    return <Skeleton radius={"xl"} w={props.w} {...dimensions} />;
}

const dimensions = {
    h: 36,
};
