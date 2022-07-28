import { Widget, WidgetKey } from "../widget";

/**
 * Creates a widget that expands a child of a Row, Column, or Flex so that the child fills the available space along the flex widget's main axis.
 *
 * a.k.a `flex: 1`
 *
 * - [flutter#Expanded](https://api.flutter.dev/flutter/widgets/Expanded-class.html)
 */
export class Expanded extends Widget {
    readonly flex: number = 1;
    readonly child: Widget;
    constructor({
        key,
        flex = 1,
        child,
    }: { key: WidgetKey } & { flex?: number; child: Widget }) {
        super({ key });

        this.flex = flex;
        this.child = child;
    }
}
