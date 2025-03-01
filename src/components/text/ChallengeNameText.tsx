import { Text } from "@mantine/core";

type Props = {
    name: string;
};

export default function ChallengeNameText(props: Props) {
    return (
        <Text fw={500} lineClamp={3}>
            {props.name}
        </Text>
    );
}
