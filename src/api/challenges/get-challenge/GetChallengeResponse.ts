import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";
import { Challenge } from "@/classes/Challenge/Challenge";

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
        if (!this.challenge) throw new CannotProcessEntityError("GetChallengeResponse", "challenge is missing");
        if (!this.challenge.id) throw new CannotProcessEntityError("GetChallengeResponse", "id is missing");
        if (!this.challenge.name) throw new CannotProcessEntityError("GetChallengeResponse", "name is missing");
        if (!this.challenge.description)
            throw new CannotProcessEntityError("GetChallengeResponse", "description is missing");
        if (!this.challenge.points) throw new CannotProcessEntityError("GetChallengeResponse", "points is missing");
        if (!this.challenge.image) throw new CannotProcessEntityError("GetChallengeResponse", "image is missing");
        if (!this.challenge.status) throw new CannotProcessEntityError("GetChallengeResponse", "status is missing");
        if (!this.challenge.type) throw new CannotProcessEntityError("GetChallengeResponse", "type is missing");
        if (this.challenge.completed === undefined)
            throw new CannotProcessEntityError("GetChallengeResponse", "completed is missing");
    }
}
