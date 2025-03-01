import { Group } from "@mantine/core";
import ChallengeNameText from "@/components/text/ChallengeNameText";
import PointsBadge from "@/components/badges/PointsBadge";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    challenge: Challenge;
};

export default function ChallengeCardHeader(props: Props) {
    return (
        <Group justify="space-between" mt="md" mb="xs">
            <ChallengeNameText name={props.challenge.name} />
            <PointsBadge points={props.challenge.points} />
        </Group>
    );
}
