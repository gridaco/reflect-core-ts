import { ImageManifest } from ".";
import { DefaultStyleWidget, WidgetKey } from "../widget";

export class ImageWidget extends DefaultStyleWidget implements ImageManifest {
    readonly _type = "ImageWidget";
    readonly src: string;
    readonly width: number;
    readonly height: number;
    constructor({
        key,
        src,
        width,
        height,
    }: {
        key: WidgetKey;
        src: string;
        width: number;
        height: number;
    }) {
        super({ key });

        this.src = src;
        this.width = width;
        this.height = height;
    }
}
