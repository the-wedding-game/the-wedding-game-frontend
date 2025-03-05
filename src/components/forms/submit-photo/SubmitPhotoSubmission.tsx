import SubmitButton from "@/components/buttons/SubmitButton";
import React, { useState } from "react";
import ImageUpload, { ImageUploadSkeleton } from "@/components/inputs/ImageUpload/ImageUpload";
import IncorrectAnswerBadge from "@/components/badges/IncorrectAnswerBadge";
import CorrectAnswerBadge from "@/components/badges/CorrectAnswerBadge";

type Props = {
    submitAnswer: (answer: string | null) => Promise<boolean>;
};

export default function SubmitPhotoSubmission(props: Props) {
    const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);
    const [answerChanged, setAnswerChanged] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function submitAnswer() {
        setLoading(true);
        setAnswerChanged(true);

        try {
            const correct = await props.submitAnswer(answer);
            setAnswerCorrect(correct);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={`flex flex-col w-32 items-start space-y-5`}>
            <ImageUpload
                image={answer}
                setImage={setAnswer}
                buttonText={"Upload photo"}
                label={"Your submission"}
                disableRemove={answerCorrect}
            />

            {answerChanged && !loading && !answerCorrect && <IncorrectAnswerBadge />}
            {answerChanged && !loading && answerCorrect && <CorrectAnswerBadge />}

            {!answerCorrect && answer && (
                <SubmitButton
                    onClick={submitAnswer}
                    loading={loading}
                    buttonText={"Submit answer"}
                    disabled={!answer}
                />
            )}
        </div>
    );
}

export function SubmitPhotoSubmissionSkeleton() {
    return (
        <div className={`flex flex-col w-32 items-start space-y-5`}>
            <ImageUploadSkeleton />
        </div>
    );
}
