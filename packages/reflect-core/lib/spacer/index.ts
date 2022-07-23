import { Widget, WidgetKey } from "../widget";
import assert from "assert";

/**
 * Spacer creates an adjustable, empty spacer that can be used to tune the spacing between widgets in a Flex container, like Row or Column.
 * - [flutter#Spacer](https://api.flutter.dev/flutter/widgets/Spacer-class.html)
 */
export class Spacer extends Widget {
    readonly flex: number = 1;
    constructor({ key, flex = 1 }: { key: WidgetKey } & { flex?: number }) {
        super({ key });

        assert(flex != null);
        assert(flex > 0);

        this.flex = flex;
    }
}
