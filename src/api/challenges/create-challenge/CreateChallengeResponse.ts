import { Challenge } from "@/classes/Challenge/Challenge";
import { ChallengeStatus, ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import { validateChallenge } from "@/utils/validators";

export type CreateChallengeResponseBody = {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    status: ChallengeStatus;
    type: ChallengeType;
};

export class CreateChallengeResponse {
    private readonly challenge: Challenge;

    public constructor(data: CreateChallengeResponseBody) {
        this.challenge = new Challenge(
            data.id,
            data.name,
            data.description,
            data.points,
            data.image,
            data.status,
            data.type,
        );
        this.check();
    }

    public getChallenge(): Challenge {
        return this.challenge;
    }

    private check() {
        validateChallenge(this.challenge);
    }
}
