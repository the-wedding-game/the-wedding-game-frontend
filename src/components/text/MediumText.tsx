import { Skeleton, Text } from "@mantine/core";

type Props = {
    name: string;
};

export default function MediumText(props: Props) {
    return (
        <Text fw={500} lineClamp={3}>
            {props.name}
        </Text>
    );
}

export function MediumTextSkeleton(props: { w: string }) {
    return <Skeleton radius={"xl"} w={props.w} height={20} mb={10} />;
}
