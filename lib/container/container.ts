import { EdgeInsets } from "../ui";
import { Widget, WidgetKey } from "../widget";

/**
 * Container, a node equivalant.
 */
export class Container extends Widget {
    x: number;
    y: number;
    width: number;
    height: number;

    padding: EdgeInsets;
    margin: EdgeInsets;
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
        margin?: EdgeInsets;
        padding?: EdgeInsets;
    }) {
        super({
            key: key,
        });

        this.children = children;
        this.margin = margin;
        this.padding = padding;
    }
}
