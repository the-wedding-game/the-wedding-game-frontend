import { checkResponse } from "@/utils/http-utils";
import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";
import { Challenge } from "@/classes/Challenge/Challenge";
import { ChallengeType } from "@/classes/Challenge/ChallengeTypes";
import { User } from "@/classes/User/User";

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
        const response = await fetch(`${ENDPOINT}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${User.getAccessToken()}`,
            },
        });
        await checkResponse(response);
        return this.processResponse(response);
    }

    static async getAll(): Promise<Challenge[]> {
        const response = await fetch(ENDPOINT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${User.getAccessToken()}`,
            },
        });
        await checkResponse(response);

        try {
            const data = await response.json();
            return data.challenges.map(
                (challenge: ChallengeResponse) =>
                    new Challenge(
                        challenge.id,
                        challenge.name,
                        challenge.description,
                        challenge.points,
                        challenge.image,
                        challenge.status,
                        challenge.type,
                        challenge.completed,
                    ),
            );
        } catch (error) {
            if (error instanceof Error) {
                throw new CannotProcessEntityError("Challenge", error.message);
            }
            throw new CannotProcessEntityError("Challenge", "Unknown error");
        }
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
