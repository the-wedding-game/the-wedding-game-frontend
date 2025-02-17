export type AnswerVerificationRequest = {
    challengeId: number;
    answer: string;
}

export type AnswerVerificationResponse = {
    correct: boolean;
}