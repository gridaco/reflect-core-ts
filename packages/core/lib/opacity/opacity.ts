import assert from "assert";
import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

/**
 * Universal opacity interface
 *
 * [flutter#Opacity](https://api.flutter.dev/flutter/widgets/Opacity-class.html)
 * [constructor](https://api.flutter.dev/flutter/widgets/Opacity/Opacity.html)
 *
 * [css#Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
 *
 * [figma#StampNodeOpacity](https://www.figma.com/plugin-docs/api/StampNode/#opacity)
 *
 * [konva#Rect.opacity](https://konvajs.org/api/Konva.Rect.html)
 */
export class Opacity extends SingleChildRenderObjectWidget {
    readonly _type = "Opacity";
    readonly opacity: number;
    constructor({
        key,
        opacity,
        child,
    }: {
        key: WidgetKey;
        opacity: number;
        child: Widget;
    }) {
        super({ key, child });
        assert(typeof opacity, "opacity is required");
        this.opacity = opacity;
    }
}
