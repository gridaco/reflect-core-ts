import { IconManifest } from "./icon.manifest";
import { IWHStyleWidget, Widget, WidgetKey } from "../widget";
import { Color } from "../color";
import { IconData } from ".";
import assert from "assert";

export class IconWidget<T = IconData>
    extends Widget
    implements IconManifest<T>, IWHStyleWidget {
    readonly icon: T;
    readonly size: number;
    readonly color: Color;
    readonly semanticLabel?: string;

    // This will be removed in the future. IconWidget does not need to implement IWHStyleWidget.
    // IWHStyleWidget
    readonly width: number;
    readonly height: number;

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
        // explicitly set w & h
        // note! - when you remove these two initializer in the future, note that some resizer uses w & h value so that this icon will loose size on render.
        this.width = size;
        this.height = size;
        this.color = color;
        this.semanticLabel = semanticLabel;
    }
}
