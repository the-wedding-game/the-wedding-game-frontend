import { checkResponse } from "@/utils/http-utils";

export abstract class APIRequest {
    private readonly endpoint: string;
    private readonly method: string;

    protected constructor(endpoint: string, method: string) {
        this.endpoint = endpoint;
        this.method = method;
    }

    public async fetch(body: object): Promise<object> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.endpoint}`, {
            method: this.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        await checkResponse(response);
        return await response.json();
    }
}
