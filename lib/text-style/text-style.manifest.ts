import { ColorManifest } from "../color";
import { TextDecorationManifest, TextDecorationStyleManifest } from "../text-decoration";

export interface TextStyleManifest {
    /**
     * css: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    fontFamily: string

    /**
     * [css font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
     * 
     * [flutter FontWeight](https://api.flutter.dev/flutter/dart-ui/FontWeight-class.html)
     */
    fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "normal" | "bold" | "lighter" | "bolder"

    backgroundColor: ColorManifest

    color: ColorManifest

    decoration: TextDecorationManifest

    decorationStyle: TextDecorationStyleManifest

    decorationThickness: number

    // region spacing related
    /**
     * css: https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
     * flutter: https://api.flutter.dev/flutter/painting/TextStyle/letterSpacing.html
     */
    letterSpacing: number // todo - number to letter spacing (em or other css property supported type)

    /**
     * css: https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
     * flutter: https://api.flutter.dev/flutter/painting/TextStyle/wordSpacing.html
     */
    wordSpacing: number


    /**
     * [flutter TextStyle#height](https://api.flutter.dev/flutter/painting/TextStyle/height.html)
     * 
     * [css line-hgithg](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
     */
    lineHeight: number
    // endregion spacing related
}