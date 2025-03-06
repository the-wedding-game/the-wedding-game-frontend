import { CHALLENGE_TYPES } from "@/classes/Challenge/ChallengeTypes";

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
