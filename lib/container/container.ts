import { EdgeInsetsGeometry } from "../ui/edge-insets-geomatry";
import { Widget, WidgetKey } from "../widget";

/**
 * Container, a node equivalant.
 */
export class Container extends Widget {
    x: number;
    y: number;
    width: number;
    height: number;

    padding: EdgeInsetsGeometry;
    margin: EdgeInsetsGeometry;
    fills: any[]; // todo
    borders: any[]; // todo

    visible: boolean;
    opacity: number;
    // filter?
    // transform
    // effects

    constructor({
        key = undefined,
        children,
        margin,
        padding,
    }: {
        key: WidgetKey;
        children: Widget[] | Widget;
        margin?: EdgeInsetsGeometry;
        padding?: EdgeInsetsGeometry;
    }) {
        super({
            key: key,
        });

        this.children = children;
        this.margin = margin;
        this.padding = padding;
    }
}
