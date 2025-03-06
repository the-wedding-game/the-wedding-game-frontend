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
import { getErrorModal, getSuccessModal } from "@/constants/modal-templates";

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
            return openModal(getSuccessModal("Challenge created successfully!", "/admin/challenges"));
        } catch (error) {
            return openModal(
                getErrorModal("There was an error creating the challenge. Please try again later!", error),
            );
        }
    };

    return {
        form: form,
        submit: submit,
    };
}
