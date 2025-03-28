import { GetAnswerResponse, GetAnswerResponseBody } from "@/api/challenges/get-answer/GetAnswerResponse";
import { PrivilegedRequest } from "@/api/PrivilegedRequest";

const METHOD = "GET";

export class GetAnswerRequest extends PrivilegedRequest {
    public constructor(challengeId: number) {
        const endpoint = `challenges/${challengeId}/answer`;
        super(endpoint, METHOD);
    }

    public async send(): Promise<GetAnswerResponse> {
        const response = (await super.send()) as GetAnswerResponseBody;
        return new GetAnswerResponse(response);
    }
}
