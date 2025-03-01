import { Text } from "@mantine/core";

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
