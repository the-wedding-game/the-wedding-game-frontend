import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import {
    DeleteChallengeResponse,
    DeleteChallengeResponseBody,
} from "@/api/challenges/delete-challenge/DeleteChallengeResponse";

const METHOD = "DELETE";

export class DeleteChallengeRequest extends PrivilegedRequest {
    public constructor(challengeId: number) {
        const endpoint = `challenges/${challengeId}`;
        super(endpoint, METHOD);
    }

    public async send(): Promise<DeleteChallengeResponse> {
        const response = (await super.send()) as DeleteChallengeResponseBody;
        return new DeleteChallengeResponse(response);
    }
}
