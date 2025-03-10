import { LeaderboardEntry } from "@/types/leaderboard-types";
import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";

export type LeaderboardResponseBody = {
    leaderboard: LeaderboardEntry[];
};

export class LeaderboardResponse {
    private readonly leaderboard: LeaderboardEntry[];

    public constructor(data: LeaderboardResponse) {
        this.leaderboard = data.leaderboard;
        this.check();
    }

    public getLeaderboard(): LeaderboardEntry[] {
        return this.leaderboard;
    }

    private check() {
        if (this.leaderboard == null)
            throw new CannotProcessEntityError("LeaderboardResponse", "leaderboard is missing");
    }
}
