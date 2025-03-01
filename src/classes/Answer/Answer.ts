import { VerifyAnswerRequest } from "@/api/challenges/verify-answer.ts/VerifyAnswerRequest";

export class Answer {
    challengeId: number;
    answer: string;

    constructor(challengeId: number, answer: string) {
        this.challengeId = challengeId;
        this.answer = answer;
    }

    async verify(): Promise<boolean> {
        const request = new VerifyAnswerRequest(this.challengeId, this.answer);
        const response = await request.send();
        return response.getStatus();
    }
}
