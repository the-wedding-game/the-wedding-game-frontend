import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import {
    GetSubmissionsResponse,
    GetSubmissionsResponseBody,
} from "@/api/challenges/get-submissions/GetSubmissionsResponse";

const METHOD = "GET";

export class GetSubmissionsRequest extends PrivilegedRequest {
    public constructor(challengeId: number) {
        const endpoint = `challenges/${challengeId}/submissions`;
        super(endpoint, METHOD);
    }

    public async send(): Promise<GetSubmissionsResponse> {
        const response = (await super.send()) as GetSubmissionsResponseBody;
        return new GetSubmissionsResponse(response);
    }
}
