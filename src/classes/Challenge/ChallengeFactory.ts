import {checkResponse} from "@/utils/http-utils";
import {CannotProcessEntity} from "@/errors/CannotProcessEntity";
import {Challenge} from "@/classes/Challenge/Challenge";
import {ChallengeType} from "@/classes/Challenge/ChallengeTypes";

export const ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/challenges`;

export type ChallengeResponse = {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    status: string;
    type: ChallengeType;
}

export type CreateChallengeRequest = {
    name: string;
    description: string;
    points: number;
    image: string;
    status: string;
    type: ChallengeType;
}

export type UpdateChallengeRequest = CreateChallengeRequest & {
    id: number;
};

export class ChallengeFactory {
    
    static async get(id: number): Promise<Challenge> {
        const response = await fetch(`${ENDPOINT}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        checkResponse(response);
        return this.processResponse(response);
    }
    
    static async getAll(): Promise<Challenge[]> {
        const response = await fetch(ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        checkResponse(response);
        
        try {
            const data = await response.json();
            console.log("huh", data);
            return data.map((challenge: ChallengeResponse) => new Challenge(
                challenge.id, challenge.name, challenge.description, challenge.points, challenge.image,
                challenge.status, challenge.type
            ));
        } catch (error) {
            if (error instanceof Error) {
                throw new CannotProcessEntity('Challenge', error.message);
            }
            throw new CannotProcessEntity('Challenge', 'Unknown error');
        }
    }
    
    static async create(request: CreateChallengeRequest): Promise<Challenge> {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        });
        checkResponse(response);
        return this.processResponse(response);
    }
    
    static async update(challenge: Challenge): Promise<Challenge> {
        const updateChallengeRequest: UpdateChallengeRequest = {
            id: challenge.id,
            name: challenge.name,
            description: challenge.description,
            points: challenge.points,
            image: challenge.image,
            status: challenge.status,
            type: challenge.type
        }
        
        const response = await fetch(`${ENDPOINT}/${challenge.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateChallengeRequest)
        });
        checkResponse(response);
        return this.processResponse(response);
    }
    
    static async delete(challenge: Challenge): Promise<void> {
        const response = await fetch(`${ENDPOINT}/${challenge.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        checkResponse(response);
    }
    
    private static async processResponse(response: Response): Promise<Challenge> {
        try {
            const data: ChallengeResponse = await response.json();
            return new Challenge(data.id, data.name, data.description, data.points, data.image, data.status, data.type);
        } catch (error) {
            if (error instanceof Error) {
                throw new CannotProcessEntity('Challenge', error.message);
            }
            throw new CannotProcessEntity('Challenge', 'Unknown error');
        }
        
    }
    
}