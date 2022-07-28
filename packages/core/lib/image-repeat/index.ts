/**
 * - [flutter#ImageRepeat](https://api.flutter.dev/flutter/painting/ImageRepeat.html)
 * - [css#background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
 */
export enum ImageRepeat {
    /**
     * Leave uncovered portions of the box transparent.
     */
    noRepeat = "no-repeat",

    /**
     * Repeat the image in both the x and y directions until the box is filled.
     */
    repeat = "repeat",

    /**
     * Repeat the image in the x direction until the box is filled horizontally.
     */
    repeatX = "repeat-x",

    /**
     * Repeat the image in the y direction until the box is filled vertically.
     */
    repeatY = "repeat-y",

    /**
     * ONLY FOR CSS
     */
    space = "space",

    /**
     * ONLY FOR CSS
     */
    round = "round",
}
