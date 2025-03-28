import TitleText from "@/components/text/TitleText";
import { Challenge } from "@/classes/Challenge/Challenge";
import EditChallengeFormInner from "@/components/forms/edit-challenge/EditChallengeFormInner";
import ChallengeStatusBadge from "@/components/badges/ChallengeStatusBadge";

type Props = {
    challenge: Challenge;
};

export default function EditChallengeFormOuter(props: Props) {
    return (
        <div className={`flex flex-col space-y-5`}>
            <div className="flex flex-row justify-between items-center">
                <TitleText>Edit {props.challenge.name}</TitleText>
                <ChallengeStatusBadge challenge={props.challenge} />
            </div>
            <EditChallengeFormInner challenge={props.challenge} />
        </div>
    );
}
