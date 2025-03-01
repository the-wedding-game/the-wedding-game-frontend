/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { NativeSelect, NumberInput, Textarea, TextInput } from "@mantine/core";
import { CHALLENGE_TYPES } from "@/classes/Challenge/ChallengeTypes";
import { useEffect, useState } from "react";
import ImageUpload from "@/components/inputs/ImageUpload/ImageUpload";
import useCreateChallengeForm from "@/hooks/CreateChallengeFormHook";
import SubmitButton from "@/components/buttons/SubmitButton";

export default function CreateChallengeFormInner() {
    const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
    const [showAnswerField, setShowAnswerField] = useState(false);
    const [loading, setLoading] = useState(false);

    const { form, submit } = useCreateChallengeForm();

    useEffect(() => {
        if (coverPhoto) form.setFieldValue("image", coverPhoto);
        else form.setFieldValue("image", "");
    }, [coverPhoto]);

    form.watch("type", (type) => {
        if (type.value === CHALLENGE_TYPES.ANSWER_QUESTION.value) {
            setShowAnswerField(true);
        } else {
            setShowAnswerField(false);
        }
    });

    async function submitForm() {
        setLoading(true);
        await submit();
        setLoading(false);
    }

    return (
        <form className={`flex flex-col space-y-5`}>
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
                <TextInput withAsterisk label="Answer" key={form.key("answer")} {...form.getInputProps("answer")} />
            )}

            <SubmitButton disabled={!form.isValid()} loading={loading} onClick={submitForm} />
        </form>
    );
}
