import {User} from "@/classes/User/User";
import {NotLoggedInError} from "@/errors/NotLoggedInError";
import {checkResponse} from "@/utils/http-utils";

const ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth`;

export class UserFactory {
    
    static async getCurrentUser(): Promise<User> {
        const response = await fetch(`${ENDPOINT}/current-user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('accessToken')}`
            }
        })
        checkResponse(response);
        
        if (!response.ok) {
            throw new NotLoggedInError();
        }
        
        const data = await response.json();
        const user = new User(data.username, data.role);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
}