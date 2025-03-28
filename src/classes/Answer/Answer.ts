import { GetAnswerRequest } from "@/api/challenges/verify-answer/GetAnswerRequest";

export class Answer {
    challengeId: number;
    answer: string;

    constructor(challengeId: number, answer: string) {
        this.challengeId = challengeId;
        this.answer = answer;
    }

    async verify(): Promise<boolean> {
        const request = new GetAnswerRequest(this.challengeId, this.answer);
        const response = await request.send();
        return response.getStatus();
    }
}
