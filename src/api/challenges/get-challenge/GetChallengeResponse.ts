import { Challenge } from "@/classes/Challenge/Challenge";
import { validateChallenge } from "@/utils/validators";

export type GetChallengeResponseBody = Challenge;

export class GetChallengeResponse {
    private readonly challenge: Challenge;

    public constructor(data: GetChallengeResponseBody) {
        this.challenge = data;
        this.check();
    }

    public getChallenge(): Challenge {
        return this.challenge;
    }

    private check() {
        validateChallenge(this.challenge);
    }
}
