import { Color, Colors } from "../color";
import { EdgeInsets } from "../edge-insets";
import { InputBorder } from "../input-border";
import { TextAlign } from "../text-align";
import { TextInputType } from "../text-input-type";
import type { TextStyle } from "../text-style";
import { WidgetKey } from "../widget";
import { EditableText, IEditableTextManifest } from "../editable-text";

/**
 * - [html5#input/text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * - [html5#input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 * - [flutter#TextField](https://api.flutter.dev/flutter/material/TextField-class.html)
 * - [flutter#EditableText](https://api.flutter.dev/flutter/widgets/EditableText-class.html)
 * - [material.io#text-fields](https://material.io/components/text-fields)
 * - [mui.com#text-fields](https://mui.com/components/text-fields/)
 * - [android#EdtiText](https://developer.android.com/reference/android/widget/EditText)
 */
export interface ITextFieldManifest extends IEditableTextManifest {
    decoration?: TextFieldDecoration;
}

export class TextField extends EditableText implements ITextFieldManifest {
    // @ts-ignore
    readonly _type = "text-field";

    decoration: TextFieldDecoration;

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
        decoration = new TextFieldDecoration({
            border: InputBorder.none,
        }),
    }: ITextFieldManifest & {
        key: WidgetKey;
    }) {
        super({
            key,
            initialValue,
            autocorrect,
            autofocus,
            autofillHints,
            cursorColor,
            cursorWidth,
            disabled,
            keyboardType,
            keyboardAppearance,
            textAlign,
            textAlignVertical,
            mouseCursor,
            showCursor,
            scrollPadding,
            cursorHeight,
            cursorRadius,
            restorationId,
            enableSuggestions,
            maxLines,
            minLines,
            style,
            readOnly,
            obscureText,
            obscuringCharacter,
        });

        this.decoration = decoration;
    }
}

/**
 *
 * A TextField's decoration property container class.
 *
 * - [flutter#InputDecoration](https://api.flutter.dev/flutter/material/InputDecoration-class.html)
 */
export class TextFieldDecoration {
    border: InputBorder;
    contentPadding: EdgeInsets;
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

    /**
     * also known as hintStyle
     */
    placeholderStyle: TextStyle;

    /**
     * also known as hintText
     */
    placeholderText: string;
    hoverColor: Color;

    constructor({
        border = InputBorder.none,
        contentPadding,
        disabledBorder,
        enabled = true,
        enabledBorder,
        errorBorder,
        errorStyle,
        fillColor,
        filled = false,
        focusColor,
        focusedBorder,
        focusedErrorBorder,
        hoverColor,
        placeholderStyle,
        placeholderText,
    }: {
        border?: InputBorder;
        contentPadding?: EdgeInsets;
        disabledBorder?: InputBorder;
        enabled?: boolean;
        enabledBorder?: InputBorder;
        errorBorder?: InputBorder;
        errorStyle?: TextStyle;
        fillColor?: Color;
        filled?: boolean;
        focusColor?: Color;
        focusedBorder?: InputBorder;
        focusedErrorBorder?: InputBorder;
        hoverColor?: Color;
        placeholderStyle?: TextStyle;
        placeholderText?: string;
    }) {
        this.border = border;
        this.contentPadding = contentPadding;
        this.disabledBorder = disabledBorder;
        this.enabled = enabled;
        this.enabledBorder = enabledBorder;
        this.errorBorder = errorBorder;
        this.errorStyle = errorStyle;
        this.fillColor = fillColor;
        this.filled = filled;
        this.focusColor = focusColor;
        this.focusedBorder = focusedBorder;
        this.focusedErrorBorder = focusedErrorBorder;
        this.hoverColor = hoverColor;
        this.placeholderStyle = placeholderStyle;
        this.placeholderText = placeholderText;
    }
}
