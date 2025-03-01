export class CannotProcessEntityError extends Error {
    constructor(type: string, message: string) {
        super(`Cannot process entity of type ${type}: ${message}`);
        this.name = "NotFoundError";
    }
}
