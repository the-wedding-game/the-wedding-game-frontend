export class NotLoggedInError extends Error {
    constructor() {
        super(`The user is not logged in`);
        this.name = 'NotLoggedInError';
    }
}