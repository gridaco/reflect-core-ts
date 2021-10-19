import { TextAlignManifest, TextAlignVerticalManifest } from "../text-align";
import { TextOverflowManifest } from "../text-overflow/text-overflow.manifest";
import { TextStyleManifest } from "../text-style";

/**
 * [flutter docs](https://api.flutter.dev/flutter/widgets/Text-class.html)
 */
export interface TextManifest {
    data: string;
    style: TextStyleManifest;
    overflow: TextOverflowManifest;

    /**
     * [flutter Text#textAlign](https://api.flutter.dev/flutter/widgets/Text/textAlign.html)
     */
    textAlign: TextAlignManifest;

    /**
     * this is not a default css nor flutter's text property, but this field exists on figma or other design-first tools.
     */
    textAlignVertical: TextAlignVerticalManifest;

    /**
     * this is not supported with css standard [related link here](https://stackoverflow.com/questions/55487695/react-native-text-component-using-number-of-lines)
     */
    maxLines: number;
}
