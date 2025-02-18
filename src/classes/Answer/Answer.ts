import { AnswerVerificationRequest, AnswerVerificationResponse } from "@/classes/Answer/AnswerTypes";
import { User } from "@/classes/User/User";

const ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/challenges`;

export class Answer {
    challengeId: number;
    answer: string;

    constructor(challengeId: number, answer: string) {
        this.challengeId = challengeId;
        this.answer = answer;
    }

    async verify(): Promise<boolean> {
        const requestBody: AnswerVerificationRequest = {
            answer: this.answer,
        };

        const response = await fetch(`${ENDPOINT}/${this.challengeId}/verify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${User.getAccessToken()}`,
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error("Failed to verify answer");
        }

        const data: AnswerVerificationResponse = await response.json();
        return data.correct;
    }
}
