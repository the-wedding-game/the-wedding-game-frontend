import { PrivilegedRequest } from "@/api/PrivilegedRequest";
import { MyPointsResponse, MyPointsResponseBody } from "@/api/points/me/MyPointsResponse";

const ENDPOINT = "points/me";
const METHOD = "GET";

export class MyPointsRequest extends PrivilegedRequest {
    public constructor() {
        super(ENDPOINT, METHOD);
    }

    public async send(): Promise<MyPointsResponse> {
        const response = (await super.send()) as MyPointsResponseBody;
        return new MyPointsResponse(response);
    }
}
