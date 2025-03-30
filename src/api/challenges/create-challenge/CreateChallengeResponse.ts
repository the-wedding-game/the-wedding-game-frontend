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
        this.challenge = new Challenge({
            id: data.id,
            name: data.name,
            description: data.description,
            points: data.points,
            image: data.image,
            status: data.status,
            type: data.type,
        });
        this.check();
    }

    public getChallenge(): Challenge {
        return this.challenge;
    }

    private check() {
        validateChallenge(this.challenge);
    }
}
