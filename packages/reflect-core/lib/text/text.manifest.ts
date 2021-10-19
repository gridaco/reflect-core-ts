import { TextAlignManifest, TextAlignVerticalManifest } from "../text-align";
import { TextOverflowManifest } from "../text-overflow/text-overflow.manifest";
import { TextStyleManifest } from "../text-style";

/**
 * Defines only properties without types
 */
export interface ITextPropertyFields {
    readonly data;
    readonly style;
    readonly overflow;
    readonly textAlign;
    readonly maxLines;
}

/**
 * [flutter docs](https://api.flutter.dev/flutter/widgets/Text-class.html)
 */
export interface TextManifest extends ITextPropertyFields {
    data: string;
    style: TextStyleManifest;
    overflow: TextOverflowManifest;

    /**
     * - [flutter Text#textAlign](https://api.flutter.dev/flutter/widgets/Text/textAlign.html)
     * - [css#text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign: TextAlignManifest;

    /**
     * this is not a default css nor flutter's text property, but this field exists on figma or other design-first tools.
     * @nonstandard
     */
    textAlignVertical: TextAlignVerticalManifest;

    /**
     * this is not supported with css standard [related link here](https://stackoverflow.com/questions/55487695/react-native-text-component-using-number-of-lines)
     */
    maxLines: number;
}
