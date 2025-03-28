import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";

export type VerifyAnswerResponseBody = {
    correct: boolean;
};

export class VerifyAnswerResponse {
    private readonly correct: boolean;

    public constructor(data: VerifyAnswerResponseBody) {
        this.correct = data.correct;
        this.check();
    }

    public getStatus(): boolean {
        return this.correct;
    }

    private check() {
        if (this.correct == undefined) throw new CannotProcessEntityError("VerifyAnswerResponse", "correct is missing");
    }
}
