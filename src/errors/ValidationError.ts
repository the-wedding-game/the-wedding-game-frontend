export class ValidationError extends Error {
    private readonly details: string;

    constructor(message: string) {
        super("There was an issue with your input.");
        this.details = message;
        this.name = "ValidationError";
    }

    getDetails() {
        return this.details;
    }
}
