/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button, NativeSelect, NumberInput, Textarea, TextInput } from "@mantine/core";
import { CHALLENGE_TYPES } from "@/classes/Challenge/ChallengeTypes";
import { useEffect, useState } from "react";
import { ChallengeFactory } from "@/classes/Challenge/ChallengeFactory";
import { useModal } from "@/components/modals/Modal";
import ImageUpload from "@/components/ImageUpload";
import FormTitle from "@/components/text/FormTitle";
import useCreateChallengeForm from "@/hooks/CreateChallengeFormHook";

export default function CreateChallengeForm() {
    const [showAnswerField, setShowAnswerField] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
    const { openModal } = useModal();

    useEffect(() => {
        if (coverPhoto) form.setFieldValue("image", coverPhoto);
        else form.setFieldValue("image", "");
    }, [coverPhoto]);

    const form = useCreateChallengeForm({
        setShowAnswerField: setShowAnswerField,
    });

    async function submitForm(values: typeof form.values) {
        try {
            await ChallengeFactory.create(values);
            openModal("Success! 😄", "Challenge created successfully!", "success");
        } catch (error) {
            if (error instanceof Error) openModal("Oh no! ☹️", error.message, "error");
            else openModal("Oh no! ☹️", "There was an error creating the challenge. Please try again later.", "error");
        }
    }

    return (
        <div className={`flex flex-col space-y-5`}>
            <FormTitle title="Create a new challenge" />

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

                <ImageUpload image={coverPhoto} setImage={setCoverPhoto} label={"Cover photo"} />

                <NativeSelect
                    withAsterisk
                    label="Challenge type"
                    key={form.key("type")}
                    {...form.getInputProps("type")}
                    data={Object.values(CHALLENGE_TYPES)}
                />

                {showAnswerField && (
                    <TextInput
                        withAsterisk
                        label="PhotoSubmission"
                        key={form.key("answer")}
                        {...form.getInputProps("answer")}
                    />
                )}

                <Button type="submit" mt="sm" disabled={!form.isValid()}>
                    Submit
                </Button>
            </form>
        </div>
    );
}
