import type { Alignment } from "../alignment";
import type { BoxFit } from "../box-fit";
import type { Rect } from "../cgr";
import type { ImageRepeat } from "../image-repeat";

export interface ImageManifest {
    src: string;
    /**
     * A Semantic description of the image.
     * - also known as `alt`
     */
    semanticLabel?: string;

    /**
     * How to align the image within its bounds.
     * - also known as `object-position`
     */
    alignment?: Alignment;

    /**
     * The center slice for a nine-patch image.
     *
     * The region of the image inside the center slice will be stretched both horizontally and vertically to fit the image into its destination. The region of the image above and below the center slice will be stretched only horizontally and the region of the image to the left and right of the center slice will be stretched only vertically.
     */
    centerSlice?: Rect;

    /**
     * How to inscribe the image into the space allocated during layout.
     * > in css, this is handled by object-fit
     */
    fit?: BoxFit;

    repeat?: ImageRepeat;

    readonly width: number;
    readonly height: number;
}
