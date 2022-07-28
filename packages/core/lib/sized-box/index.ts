import { SingleChildRenderObjectWidget, Widget, WidgetKey } from "../widget";

export interface SizedBoxManifest<C extends Widget> {
    readonly width: number;
    readonly height: number;
    readonly child: C;
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
export class SizedBox<C extends Widget = Widget>
    extends SingleChildRenderObjectWidget
    implements SizedBoxManifest<C>
{
    readonly width: number;
    readonly height: number;
    readonly child: C;

    constructor({
        key,
        width,
        height,
        child,
    }: { key: WidgetKey } & SizedBoxManifest<C>) {
        super({ key, child });
        this.width = width;
        this.height = height;
        this.child = child;
    }
}
