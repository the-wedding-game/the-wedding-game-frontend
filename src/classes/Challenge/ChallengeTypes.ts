export const CHALLENGE_TYPES = {
    UPLOAD_PHOTO: {
        value: "UPLOAD_PHOTO",
        label: "Upload photo",
    },
    ANSWER_QUESTION: {
        value: "ANSWER_QUESTION",
        label: "Answer question",
    },
};

export type ChallengeType = keyof typeof CHALLENGE_TYPES;
