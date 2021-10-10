import { Widget, WidgetKey } from "../widget";

/**
 * A widget that imposes different constraints on its child than it gets from its parent, possibly allowing the child to overflow the parent.
 *
 * e.g. this is equivalent to below on css
 * ```css
 * overflow: hidden;
 * ```
 *
 * [Flutter#Overflowbox](https://api.flutter.dev/flutter/widgets/OverflowBox-class.html)
 *
 * [css#overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
 */
export class OverflowBox extends Widget {
    child: Widget;
    constructor({ key, child }: { key: WidgetKey } & { child: Widget }) {
        super({ key });
        this.child = child;
    }
}
