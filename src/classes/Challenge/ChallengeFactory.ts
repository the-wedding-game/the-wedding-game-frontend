import { Challenge } from "@/classes/Challenge/Challenge";
import { GetChallengeRequest } from "@/api/challenges/get-challenge/GetChallengeRequest";
import { GetAllChallengesRequest } from "@/api/challenges/get-all-challenges/GetAllChallengesRequest";
import {
    CreateChallengeRequest,
    CreateChallengeRequestBody,
} from "@/api/challenges/create-challenge/CreateChallengeRequest";

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

    static async create(requestBody: CreateChallengeRequestBody): Promise<Challenge> {
        const request = new CreateChallengeRequest();
        const response = await request.send(requestBody);
        return response.getChallenge();
    }
}
