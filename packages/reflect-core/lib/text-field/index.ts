import { Color, Colors } from "../color";
import { EdgeInsets } from "../edge-insets";
import { EdgeInsetsGeometry } from "../edge-insets-geomatry";
import { InputBorder } from "../input-border";
import type { MouseCursor } from "../mouse-cursor";
import { TextAlign, TextAlignVertical } from "../text-align";
import { TextInputType } from "../text-input-type";
import type { TextStyle } from "../text-style";
import assert from "assert";
import { Widget, WidgetKey } from "../widget";

/**
 * - [html5#input/text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * - [html5#input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 * - [flutter#TextField](https://api.flutter.dev/flutter/material/TextField-class.html)
 * - [material.io#text-fields](https://material.io/components/text-fields)
 * - [mui.com#text-fields](https://mui.com/components/text-fields/)
 * - [android#EdtiText](https://developer.android.com/reference/android/widget/EditText)
 */
export interface ITextFieldManifest {
    autocorrect?: boolean;
    autofocus?: boolean;
    autofillHints?: string[];
    cursorColor?: Color;
    cursorHeight?: number;
    cursorRadius?: number;
    cursorWidth?: number;

    /**
     * - html: value="{value}"
     * - flutter: flutter does not support initial / default value setting on construction.
     */
    initialValue?: string;

    decoration: TextFieldDecoration;

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
}

export class TextField extends Widget implements ITextFieldManifest {
    readonly _type = "text-field";

    autocorrect: boolean;
    autofocus: boolean;
    autofillHints?: string[];
    cursorColor?: Color;
    cursorHeight?: number;
    cursorRadius?: number;
    cursorWidth?: number;
    initialValue?: string;
    decoration: TextFieldDecoration;
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
        decoration, // = new InputDecoration(),
    }: ITextFieldManifest & {
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

        this.decoration = decoration;

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

type TextFieldDecoration = MaterialTextFieldDecoration;

export interface MaterialTextFieldDecoration {
    border: InputBorder;
    contentPadding: EdgeInsetsGeometry;
    disabledBorder: InputBorder;
    enabled: boolean;
    enabledBorder: InputBorder;
    errorBorder: InputBorder;
    errorStyle: TextStyle;
    fillColor: Color;
    filled: boolean;
    focusColor: Color;
    focusedBorder: InputBorder;
    focusedErrorBorder: InputBorder;
    hintStyle: TextStyle;
    hintText: string;
    hoverColor: Color;
}
