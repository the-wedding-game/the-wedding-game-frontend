import { Challenge } from "@/classes/Challenge/Challenge";
import { validateChallenge } from "@/utils/validators";

export type UpdateChallengeResponseBody = Challenge;

export class UpdateChallengeResponse {
    private readonly challenge: Challenge;

    public constructor(data: UpdateChallengeResponseBody) {
        this.challenge = data;
        this.check();
    }

    private check() {
        validateChallenge(this.challenge, false);
    }
}
