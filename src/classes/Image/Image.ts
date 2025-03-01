import { UploadImageRequest } from "@/api/upload/UploadImageRequest";

export const ENDPOINT = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/upload`;

export type UploadResponse = {
    url: string;
};

export class Image {
    private readonly file: File;

    constructor(file: File) {
        this.file = file;
    }

    public async upload(): Promise<string> {
        const request = new UploadImageRequest(this.file);
        const response = await request.send();
        return response.getUrl();
    }
}
