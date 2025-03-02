import TitleText from "@/components/text/TitleText";
import CreateChallengeFormInner from "@/components/forms/create-challenge/CreateChallengeFormInner";

export default function CreateChallengeFormOuter() {
    return (
        <div className={`flex flex-col space-y-5`}>
            <TitleText>Create a new challenge</TitleText>
            <CreateChallengeFormInner />
        </div>
    );
}
