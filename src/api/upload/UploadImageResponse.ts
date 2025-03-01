import { CannotProcessEntityError } from "@/errors/CannotProcessEntityError";

export type UploadImageResponseBody = {
    url: string;
};

export class UploadImageResponse {
    private readonly url: string;

    public constructor(data: UploadImageResponseBody) {
        this.url = data.url;
        this.check();
    }

    public getUrl(): string {
        return this.url;
    }

    private check() {
        if (!this.url) throw new CannotProcessEntityError("UploadImageResponse", "url is missing");
    }
}
