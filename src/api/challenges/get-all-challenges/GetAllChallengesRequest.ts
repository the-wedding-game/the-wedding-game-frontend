import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import {
    GetAllChallengesResponse,
    GetAllChallengesResponseBody,
} from "@/api/challenges/get-all-challenges/GetAllChallengesResponse";

const ENDPOINT = "challenges";
const ADMIN_ENDPOINT = "admin/challenges";
const METHOD = "GET";

export class GetAllChallengesRequest extends PrivilegedRequest {
    public constructor(includeInactive: boolean) {
        if (includeInactive) super(ADMIN_ENDPOINT, METHOD);
        else super(ENDPOINT, METHOD);
    }

    public async send(): Promise<GetAllChallengesResponse> {
        const response = (await super.send()) as GetAllChallengesResponseBody;
        return new GetAllChallengesResponse(response);
    }
}
