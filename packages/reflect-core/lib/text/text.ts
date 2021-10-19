import { TextAlign, TextAlignVertical } from "../text-align";
import { TextOverflow } from "../text-overflow";
import { ITextStyle } from "../text-style";
import { Widget, WidgetKey } from "../widget";
import { Dynamic, Rendered } from "../_utility-types";
import { RenderedTextManifest, TextManifest } from "./text.manifest";

export class Text extends Widget implements TextManifest {
    // #region text manifest
    readonly _type: "Text" = "Text";
    readonly data: Dynamic<string>;
    readonly overflow: Dynamic<TextOverflow>;
    readonly style: Dynamic<ITextStyle>;
    readonly textAlign: Dynamic<TextAlign>;
    // textAlignVertical: TextAlignVertical;
    readonly maxLines?: Dynamic<number>;
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
    } & Omit<TextManifest, "overflow"> & {
            overflow?: TextOverflow;
        }) {
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

export class RenderedText extends Widget implements RenderedTextManifest {
    // #region text manifest
    readonly _type: "Text" = "Text";
    readonly data: Rendered<string>;
    readonly overflow: Rendered<TextOverflow>;
    readonly style: Rendered<ITextStyle>;
    readonly textAlign: Rendered<TextAlign>;
    // textAlignVertical: TextAlignVertical;
    readonly maxLines?: Rendered<number>;
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
    } & Omit<RenderedTextManifest, "overflow"> & {
            overflow?: TextOverflow;
        }) {
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
