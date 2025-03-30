import { Skeleton, Text } from "@mantine/core";

type Props = {
    readonly description: string;
};

export default function ChallengePageDescription(props: Props) {
    return (
        <Text size="md" className={`text-gray-500`}>
            {props.description}
        </Text>
    );
}

export function ChallengePageDescriptionSkeleton() {
    return (
        <div className={`space-y-2`}>
            <Skeleton radius={"xl"} w={"100%"} h={15} />
            <Skeleton radius={"xl"} w={"100%"} h={15} />
            <Skeleton radius={"xl"} w={"50%"} h={15} />
        </div>
    );
}
