import { Tabs } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengesTab from "@/components/groups/challenge/ChallengesTab";
import ChallengesPanel from "@/components/groups/challenge/ChallengesPanel";

type Props = {
    challenges: Challenge[];
};

export default function ChallengesTabs(props: Props) {
    const incompleteChallenges = props.challenges.filter((challenge) => !challenge.completed);
    const completeChallenges = props.challenges.filter((challenge) => challenge.completed);

    return (
        <Tabs defaultValue={"To do"} variant={"default"} orientation={"horizontal"}>
            <Tabs.List>
                <ChallengesTab name={"To do"} count={incompleteChallenges.length} color={"blue"} />
                <ChallengesTab name={"Completed"} count={completeChallenges.length} color={"green"} />
            </Tabs.List>

            <ChallengesPanel challenges={incompleteChallenges} name={"To do"} />
            <ChallengesPanel challenges={completeChallenges} name={"Completed"} />
        </Tabs>
    );
}
