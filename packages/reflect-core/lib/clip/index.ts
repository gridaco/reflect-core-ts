/**
 * Clip behaviour
 *
 * In css - Overflow hide / show
 *
 * _References_
 * - [Flutter#Clip](https://api.flutter.dev/flutter/dart-ui/Clip-class.html)
 */
export enum Clip {
    /**
     * Clip with anti-aliasing.
     *
     * This mode has anti-aliased clipping edges to achieve a smoother look.
     */
    antiAlias = "antiAlias",
    /**
     * Clip with anti-aliasing and saveLayer immediately following the clip.
     *
     * This mode not only clips with anti-aliasing, but also allocates an offscreen buffer. All subsequent paints are carried out on that buffer before finally being clipped and composited back.
     */
    antiAliasWithSaveLayer = "antiAliasWithSaveLayer",
    /**
     * Clip, but do not apply anti-aliasing.
     *
     * This mode enables clipping, but curves and non-axis-aligned straight lines will be jagged as no effort is made to anti-alias.
     */
    hardEdge = "hardEdge",
    /**
     * No clip at all.
     *
     * This is the default option for most widgets: if the content does not overflow the widget boundary, don't pay any performance cost for clipping.
     */
    none = "none",
}
