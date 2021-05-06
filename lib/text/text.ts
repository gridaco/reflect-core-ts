import { TextOverflow } from "../text-overflow";
import { ITextStyle } from "../text-style";
import { Widget } from "../widget";

export class Text extends Widget {
    readonly _type: "Text" = "Text";
    data: string;
    overflow: TextOverflow;
    style: ITextStyle;

    constructor({
        data,
        overflow = TextOverflow.ellipsis,
        style,
    }: {
        data: string;
        overflow?: TextOverflow;
        style: ITextStyle;
    }) {
        super();
        this.data = data;
        this.overflow = overflow;
        this.style = style;
    }
}
