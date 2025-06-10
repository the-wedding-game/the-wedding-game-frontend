import { CHALLENGE_TYPES } from "@/classes/Challenge/ChallengeTypes";
import { Challenge } from "@/classes/Challenge/Challenge";
import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";

export function validateChallengeName(name: string | null): string | undefined {
    if (!name) return "Challenge name is required";
    if (name.length < 5) return "Challenge name should be at least 5 characters long";
}

export function validateChallengeDescription(description: string | null): string | undefined {
    if (!description) return "Description is required";
    if (description.length < 10) return "Description should be at least 10 characters long";
}

export function validateChallengePoints(points: number | null): string | undefined {
    if (!points) return "Points are required";
    if (points < 1) return "Points should be at least 1";
}

export function validateChallengeImage(image: string | null): string | undefined {
    if (!image) return "Image is required";
}

export function validateChallengeType(type: string | null): string | undefined {
    if (!type) return "Challenge type is required";
}

export function validateChallengeAnswer(answer: string | null, challengeType: string | null): string | undefined {
    if (challengeType !== CHALLENGE_TYPES.ANSWER_QUESTION.value) return;

    if (!answer) return "Answer is required";
}

export function validateUsername(username: string | null): string | undefined {
    if (!username) return "Username is required";
}

export function validatePassword(password: string | null): string | undefined {
    if (!password) return "Password is required";
    if (password.length < 5) return "Password should be at least 5 characters long";
}

export function validateChallenge(challenge: Challenge, completedRequired: boolean = true): void {
    if (!challenge) throw new CannotProcessEntityError("GetChallengeResponse", "challenge is missing");
    if (!challenge.id) throw new CannotProcessEntityError("GetChallengeResponse", "id is missing");
    if (!challenge.name) throw new CannotProcessEntityError("GetChallengeResponse", "name is missing");
    if (!challenge.description) throw new CannotProcessEntityError("GetChallengeResponse", "description is missing");
    if (!challenge.points) throw new CannotProcessEntityError("GetChallengeResponse", "points is missing");
    if (!challenge.image) throw new CannotProcessEntityError("GetChallengeResponse", "image is missing");
    if (!challenge.status) throw new CannotProcessEntityError("GetChallengeResponse", "status is missing");
    if (!challenge.type) throw new CannotProcessEntityError("GetChallengeResponse", "type is missing");
    if (completedRequired && challenge.completed === undefined)
        throw new CannotProcessEntityError("GetChallengeResponse", "completed is missing");
}

export function validateChallengeId(id: number): void {
    if (id === null || id === undefined) throw new CannotProcessEntityError("Challenge ID", "Challenge ID is required");
    if (id <= 0) throw new CannotProcessEntityError("Challenge ID", "Challenge ID should be a positive number");
}
