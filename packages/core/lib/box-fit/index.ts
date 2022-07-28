/**
 * - [css#object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
 * - [flutter#BoxFit](https://api.flutter.dev/flutter/painting/BoxFit.html)
 */
export enum BoxFit {
    /**
     * As large as possible while still containing the source entirely within the target box.
     */
    contain = "contain",

    /**
     * As small as possible while still covering the entire target box.
     */
    cover = "cover",

    /**
     * Fill the target box by distorting the source's aspect ratio.
     */
    fill = "fill",

    /**
     * Make sure the full height of the source is shown, regardless of whether this means the source overflows the target box horizontally.
     * > on css, this is handled by [modifying the width and height of the image](https://stackoverflow.com/questions/16037566/make-an-image-fit-its-container-by-setting-the-image-height-to-the-containers-he), not by configuring the object-fit property.
     */
    fitHeight = "fit-height",

    /**
     * Make sure the full width of the source is shown, regardless of whether this means the source overflows the target box vertically.
     * > on css, this is handled by [modifying the width and height of the image](https://stackoverflow.com/questions/16037566/make-an-image-fit-its-container-by-setting-the-image-height-to-the-containers-he), not by configuring the object-fit property.
     */
    fitWidth = "fit-width",

    /**
     * Align the source within the target box (by default, centering) and discard any portions of the source that lie outside the box.
     */
    none = "none",

    /**
     * Align the source within the target box (by default, centering) and, if necessary, scale the source down to ensure that the source fits within the box.
     */
    scaleDown = "scale-down",
}
