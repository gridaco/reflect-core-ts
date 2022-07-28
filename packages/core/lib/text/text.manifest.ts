import { TextAlignManifest, TextAlignVerticalManifest } from "../text-align";
import { TextOverflowManifest } from "../text-overflow/text-overflow.manifest";
import { TextStyleManifest } from "../text-style";
import { Dynamic, Rendered } from "../_utility-types";

/**
 * Defines only properties without types
 */
export interface ITextPropertyFields {
    readonly data;
    readonly style;
    readonly overflow;
    readonly textAlign;
    readonly maxLines?;
}

export type WebTextElement =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span";

/**
 * [flutter docs](https://api.flutter.dev/flutter/widgets/Text-class.html)
 */
export interface TextManifest extends ITextPropertyFields {
    data: Dynamic<string>;
    style: Dynamic<TextStyleManifest>;
    overflow: Dynamic<TextOverflowManifest>;

    /**
     * - [flutter Text#textAlign](https://api.flutter.dev/flutter/widgets/Text/textAlign.html)
     * - [css#text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign: Dynamic<TextAlignManifest>;

    /**
     * this is not a default css nor flutter's text property, but this field exists on figma or other design-first tools.
     * @nonstandard
     */
    textAlignVertical?: Dynamic<TextAlignVerticalManifest>;

    /**
     * this is not supported with css standard [related link here](https://stackoverflow.com/questions/55487695/react-native-text-component-using-number-of-lines)
     */
    maxLines?: Dynamic<number>;

    /**
     * @experimental
     * element specification is extended attribute to specify prefered element to be rendered with on the html based frameworks.
     *
     * this is not referenced by Flutter & Flutter Web, Android, iOS, etc.
     * Yet, frameworks like flutter has a styling system similar to this, it will be studied in the future for maximun compatibility.
     */
    element_preference_experimental?: WebTextElement;
}

/**
 * [flutter docs](https://api.flutter.dev/flutter/widgets/Text-class.html)
 */
export interface RenderedTextManifest extends TextManifest {
    data: Rendered<string>;
    style: Rendered<TextStyleManifest>;
    overflow: Rendered<TextOverflowManifest>;

    /**
     * - [flutter Text#textAlign](https://api.flutter.dev/flutter/widgets/Text/textAlign.html)
     * - [css#text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign: Rendered<TextAlignManifest>;

    /**
     * this is not a default css nor flutter's text property, but this field exists on figma or other design-first tools.
     * @nonstandard
     */
    textAlignVertical?: Rendered<TextAlignVerticalManifest>;

    /**
     * this is not supported with css standard [related link here](https://stackoverflow.com/questions/55487695/react-native-text-component-using-number-of-lines)
     */
    maxLines?: Rendered<number>;
}
