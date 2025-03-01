import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import {
    GetAllChallengesResponse,
    GetAllChallengesResponseBody,
} from "@/api/challenges/get-all-challenges/GetAllChallengesResponse";

const ENDPOINT = `challenges`;
const METHOD = "GET";

export class GetAllChallengesRequest extends PrivilegedRequest {
    public constructor() {
        super(ENDPOINT, METHOD);
    }

    public async send(): Promise<GetAllChallengesResponse> {
        const response = (await super.send()) as GetAllChallengesResponseBody;
        return new GetAllChallengesResponse(response);
    }
}
