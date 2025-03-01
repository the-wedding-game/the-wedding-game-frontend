import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import { UploadImageResponse, UploadImageResponseBody } from "@/api/upload/UploadImageResponse";

const ENDPOINT = `upload`;
const METHOD = "POST";

export class UploadImageRequest extends PrivilegedRequest {
    private readonly file: File;

    public constructor(file: File) {
        super(ENDPOINT, METHOD);
        this.file = file;
    }

    public async send(): Promise<UploadImageResponse> {
        const formData = new FormData();
        formData.append("image", this.file);
        super.addFormData(formData);

        const response = (await super.send(formData)) as UploadImageResponseBody;
        return new UploadImageResponse(response);
    }
}
