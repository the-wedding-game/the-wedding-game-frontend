import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";
import { UserRole } from "@/classes/User/UserTypes";

export type CurrentUserResponseBody = {
    username: string;
    role: UserRole;
};

export class CurrentUserResponse {
    private readonly username: string;
    private readonly role: UserRole;

    public constructor(data: CurrentUserResponseBody) {
        this.username = data.username;
        this.role = data.role;
        this.check();
    }

    public getUser(): CurrentUserResponseBody {
        return {
            username: this.username,
            role: this.role,
        };
    }

    private check() {
        if (!this.username) throw new CannotProcessEntityError("CurrentUserResponse", "username is missing");
        if (!this.role) throw new CannotProcessEntityError("CurrentUserResponse", "role is missing");
    }
}
