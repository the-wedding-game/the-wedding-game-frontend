import { Challenge } from "@/classes/Challenge/Challenge";
import React from "react";
import { ANSWER_VERIFICATION_MESSAGES } from "@/constants/challenges";
import { Answer } from "@/classes/Answer/Answer";
import { useModal } from "@/components/modals/Modal";
import SubmitAnswerSubmission from "@/components/forms/submit-answer/SubmitAnswerSubmission";
import SubmitPhotoSubmission, {
    SubmitPhotoSubmissionSkeleton,
} from "@/components/forms/submit-photo/SubmitPhotoSubmission";

type Props = {
    challenge: Challenge;
};

// TODO: simplify this component logic
export default function ChallengeSubmissionGroup(props: Props) {
    const { openModal } = useModal();

    async function submitAnswer(answer: string | null): Promise<boolean> {
        if (!answer) {
            openModal("Oopsie! ☹️", ANSWER_VERIFICATION_MESSAGES.NO_ANSWER[props.challenge.type], "error");
            return false;
        }

        const answerObj = new Answer(Number(props.challenge.id), answer);
        try {
            if (await answerObj.verify()) {
                openModal(
                    "Woo hoo!",
                    ANSWER_VERIFICATION_MESSAGES.SUCCESS[props.challenge.type],
                    "success",
                    () => (window.location.href = "/"),
                );
                return true;
            } else {
                openModal("Oopsie! ☹️", ANSWER_VERIFICATION_MESSAGES.FAILURE[props.challenge.type], "error");
                return false;
            }
        } catch (e) {
            console.log(e);
            openModal("Oopsie! ☹️", ANSWER_VERIFICATION_MESSAGES.ERROR[props.challenge.type], "error");
        }

        return false;
    }

    return (
        <>
            {props.challenge.type === "ANSWER_QUESTION" && <SubmitAnswerSubmission submitAnswer={submitAnswer} />}
            {props.challenge.type === "UPLOAD_PHOTO" && <SubmitPhotoSubmission submitAnswer={submitAnswer} />}
        </>
    );
}

export function ChallengeSubmissionGroupSkeleton() {
    return <SubmitPhotoSubmissionSkeleton />;
}
