import { useForm } from "@mantine/form";
import { CHALLENGE_TYPES, ChallengeType } from "@/classes/Challenge/ChallengeTypes";
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

export default function useCreateChallengeForm() {
    const { openModal } = useModal();

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

    const submit = async function () {
        try {
            const values = form.getValues();
            await ChallengeFactory.create(values);
            openModal({
                title: "Success! 😄",
                message: "Challenge created successfully!",
                type: "success",
                closeAction: () => (window.location.href = "/admin/challenges"),
            });
        } catch (error) {
            openModal({
                title: "Oh no! ☹️",
                message: "There was an error creating the challenge. Please try again later.",
                type: "error",
                additionalDetails: error instanceof Error ? error.stack : "",
            });
        }
    };

    return {
        form: form,
        submit: submit,
    };
}
