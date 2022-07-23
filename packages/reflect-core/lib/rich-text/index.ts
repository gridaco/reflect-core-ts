import { TextAlign } from "../text-align";
import { TextOverflow } from "../text-overflow";
import { Widget } from "../widget";
import type { WidgetKey } from "../widget";
import type { InlineSpan } from "../inline-span";
import type { TextDirection } from "../text-direction";
import type { Locale } from "../locale";

interface IRichText {
    key?: WidgetKey;
    // @required
    text: InlineSpan;
    textAlign: TextAlign;
    textDirection?: TextDirection;
    softWrap: boolean;
    overflow: TextOverflow;
    textScaleFactor: number;
    maxLines?: number;
    locale?: Locale;
    // strutStyle?: StrutStyle;
    // textWidthBasis: TextWidthBasis;
    // textHeightBehavior?: TextHeightBehavior;
}

export class RichText extends Widget implements IRichText {
    // @required
    text: InlineSpan;
    textAlign: TextAlign;
    textDirection?: TextDirection;
    softWrap: boolean;
    overflow: TextOverflow;
    textScaleFactor: number;
    maxLines?: number;
    locale?: Locale;
    // strutStyle?: StrutStyle;
    // textWidthBasis: TextWidthBasis;
    // textHeightBehavior?: TextHeightBehavior;

    constructor({
        key,
        text,
        textAlign = TextAlign.start,
        textDirection,
        softWrap = true,
        overflow = TextOverflow.clip,
        textScaleFactor = 1.0,
        maxLines,
        locale,
    }: // strutStyle,
    // textWidthBasis = TextWidthBasis.parent,
    // textHeightBehavior,
    IRichText) {
        super({ key });
        this.text = text;
        this.textAlign = textAlign;
        this.textDirection = textDirection;
        this.softWrap = softWrap;
        this.overflow = overflow;
        this.textScaleFactor = textScaleFactor;
        this.maxLines = maxLines;
        this.locale = locale;
        // this.strutStyle = strutStyle;
        // this.textWidthBasis = textWidthBasis;
        // this.textHeightBehavior = textHeightBehavior;
    }
}
