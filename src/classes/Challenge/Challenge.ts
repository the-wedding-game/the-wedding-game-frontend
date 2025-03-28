import { ChallengeStatus, ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import {
    UpdateChallengeRequest,
    UpdateChallengeRequestBody,
} from "@/api/challenges/update-challenge/UpdateChallengeRequest";
import { GetAnswerRequest } from "@/api/challenges/get-answer/GetAnswerRequest";
import { GetSubmissionsRequest } from "@/api/challenges/get-submissions/GetSubmissionsRequest";

export class Challenge {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    status: ChallengeStatus;
    type: ChallengeType;
    completed?: boolean;
    answer?: string;

    constructor(
        id: number,
        name: string,
        description: string,
        points: number,
        image: string,
        status: ChallengeStatus,
        type: ChallengeType,
        completed?: boolean,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.points = points;
        this.image = image;
        this.status = status;
        this.type = type;
        this.completed = completed;
    }

    public async update(): Promise<void> {
        const requestBody: UpdateChallengeRequestBody = {
            name: this.name,
            description: this.description,
            points: this.points,
            image: this.image,
            type: this.type,
            status: this.status,
        };

        if (this.answer) requestBody.answer = this.answer;

        const request = new UpdateChallengeRequest(this.id, requestBody);
        await request.send();
    }

    public async getAnswer(): Promise<string> {
        const request = new GetAnswerRequest(this.id);
        const response = await request.send();
        return response.getAnswer();
    }

    public async hasSubmissions(): Promise<boolean> {
        const request = new GetSubmissionsRequest(this.id);
        const response = await request.send();
        return response.getSubmissions().length > 0;
    }
}
