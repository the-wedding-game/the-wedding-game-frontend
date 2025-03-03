import { TextInput } from "@mantine/core";
import IncorrectAnswerBadge from "@/components/badges/IncorrectAnswerBadge";
import CorrectAnswerBadge from "@/components/badges/CorrectAnswerBadge";
import SubmitButton from "@/components/buttons/SubmitButton";
import React, { useState } from "react";

type Props = {
    submitAnswer: (answer: string | null) => Promise<boolean>;
};

export default function SubmitAnswerSubmission(props: Props) {
    const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);
    const [answerChanged, setAnswerChanged] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    function handleChangeAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
        setAnswerChanged(false);
    }

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
        <div className={`flex flex-col`}>
            <TextInput
                placeholder="Your answer"
                radius="sm"
                mt="sm"
                onChange={(e) => {
                    handleChangeAnswer(e);
                }}
                disabled={answerCorrect}
            />

            {answerChanged && !loading && !answerCorrect && <IncorrectAnswerBadge />}
            {answerChanged && !loading && answerCorrect && <CorrectAnswerBadge />}

            {!answerCorrect && (
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
