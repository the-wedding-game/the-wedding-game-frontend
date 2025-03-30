import { Tabs } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengesTab, { ChallengesTabSkeleton } from "@/components/groups/challenge/ChallengesTab";
import ChallengesPanel, { ChallengesPanelSkeleton } from "@/components/groups/challenge/ChallengesPanel";
import AnimationFade from "@/components/framer-motion/AnimationFade";
import { useState } from "react";
import AnimationWrapper from "@/components/framer-motion/AnimationWrapper";

type Props = {
    readonly challenges: Challenge[];
};

export default function ChallengesTabs(props: Props) {
    const incompleteChallenges = props.challenges.filter((challenge) => !challenge.completed);
    const completedChallenges = props.challenges.filter((challenge) => challenge.completed);
    const [activeTab, setActiveTab] = useState<string | null>("To do");

    return (
        <div className="flex flex-col space-y-4">
            <Tabs value={activeTab} onChange={setActiveTab} orientation={"horizontal"}>
                <Tabs.List>
                    <ChallengesTab name={"To do"} count={incompleteChallenges.length} color={"blue"} />
                    <ChallengesTab name={"Completed"} count={completedChallenges.length} color={"green"} />
                </Tabs.List>
            </Tabs>

            <AnimationWrapper>
                {activeTab === "To do" && (
                    <AnimationFade key={"To do"}>
                        <ChallengesPanel challenges={incompleteChallenges} />
                    </AnimationFade>
                )}

                {activeTab === "Completed" && (
                    <AnimationFade key={"Completed"}>
                        <ChallengesPanel challenges={completedChallenges} />
                    </AnimationFade>
                )}
            </AnimationWrapper>
        </div>
    );
}

export function ChallengesTabsSkeleton() {
    return (
        <div className="flex flex-col space-y-4">
            <Tabs orientation={"horizontal"}>
                <Tabs.List>
                    <ChallengesTabSkeleton name={"To do"} color={"blue"} />
                    <ChallengesTabSkeleton name={"Completed"} color={"green"} />
                </Tabs.List>
            </Tabs>

            <ChallengesPanelSkeleton />
        </div>
    );
}
