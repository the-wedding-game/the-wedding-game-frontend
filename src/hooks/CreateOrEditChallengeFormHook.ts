import { useForm } from "@mantine/form";
import {
    validateChallengeAnswer,
    validateChallengeDescription,
    validateChallengeImage,
    validateChallengeName,
    validateChallengePoints,
    validateChallengeType,
} from "@/utils/validators";
import { ChallengeFactory } from "@/classes/Challenge/ChallengeFactory";
import { useModal } from "@/components/modals/Modal";
import { getErrorModal, getSuccessModal } from "@/constants/modal-templates";
import { Challenge } from "@/classes/Challenge/Challenge";
import { CHALLENGE_TYPES, ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import { useEffect } from "react";

export default function useCreateOrEditChallengeForm(challenge: Challenge) {
    const { openModal } = useModal();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            id: challenge?.id || -1,
            name: challenge?.name || "",
            description: challenge?.description || "",
            points: challenge?.points || 100,
            image: challenge?.image || "",
            type: challenge?.type || CHALLENGE_TYPES.UPLOAD_PHOTO.value,
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

    useEffect(() => {
        if (challenge.type === CHALLENGE_TYPES.ANSWER_QUESTION.value) {
            challenge
                .getAnswer()
                .then((answer) => {
                    form.setValues({ answer: answer });
                })
                .catch((error) => {
                    openModal(getErrorModal("An unexpected error occurred while fetching the answer.", error));
                });
        }
    }, [challenge, form, openModal]);

    const submit = async function () {
        try {
            if (challenge) {
                await updateChallenge();
            } else {
                await createChallenge();
            }
        } catch (error) {
            return openModal(getErrorModal("An unexpected error occurred. Please try again later!", error));
        }
    };

    const updateChallenge = async function () {
        if (!challenge) throw new Error("Challenge is not defined");

        const values = form.getValues();
        challenge.name = values.name;
        challenge.description = values.description;
        challenge.points = values.points;
        challenge.image = values.image;
        challenge.type = values.type as ChallengeType;

        if (values.answer) challenge.answer = values.answer;

        await challenge.update();
        return openModal(getSuccessModal("Challenge updated successfully!", "/admin/challenges"));
    };

    const createChallenge = async function () {
        const values = form.getValues();
        await ChallengeFactory.create(values);
        return openModal(getSuccessModal("Challenge created successfully!", "/admin/challenges"));
    };

    return {
        form: form,
        submit: submit,
    };
}
