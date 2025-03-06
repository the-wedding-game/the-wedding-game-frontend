export class NotAdminError extends Error {
    constructor() {
        super(`The user is not an admin`);
        this.name = "NotLoggedInError";
    }
}
