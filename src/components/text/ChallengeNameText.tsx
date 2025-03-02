import { Skeleton, Text } from "@mantine/core";

type Props = {
    name: string;
};

export default function ChallengeNameText(props: Props) {
    return (
        <Text fw={500} lineClamp={3} {...dimensions}>
            {props.name}
        </Text>
    );
}

export function ChallengeNameTextSkeleton() {
    return <Skeleton radius={"xl"} {...dimensions} />;
}

const dimensions = {
    w: 250,
    h: 20,
};
