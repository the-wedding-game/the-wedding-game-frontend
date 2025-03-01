import { VerifyAnswerResponse, VerifyAnswerResponseBody } from "@/api/challenges/verify-answer/VerifyAnswerResponse";
import { PrivilegedRequest } from "@/api/PrivilegedRequest";

const METHOD = "POST";

export type AnswerVerificationRequestBody = {
    answer: string;
};

export class VerifyAnswerRequest extends PrivilegedRequest {
    private readonly answer: string;

    public constructor(challengeId: number, answer: string) {
        const endpoint = `challenges/${challengeId}/verify`;
        super(endpoint, METHOD);
        this.answer = answer;
    }

    public async send(): Promise<VerifyAnswerResponse> {
        const requestBody: AnswerVerificationRequestBody = {
            answer: this.answer,
        };
        const response = (await super.send(requestBody)) as VerifyAnswerResponseBody;
        return new VerifyAnswerResponse(response);
    }
}
