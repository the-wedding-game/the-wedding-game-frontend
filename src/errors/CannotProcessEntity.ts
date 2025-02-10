export class CannotProcessEntity extends Error {
    constructor(type: string, message: string) {
        super(`Cannot process entity of type ${type}: ${message}`);
        this.name = 'NotFoundError';
    }
}