import FormTitle from "@/components/text/FormTitle";
import CreateChallengeFormInner from "@/components/forms/create-challenge/CreateChallengeFormInner";

export default function CreateChallengeFormOuter() {
    return (
        <div className={`flex flex-col space-y-5`}>
            <FormTitle title="Create a new challenge" />
            <CreateChallengeFormInner />
        </div>
    );
}
