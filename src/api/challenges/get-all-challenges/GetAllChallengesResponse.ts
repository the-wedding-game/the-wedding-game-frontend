import { Challenge } from "@/classes/Challenge/Challenge";
import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";

export type GetAllChallengesResponseBody = {
    challenges: Challenge[];
};

export class GetAllChallengesResponse {
    private readonly challenges: Challenge[];

    public constructor(data: GetAllChallengesResponseBody) {
        this.challenges = [];
        for (const challenge of data.challenges) {
            this.challenges.push(new Challenge(challenge));
        }
        this.check();
    }

    public getChallenges(): Challenge[] {
        return this.challenges;
    }

    private check() {
        if (!this.challenges) throw new CannotProcessEntityError("GetAllChallengesResponse", "challenges is missing");
    }
}
