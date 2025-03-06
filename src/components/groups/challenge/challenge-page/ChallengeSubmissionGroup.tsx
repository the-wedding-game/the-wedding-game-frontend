import { Challenge } from "@/classes/Challenge/Challenge";
import React from "react";
import { ANSWER_VERIFICATION_MESSAGES } from "@/constants/challenges";
import { Answer } from "@/classes/Answer/Answer";
import { useModal } from "@/components/modals/Modal";
import SubmitAnswerSubmission from "@/components/forms/submit-answer/SubmitAnswerSubmission";
import SubmitPhotoSubmission, {
    SubmitPhotoSubmissionSkeleton,
} from "@/components/forms/submit-photo/SubmitPhotoSubmission";
import { getErrorModal, getSuccessModal } from "@/constants/modal-templates";

type Props = {
    challenge: Challenge;
};

export default function ChallengeSubmissionGroup(props: Props) {
    const { openModal } = useModal();

    async function submitAnswer(answer: string | null): Promise<boolean> {
        if (!answer) {
            openModal(getErrorModal(ANSWER_VERIFICATION_MESSAGES.NO_ANSWER[props.challenge.type]));
            return false;
        }

        const answerObj = new Answer(props.challenge.id, answer);
        try {
            if (await answerObj.verify()) {
                openModal(getSuccessModal(ANSWER_VERIFICATION_MESSAGES.SUCCESS[props.challenge.type]));
                return true;
            } else {
                openModal(getErrorModal(ANSWER_VERIFICATION_MESSAGES.FAILURE[props.challenge.type]));
                return false;
            }
        } catch (e) {
            openModal(getErrorModal(ANSWER_VERIFICATION_MESSAGES.ERROR[props.challenge.type], e));
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
