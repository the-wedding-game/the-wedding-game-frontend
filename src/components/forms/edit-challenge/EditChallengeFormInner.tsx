"use client";

import { NativeSelect, NumberInput, Textarea, TextInput } from "@mantine/core";
import { CHALLENGE_TYPES } from "@/classes/Challenge/ChallengeTypes";
import { useEffect, useState } from "react";
import ImageUpload from "@/components/inputs/ImageUpload/ImageUpload";
import SubmitButton from "@/components/buttons/SubmitButton";
import { Challenge } from "@/classes/Challenge/Challenge";
import useCreateOrEditChallengeForm from "@/hooks/CreateOrEditChallengeFormHook";
import { useModal } from "@/components/modals/Modal";
import { getErrorModal } from "@/constants/modal-templates";

type Props = {
    challenge: Challenge;
};

export default function EditChallengeFormInner(props: Props) {
    const [coverPhoto, setCoverPhoto] = useState<string | null>(props.challenge.image);
    const [showAnswerField, setShowAnswerField] = useState(
        props.challenge.type === CHALLENGE_TYPES.ANSWER_QUESTION.value,
    );
    const [loading, setLoading] = useState(false);
    const [hasSubmissions, setHasSubmissions] = useState(false);
    const { form, submit } = useCreateOrEditChallengeForm(props.challenge);
    const { openModal } = useModal();

    useEffect(() => {
        if (coverPhoto) form.setFieldValue("image", coverPhoto);
        else form.setFieldValue("image", "");
    }, [coverPhoto, form]);

    useEffect(() => {
        props.challenge
            .hasSubmissions()
            .then((hasSubmissions) => {
                setHasSubmissions(hasSubmissions);
            })
            .catch((err) => {
                openModal(
                    getErrorModal("An unexpected error occurred while fetching the submissions of the challenge.", err),
                );
            });
    }, [openModal, props.challenge]);

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
                disabled={hasSubmissions}
                data={Object.values(CHALLENGE_TYPES)}
            />

            {showAnswerField && (
                <TextInput
                    withAsterisk
                    label="Answer"
                    key={form.key("answer")}
                    {...form.getInputProps("answer")}
                    disabled={hasSubmissions}
                />
            )}

            <SubmitButton disabled={!form.isValid()} loading={loading} onClick={submitForm} />
        </form>
    );
}
