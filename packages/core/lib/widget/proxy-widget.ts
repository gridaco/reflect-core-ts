import { WidgetKey } from ".";
import { Widget } from "./widget";

/**
 * A widget that has a child widget provided to it, instead of building a new widget.
 * This is used for manifesting component widget
 */
export class ProxyWidget extends Widget {
    readonly child: Widget;
    constructor({ key, child }: { key?: WidgetKey; child: Widget }) {
        super({ key: key });
        this.child = child;
    }
}
