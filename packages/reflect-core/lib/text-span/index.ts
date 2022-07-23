import { InlineSpan } from "../inline-span";
import type { Locale } from "../locale";
import type { MouseCursor } from "../mouse-cursor";
import type { TextStyle } from "../text-style";

export interface ITextSpan {
    text?: string;
    children?: Array<InlineSpan>;
    style?: TextStyle;
    // recognizer?: GestureRecognizer;
    mouseCursor?: MouseCursor;
    // onEnter?: PointerEnterEventListener;
    // onExit?: PointerExitEventListener;
    semanticsLabel?: string;
    locale?: Locale;
    spellOut?: boolean;
}

export class TextSpan extends InlineSpan implements ITextSpan {
    text?: string;
    children?: Array<InlineSpan>;
    style?: TextStyle;
    // recognizer?: GestureRecognizer;
    mouseCursor?: MouseCursor;
    // onEnter?: PointerEnterEventListener;
    // onExit?: PointerExitEventListener;
    semanticsLabel?: string;
    locale?: Locale;
    spellOut?: boolean;

    constructor({
        text,
        children,
        style,
        // recognizer,
        mouseCursor,
        // onEnter,
        // onExit,
        semanticsLabel,
        locale,
        spellOut,
    }: ITextSpan) {
        super({ style });

        this.text = text;
        this.children = children;
        this.style = style;
        // this.recognizer = recognizer;
        this.mouseCursor = mouseCursor;
        // this.onEnter = onEnter;
        // this.onExit = onExit;
        this.semanticsLabel = semanticsLabel;
        this.locale = locale;
        this.spellOut = spellOut;
    }
}
