import { Tabs } from "@mantine/core";
import ChallengesList, { ChallengesListSkeleton } from "@/components/groups/challenge/ChallengesList";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    name: string;
    challenges: Challenge[];
};

export default function ChallengesPanel(props: Props) {
    return (
        <Tabs.Panel value={props.name} className={`p-2`}>
            <ChallengesList challenges={props.challenges} />
        </Tabs.Panel>
    );
}

export type SkeletonProps = {
    name: string;
};
export function ChallengesPanelSkeleton(props: SkeletonProps) {
    return (
        <Tabs.Panel value={props.name} className={`p-2`}>
            <ChallengesListSkeleton />
        </Tabs.Panel>
    );
}
