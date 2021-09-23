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
    width?: number;
    height?: number;

    constructor({
        key,
        data,
        overflow = TextOverflow.ellipsis,
        style,
        alignment,
        width,
        height,
    }: {
        key: WidgetKey;
        data: string;
        overflow?: TextOverflow;
        style: ITextStyle;
        alignment: TextAlign;
        width?: number;
        height?: number;
    }) {
        super({ key: key });
        this.data = data;
        this.overflow = overflow;
        this.style = style;
        this.alignment = alignment;
        this.width = width;
        this.height = height;
    }
}
