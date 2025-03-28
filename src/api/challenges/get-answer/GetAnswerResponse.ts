import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";

export type GetAnswerResponseBody = {
    answer: string;
};

export class GetAnswerResponse {
    private readonly answer: string;

    public constructor(data: GetAnswerResponseBody) {
        this.answer = data.answer;
        this.check();
    }

    public getAnswer(): string {
        return this.answer;
    }

    private check() {
        if (this.answer == undefined) throw new CannotProcessEntityError("GetAnswerResponse", "answer is missing");
    }
}
