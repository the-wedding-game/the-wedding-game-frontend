import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import { LeaderboardResponse } from "@/api/points/leaderboard/LeaderboardResponse";

const ENDPOINT = "leaderboard";
const METHOD = "GET";

export class LeaderboardRequest extends PrivilegedRequest {
    public constructor() {
        super(ENDPOINT, METHOD);
    }

    public async send(): Promise<LeaderboardResponse> {
        const response = (await super.send()) as LeaderboardResponse;
        return new LeaderboardResponse(response);
    }
}
