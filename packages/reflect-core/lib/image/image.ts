import { ImageManifest } from ".";
import { Widget, WidgetKey } from "../widget";

export class ImageWidget extends Widget implements ImageManifest {
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
