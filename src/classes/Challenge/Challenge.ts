import { ChallengeStatus, ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import {
    UpdateChallengeRequest,
    UpdateChallengeRequestBody,
} from "@/api/challenges/update-challenge/UpdateChallengeRequest";
import { GetAnswerRequest } from "@/api/challenges/get-answer/GetAnswerRequest";
import { GetSubmissionsRequest } from "@/api/challenges/get-submissions/GetSubmissionsRequest";
import { DeleteChallengeRequest } from "@/api/challenges/delete-challenge/DeleteChallengeRequest";

type ChallengeData = {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    status: ChallengeStatus;
    type: ChallengeType;
    completed?: boolean;
    answer?: string;
};

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

    constructor(data: ChallengeData) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.points = data.points;
        this.image = data.image;
        this.status = data.status;
        this.type = data.type;
        this.completed = data.completed;
        this.answer = data.answer;
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

    public async delete(): Promise<void> {
        const request = new DeleteChallengeRequest(this.id);
        await request.send();
    }
}
