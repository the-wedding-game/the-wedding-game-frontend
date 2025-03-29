import HeadingText from "@/components/text/HeadingText";
import MediumText from "@/components/text/MediumText";
import CreateChallengeButton from "@/components/buttons/CreateChallengeButton";

export default function ChallengesTableHeader() {
    return (
        <div className={`flex flex-row justify-between items-center sm:flex-col sm:items-start sm:space-y-5`}>
            <div>
                <HeadingText>Challenges</HeadingText>
                <MediumText>Here are the list of challenges in your workspace</MediumText>
            </div>

            <CreateChallengeButton />
        </div>
    );
}
