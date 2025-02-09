import { colors } from "../ColorSheet";
export default class RegionOfInterestMessage {
    static __color = colors[2];
    static type = "RegionOfInterestMessage"

    x_offset;
    y_offset;
    height;
    width;
    do_rectify;
    constructor(x_offset: number, y_offset: number, height: number, width: number, do_rectify: boolean) {
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        this.height = height;
        this.width = width;
        this.do_rectify = do_rectify;
    }
}