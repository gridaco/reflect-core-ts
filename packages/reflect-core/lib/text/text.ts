import { TextAlign, TextAlignVertical } from "../text-align";
import { TextOverflow } from "../text-overflow";
import { ITextStyle } from "../text-style";
import { Widget, WidgetKey } from "../widget";
import { TextManifest } from "./text.manifest";

export class Text extends Widget implements TextManifest {
    // #region text manifest
    readonly _type: "Text" = "Text";
    readonly data: string;
    readonly overflow: TextOverflow;
    readonly style: ITextStyle;
    readonly textAlign: TextAlign;
    // textAlignVertical: TextAlignVertical;
    readonly maxLines?: number;
    // #endregion text manifest

    width?: number;
    height?: number;

    constructor({
        key,
        data,
        overflow = TextOverflow.ellipsis,
        style,
        textAlign,
        maxLines,
        width,
        height,
    }: {
        key: WidgetKey;
        width?: number;
        height?: number;
    } & TextManifest) {
        super({ key: key });
        this.data = data;
        this.overflow = overflow;
        this.style = style;
        this.textAlign = textAlign;
        this.maxLines = maxLines;

        this.width = width;
        this.height = height;
    }
}
