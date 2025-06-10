import { validateChallengeId } from "@/utils/validators";

export type DeleteChallengeResponseBody = {
    id: number;
};

export class DeleteChallengeResponse {
    private readonly challengeId: number;

    public constructor(data: DeleteChallengeResponseBody) {
        this.challengeId = data.id;
        this.check();
    }

    public getChallengeId(): number {
        return this.challengeId;
    }

    private check() {
        validateChallengeId(this.challengeId);
    }
}
