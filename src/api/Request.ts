import { checkResponse } from "@/utils/http-utils";

export abstract class APIRequest {
    private readonly endpoint: string;
    private readonly method: string;
    private readonly headers: Map<string, string> = new Map();

    protected constructor(endpoint: string, method: string) {
        this.endpoint = endpoint;
        this.method = method;
        this.addHeader("Content-Type", "application/json");
    }

    public async send(body: object): Promise<object> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.endpoint}`, {
            method: this.method,
            headers: Object.fromEntries(this.headers),
            body: JSON.stringify(body),
        });

        await checkResponse(response);
        return await response.json();
    }

    protected addHeader(key: string, value: string) {
        this.headers.set(key, value);
    }
}
