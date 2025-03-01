import { User } from "@/classes/User/User";
import { CurrentUserRequest } from "@/api/auth/current-user/CurrentUserRequest";

export class UserFactory {
    static async getCurrentUser(): Promise<User> {
        const request = new CurrentUserRequest();
        const response = await request.send();
        const data = response.getUser();

        const user = new User(data.username, data.role);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    }
}
