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

type Props = {
    setShowAnswerField: (value: boolean) => void;
};

export default function useCreateChallengeForm(props: Props) {
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
            props.setShowAnswerField(true);
        } else {
            props.setShowAnswerField(false);
        }
    });

    return form;
}
