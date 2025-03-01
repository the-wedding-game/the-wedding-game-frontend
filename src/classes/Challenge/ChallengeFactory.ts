import { checkResponse } from "@/utils/http-utils";
import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";
import { Challenge } from "@/classes/Challenge/Challenge";
import { ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import { User } from "@/classes/User/User";
import { GetChallengeRequest } from "@/api/challenges/get-challenge/GetChallengeRequest";
import { GetAllChallengesRequest } from "@/api/challenges/get-all-challenges/GetAllChallengesRequest";

export const ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/challenges`;

export type ChallengeResponse = {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    status: string;
    type: ChallengeType;
    completed: boolean;
};

export type CreateChallengeRequest = {
    name: string;
    description: string;
    points: number;
    image: string;
    type: ChallengeType;
    answer?: string;
};

export type UpdateChallengeRequest = CreateChallengeRequest & {
    id: number;
    status: string;
};

export class ChallengeFactory {
    static async get(id: number): Promise<Challenge> {
        const request = new GetChallengeRequest(id);
        const response = await request.send();
        return response.getChallenge();
    }

    static async getAll(): Promise<Challenge[]> {
        const request = new GetAllChallengesRequest();
        const response = await request.send();
        return response.getChallenges();
    }

    static async create(request: CreateChallengeRequest): Promise<Challenge> {
        const response = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${User.getAccessToken()}`,
            },
            body: JSON.stringify(request),
        });
        await checkResponse(response);
        return this.processResponse(response);
    }

    private static async processResponse(response: Response): Promise<Challenge> {
        try {
            const data: ChallengeResponse = await response.json();
            return new Challenge(
                data.id,
                data.name,
                data.description,
                data.points,
                data.image,
                data.status,
                data.type,
                data.completed,
            );
        } catch (error) {
            if (error instanceof Error) {
                throw new CannotProcessEntityError("Challenge", error.message);
            }
            throw new CannotProcessEntityError("Challenge", "Unknown error");
        }
    }
}
