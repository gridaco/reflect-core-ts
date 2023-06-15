import { Alignment } from "../alignment";
import type { Matrix4 } from "../matrix";
import { Offset } from "../offset";
import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

/**
 * A transform container interface.
 *
 * @see
 *
 * - {@link https://api.flutter.dev/flutter/widgets/Transform-class.html flutter#Transform}
 * - {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform css#transform}
 */
export interface Transform {
    /**
     * transform-origin in css
     */
    alignment?: Alignment;
    /**
     * translate
     */
    origin?: Offset;
    /**
     * transform matrix
     */
    transform: Matrix4;
    child?: Widget;
}

/**
 * A transform widget.
 *
 * @see
 *
 * - {@link https://api.flutter.dev/flutter/widgets/Transform-class.html flutter#Transform}
 * - {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform css#transform}
 */
export class Transform extends SingleChildRenderObjectWidget {
    alignment?: Alignment;
    child?: Widget;
    origin?: Offset;
    transform: Matrix4;

    constructor({
        key,
        child,
        //
        alignment,
        origin,
        transform,
    }: Transform & { key?: WidgetKey; child: Widget }) {
        super({
            key,
            child,
        });

        this.alignment = alignment;
        this.origin = origin;
        this.transform = transform;
    }
}
