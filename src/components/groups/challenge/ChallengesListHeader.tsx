import { Text, Title } from "@mantine/core";

export default function ChallengesListHeader() {
    return (
        <div>
            <Title order={1} className={`text-gray-700`}>
                Challenges
            </Title>
            <Text size="md" className={`text-gray-500`}>
                Complete these challenges to earn points!
            </Text>
        </div>
    );
}
