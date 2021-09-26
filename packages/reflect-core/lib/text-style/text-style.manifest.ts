import { DimensionLength } from "..";
import { ColorManifest } from "../color";
import { FontStyleManifest } from "../font-style";
import { FontWeightManifest } from "../font-weight";
import {
    TextDecorationManifest,
    TextDecorationStyleManifest,
} from "../text-decoration";

export interface ITextStyle {
    /**
     * css: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    fontFamily: string;

    /**
     * [css font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
     *
     * [flutter FontWeight](https://api.flutter.dev/flutter/dart-ui/FontWeight-class.html)
     */
    fontWeight: FontWeightManifest;

    /**
     * [css](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
     */
    fontSize: number;

    /**
     * [css](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
     */
    fontStyle?: FontStyleManifest;

    backgroundColor?: ColorManifest;

    color: ColorManifest;

    decoration?: TextDecorationManifest;

    decorationStyle?: TextDecorationStyleManifest;

    decorationThickness?: number;

    // region spacing related
    /**
     * css: https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
     * flutter: https://api.flutter.dev/flutter/painting/TextStyle/letterSpacing.html
     */
    letterSpacing?: number; // todo - number to letter spacing (em or other css property supported type)

    /**
     * css: https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
     * flutter: https://api.flutter.dev/flutter/painting/TextStyle/wordSpacing.html
     */
    wordSpacing?: number;

    /**
     * [flutter TextStyle#height](https://api.flutter.dev/flutter/painting/TextStyle/height.html)
     *
     * [css line-hgithg](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
     */
    lineHeight?: DimensionLength;
    // endregion spacing related
}

export interface TextStyleManifest extends ITextStyle {
    name?: string;
}
