import { IconManifest } from "./icon.manifest";
import { Widget, WidgetKey } from "../widget";
import { Color } from "../color";
import { IconData } from ".";

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
        size,
        color,
        semanticLabel,
    }: { key: WidgetKey } & IconManifest<T>) {
        super({ key });

        this.icon = icon;
        this.size = size;
        this.color = color;
        this.semanticLabel = semanticLabel;
    }
}
