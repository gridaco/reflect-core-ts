import { Color, Colors } from "../color";
import { Widget, WidgetKey } from "../widget";
import { EdgeInsets } from "../edge-insets";
import type { MouseCursor } from "../mouse-cursor";
import { TextAlign, TextAlignVertical } from "../text-align";
import { TextInputType } from "../text-input-type";
import type { TextStyle } from "../text-style";
import assert from "assert";

/**
 * - [html5#input/text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * - [html5#input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 * - [flutter#EditableText](https://api.flutter.dev/flutter/widgets/EditableText-class.html)
 * - [android#EdtiText](https://developer.android.com/reference/android/widget/EditText)
 * - [iOS#UITextField](https://developer.apple.com/documentation/uikit/uitextfield)
 */
export interface IEditableTextManifest {
    autocorrect?: boolean;
    autofocus?: boolean;
    autofillHints?: string[];
    cursorColor?: Color;
    cursorHeight?: number;
    cursorRadius?: number;
    cursorWidth?: number;

    /**
     * @default false
     */
    disabled?: boolean;
    enableSuggestions?: boolean;

    /**
     * The appearance of the keyboard. This setting is only honored on iOS devices.
     * - iOS only
     */
    keyboardAppearance?: "light" | "dark";

    /**
     *
     */
    keyboardType?: TextInputType;

    /**
     *
     */
    maxLines?: number;

    /**
     *
     */
    minLines?: number;

    /**
     *
     */
    mouseCursor?: MouseCursor;

    /**
     *
     */
    obscureText?: boolean;

    /**
     *
     */
    obscuringCharacter?: string;

    // callbacks

    //

    readOnly?: boolean;

    restorationId?: string;

    scrollPadding?: EdgeInsets;

    showCursor?: boolean;

    // smart formatting
    // smartDashesType ..
    // smartQuotesType ..

    style: TextStyle;

    textAlign?: TextAlign;

    textAlignVertical?: TextAlignVertical;

    /**
     * - html: value="{value}"
     * - flutter: flutter does not support initial / default value setting on construction.
     */
    initialValue?: string;
}

export class EditableText extends Widget implements IEditableTextManifest {
    readonly _type = "editable-text";

    autocorrect: boolean;
    autofocus: boolean;
    autofillHints?: string[];
    cursorColor?: Color;
    cursorHeight?: number;
    cursorRadius?: number;
    cursorWidth?: number;
    initialValue?: string;
    disabled: boolean;
    enableSuggestions?: boolean;
    keyboardAppearance?: "light" | "dark";
    keyboardType: TextInputType;
    maxLines: number;
    minLines?: number;
    mouseCursor?: MouseCursor;
    obscureText: boolean;
    obscuringCharacter: string;
    readOnly: boolean;
    restorationId?: string;
    scrollPadding: EdgeInsets;
    showCursor?: boolean;
    style: TextStyle;
    textAlign: TextAlign;
    textAlignVertical?: TextAlignVertical;

    constructor({
        key,

        initialValue,
        autocorrect = true,
        autofocus = false,
        autofillHints = [],
        cursorColor = Colors.black,
        cursorWidth = 2,
        disabled = false,
        keyboardType = TextInputType.text,
        keyboardAppearance,
        textAlign = TextAlign.start,
        textAlignVertical,
        mouseCursor,
        showCursor,
        scrollPadding = EdgeInsets.all(20.0),
        cursorHeight,
        cursorRadius,
        restorationId,
        enableSuggestions = true,
        maxLines = 1,
        minLines = 1,
        style,
        readOnly = false,
        obscureText = false,
        obscuringCharacter = "•",
    }: IEditableTextManifest & {
        key: WidgetKey;
    }) {
        super({ key });

        assert(autofocus != null, "autofocus must not be null");
        assert(
            !!obscuringCharacter && obscuringCharacter.length == 1,
            "obscuringCharacter must be a single character"
        );
        assert(obscureText != null, "obscureText must not be null or empty");
        assert(!!autocorrect, "autocorrect must not be null or empty");
        assert(!!maxLines || maxLines > 0, "maxLines must be greater than 0");
        assert(!!minLines || minLines > 0, "minLines must be greater than 0");
        assert(
            !!maxLines || !!minLines || maxLines >= minLines,
            "minLines can't be greater than maxLines"
        );
        assert(
            !obscureText || maxLines == 1,
            "Obscured fields cannot be multiline."
        );

        this.autofillHints = autofillHints;
        this.cursorColor = cursorColor;
        this.cursorHeight = cursorHeight;
        this.cursorRadius = cursorRadius;
        this.cursorWidth = cursorWidth;

        this.initialValue = initialValue;

        this.disabled = disabled;

        this.enableSuggestions = enableSuggestions;

        this.keyboardAppearance = keyboardAppearance;

        this.keyboardType = keyboardType;

        this.maxLines = maxLines;
        this.minLines = minLines;

        this.mouseCursor = mouseCursor;

        // password
        this.obscureText = obscureText;
        this.obscuringCharacter = obscuringCharacter;

        this.readOnly = readOnly;
        this.restorationId = restorationId;

        this.scrollPadding = scrollPadding;
        this.showCursor = showCursor;

        this.style = style;

        this.textAlign = textAlign;
        this.textAlignVertical = textAlignVertical;
    }
}
