import type { DimensionLength } from "..";
import type { TextShadowManifest } from "../text-shadow";
import type { ColorManifest } from "../color";
import type { FontStyleManifest } from "../font-style";
import type { FontWeightManifest } from "../font-weight";
import type {
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
    letterSpacing?: DimensionLength;

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

    textShadow?: TextShadowManifest[];
}

export interface TextStyleManifest extends ITextStyle {
    name?: string;
}
