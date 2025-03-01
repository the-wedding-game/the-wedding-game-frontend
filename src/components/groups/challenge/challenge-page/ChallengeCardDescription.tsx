import { Text } from "@mantine/core";

type Props = {
    description: string;
};

export default function ChallengePageDescription(props: Props) {
    return (
        <Text size="md" className={`text-gray-500`}>
            {props.description}
        </Text>
    );
}
