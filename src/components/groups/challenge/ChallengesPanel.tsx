import ChallengesList, { ChallengesListSkeleton } from "@/components/groups/challenge/ChallengesList";
import { Challenge } from "@/classes/Challenge/Challenge";

type Props = {
    readonly challenges: Challenge[];
};

export default function ChallengesPanel(props: Props) {
    return <ChallengesList challenges={props.challenges} />;
}

export function ChallengesPanelSkeleton() {
    return <ChallengesListSkeleton />;
}
