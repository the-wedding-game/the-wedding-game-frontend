import { Challenge } from "@/classes/Challenge/Challenge";
import { Badge, Card, CardSection, Group, Image, Text } from "@mantine/core";
import ViewChallengeButton from "@/components/buttons/ViewChallengeButton";
import ChallengeCompletedBadge from "@/components/badges/ChallengeCompletedBadge";

type Props = {
    challenge: Challenge;
};

export default function ChallengeMiniCard(props: Props) {
    const challenge = props.challenge;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className={`max-w-96`}>
            <CardSection>
                <Image
                    src={challenge.image}
                    alt={challenge.name}
                    radius="md"
                    height={200}
                    width={200}
                    className={`w-96 h-96`}
                />
            </CardSection>

            <div className={`flex flex-col justify-between items-baseline h-full`}>
                <div className={`flex flex-col w-full`}>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500} lineClamp={3}>
                            {challenge.name}
                        </Text>
                        <Badge color="pink">{challenge.points}</Badge>
                    </Group>

                    <Text size="sm" c="dimmed">
                        {challenge.description}
                    </Text>
                </div>

                {!challenge.completed && <ViewChallengeButton challengeId={challenge.id} />}

                {challenge.completed && <ChallengeCompletedBadge />}
            </div>
        </Card>
    );
}
