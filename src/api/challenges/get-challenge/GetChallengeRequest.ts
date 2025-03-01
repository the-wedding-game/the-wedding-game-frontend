import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import { GetChallengeResponse, GetChallengeResponseBody } from "@/api/challenges/get-challenge/GetChallengeResponse";

const METHOD = "GET";

export class GetChallengeRequest extends PrivilegedRequest {
    public constructor(challengeId: number) {
        const endpoint = `challenges/${challengeId}`;
        super(endpoint, METHOD);
    }

    public async send(): Promise<GetChallengeResponse> {
        const response = (await super.send()) as GetChallengeResponseBody;
        return new GetChallengeResponse(response);
    }
}
