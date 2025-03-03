import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import {
    CreateChallengeResponse,
    CreateChallengeResponseBody,
} from "@/api/challenges/create-challenge/CreateChallengeResponse";

const ENDPOINT = `challenges`;
const METHOD = "POST";

export type CreateChallengeRequestBody = {
    name: string;
    description: string;
    points: number;
    image: string;
    type: string;
    answer?: string;
};

export class CreateChallengeRequest extends PrivilegedRequest {
    public constructor() {
        super(ENDPOINT, METHOD);
    }

    public async send(body: CreateChallengeRequestBody): Promise<CreateChallengeResponse> {
        const response = (await super.send(body)) as CreateChallengeResponseBody;
        return new CreateChallengeResponse(response);
    }
}
