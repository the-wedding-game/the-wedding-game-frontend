import { ChallengeStatus, ChallengeType } from "@/classes/Challenge/ChallengeTypes";

export class Challenge {
    id: number;
    name: string;
    description: string;
    points: number;
    image: string;
    status: ChallengeStatus;
    type: ChallengeType;
    completed?: boolean;

    constructor(
        id: number,
        name: string,
        description: string,
        points: number,
        image: string,
        status: ChallengeStatus,
        type: ChallengeType,
        completed: boolean,
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
}
