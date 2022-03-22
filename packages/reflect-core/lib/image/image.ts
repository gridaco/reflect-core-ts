import type { BoxFit } from "../box-fit";
import type { Rect } from "../cgr";
import { Alignment } from "../alignment";
import { ImageRepeat } from "../image-repeat";
import { ImageManifest } from ".";
import { DefaultStyleWidget, WidgetKey } from "../widget";
import assert from "assert";

export class ImageWidget extends DefaultStyleWidget implements ImageManifest {
    readonly _type = "ImageWidget";
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alignment?: Alignment;
    readonly centerSlice?: Rect;
    readonly fit?: BoxFit;
    readonly repeat?: ImageRepeat;
    semanticLabel?: string;

    constructor({
        key,

        src,
        width,
        height,
        alignment = Alignment.center,
        centerSlice,
        fit,
        repeat = ImageRepeat.noRepeat,
        semanticLabel,
    }: {
        key: WidgetKey;
    } & ImageManifest) {
        super({ key });

        assert(src != null);
        assert(alignment != null);
        assert(repeat != null);

        super({ key: key });

        this.src = src;
        this.width = width;
        this.height = height;
        this.alignment = alignment;
        this.centerSlice = centerSlice;
        this.fit = fit;
        this.repeat = repeat;
        this.semanticLabel = semanticLabel;
    }
}
