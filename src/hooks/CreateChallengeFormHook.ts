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
            openModal(
                "Success! 😄",
                "Challenge created successfully!",
                "success",
                () => (window.location.href = "/admin/challenges"),
            );
        } catch (error) {
            if (error instanceof Error) openModal("Oh no! ☹️", error.message, "error");
            else openModal("Oh no! ☹️", "There was an error creating the challenge. Please try again later.", "error");
        }
    };

    return {
        form: form,
        submit: submit,
    };
}
