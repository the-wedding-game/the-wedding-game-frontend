import {UserRole} from "@/classes/User/UserTypes";

export class User {
    username: string;
    role: UserRole;
    
    constructor(username: string, role: UserRole) {
        this.username = username;
        this.role = role;
    }
}