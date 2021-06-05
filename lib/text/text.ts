import { TextAlign } from "../text-align";
import { TextOverflow } from "../text-overflow";
import { ITextStyle } from "../text-style";
import { Widget, WidgetKey } from "../widget";

export class Text extends Widget {
    readonly _type: "Text" = "Text";
    data: string;
    overflow: TextOverflow;
    style: ITextStyle;
    alignment: TextAlign;

    constructor({
        key,
        data,
        overflow = TextOverflow.ellipsis,
        style,
        alignment,
    }: {
        key: WidgetKey;
        data: string;
        overflow?: TextOverflow;
        style: ITextStyle;
        alignment: TextAlign;
    }) {
        super({ key: key });
        this.data = data;
        this.overflow = overflow;
        this.style = style;
        this.alignment = alignment;
    }
}
