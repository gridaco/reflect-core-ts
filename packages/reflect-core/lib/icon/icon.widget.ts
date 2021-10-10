import { IconManifest } from "./icon.manifest";
import { Widget, WidgetKey } from "../widget";
import { Color } from "../color";
import { IconData } from ".";
import assert from "assert";

export class IconWidget<T = IconData>
    extends Widget
    implements IconManifest<T> {
    readonly icon: T;
    readonly size: number;
    readonly color: Color;
    readonly semanticLabel?: string;

    constructor({
        key,
        icon,
        size = 24,
        color,
        semanticLabel,
    }: { key: WidgetKey } & IconManifest<T>) {
        super({ key });
        assert(icon, "icon is required");

        this.icon = icon;
        this.size = size;
        this.color = color;
        this.semanticLabel = semanticLabel;
    }
}
