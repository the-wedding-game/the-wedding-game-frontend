import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import { ChallengeStatus, ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import {
    UpdateChallengeResponse,
    UpdateChallengeResponseBody,
} from "@/api/challenges/update-challenge/UpdateChallengeResponse";

const METHOD = "PUT";

export type UpdateChallengeRequestBody = {
    name: string;
    description: string;
    points: number;
    image: string;
    type: ChallengeType;
    answer?: string;
    status: ChallengeStatus;
};

export class UpdateChallengeRequest extends PrivilegedRequest {
    private readonly updateFields: UpdateChallengeRequestBody;

    public constructor(challengeId: number, updateFields: UpdateChallengeRequestBody) {
        const endpoint = `challenges/${challengeId}`;
        super(endpoint, METHOD);
        this.updateFields = updateFields;
    }

    public async send(): Promise<UpdateChallengeResponse> {
        const requestBody = this.updateFields;
        const response = (await super.send(requestBody)) as UpdateChallengeResponseBody;
        return new UpdateChallengeResponse(response);
    }
}
