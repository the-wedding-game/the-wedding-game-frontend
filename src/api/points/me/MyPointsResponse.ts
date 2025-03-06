export type MyPointsResponseBody = {
    points: number;
};

export class MyPointsResponse {
    private readonly points: number;

    public constructor(data: MyPointsResponseBody) {
        console.log("data", data.points);
        this.points = data.points;
        this.check();
    }

    public getPoints(): number {
        return this.points;
    }

    private check() {
        // if (this.points == null) throw new CannotProcessEntityError("MyPointsResponse", "points is missing");
    }
}
