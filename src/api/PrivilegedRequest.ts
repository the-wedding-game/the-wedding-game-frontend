import { APIRequest } from "@/api/Request";
import { User } from "@/classes/User/User";

export abstract class PrivilegedRequest extends APIRequest {
    protected constructor(endpoint: string, method: string) {
        super(endpoint, method);
        this.addHeader("Authorization", `Bearer ${User.getAccessToken()}`);
    }

    public async send(body?: object): Promise<object> {
        return await super.send(body);
    }
}
