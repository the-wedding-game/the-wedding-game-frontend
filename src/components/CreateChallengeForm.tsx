"use client";

import { useForm } from "@mantine/form";
import { Button, NativeSelect, NumberInput, Textarea, TextInput, Title } from "@mantine/core";
import { CHALLENGE_TYPES, ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import { useState } from "react";
import { ChallengeFactory } from "@/classes/Challenge/ChallengeFactory";

export default function CreateChallengeForm() {
    const [showAnswerField, setShowAnswerField] = useState(false);

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            description: "",
            points: 0,
            image: "",
            type: CHALLENGE_TYPES.UPLOAD_PHOTO.value as ChallengeType,
            answer: "",
        },
        validate: {
            name: (value) => validateChallengeName(value),
            description: (value) => validateChallengeDescription(value),
            points: (value) => validateChallengePoints(value),
            image: (value) => validateChallengeImage(value),
            type: (value) => validateChallengeType(value),
            answer: (value, values) => validateChallengeAnswer(value, values.type),
        },
        validateInputOnChange: true,
    });

    form.watch("type", (type) => {
        if (type.value === CHALLENGE_TYPES.ANSWER_QUESTION.value) {
            setShowAnswerField(true);
        } else {
            setShowAnswerField(false);
        }
    });

    async function submitForm(values: typeof form.values) {
        const challengeCreated = await ChallengeFactory.create(values);
        console.log(challengeCreated);
    }

    return (
        <div className={`flex flex-col space-y-5`}>
            <Title order={2} className={`text-gray-700`}>
                Create Challenge
            </Title>

            <form
                onSubmit={form.onSubmit(async (values) => {
                    await submitForm(values);
                })}
                className={`flex flex-col space-y-5`}
            >
                <TextInput withAsterisk label="Challenge name" key={form.key("name")} {...form.getInputProps("name")} />

                <Textarea
                    withAsterisk
                    label="Description"
                    key={form.key("description")}
                    {...form.getInputProps("description")}
                />

                <NumberInput withAsterisk label="Points" key={form.key("points")} {...form.getInputProps("points")} />

                <TextInput withAsterisk label="Cover image" key={form.key("image")} {...form.getInputProps("image")} />

                <NativeSelect
                    withAsterisk
                    label="Challenge type"
                    key={form.key("type")}
                    {...form.getInputProps("type")}
                    data={Object.values(CHALLENGE_TYPES)}
                />

                {showAnswerField && (
                    <TextInput withAsterisk label="Answer" key={form.key("answer")} {...form.getInputProps("answer")} />
                )}

                <Button type="submit" mt="sm">
                    Submit
                </Button>
            </form>
        </div>
    );
}

function validateChallengeName(name: string | null): string | undefined {
    if (!name) return "Challenge name is required";
    if (name.length < 5) return "Challenge name should be at least 5 characters long";
}

function validateChallengeDescription(description: string | null): string | undefined {
    if (!description) return "Description is required";
    if (description.length < 10) return "Description should be at least 10 characters long";
}

function validateChallengePoints(points: number | null): string | undefined {
    if (!points) return "Points are required";
    if (points < 1) return "Points should be at least 1";
}

function validateChallengeImage(image: string | null): string | undefined {
    if (!image) return "Image is required";
}

function validateChallengeType(type: string | null): string | undefined {
    if (!type) return "Challenge type is required";
}

function validateChallengeAnswer(answer: string | null, challengeType: string | null): string | undefined {
    if (challengeType !== CHALLENGE_TYPES.ANSWER_QUESTION.value) return;

    if (!answer) return "Answer is required";
}
