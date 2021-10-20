import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

export interface SizedBoxManifest {
    readonly width: number;
    readonly height: number;
    readonly child: Widget;
}

/**
 *
 *
 * [Flutter#SizedBox](https://api.flutter.dev/flutter/widgets/SizedBox-class.html)
 *
 * [CSS/box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
 * [CSS/width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
 * [CSS/height](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
 */
export class SizedBox
    extends SingleChildRenderObjectWidget
    implements SizedBoxManifest {
    readonly width: number;
    readonly height: number;
    readonly child: Widget;

    constructor({
        key,
        width,
        height,
        child,
    }: { key: WidgetKey } & SizedBoxManifest) {
        super({ key, child });
        this.width = width;
        this.height = height;
        this.child = child;
    }
}
