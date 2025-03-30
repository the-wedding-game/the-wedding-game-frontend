import { Challenge } from "@/classes/Challenge/Challenge";
import { validateChallenge } from "@/utils/validators";
import { ChallengeStatus, ChallengeType } from "@/classes/Challenge/ChallengeTypes";

export type GetChallengeResponseBody = {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    status: ChallengeStatus;
    type: ChallengeType;
    completed?: boolean;
};

export class GetChallengeResponse {
    private readonly challenge: Challenge;

    public constructor(data: GetChallengeResponseBody) {
        this.challenge = new Challenge({
            id: data.id,
            name: data.name,
            description: data.description,
            points: data.points,
            image: data.image,
            status: data.status,
            type: data.type,
            completed: data.completed,
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
