import { Skeleton, Text } from "@mantine/core";

type Props = {
    description: string;
};

export default function ChallengeCardDescription(props: Props) {
    return (
        <Text size="sm" c="dimmed">
            {props.description}
        </Text>
    );
}

export function ChallengeCardDescriptionSkeleton() {
    return (
        <div className={`space-y-2`}>
            <Skeleton radius={"xl"} w={"100%"} h={10} />
            <Skeleton radius={"xl"} w={"100%"} h={10} />
            <Skeleton radius={"xl"} w={"50%"} h={10} />
        </div>
    );
}
