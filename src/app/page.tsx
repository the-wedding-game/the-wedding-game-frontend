"use client";

import ChallengeMiniCard from "@/components/ChallengeMiniCard";
import { Loader, Text, Title } from "@mantine/core";
import WelcomeBar from "@/components/WelcomeBar";
import { useAllChallenges } from "@/classes/Challenge/AllChallengesHook";

export default function Home() {
    const challenges = useAllChallenges();

    return (
        <div className={`flex flex-col space-y-10`}>
            <WelcomeBar />

            <div className={`flex flex-col space-y-5`}>
                <div>
                    <Title order={1} className={`text-gray-700`}>
                        Challenges
                    </Title>
                    <Text size="md" className={`text-gray-500`}>
                        Complete these challenges to earn points!
                    </Text>
                </div>

                {challenges !== null && challenges.length !== 0 && (
                    <div className={`grid grid-cols-3 gap-8 justify-start`}>
                        {challenges.map((challenge, index) => (
                            <ChallengeMiniCard key={index} challenge={challenge} />
                        ))}
                    </div>
                )}

                {challenges === null && <Loader />}
            </div>
        </div>
    );
}
