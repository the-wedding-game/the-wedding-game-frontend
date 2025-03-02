import { Skeleton, Title } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function TitleText(props: Props) {
    return (
        <Title order={2} className={`text-gray-700`} {...dimensions}>
            {props.children}
        </Title>
    );
}

export function TitleTextSkeleton(props: { w: string }) {
    return <Skeleton radius={"xl"} w={props.w} {...dimensions} />;
}

const dimensions = {
    h: 36,
};
