import { TextAlign } from "../text-align";
import { TextOverflow } from "../text-overflow";
import { ITextStyle } from "../text-style";
import { Widget, WidgetKey } from "../widget";
// import { TextManifest } from "./text.manifest";

export class Text extends Widget {
    readonly _type: "Text" = "Text";
    readonly data: string;
    readonly overflow: TextOverflow;
    readonly style: ITextStyle;
    readonly textAlign: TextAlign;
    width?: number;
    height?: number;

    constructor({
        key,
        data,
        overflow = TextOverflow.ellipsis,
        style,
        textAlign,
        width,
        height,
    }: {
        key: WidgetKey;
        data: string;
        overflow?: TextOverflow;
        style: ITextStyle;
        textAlign: TextAlign;
        width?: number;
        height?: number;
    }) {
        super({ key: key });
        this.data = data;
        this.overflow = overflow;
        this.style = style;
        this.textAlign = textAlign;
        this.width = width;
        this.height = height;
    }
}
