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
            openModal({
                title: "Oopsie! ☹️",
                message: ANSWER_VERIFICATION_MESSAGES.NO_ANSWER[props.challenge.type],
                type: "error",
            });
            return false;
        }

        const answerObj = new Answer(Number(props.challenge.id), answer);
        try {
            if (await answerObj.verify()) {
                openModal({
                    title: "Woo hoo!",
                    message: ANSWER_VERIFICATION_MESSAGES.SUCCESS[props.challenge.type],
                    type: "success",
                    closeAction: () => (window.location.href = "/"),
                });
                return true;
            } else {
                openModal({
                    title: "Oopsie! ☹️",
                    message: ANSWER_VERIFICATION_MESSAGES.FAILURE[props.challenge.type],
                    type: "error",
                    additionalDetails: "fuck off nerd",
                });
                return false;
            }
        } catch (e) {
            openModal({
                title: "Oopsie! ☹️",
                message: ANSWER_VERIFICATION_MESSAGES.ERROR[props.challenge.type],
                type: "error",
                additionalDetails: e instanceof Error ? e.message + e.stack : "",
            });
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
