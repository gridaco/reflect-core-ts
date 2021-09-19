import { ImageManifest } from ".";
import { Widget } from "../widget";

export class ImageWidget extends Widget implements ImageManifest {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    constructor() {
        super();
    }
}
