import { GetAnswerResponse, VerifyAnswerResponseBody } from "@/api/challenges/verify-answer/GetAnswerResponse";
import { PrivilegedRequest } from "@/api/PrivilegedRequest";

const METHOD = "POST";

type AnswerVerificationRequestBody = {
    answer: string;
};

export class VerifyAnswerRequest extends PrivilegedRequest {
    private readonly answer: string;

    public constructor(challengeId: number, answer: string) {
        const endpoint = `challenges/${challengeId}/verify`;
        super(endpoint, METHOD);
        this.answer = answer;
    }

    public async send(): Promise<GetAnswerResponse> {
        const requestBody: AnswerVerificationRequestBody = {
            answer: this.answer,
        };
        const response = (await super.send(requestBody)) as VerifyAnswerResponseBody;
        return new GetAnswerResponse(response);
    }
}
