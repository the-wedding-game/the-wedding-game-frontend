import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";

export type GetSubmissionsResponseBody = {
    submissions: Submission[];
};

type Submission = {
    id: number;
    answer: string;
    challenge_id: number;
    challenge_name: string;
    user_id: number;
    username: string;
};

export class GetSubmissionsResponse {
    private readonly submissions: Submission[];

    public constructor(data: GetSubmissionsResponseBody) {
        this.submissions = data.submissions;
        this.check();
    }

    public getSubmissions(): Submission[] {
        return this.submissions;
    }

    private check() {
        if (this.submissions == undefined)
            throw new CannotProcessEntityError("GetSubmissionsResponse", "submissions is missing");
    }
}
