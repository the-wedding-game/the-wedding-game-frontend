import { Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    weight?: number;
};

export default function LargeText(props: Props) {
    const fw = props.weight ? props.weight : 400;

    return (
        <Text fw={fw} lineClamp={3} size={"lg"}>
            {props.children}
        </Text>
    );
}
