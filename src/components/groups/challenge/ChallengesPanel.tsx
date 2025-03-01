import { Tabs } from "@mantine/core";
import ChallengesList from "@/components/groups/challenge/ChallengesList";
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
