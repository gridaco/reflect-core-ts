import { TextOverflow } from "../text-overflow";
import { ITextStyle } from "../text-style";
import { Widget, WidgetKey } from "../widget";

export class Text extends Widget {
    readonly _type: "Text" = "Text";
    data: string;
    overflow: TextOverflow;
    style: ITextStyle;

    constructor({
        key,
        data,
        overflow = TextOverflow.ellipsis,
        style,
    }: {
        key: WidgetKey;
        data: string;
        overflow?: TextOverflow;
        style: ITextStyle;
    }) {
        super({ key: key });
        this.data = data;
        this.overflow = overflow;
        this.style = style;
    }
}
